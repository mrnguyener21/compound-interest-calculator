import React, {useState} from 'react';
import Chart from './Chart'
import Select from 'react-select';

const App = () => {
  const [initialInvestment, setInitialInvestment]= useState('');
  const [monthlyContribution, setMonthlyContribution] =useState('');
  const [years,setYears] =useState('');
  const [interestRate, setInterestRate] =useState('');


  const options = [
    {value:'1' , label:'Annual'},
    {value:'1/2' , label:'Semi-Annual'},
    {value:'1/12' , label:'Monthly'},
  ]
  return(
    <div>
      <div>
          <p>STEP 1 INITIAL INVESTMENT</p>
          <input type={'text'} placeholder={'Inital Investment'} value={initialInvestment}  onChange={(e)=>setInitialInvestment(e.target.value)} />
      </div>
      <div>
          <p>STEP 2 CONTRIBUTE</p>
          <input type={'text'} placeholder={'Monthly Contribution'} value={monthlyContribution}  onChange={(e)=>setMonthlyContribution(e.target.value)}  />
          <input type={'text'} placeholder={'Years Invested'} value={years}  onChange ={(e)=>setYears(e.target.value)} />
      </div>
      <div>
          <p>STEP 3 INTEREST RATE</p>
          <input type={'text'} placeholder={'Interest Rate'} value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
      </div>
      <div>
          <p>STEP 4 COMPOUND IT</p>
          <Select options={options}/>
      </div>    
      <Chart/>
    </div>
  )
}

export default App;