import React, {useState} from 'react';
import styles from './App.module.css';
import Chart from './Chart';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const App = () => {
  const [initialInvestment, setInitialInvestment]= useState('');
  const [years,setYears] =useState('');
  const [interestRate, setInterestRate] =useState('');
  const [compoundRate, setCompoundRate] = useState({rate:''})

  
  //formulas
  // const interestInDecimals = interestRate/100;
  // const totalInterest = (initialInvestment*interestInDecimals)*(compoundOptions*years);
  // const futureValueWithInterest = initialInvestment + totalInterest;
  // const FuturevalueWithCompoundInterest =Math.pow(initialInvestment*(1+interestInDecimals/compoundOptions),compoundOptions.value*years);
  // const totalCompoundInterest = FuturevalueWithCompoundInterest - initialInvestment;


  const handleChange = (event) => {
    const name = event.target.name;
    setCompoundRate({
      ...compoundRate,
      [name]: event.target.value,
    });
  };
  //why doesn't it work if i take event.target.value out of the variable and place it on its own

  
  return(
    <div>
      <div>
        <div>
            <p>STEP 1 INITIAL INVESTMENT</p>
            <input type={'text'} placeholder={'Inital Investment*'} value={initialInvestment}  onChange={(e)=>setInitialInvestment(e.target.value)} />
        </div>
        <div>
            <p>STEP 2 CONTRIBUTE</p>
=            <input type={'text'} placeholder={'Years Invested*'} value={years}  onChange ={(e)=>setYears(e.target.value)} />
        </div>
        <div>
            <p>STEP 3 INTEREST RATE</p>
            <input type={'text'} placeholder={'Interest Rate*'} value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
        </div>
        <button onClick={()=> console.log(compoundRate)}>check</button>
        <div>
            <p>STEP 4 COMPOUND IT</p>
              <FormControl required ClassName={styles.compoundRateContainer}>
                <InputLabel>Compound Rate</InputLabel>
                <Select
                  native
                  value={compoundRate.rate}
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
            <Chart/>
        </div>
    )
  }


export default App;