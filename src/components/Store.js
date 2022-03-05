import React, { useState } from "react";
import Sidenav from "./Sidenav";
import Banner from "./Banner";
import CardList from "./CardList";

const Store = ({ setBadge }) => {
  const [menu, setMenu] = useState(true);
  const [loader, setLoader] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");

  return (
    <div className="row g-0" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="col-sm-2">
        <Sidenav setLoader={setLoader} />
      </div>
      <div className="col p-4">
        {menu && <Banner setSearchedValue={setSearchedValue} />}
        <CardList
          setBadge={setBadge}
          loader={loader}
          searchedValue={searchedValue}
        />
      </div>
    </div>
  );
};

export default Store;
