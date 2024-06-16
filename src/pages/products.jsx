import ButtonRoundedSB from "../components/Elements/Button/ButtonRoundedSB"
import CardProduct from "../components/Fragments/CardProduct"

const productList = [
    {
        id: 1,
        image: "./images/bycle-1.jpg",
        title: "Bicycle v.1",
        price: "Rp.10.999.000",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis adipisci nostrum recusandae veritatis voluptate eaque unde
            sunt reiciendis quas accusamus tempore.`,
    },
    {
        id: 2,
        image: "./images/bycle-1.jpg",
        title: "Bicycle v.2",
        price: "Rp.12.400.000",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
]

const user = JSON.parse(localStorage.getItem("user"))

const handleProduct = () => {
    localStorage.removeItem("user")
    window.location.href = "/login"
}

const ProductPage = () => {
    return (
        <>
            <div className="flex h-20 items-center justify-end bg-end bg-blue-500">
                <div className="flex text-light font-semibold text-white">
                    Welcome, {user["email"]}
                </div>
                <ButtonRoundedSB
                    text="Logout"
                    modifier="ml-5 mr-6 px-10"
                    background="bg-red-500"
                    onClick={handleProduct}
                />
            </div>
            <div className="flex justify-center py-5">
                {productList.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body title={product.title}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer buttonText="Add to cart" price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </>
    )
}

export default ProductPage
