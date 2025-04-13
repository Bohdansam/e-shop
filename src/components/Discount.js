import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedDiv from "../AnimatedDiv";

const ProductDiscount = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['phones', 'headphones', 'watches', 'tablets'];
        const fetchedProducts = await Promise.all(
          categories.map((category) =>
            fetch(`http://localhost:3001/api/${category}`).then((res) => res.json())
          )
        );
        const filtered = fetchedProducts
          .flat()
          .filter((item) => [4, 5, 7, 1].includes(item.id));
        setProducts(filtered);
      } catch (err) {
        setError("Loading error");
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <AnimatedDiv> 
    <div className="flex flex-col items-center justify-center w-full py-16 px-4 sm:px-8 lg:px-16">
      <h1 className="text-2xl font-bold w-full text-left mb-8 sm:pl-0 lg:pl-16">
        Discounts up to -50%
      </h1>

      {products.length === 0 ? (
        <p className="text-xl text-center">No products available</p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="cursor-pointer border p-4 rounded-xl w-full max-w-[300px] flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-medium text-xl text-center">{item.name}</h3>
              <div className="flex items-center gap-2 my-2">
                <p className="text-xl font-bold text-black">${item.price}</p>
                <p className="text-sm line-through text-gray-500">${(item.price * 1.5).toFixed(0)}</p>
              </div>
              <button className="bg-black text-white px-4 py-2 mt-2 rounded hover:bg-gray-800 transition">
                Buy now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </AnimatedDiv>
  );
};

export default ProductDiscount;