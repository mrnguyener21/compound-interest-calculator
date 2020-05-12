import React, {useState} from 'react';
import Chart from './Chart'
import Select from 'react-select';

const App = () => {
  const [initialInvestment, setInitialInvestment]= useState('');
  const [years,setYears] =useState('');
  const [interestRate, setInterestRate] =useState('');
  const [compoundRate, setCompoundRate] = useState('-')


  // const compoundValues = [1,2,4,12]

  const compoundOptions = [
    {value:1 , label:'Annual'},
    {value:2 , label:'Semi-Annual'},
    {value:4 , label:'Quarterly'},
    {value:12 , label:'Monthly'},
  ]

  // const interestInDecimals = interestRate/100;
  // const totalInterest = (initialInvestment*interestInDecimals)*(compoundOptions*years);
  // const futureValueWithInterest = initialInvestment + totalInterest;
  // const FuturevalueWithCompoundInterest =Math.pow(initialInvestment*(1+interestInDecimals/compoundOptions),compoundOptions.value*years);
  // const totalCompoundInterest = FuturevalueWithCompoundInterest - initialInvestment;



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
        <button onClick={()=> console.log(compoundRate)}>check</button>
        <div>
            <p>STEP 4 COMPOUND IT</p>
            <Select placeholder={'Choose Compound Rate'} value={compoundRate} onChange={(e)=>setCompoundRate(e.target.value)}options={compoundOptions}/>
        </div>    
      </div>
      <Chart/>
    </div>
  )
}

export default App;