const AuthLayout = (props) => {
    const { title, children } = props
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-3 text-blue-500">{title}</h1>
                <p className="font-semibold text-gray-500 mb-5">Welcome, please enter your credentials</p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
