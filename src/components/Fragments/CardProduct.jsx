import ButtonRoundedSB from "../Elements/Button/ButtonRoundedSB"

const CardProduct = (props) => {
    const { children } = props
    return (
        <div className="w-full mx-2 my-2 max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
            {children}
        </div>
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
        <div className="p-5 h-full">
            <h5 className="text-xl font-semibold text-white">{title}</h5>
            <p className="font-light text-white">{children}</p>
        </div>
    )
}

const Footer = (props) => {
    const { buttonText, id, price, handleAddToCart } = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <p className="font-semibold tracking-tight text-lg text-gray-200">Rp. {price.toLocaleString("id-ID", { styles: 'currency', currency: 'IDR' })}</p>
            <ButtonRoundedSB text={buttonText} modifier="py-2 px-3" background="bg-blue-500" onClick={() => handleAddToCart(id)} />
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct
