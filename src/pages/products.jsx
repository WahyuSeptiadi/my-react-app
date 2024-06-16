import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = () => {
    return (
        <div className="flex justify-center items-center py-5">
            <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow">
                <CardProduct.Header image="./images/bycle-1.jpg" />
                <CardProduct.Body title="Bycle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis adipisci nostrum recusandae veritatis voluptate eaque unde
                    sunt reiciendis quas accusamus tempore ratione ipsa natus aliquam
                    voluptatem eveniet commodi, excepturi repudiandae.
                </CardProduct.Body>
                <CardProduct.Footer buttonText="Add to cart" price="Rp.10.000.000" />
            </div>
        </div>
    )
}

export default ProductPage
