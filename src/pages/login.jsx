import ToLink from "../components/Elements/Link/ToLink"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <ToLink infoText="Don't have an account?" actionText="Register" link="/register" />
        </AuthLayout>
    )
}

export default LoginPage
