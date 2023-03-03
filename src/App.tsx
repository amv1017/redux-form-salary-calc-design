import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import SalaryCalcForm from './SalaryCalcForm'
import { getFormValues } from 'redux-form'
import { _SALARY_FORM } from './data'

const showResults = () => {
  
}

function App() {
  const formValues = useSelector((state: any) => getFormValues(_SALARY_FORM)(state))

  useEffect(() => {
    console.log('formValues : ', formValues)
  }, [formValues])
  
  return (
    <>
      <SalaryCalcForm onSubmit={showResults} />
    </>
  )
}

export default App
