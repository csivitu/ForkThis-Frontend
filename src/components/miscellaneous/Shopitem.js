import React from "react";
import AddtoCart from "../miscellaneous/AddtoCart";
import Loader from "../../utils/Loader";
const Shopitem = ({ id, name, description, countInStock, coins, reloader }) => {
  if (id)
    return (
      <>
        <div className="py-6 w-5/12 text-gray-250">
          <div
            id="shop-item-border"
            className="flex bg-HTpurple-900 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="w-1/3 bg-cover"></div>
            <div className="w-2/3 p-4 bg-HTpurple-900">
              <h1 className="text-white font-bold bg-HTpurple-900 text-2xl">
                {name}
              </h1>
              <p className="mt-2 bg-HTpurple-900 text-gray-250 text-sm ">
                {description === "" ? (
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto totam quis omnis molestias natus! Dolorum consequuntur
                    modi similique sit temporibus eveniet cupiditate neque
                    excepturi.
                  </>
                ) : (
                  description
                )}
              </p>

              <div className="flex item-center justify-between mr-20 my-3 bg-HTpurple-900">
                <div className="flex bg-HTpurple-900" id="profile-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffcc00"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="w-6 h-6 bg-HTpurple-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                  <h3 className="bg-HTpurple-900">{coins}</h3>
                </div>
                <AddtoCart
                  name={name}
                  id={id}
                  coins={coins}
                  countInStock={countInStock}
                  reloader={reloader}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else {
    return (
      <div class="flex justify-center items-center space-x-2 w-full  bg-HTpurple-900  rounded overflow-hidden shadow-lg">
        <Loader />
      </div>
    );
  }
};

export default Shopitem;
