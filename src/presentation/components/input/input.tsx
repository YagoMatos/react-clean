import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const inputRef = useRef<HTMLInputElement>()

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div
      className={Styles.inputWrap}
      data-status={ error ? 'invalid' : 'valid' }
      data-testid={`${props.name}-wrap`}
    >
      <input
        {...props}
        title={error}
        ref={inputRef}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange} />
      <label
        onClick={() => { inputRef.current.focus() }}
        title={error}
        data-testid={`${props.name}-label`}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
