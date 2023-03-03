import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, FormSection } from 'redux-form'
import Hint from './Hint'
import { ISumm, PaymentPeriod } from './ISumm'
import { _SALARY_FORM } from './data'

let SalaryCalcForm = (props: ISumm | any) => {
  const { handleSubmit, paymentPeriod, hasNDFL, salary } = props

  useEffect(() => {
    console.log(props.hasNDFL)
  }, [props])

  return (
    <form className="calc" onSubmit={handleSubmit}>
      <p>Сумма</p>

      <label>
        <Field
          name="paymentPeriod"
          component="input"
          type="radio"
          value={PaymentPeriod.Month}
        />
        <div className="font-bold">Оклад за месяц</div>
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

      <div className="slider">
        <div className={hasNDFL ? 'checked-title' : ''}>{'Указать с НДФЛ'}</div>
        <label className="switch">
          <Field name="hasNDFL" component="input" type="checkbox" />
          <div className="slide"></div>
        </label>
        <div className={!hasNDFL ? 'checked-title' : ''}>{'Без НДФЛ'}</div>
      </div>

      <Field name="salary" type="number" component="input" value={salary} />
    </form>
  )
}

//@ts-ignore
SalaryCalcForm = reduxForm({
  form: _SALARY_FORM,
  initialValues: {
    paymentPeriod: PaymentPeriod.Month,
    hasNDFL: true,
    handleSubmit: () => {},
    salary: null,
  },
})(SalaryCalcForm)

const selector = formValueSelector(_SALARY_FORM)

//@ts-ignore
SalaryCalcForm = connect((state: ISumm) => {
  const paymentPeriod = selector(state, 'paymentPeriod')
  const hasNDFL = selector(state, 'hasNDFL')
  const salary = selector(state, 'salary')
  return {
    paymentPeriod,
    hasNDFL,
    salary,
  }
})(SalaryCalcForm)

export default SalaryCalcForm
