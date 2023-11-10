import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked: initialChecked = false,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  // add state here
  const [checked, setChecked] = useState(initialChecked)

  // function to handle a change to checkbox
  const handleCheckboxChange = () => {
    // state toggle
    const newChecked = !checked
    // update state and invoke onChange callback
    setChecked(newChecked)
    onChange(newChecked)
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        onChange={() => handleCheckboxChange()}
        // when input is clicked, the onChange callback is called
      />
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
        })}
      />
    </div>
  )
}
