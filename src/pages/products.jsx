import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="./images/bycle-1.jpg" />
                <CardProduct.Body title="Bycle 1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis adipisci nostrum recusandae veritatis voluptate eaque unde
                    sunt reiciendis quas accusamus tempore ratione ipsa natus aliquam
                    voluptatem eveniet commodi, excepturi repudiandae.
                </CardProduct.Body>
                <CardProduct.Footer buttonText="Add to cart" price="Rp.10.999.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="./images/bycle-1.jpg" />
                <CardProduct.Body title="Bycle 2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis adipisci nostrum recusandae veritatis voluptate eaque unde
                    sunt reiciendis quas accusamus tempore ratione ipsa natus aliquam
                    voluptatem eveniet commodi, excepturi repudiandae.
                </CardProduct.Body>
                <CardProduct.Footer buttonText="Add to cart" price="Rp.12.400.000" />
            </CardProduct>
        </div>
    )
}

export default ProductPage
