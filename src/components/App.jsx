import React, { useState } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import CardList from "./CardList";
import { usersDB, productsAPI } from "../services/axiosService";
import urls from "../config/urls";
import { setProducts, setCategoryName, setLoader } from "../actions";
import Banner from "./Banner";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "../reducers";

const getWeatherForecast = async () => {
  try {
    const { data } = await usersDB.get("/smoothies");
    console.log("Users: -> ", data);
  } catch (error) {
    console.error({ error: error.message });
  }
};

function App() {
  const store = createStore(allReducers);

  const [badge, setBadge] = useState(
    JSON.parse(localStorage.getItem("shoppingCartProducts"))?.length || 0
  );
  const [menu, setMenu] = useState(true);

  const fetchData = async (productName) => {
    if (store.getState().products[productName]) {
      store.dispatch(setCategoryName(productName));
      return false;
    } else {
      store.dispatch(setLoader());
      productsAPI.get(urls.products.search(productName)).then(
        (response) => {
          if (response.data.products.length) {
            store.dispatch(setProducts(productName, response.data.products));
            store.dispatch(setCategoryName(productName));
            store.dispatch(setLoader());
            return response;
          } else {
            alert("Products not found, please try a different name.");
            store.dispatch(setLoader());
            return false;
          }
        },
        (error) => {
          console.log(error);
          return false;
        }
      );
    }
  };

  return (
    <Provider store={store}>
      <div>
        <button className="btn btn-xl" onClick={getWeatherForecast}>
          Click
        </button>
        <Header
          badge={badge}
          setBadge={setBadge}
          setMenu={() => setMenu(!menu)}
        />
        <div className="row g-0" Style="background-color: #f9f9f9;">
          <div className="col-sm-2">
            <Sidenav fetchData={fetchData} />
          </div>
          <div className="col p-4">
            {menu && <Banner />}
            <CardList setBadge={setBadge} />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
