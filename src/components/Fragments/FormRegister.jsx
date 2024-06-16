import ButtonRoundedSB from "../Elements/Button/ButtonRoundedSB"
import InputForm from "../Elements/InputForm"

const FormRegister = () => {
    return (
        <form action="#">
            <InputForm name="username" label="Username" type="username" placeholder="input your username" />
            <InputForm name="email" label="Email" type="email" placeholder="example@mail.com" />
            <InputForm name="password" label="Password" type="password" placeholder="******" />
            <InputForm name="re-password" label="Re-Password" type="password" placeholder="******" />
            <ButtonRoundedSB text="Register" modifier="w-full mt-10" background="bg-blue-500" />
        </form>
    )
}

export default FormRegister