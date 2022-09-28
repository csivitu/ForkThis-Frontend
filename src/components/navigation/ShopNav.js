import React from "react";
import Shopitem from "../miscellaneous/Shopitem";
import "../miscellaneous/Tabs";
import { styled } from "@stitches/react";
import { violet, mauve, blackA, green } from "@radix-ui/colors";
import { TabsTrigger } from "../miscellaneous/Tabs";
// import "../miscellaneous/Tabs";
import { useEffect } from "react";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import profileHandler from "../../controllers/profileHandler";
import itemsHandler from "../../controllers/itemsHandler";
import purchaseHandler from "../../controllers/purchaseHandler";
import Purchaseitem from "../miscellaneous/Purchaseitem";

const Box = styled("div", { display: "flex", flexDirection: "row" });
const Flex = styled("div", { display: "flex", flexDirection: "row" });

const Text = styled("div", {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});
const Fieldset = styled("fieldset", {
  all: "unset",
  marginBottom: 15,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
});

const Label = styled("label", {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: violet.violet12,
  display: "block",
});

const Input = styled("input", {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});
const ShopNav = (props) => {
  const [profile, setProfile] = useState([]);
  const [items, setItems] = useState([]);
  const [purchases, setPurchases] = useState([])
  const [reload, setReload] = useState("")
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await profileHandler();
      setProfile(res);
    };
    const getItems = async () => {
      const res = await itemsHandler();
      setItems(res);
    };
    const getPurchases = async () => {
      const res = await purchaseHandler();
      setPurchases(res);
    };
    fetchProfile();
    getItems();
    getPurchases();
  }, [reload]);
  if (props.navbar == "Shop")
    return (
      <>
        <div className="w-full text-gray-250 h-max flex flex-col px-4 pt-2 justify-between ">
          <div
            id="profile-tab"
            className=" w-full h-max mb-2 bg-slate-500 flex rounded "
          >
            <div
              id="profile"
              className="flex justify-between items-center w-1/5 pl-3 "
            >
              <img
                src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                alt=""
                className="h-20 w-20 rounded-full flex  justify-between items-center"
              />
            </div>

            <div id="name" className="flex flex-col align-middle w-2/5 p-3 ">
              <h1 className="text-2xl font-medium">{profile.name}</h1>
              <h3>@{profile.username}</h3>
            </div>
            <div id="name" className="flex flex-col align-middle w-1/5 p-3 ">
              <h1 className="text-2xl font-medium">Score</h1>
              <h3>{profile.score}</h3>
            </div>
            <div
              id="profile-data"
              className="w-1/5 p-3 flex flex-col justify-around"
            >
              <h1 className="text-2xl font-medium pl-1">Coins</h1>
              <div className="flex " id="profile-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffcc00"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <h3>{profile.coins}</h3>
              </div>
            </div>
          </div>
          <div
            id="Nav-items"
            className="flex flex-col  justify-around items-center w-full"
          >
            <div className="w-full  h-full flex flex-wrap justify-around items-center pt-1">
              {/* Import book mark */}

              <div className="w-full">
                <Tabs.Root defaultValue="tab1">
                  <Tabs.List>
                    <div className="flex">
                      <TabsTrigger value="tab1">Items List</TabsTrigger>
                      <TabsTrigger value="tab2">Orders Placed</TabsTrigger>
                    </div>
                  </Tabs.List>
                  <div className="my-3">
                    <Tabs.Content value="tab1">
                      <div className="flex flex-wrap justify-around items-center gap-y-3 gap-x-1">
                        {items.map((el) => {
                          return (
                            <Shopitem
                              id={el._id}
                              name={el.name}
                              description={el.description}
                              key={el.id}
                              countInStock={el.countInStock}
                              coins={el.coins}
                              reloader={setReload}
                            />
                          );
                        })}
                      </div>
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                    <div className="flex flex-wrap justify-around items-center gap-y-3 gap-x-1">
                        {purchases.map((el) => {
                          return (
                            <Purchaseitem
                              name={el.item.name}
                              purchasedAt={el.purchasedAt}
                              key={el.id}
                              quantity={el.count}
                              coins={el.item.coins}
                        
                            />
                          );
                        })}
                      </div>
                    </Tabs.Content>
                  </div>
                </Tabs.Root>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ShopNav;
