import { IoMdArrowDropdown } from "react-icons/io";

const Filters =() =>{
    return(
        <main>
            <div className="flex justify-around p-10 medium:hidden">
                <div className="flex">
                    <div className="satoshiFont text-base">Filters</div>
                    <div className="flex items-center"><IoMdArrowDropdown /></div>
                </div>

                <div className="flex">
                    <div className="satoshiFont text-base">Sorting</div>
                    <div className="flex items-center"><IoMdArrowDropdown /></div>
                </div>
            </div>
        </main>
    )
}

export default Filters;