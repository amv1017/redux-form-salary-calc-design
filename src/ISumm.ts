export enum PaymentPeriod {
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Minimal = 'minimal',
}

export interface ISumm {
  hasNDFL: boolean
  paymentPeriod: PaymentPeriod
  salary: number
  handleSubmit: () => void
}
