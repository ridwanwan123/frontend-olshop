// import { useSelector } from "react-redux";
import { productsApi, useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  // const {items, status} = useSelector(state => state.products)
  const {data, error, isLoading} = useGetAllProductsQuery();

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
                <h3>{productsApi.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">{product.price}</span>
                </div>
                <button>Add to Cart</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
 
export default Home;