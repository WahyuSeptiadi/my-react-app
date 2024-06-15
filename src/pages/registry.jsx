import ToLink from "../components/Elements/Link/ToLink"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" >
            <FormRegister />
            <ToLink infoText="You already have an account?" actionText="Login" link="/login" />
        </AuthLayout>
    )
}

export default RegisterPage
