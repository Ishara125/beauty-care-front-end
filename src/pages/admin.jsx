import { Route, Routes, Link } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function Adminpage() {
  return (
    <div className="w-full h-screen bg-gray-300 flex p-2">
      {/* Sidebar */}
      <div className="w-[300px] h-full">
        <Link to="/admin/users" className="p-2 border flex"><FaUserLarge className="mr-2"/> Users</Link>
        <Link to="/admin/products" className="p-2 border flex"><FaWarehouse className="mr-2"/>Products</Link>
        <Link to="/admin/orders" className="p-2 border flex"><MdOutlineFavoriteBorder className="mr-2" />Orders</Link>
      </div>

      {/* Main content */}
      <div className="h-full bg-white flex-1">
        <Routes>
          <Route path="users" element={<h1>Users</h1>} />
          <Route path="products" element={<h1>Products</h1>} />
          <Route path="orders" element={<h1>Orders</h1>} />
          <Route index element={<h1>Welcome to Admin</h1>} />
        </Routes>
      </div>
    </div>
  );
}
