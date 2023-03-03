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
      <div className="header font-12px">Сумма</div>
      <SalaryCalcForm />

      {formValues?.paymentPeriod === PaymentPeriod.Month &&
        formValues?.salary && (
          <SalaryDetails
            salary={formValues?.salary}
            hasNDFL={formValues?.hasNDFL}
          />
        )}
    </div>
  )
}

export default App
