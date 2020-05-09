import React, {useState} from 'react';
import Chart from './Chart'
import Select from 'react-select';

const App = () => {
  const [initialInvestment, setInitialInvestment]= useState('');
  const [years,setYears] =useState('');
  const [interestRate, setInterestRate] =useState('');


  const options = [
    {value:'1' , label:'Annual'},
    {value:'2' , label:'Semi-Annual'},
    {value:'12' , label:'Monthly'},
  ]

  const interestInDecimals = interestRate/100;
  const totalInterest = (initialInvestment*interestInDecimals)*(options*years);
  const futureValueWithInterest = initialInvestment + totalInterest;
  const FuturevalueWithCompoundInterest =Math.pow(initialInvestment*(1+interestInDecimals/options),options*years);
  const totalCompoundInterest = FuturevalueWithCompoundInterest - initialInvestment;
  return(
    <div>
      <div>
        <div>
            <p>STEP 1 INITIAL INVESTMENT</p>
            <input type={'text'} placeholder={'Inital Investment'} value={initialInvestment}  onChange={(e)=>setInitialInvestment(e.target.value)} />
        </div>
        <div>
            <p>STEP 2 CONTRIBUTE</p>
=            <input type={'text'} placeholder={'Years Invested'} value={years}  onChange ={(e)=>setYears(e.target.value)} />
        </div>
        <div>
            <p>STEP 3 INTEREST RATE</p>
            <input type={'text'} placeholder={'Interest Rate'} value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
        </div>
        <div>
            <p>STEP 4 COMPOUND IT</p>
            <Select options={options}/>
        </div>    
      </div>
      <Chart/>
    </div>
  )
}

export default App;