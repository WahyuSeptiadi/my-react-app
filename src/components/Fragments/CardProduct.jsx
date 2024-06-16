import ButtonRoundedSB from "../Elements/Button/ButtonRoundedSB"

const CardProduct = (props) => {
    const { title, price, image } = props
    return (
        <div></div>
    )
}

const Header = (props) => {
    const { image } = props
    return (
        <a href="#">
            <img className="rounded-t-lg p-0.5" src={image} alt="product" />
        </a>
    )
}

const Body = (props) => {
    const { title, children } = props
    return (
        <div className="p-5">
            <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
            <p className="font-light text-white">{children}</p>
        </div>
    )
}

const Footer = (props) => {
    const { buttonText, price } = props
    return (
        <div className="flex items-center justify-between px-5 pb-3">
            <p className="font-normal text-xl text-gray-200">{price}</p>
            <ButtonRoundedSB text={buttonText} width="mb-3 p-2" background="bg-blue-500" />
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct
