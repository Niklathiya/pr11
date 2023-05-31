import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeDataRequest } from "../Store/home/Actions";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, homePageData } = useSelector((Store) => ({
    isLoading: Store?.home?.loading,
    homePageData: Store?.home?.homePageData,
  }));

  useEffect(() => {
    dispatch(getHomeDataRequest());
  }, []);
  return (
    <>
      <div className="my-5">
        <h2>Home</h2>
        <div className="mt-5">
          {homePageData?.map((item, index) => (
            <div key={index} className="d-flex justify-content-start w-50 mx-auto">
                <p>{item?.id}.</p>
                <p>{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
