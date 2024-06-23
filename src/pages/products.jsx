import ButtonRoundedSB from "../components/Elements/Button/ButtonRoundedSB"
import CardProduct from "../components/Fragments/CardProduct"
import { useState } from "react"

const productList = [
    {
        id: 1,
        image: "./images/bycle-1.jpg",
        title: "Bicycle v.1",
        price: 10999000,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis adipisci nostrum recusandae veritatis voluptate eaque unde
            sunt reiciendis quas accusamus tempore.`,
    },
    {
        id: 2,
        image: "./images/bycle-1.jpg",
        title: "Bicycle v.2",
        price: 12400000,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: 3,
        image: "./images/bycle-1.jpg",
        title: "Bicycle v.3",
        price: 5750000,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: 4,
        image: "./images/bycle-1.jpg",
        title: "Bicycle v.4",
        price: 15750000,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: 5,
        image: "./images/bycle-1.jpg",
        title: "Bicycle v.5",
        price: 13050000,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
]

const user = JSON.parse(localStorage.getItem("user"))

const handleProduct = () => {
    localStorage.removeItem("user")
    window.location.href = "/login"
}

const ProductPage = () => {
    const [cart, setCart] = useState([])

    // spread operator (...) -> copy array and add new item
    const handleAddToCart = (id) => {
        const item = cart.find((item) => item.id === id)
        if (item) {
            item.qty += 1
            setCart([...cart])
        } else {
            setCart([...cart, { id: id, qty: 1 }])
        }
    }

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
            <div className="flex justify-center">
                <div className="w-3/5 flex flex-wrap">
                    {productList.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer buttonText="Add to cart" id={product.id} price={product.price} handleAddToCart={handleAddToCart} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/5">
                    <h1 className="text-3xl font-bold m-2 text-blue-600">Cart List</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-10">
                        <thead>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = productList.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>Rp. {product.price.toLocaleString("id-ID", { styles: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp. {(product.price * item.qty).toLocaleString("id-ID", { styles: 'currency', currency: 'IDR' })}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan="3" className="text-right font-semibold">Total Price</td>
                                <td>Rp. {
                                    cart.reduce((total, item) => total + (
                                        productList.find((product) => product.id === item.id).price * item.qty
                                    ), 0).toLocaleString("id-ID", { styles: 'currency', currency: 'IDR' })
                                }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductPage
