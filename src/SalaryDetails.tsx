import { memo } from 'react'

const print = (x: number) =>
  x.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })

const SalaryDetails = ({
  salary,
  hasNDFL,
}: {
  salary: number
  hasNDFL: boolean
}) => {
  const clear = Math.floor(hasNDFL ? salary * 0.87 : salary)
  const ndfl = Math.floor(hasNDFL ? salary * 0.13 : salary * (13 / 87))
  const total = clear + ndfl
  return (
    <div className="details">
      <div>
        <b>{print(clear)}</b> сотрудник будет получать на руки
      </div>
      <div>
        <b>{print(ndfl)}</b> НДФЛ, 13% от оклада
      </div>
      <div>
        <b>{print(total)}</b> за сотрудника в месяц
      </div>
    </div>
  )
}

const SalaryDetailsMemoed = memo(SalaryDetails)

export default SalaryDetailsMemoed
