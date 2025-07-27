import { Route, Routes } from "react-router-dom";

export default function Adminpage(){
    return(
        <div className="w-full h-screen bg-gray-300 flex p-2">
            <div className="w-[300px] h-full flex flex-col text-center items-center ">
                <a href="/admin" className="w-[300px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer">Dashboard</a>
                <a href="/admin/users" className="w-[300px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer">users</a>
                <a href="/admin/products" className="w-[300px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer">Products</a>
                <a href="/admin/orders" className="w-[300px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer">Orders</a>
            </div>
            <div className="h-full bg-white w-[calc(100vw-300px)]">
                <Routes path="/*">
                    <Route path="/users" element={<h1>users</h1>}></Route>
                    <Route path="/products" element={<h1>Products</h1>}></Route>
                    <Route path="/orders" element={<h1>Orders</h1>}></Route>
                </Routes>
            </div>

        </div>
    )

}