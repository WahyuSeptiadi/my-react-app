import { useHref } from "react-router-dom"
import ButtonRoundedSB from "../Elements/Button/ButtonRoundedSB"
import InputForm from "../Elements/InputForm"

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        localStorage.setItem("user", JSON.stringify({ email, password }))
        window.location.href = "/products"
    }
    return (
        <form onSubmit={handleLogin}>
            <InputForm name="email" label="Email" type="email" placeholder="example@mail.com" />
            <InputForm name="password" label="Password" type="password" placeholder="******" />
            <ButtonRoundedSB type="submit" text="Login" modifier="w-full" background="bg-blue-500" />
        </form>
    )
}

export default FormLogin
