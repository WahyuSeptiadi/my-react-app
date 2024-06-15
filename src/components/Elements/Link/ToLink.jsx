import { Link } from "react-router-dom"

// CLIENT SIDE ROUTING  
// use this component, when not need doc from server -> impact not reload first
const ToLink = (props) => {
    const { infoText, link, actionText } = props
    return (
        <p className="my-2 text-sm text-center">
            {infoText}
            <Link to={link} className="mx-1 font-semibold text-blue-500 hover:underline">{actionText}</Link>
        </p>
    )
}

export default ToLink
