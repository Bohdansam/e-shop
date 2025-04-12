import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductCards() {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedScroll = sessionStorage.getItem('scrollPosition');
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/all');
        setProducts(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке товаров", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (id) => {
    // Сохраняем текущую прокрутку
    sessionStorage.setItem('scrollPosition', window.scrollY);
    navigate(`/product/${id}`);
  };

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-[80%] mx-auto py-6">
      <div className="flex flex-wrap justify-center gap-8 font-satoshi">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleCardClick(product.id)}
            className="w-[250px] bg-white rounded-xl shadow-md relative flex flex-col items-center p-4 hover:shadow-xl transition cursor-pointer"
          >
            <div
              className={`absolute top-3 right-3 text-xl select-none ${
                likedItems[product.id] ? 'text-red-500' : 'text-gray-400'
              } hover:scale-110 transition-transform`}
              onClick={(e) => toggleLike(e, product.id)}
            >
              ♥
            </div>

            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-4"
            />

            <h3 className="text-base font-semibold text-center">{product.name}</h3>
            <p className="text-lg font-bold mt-2 mb-4">${product.price}</p>

            <button
              className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:opacity-90"
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(product.id);
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
