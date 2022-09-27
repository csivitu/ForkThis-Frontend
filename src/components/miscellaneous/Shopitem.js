import React from "react";

const Shopitem = () => {
  return (
    <>
      <div className="py-6">
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/3 bg-cover"></div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </p>

            <div className="flex item-center justify-between mt-3">
              <div className="flex " id="profile-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffcc00"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <h3>price</h3>
              </div>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopitem;
