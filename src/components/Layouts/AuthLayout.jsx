import ToLink from "../Elements/Link/ToLink"

const AuthLayout = (props) => {
    const { title, children } = props
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-3 text-blue-500">{title}</h1>
                <p className="font-semibold text-gray-500 mb-5">Welcome, please enter your credentials</p>
                {children}
                <NavigationLink type={title} />
            </div>
        </div>
    )
}

const NavigationLink = ({ type }) => {
    // ternary operator
    return (
        type.toLowerCase() === "login" ? (
            <ToLink infoText="Don't have an account?" actionText="Register" link="/register" />
        ) : (
            <ToLink infoText="You already have an account?" actionText="Login" link="/login" />
        )
    )
}

export default AuthLayout
