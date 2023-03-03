import React, { useState } from 'react'
import { Field, getFormValues } from 'redux-form'
import { useSelector } from 'react-redux'
import { _SALARY_FORM } from './data'

const Slider = ({
  checkedTitle,
  uncheckedTitle,
}: {
  checkedTitle: string
  uncheckedTitle: string
}) => {

  const formValues = useSelector((state: any) => getFormValues(_SALARY_FORM)(state))

  console.log('formValues : ',formValues)
  
  const [checked, setChecked] = useState<boolean>(false)


  return (
    <div className="slider">
      <div className={checked ? 'checked-title' : ''}>{checkedTitle}</div>
      <label className="switch">
        <Field name="paymentPeriod" component="input" type="checkbox" />

        <div className="slide"></div>
      </label>
      <div className={!checked ? 'checked-title' : ''}>{uncheckedTitle}</div>
    </div>
  )
}

export default Slider
