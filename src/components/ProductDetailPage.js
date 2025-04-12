import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeColor, setActiveColor] = useState("black");

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Ошибка при загрузке товара');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) return <div className="text-center p-10">Загрузка...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;
  if (!product) return null;

  return (
    <div className="max-w-[80%] mx-auto py-10 flex flex-col lg:flex-row gap-10">
      {/* Images */}
      <div className="lg:w-1/2 flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2">
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-xl shadow-xl"
        />
      </div>

      {/* Product Info */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-black">${product.price}</span>
          <span className="text-lg line-through text-gray-400">${product.price + 100}</span>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Select color:</p>
          <div className="flex gap-3">
            {["black", "white", "purple", "red", "yellow", "orange"].map(color => (
              <div
                key={color}
                onClick={() => setActiveColor(color)}
                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                  activeColor === color ? "border-black scale-110" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {["128GB", "256GB", "512GB", "1TB"].map((storage) => (
            <button key={storage} className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white">
              {storage}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-6">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Screen size</span>
            <span>6.7”</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">CPU</span>
            <span>Apple A16 Bionic</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Main camera</span>
            <span>48–12–12 MP</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Battery</span>
            <span>4323 mAh</span>
          </div>
        </div>

        <p className="text-gray-600 mt-4">
          Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day.
          Incredible photos in weak, yearn in bright light using the new system with two cameras...
        </p>

        <div className="flex items-center gap-4 mt-6">
          <button className="px-6 py-3 border rounded-md">Add to Wishlist</button>
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900">Add to Cart</button>
        </div>

        <div className="grid grid-cols-3 text-center mt-6 gap-2 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Free Delivery</p>
            <p>1–2 day</p>
          </div>
          <div>
            <p className="font-semibold">In Stock</p>
            <p>Today</p>
          </div>
          <div>
            <p className="font-semibold">Guaranteed</p>
            <p>1 year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
