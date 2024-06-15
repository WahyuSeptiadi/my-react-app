const HyperLink = (props) => {
    const { infoText, link, actionText } = props
    return (
        <p className="my-2 text-sm text-center">
            {infoText}
            <a href={link} className="mx-1 font-semibold text-blue-500 hover:underline">{actionText}</a>
        </p>
    )
}

export default HyperLink
