import { FC } from 'react'
import { DeepMap, FieldError, FieldValues } from 'react-hook-form'

interface IInput {
    question: string
    reff: any
    id: string
    errors: DeepMap<FieldValues, FieldError>
    triggerValidation: (payload?: string | string[]) => Promise<boolean>
}

interface ITextInput extends IInput {
    placeholder: string
}

export const TextInput: FC<ITextInput> = ({ question, placeholder, reff, id, errors, triggerValidation }) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="text-left">{ question }</label>
            <input ref={reff} type="text" name={id} placeholder={placeholder} className={`input ${ errors[id] ? "input-error" : "" }`} onChange={() => triggerValidation()}/>
            {
                errors[id] &&
                <small className="text-left text-red-500">Please fill in this field!</small>
            }
        </div>
        
    )
}

interface IRadio {
    name: string,
    key: string
}

interface IRadioInput extends IInput {
    options: IRadio[]
}

export const RadioInput: FC<IRadioInput> = ({ question, id, reff, options, errors, triggerValidation }) => {
    return (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="text-left mb-1">{ question }</label>
        <div className="flex flex-row">
            { options.map(radio => {
                return (
                    <div key={radio.key} className="flex flex-row items-center justify-center mr-5">
                        <input className="mr-2" ref={reff} type="radio" id={radio.key} name={id} value={radio.key} onChange={() => triggerValidation()}/>
                        <label htmlFor={radio.key}>{radio.name}</label>
                    </div>
                )
            })}
        </div>
        {
            errors[id] &&
            <small className="text-left text-red-500">Please choose an option!</small>
        }
    </div>
    )
}


interface ICheckbox {
    name: string
    id: string
}

interface ICheckboxInput extends IInput {
    options: ICheckbox[]
}
export const CheckboxInput: FC<ICheckboxInput> = ({ question, id, reff, options }) => {
    return (
        <div className="flex flex-col mb-4">
            <p className="text-left">{ question }</p>
            <div className="flex flex-row">
                { options.map(check => {
                    return (
                        <div key={check.id + check.name} className="flex flex-row items-center justify-center mr-5">
                            <label htmlFor={ check.id } className="mr-2">{ check.name }</label>
                            <input ref={reff} type="checkbox" name={check.id} id={check.id} />
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

interface IOption {
    name: string
    key: string
}

interface IOptionInput extends IInput {
    options: IOption[]
}

export const SelectInput: FC<IOptionInput> = ({ question, id, reff, options, errors, triggerValidation }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-left mt-3" htmlFor={id}>{ question }</label>
            <select ref={reff} className={`input ${ errors[id] ? "input-error" : "" }`} name={id} id={id} onChange={() => triggerValidation()}>
                <option value="null">Please select an option</option>
                { options.map(option => {
                    return (
                        <option key={ option.key  } value={ option.key }>{ option.name }</option>
                    )
                })}
            </select>
            {
                errors[id] &&
                <small className="text-left text-red-500">Please select an option!</small>
            }
        </div>
    )
}

interface ISlideInput extends IInput {
    min: number
    max: number
    step: number
    startText: string
    endText: string
}

export const SliderInput: FC<ISlideInput> = ({ question, id, reff, min, max, step, startText, endText }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="text-left mt-4 mb-2" htmlFor={id}>{ question }</label>
            <input ref={reff} type="range" name={ id } id={id} min={min} max={max} step={step} defaultValue={3}/>
            <div className="text-left w-full flex flex-row justify-between mt-2">
                <span className="text-gray-500 text-sm">{ startText }</span>
                <span className="text-gray-500 text-sm">{ endText }</span>
            </div>
        </div>
    )
}