import { useSelector } from 'react-redux'
import SalaryCalcForm from './SalaryCalcForm'
import { getFormValues } from 'redux-form'
import { _SALARY_FORM } from './data'
import { ISumm, PaymentPeriod } from './ISumm'
import SalaryDetails from './SalaryDetails'

const App = () => {
  const formValues = useSelector(
    (state: ISumm) => getFormValues(_SALARY_FORM)(state) as ISumm
  )

  return (
    <div className="app">
      <SalaryCalcForm />

      {formValues?.paymentPeriod === PaymentPeriod.Month && (
        <SalaryDetails salary={formValues?.salary} hasNDFL={formValues?.hasNDFL} />
      )}
    </div>
  )
}

export default App
