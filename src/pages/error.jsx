import { useRouteError } from "react-router-dom"

const ErrorPage = (props) => {
    const { title = "", message = "" } = props
    const error = useRouteError()
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-xl font-bold text-red-500">{title}</h1>
            <p className="text-gray-500">{message}</p>
            <p className="text-red-500 font-semibold">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage
