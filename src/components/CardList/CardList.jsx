import Card from "../Card";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardList = ({ loader, setBadge, searchedValue }) => {
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);

  return (
    <div className="row">
      {loader ? (
        [...Array(12)].map((_, i) => {
          return (
            <div className="col-sm-2 mt-4" key={i}>
              <div className="card p-3 text-center">
                <Skeleton className="rounded-circle" width={80} height={80} />
                <Skeleton className="rounded-0 mt-4" />
                <Skeleton className="rounded-0 mt-3" count={3} />
              </div>
            </div>
          );
        })
      ) : products[category] ? (
        products[category]
          .filter(
            (nextProduct, index, self) =>
              index ===
              self.findIndex(
                (previousProduct) => previousProduct.title === nextProduct.title
              )
          )
          .filter((product) =>
            product.title.toLowerCase().includes(searchedValue.toLowerCase())
          )
          .map((product, index) => (
            <div className="col-sm-2 mt-4" key={index}>
              <Card
                product={product}
                id={product.id}
                name={product.title}
                price={(product.id / 10000).toFixed(2)}
                image={product.image.replace("312x231", "90x90")}
                setBadge={setBadge}
              />
            </div>
          ))
      ) : (
        <div className="text-center mt-5">
          <h1 className="text-danger ">
            There was a problem with the API, please try later.
          </h1>
        </div>
      )}
    </div>
  );
};

export default CardList;
