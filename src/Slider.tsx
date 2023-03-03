import React from 'react'

const Slider = ({
  checked,
  onChange,
  checkedTitle,
  uncheckedTitle,
}: {
  checked: boolean
  onChange: (e: React.SyntheticEvent | void) => void
  checkedTitle: string
  uncheckedTitle: string
}) => {
  return (
    <div className="slider">
      <div className={checked ? 'checked-title' : ''}>{checkedTitle}</div>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <div className="slide"></div>
      </label>
      <div className={!checked ? 'checked-title' : ''}>{uncheckedTitle}</div>
    </div>
  )
}

export default Slider
