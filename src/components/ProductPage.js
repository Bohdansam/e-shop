import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useBasket } from '../BasketContext';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedDiv from '../AnimatedDiv';

function ProductCards() {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [addedAnimation, setAddedAnimation] = useState({});
  const navigate = useNavigate();
  const { addToBasket } = useBasket();

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
        console.error("Error loading products", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (id) => {
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

  const handleAddToBasket = (e, product) => {
    e.stopPropagation();
    addToBasket(product);

    setAddedAnimation((prev) => ({
      ...prev,
      [product.id]: true,
    }));

    setTimeout(() => {
      setAddedAnimation((prev) => ({
        ...prev,
        [product.id]: false,
      }));
    }, 1000);
  };

  return (
    <AnimatedDiv>
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

            <div className="flex flex-col gap-2 w-full relative">
              <button
                className="bg-black text-white py-2 rounded-lg text-sm font-medium hover:opacity-90"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(product.id);
                }}
              >
                Buy Now
              </button>

              <div className="relative">
                <button
                  className="bg-gray-200 text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-300 w-full"
                  onClick={(e) => handleAddToBasket(e, product)}
                >
                  Add to Basket
                </button>

                <AnimatePresence>
                  {addedAnimation[product.id] && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: -8 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-1/2 top-0 -translate-x-1/2 text-green-500 text-xs font-semibold"
                    >
                      ✓ Added!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </AnimatedDiv>
  );
}

export default ProductCards;