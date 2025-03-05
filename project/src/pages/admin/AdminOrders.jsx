import { useEffect, useState } from 'react';
import { FiTrash2, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Mock Order Data (Replace with real data later)
const mockOrders = [
  {
    orderId: 'ORD-123',
    user: 'John Doe',
    items: [
      { id: 1, name: 'Product A', price: 29.99, quantity: 2 },
      { id: 2, name: 'Product B', price: 19.99, quantity: 1 },
    ],
    total: 79.97,
    status: 'Processing',
  },
  // Add more mock orders as needed
];

function AdminOrders() {
  const [orders, setOrders] = useState(mockOrders); // Use mock data

  return (
    <div className="pt-20 pb-16">
      <div className="bg-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Orders</h1>
          <p className="text-lg">Manage and view all orders</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {orders.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              No orders found.
            </p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Total</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.orderId} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4">{order.orderId}</td>
                    <td className="px-6 py-4">{order.user}</td>
                    <td className="px-6 py-4">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4 capitalize">{order.status}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <Link 
                        to={`/admin/order/${order.orderId}`} 
                        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                      >
                        <FiEye />
                      </Link>
                      <button 
                        onClick={() => {
                          // Add delete functionality here
                        }}
                        className="text-red-600 hover:text-red-800 dark:hover:text-red-400"
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminOrders; // ✅ Keep this!