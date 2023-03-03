import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, FormSection } from 'redux-form'
import Hint from './Hint'
import { ISumm, PaymentPeriod } from './ISumm'
import { _SALARY_FORM } from './data'

let SalaryCalcForm = (props: ISumm | any) => {
  const { handleSubmit, paymentPeriod, hasNDFL } = props

  useEffect(() => {
    console.log(props.hasNDFL)
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

      <div className="slider">
        <div className={hasNDFL ? 'checked-title' : ''}>{'Указать с НДФЛ'}</div>
        <label className="switch">
          <Field name="hasNDFL" component="input" type="checkbox" />

          <div className="slide"></div>
        </label>
        <div className={!hasNDFL ? 'checked-title' : ''}>{'Без НДФЛ'}</div>
      </div>
    </form>
  )
}

//@ts-ignore
SalaryCalcForm = reduxForm({
  form: _SALARY_FORM,
})(SalaryCalcForm)

const selector = formValueSelector(_SALARY_FORM)

//@ts-ignore
SalaryCalcForm = connect((state: ISumm) => {
  const paymentPeriod = selector(state, 'paymentPeriod')
  const hasNDFL = selector(state, 'hasNDFL')
  return {
    paymentPeriod,
    hasNDFL,
  }
})(SalaryCalcForm)

export default SalaryCalcForm
