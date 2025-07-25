
import './App.css'
import ProductCart from './components/product-card'
import Header from './components/header'

function App() {


  return (
    <>
    <div className='w-full h-screen bg-pink-300'>
    <div className='w-[500px] flex flex-col justify-center items-center h-[500px] bg-gray-500'>
      <div className='w-[90px] h-[90px] bg-red-700 relative'>

      </div>
      <div className='w-[90px] h-[90px] bg-green-700 absolute right-[90px] left-[100px]'>

      </div>
      <div className='w-[90px] h-[90px] bg-yellow-700 fixed right-[50px] bottom-[60px]'>

      </div>
      <div className='w-[90px] h-[90px] bg-blue-700'>

      </div>
    </div>
   </div>
    </>
  )
}

export default App
