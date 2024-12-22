const GetInTouch = () => {
    return (
        <>
            <main>
                <div className="medium:flex medium:gap-8">
                    <div className="medium:flex-1">
                        <img src="/Images/GetInTouch.png" alt="Get In Touch" className="tablet:w-full medium:h-full" />
                    </div>

                    <div className="p-5 medium:flex-1 medium:pr-20">
                        <div>
                            <p className="clashdisplayFont text-xl">Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite</p>
                            <p className="satoshiFont text-sm mt-6">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                            <p className="satoshiFont text-sm mt-4"> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>

                        <div>
                            <button className="w-full satoshiFont text-base p-10">Get in touch</button>
                        </div>

                    </div>

                </div>

            </main>
        </>
    )
}


export default GetInTouch;