import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Products from './Component/Products/Products'
import Cook_Cart from './Component/Want_Cook/Cook_Cart'
import { toast } from 'react-toastify';
import Footer from './Component/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  const [item, setItem] = useState([])

  const handleItem = product => {
    //Check item present or not
    const isExist = item.find(cart => cart.id == product.id);
    if (!isExist) {
      setItem([...item, product])
    }
    else {
      toast.warn("Item already exist in want to cook cart")
    }
  }
  const [shift, setShift] = useState([])
  //Handle Preparing
  const handlePreparing = cart => {
    const newCart = item?.filter(pd => pd.id != cart.id);
    setItem(newCart);
    handleShift(cart);

  }
  // Shift Part
  const handleShift = newValue => {
    setShift([...shift, newValue])
    
    
  }
  return (
    <>
    
      <div className='max-w-screen-2xl w-5/6 mx-auto p-2 '>
        <Header></Header>
        <div className='text-center mb-12 space-y-5 '>
          <p className='text-[40px] font-semibold '>Our Recipes</p>
          <p className='text-gray-400 font-normal lg:px-60'>Delight in the fusion of flavors with our recipes, meticulously crafted to tantalize your taste buds and elevate your culinary journey to new heights. From classic comfort foods to innovative creations, discover the perfect dish to satisfy every craving and inspire your kitchen adventures. </p>
        </div>
        <div className='md:flex justify-between mb-24 gap-5'>
          <div className='md:w-fit lg:w-[60%] mb-5'>
            <Products handleItem={handleItem}></Products>
          </div>
          <div className='md:w-[40%]'>
            <Cook_Cart item={item} handlePreparing={handlePreparing} shift={shift}></Cook_Cart>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
