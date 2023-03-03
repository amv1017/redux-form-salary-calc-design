export enum PaymentPeriod {
  Month = "month",
  Day = "day",
  Hour = "hour",
  Minimal = "minimal",
}

export interface ISumm {
  favoriteColorValue: string
  fullName: string
  handleSubmit: () => void
  hasEmailValue: boolean
  pristine: boolean
  reset: () => void
  submitting: boolean
  onSubmit: () => void
  paymentPeriod: PaymentPeriod
}
