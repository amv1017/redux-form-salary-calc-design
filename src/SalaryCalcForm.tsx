import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Hint from './Hint'
import { ISumm, PaymentPeriod } from './ISumm'
import Slider from './Slider'

let SalaryCalcForm = (props: ISumm | any) => {
  const { handleSubmit, paymentPeriod } = props

  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    console.log(props.paymentPeriod)
  }, [props])

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          <Field
            name="paymentPeriod"
            component="input"
            type="radio"
            value={PaymentPeriod.Month}
          />
          Оклад за месяц
        </label>

        <label style={{ display: 'flex', flexDirection: 'row' }}>
          <Field
            name="paymentPeriod"
            component="input"
            type="radio"
            value={PaymentPeriod.Minimal}
          />
          <div>МРОТ</div>
          <Hint />
        </label>

        <label>
          <Field
            name="paymentPeriod"
            component="input"
            type="radio"
            value={PaymentPeriod.Day}
          />
          Оплата за день
        </label>

        <label>
          <Field
            name="paymentPeriod"
            component="input"
            type="radio"
            value={PaymentPeriod.Hour}
          />
          Оплата за час
        </label>
      </div>

      <Slider
        checked={checked}
        onChange={() => setChecked(!checked)}
        checkedTitle={'Указать с НДФЛ'}
        uncheckedTitle={'Без НДФЛ'}
      />
    </form>
  )
}

//@ts-ignore
SalaryCalcForm = reduxForm({
  form: 'selectingFormValues',
})(SalaryCalcForm)

const selector = formValueSelector('selectingFormValues')

//@ts-ignore
SalaryCalcForm = connect((state: ISumm) => {
  const paymentPeriod = selector(state, 'paymentPeriod')
  return {
    paymentPeriod,
  }
})(SalaryCalcForm)

export default SalaryCalcForm
