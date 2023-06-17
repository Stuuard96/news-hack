import { spinner, spinnerContainer } from './Spinner.css'

export function Spinner () {
  return (
    <div className={spinnerContainer}>
      <div className={spinner} />
    </div>
  )
}
