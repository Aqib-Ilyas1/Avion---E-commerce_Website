import Image from "next/image";
const Ceramics = () => {
    return (
        <main>
            <div>
                <p className="clashdisplayFont text-xl">New Ceramic</p>
                <div>
                    <div>
                        <Image src="/DandyChair.png" alt="Dandy Chair" width={163} height={201} />
                        <div>
                            <p>The Dandy Chair</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <button className="satoshiFont text-base">View collection</button>
            </div>
        </main>
    )
}

export default Ceramics;