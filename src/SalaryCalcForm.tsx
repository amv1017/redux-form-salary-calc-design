import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, FormSection } from 'redux-form'
import Hint from './Hint'
import { ISumm, PaymentPeriod } from './ISumm'
import { _SALARY_FORM } from './data'

let SalaryCalcForm = (props: ISumm | any) => {
  const { handleSubmit, paymentPeriod, hasNDFL, salary } = props

  return (
    <form className="calc" onSubmit={handleSubmit}>
      <label>
        <Field
          name="paymentPeriod"
          component="input"
          type="radio"
          value={PaymentPeriod.Month}
        />
        <div className="font-bold">Оклад за месяц</div>
      </label>

      <label>
        <Field
          name="paymentPeriod"
          component="input"
          type="radio"
          value={PaymentPeriod.Minimal}
        />
        <div className="font-bold">МРОТ</div>
        <Hint />
      </label>

      <label>
        <Field
          name="paymentPeriod"
          component="input"
          type="radio"
          value={PaymentPeriod.Day}
        />
        <div className="font-bold">Оплата за день</div>
      </label>

      <label>
        <Field
          name="paymentPeriod"
          component="input"
          type="radio"
          value={PaymentPeriod.Hour}
        />
        <div className="font-bold">Оплата за час</div>
      </label>

      <div className="slider font-12px">
        <div className={`font-bold ${hasNDFL && 'checked-title'}`}>
          {'Указать с НДФЛ'}
        </div>
        <label className="switch">
          <Field name="hasNDFL" component="input" type="checkbox" />
          <div className="slide"></div>
        </label>
        <div className={`font-bold ${!hasNDFL && 'checked-title'}`}>
          {'Без НДФЛ'}
        </div>
      </div>

      <div className="font-bold">
        <Field
          name="salary"
          type="number"
          component="input"
          value={salary}
          className="summ"
        />
        <b>₽</b>
      </div>
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
