import AnimatedDiv from '../AnimatedDiv';
import { useBasket } from '../BasketContext';

function Basket() {
  const { basket } = useBasket();

  const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatedDiv>
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Basket</h2>
      {basket.length === 0 ? (
        <p className="text-gray-500">Basket is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {basket.map((item, index) => (
              <li
                key={index}
                className="border p-4 rounded-md shadow-sm flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right text-lg font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
    </AnimatedDiv>
  );
}

export default Basket;
