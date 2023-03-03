import { _SET_DAY, _SET_HOUR, _SET_MINIMAL, _SET_MONTH } from '../data'
import { ISumm, PaymentPeriod } from '../ISumm'

export default function calcReducer(state: any = {
  paymentPeriod: PaymentPeriod.Month,
  
  
  
}, action: any) {
  switch (action.type) {
    case _SET_DAY:
      return state + action.payload
    case _SET_HOUR:
      return state - action.payload
    case _SET_MINIMAL:
      return state - action.payload
    case _SET_MONTH:
      return state - action.payload
  
    default:
      return state
  }
}
