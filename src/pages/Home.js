import React from 'react'
import AddForm from '../components/AddForm'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { addToCart } from '../redux/product/actions'
import { useSelector } from 'react-redux'

function Home() {

    const { products } = useSelector(state => state)
    console.log(products)

    return (
        <div>
            <Header />
            {/* <!-- Navbar ends --> */}
            <main className="py-16">
                <div className="productWrapper">
                    {/* <!-- products container --> */}
                    <div className="productContainer" id="lws-productContainer">
                        {/* <!-- product item --> */}
                        {products.map(product => (
                            <ProductCard  product={product}  key={product.key} />
                        ))}

                        {/* <!-- product item ends --> */}
                    </div>
                    {/* <!-- products container ends --> */}
                    <div>
                        {/* <!-- Product Input Form --> */}
                        <AddForm />
                        {/* <!-- Product Input Form Ends --> */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home