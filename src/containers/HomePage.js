import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListHome } from "../actions/listHomeAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const homeList = useSelector((state) => state.listHome);

  const fetchHome = (page) => {
    dispatch(getListHome(page));
  }

  useEffect(() => {
    fetchHome(1);
  }, []);

  return (
    <React.Fragment>
      <h1>HomePage</h1>
      {homeList && homeList.data && (
        <p>have data</p>
      )}
      {homeList && homeList.loading && <p>Loading....</p>}
    </React.Fragment>
  );
};

export default HomePage;
