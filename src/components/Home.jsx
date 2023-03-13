import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  // const {items, status} = useSelector(state => state.products)
  const {data, error, isLoading} = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  }

  const formatRupiah = (angka) => {
    let reverse = angka.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return `Rp ${ribuan}`;
  }

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An Error occured   </p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map(product => 
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                </div>
                <div className="details">
                  <span className="price">{formatRupiah(product.price)}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
 
export default Home;