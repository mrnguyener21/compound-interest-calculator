import React, {useState} from 'react';
import styles from './App.module.css';
import Chart from './Chart';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const App = () => {
  const [initialInvestment, setInitialInvestment]= useState('');
  const [yearsInvested,setYearsInvested] =useState('');
  const [interestRate, setInterestRate] =useState('');
  const [compoundValue, setCompoundValue] = useState({rate:''})

  
  //conversion 
  const principal = parseInt(initialInvestment);
  const interestInDecimals = (interestRate/100);
  const years = parseInt(yearsInvested)
  const compoundRate = parseInt(compoundValue.rate);


  //NEED TO MAKE THESE DYNAMIC WITH FOR LOOP TO GET DATA FOR EACH YEAR. FOR EACH ITERATION WE WILL WANT TO PUSH IT INTO AN EMPTY ARRAY, JK WE DON'T NEED TO PUSH TO AN EMPTY ARRAY IF WE JUST USE MAP FOR EACH ITERATION...LETS THINK THIS THROUGH
  //WE WILL ALSO WANT TO PUSH EACH ITERATION INTO AN EMPTY ARRAY SO THAT OUR LABELS CAN BE DYNAMIC AS WELL
  //formula for simple interest
  const totalWIthInterest = [];

  for (let i = 1; i < years+1; i++) {
    totalWIthInterest.push(principal+(principal*interestInDecimals)*i)
  }

  //formula for compound interest
  //pretty sure if i put all variables in a for loop and replace the years with i, it should be good
  const totalWIthCompoundInterst = [];
  for (let i = 1; i < years+1; i++) {
    const a = interestInDecimals / compoundRate;
    const b = 1 + a;
    const c = compoundRate * i;
    const d = Math.pow(b, c);
     totalWIthCompoundInterst.push((principal * d).toFixed(2));
    
  }

  //to correctly pass the values based on which compound rate is chosen
  const handleChange = (event) => {
    const name = event.target.name;
    setCompoundValue({
      ...compoundValue,
      [name]: event.target.value,
    });
  };  
  const months =['January', 'February', 'March', 'April', 'May', 'June', 'September']

  return(
    <div>
    <button onClick={()=> alert(totalWIthCompoundInterst)}>check</button>
      <div>
        <div>
          <p>STEP 1 INITIAL INVESTMENT</p>
          <input type={'text'} placeholder={'Inital Investment*'} value={initialInvestment}  onChange={(e)=>setInitialInvestment(e.target.value)} />
        </div>
        <div>
            <p>STEP 2 CONTRIBUTE</p>
          <input type={'text'} placeholder={'years Invested*'} value={yearsInvested}  onChange ={(e)=>setYearsInvested(e.target.value)} />
        </div>
        <div>
          <p>STEP 3 INTEREST RATE</p>
          <input type={'text'} placeholder={'Interest Rate*'} value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
        </div>
        <div>
          <p>STEP 4 COMPOUND IT</p>
            <FormControl required ClassName={styles.compoundValueContainer}>
              <InputLabel>Compound Rate</InputLabel>
              <Select
                native
                value={compoundValue.rate}
                onChange={handleChange}
                name="rate"
              >
                <option aria-label="None" value="" />
                <option value={1}>Annual</option>
                <option value={2}>Semi-Annual</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
              </Select>
            </FormControl>
          </div>    
      </div>
            <Chart months={months} totalWIthInterest={totalWIthInterest} />
        </div>
    )
  }


export default App;