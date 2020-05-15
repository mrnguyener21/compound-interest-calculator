import React, {useState} from 'react';
import styles from './App.module.css';
import Chart from './Chart';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const App = () => {
  const [initialInvestment, setInitialInvestment]= useState('');
  const [years,setYears] =useState('');
  const [interestRate, setInterestRate] =useState('');
  const [compoundRate, setCompoundRate] = useState('-')


  // const compoundValues = [1,2,4,12]



  // const interestInDecimals = interestRate/100;
  // const totalInterest = (initialInvestment*interestInDecimals)*(compoundOptions*years);
  // const futureValueWithInterest = initialInvestment + totalInterest;
  // const FuturevalueWithCompoundInterest =Math.pow(initialInvestment*(1+interestInDecimals/compoundOptions),compoundOptions.value*years);
  // const totalCompoundInterest = FuturevalueWithCompoundInterest - initialInvestment;



  // const useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120,
  //   },
  //   selectEmpty: {
  //     marginTop: theme.spacing(2),
  //   },
  // }));

  // const NativeSelects = () => {
  //   const classes = useStyles();
  //   const [state, setState] = React.useState({
  //     age: '',
  //     name: 'hai',
  //   });
  
  //   const handleChange = (event) => {
  //     const name = event.target.name;
  //     setCompoundRate({
  //       ...state,
  //       [name]: event.target.value,
  //     });
  //   };
  // }
  



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
              {/* <Select placeholder={'Choose Compound Rate'} value={compoundRate} onChange={(e)=>setCompoundRate(e.target.value)}options={compoundOptions} */}
              <FormControl required ClassName={styles.compoundRateContainer}>
                <InputLabel>Compound Rate</InputLabel>
                <Select
                  native
                  value={compoundRate}
                  // onChange={setCompoundRate((e)=)}
                  name="compoundRate"
                  inputProps={{
                    id: 'compoundRate',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Annual</option>
                  <option value={4}>Semi-Annual</option>
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