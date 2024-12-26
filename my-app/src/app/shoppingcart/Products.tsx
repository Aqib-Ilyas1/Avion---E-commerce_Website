

const Products = () => {
    return (
        <>
            <main>
                <div className="p-5 flex flex-col gap-10 tablet:p-10 medium:p-20 laptop:p-32">
                    <h1 className="clashdisplayFont text-2xl">Your shopping cart</h1>

                    <div className="flex gap-5">
                        <img src="/Images/Pot-ProductImage.png" alt="Product Image" />

                        <div className="flex flex-col gap-2 ">
                            <h1 className="clashdisplayFont text-base">Graystone Vase</h1>
                            <p className="satoshiFont text-sm">A timeless ceramic vase with a tri color grey glaze.</p>
                            <p>£85</p>
                            <p className="satoshiFont text-base flex justify-center w-1/2 pt-5">1</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <img src="/Images/Plant-ProductImage.png" alt="Product Image" />

                        <div className="flex flex-col gap-2 ">
                            <h1 className="clashdisplayFont text-base">Black white Vase</h1>
                            <p className="satoshiFont text-sm">beautiful and simple this is one for the classic</p>
                            <p>£85</p>
                            <p className="satoshiFont text-base flex justify-center w-1/2 pt-5">1</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-end"><p className="clashdisplayFont text-xl  text-slate-500">Subtotal <span className="clashdisplayFont text-2xl text-black">&nbsp; £210</span></p></div>
                        <div className="flex justify-end"><p className="satoshiFont text-sm text-slate-500">Taxes and shipping are calculated at checkout</p></div>
                    </div>

                    <div className="medium:flex medium:justify-end">
                        <div className="bg-[#2A254B] text-center p-4">
                            <button className="text-white satoshiFont text-base">Go to checkout</button>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Products;