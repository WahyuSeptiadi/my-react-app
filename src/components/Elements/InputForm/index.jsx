import Label from "./Label"
import Input from "./Input"

const InputForm = (props) => {
    const { name, label, type, placeholder } = props
    return (
        <div className="mb-3">
            <Label name={name} label={label} />
            <Input type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputForm
