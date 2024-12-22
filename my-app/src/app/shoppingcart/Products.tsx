

const Products = () => {
    return (
        <>
            <main>
                <div className="p-5">
                    <h1 className="clashdisplayFont text-2xl">Your shopping cart</h1>

                    <div className="flex gap-5">
                        <img src="/Images/Pot-ProductImage.png" alt="Product Image" />

                        <div>
                            <h1 className="clashdisplayFont text-base">Graystone Vase</h1>
                            <p className="satoshiFont text-sm">A timeless ceramic vase with a tri color grey glaze.</p>
                            <p>£85</p>

                            <div>
                                <p className="satoshiFont text-base">1</p>
                            </div>

                        </div>

                    </div>

                    <div></div>

                    <div></div>

                    <div></div>

                </div>
            </main>
        </>
    )
}

export default Products;