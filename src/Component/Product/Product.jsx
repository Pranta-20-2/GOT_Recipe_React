import { RiFireLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";

const Product = ({ product, handleItem }) => {
    const { id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = product
    return (
        <div>
            <div className="border-2 border-gray-300 shadow-lg rounded-2xl h-full pb-5">
                <div className="h-[200px] w-full p-5">
                    <img className="h-full w-full rounded-2xl" src={recipe_image} alt="" />
                </div>
                <div className="px-5 space-y-3">
                    <p className=" text-lg font-semibold">{recipe_name}</p>
                    <p className=" text-gray-500 text-sm fira-sans font-light">{short_description}</p>
                    <div>
                        <p>Ingredients: {ingredients.length}</p>
                        <div className=" text-gray-500 text-sm fira-sans font-light">
                            {
                                ingredients.map((item,index) => <li key={index}>{item}</li>)
                            }
                        </div>
                    </div>
                    <div className=" text-gray-500 text-base fira-sans font-light grid grid-cols-2 items-center gap-8">
                        <div className="flex items-center gap-2">
                            <MdOutlineWatchLater />
                            <p><span>{preparing_time}</span> minutes</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiFireLine />
                            <p><span>{calories}</span> calories</p>
                        </div>

                    </div>
                    <button onClick={() => { handleItem(product) }} className="btn bg-[#0BE58A] rounded-[50px] font-medium">Want to Cook</button>
                </div>

            </div>
        </div>
    );
};

export default Product;