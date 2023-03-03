import { useState, useRef } from 'react'

//@ts-ignore
import close from './assets/close.png'

//@ts-ignore
import info from './assets/info.png'
import { _MROT } from './data'

const Hint = () => {
  const [toggle, setToggle] = useState(false)
  const [enter, setEnter] = useState(false)
  const target = useRef(null)

  return (
    <div className="hint">
      <button
        ref={target}
        onClick={() => setToggle(!toggle)}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
        className="btn-icon"
      >
        <img src={toggle ? close : info} alt="" />
      </button>
      {(toggle || (!toggle && enter)) && <div className="tlt">{_MROT}</div>}
    </div>
  )
}

export default Hint
