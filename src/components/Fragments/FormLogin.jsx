import ButtonRoundedSB from "../Elements/Button/ButtonRoundedSB"
import InputForm from "../Elements/InputForm"

const FormLogin = () => {
    return (
        <form action="#">
            <InputForm name="email" label="Email" type="email" placeholder="example@mail.com" />
            <InputForm name="password" label="Password" type="password" placeholder="******" />
            <ButtonRoundedSB text="Login" width="w-full" background="bg-blue-500" />
        </form>
    )
}

export default FormLogin
