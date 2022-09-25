import React from "react";
import Shopitem from "../miscellaneous/Shopitem";
import "../miscellaneous/Tabs";
import { styled } from "@stitches/react";
import { violet, mauve, blackA, green } from "@radix-ui/colors";
import { TabsTrigger } from "../miscellaneous/Tabs";
// import "../miscellaneous/Tabs";
import * as Tabs from "@radix-ui/react-tabs";
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
  if (props.navbar == "Shop")
    return (
      <>
        <div className="w-full h-max flex flex-col px-4 pt-2 justify-between ">
          <div
            id="profile-tab"
            className=" w-full h-max mb-2 bg-slate-500 flex rounded"
          >
            <div
              id="profile"
              className="flex justify-between items-center w-1/5 pl-3"
            >
              <img
                src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                alt=""
                className="h-20 w-20 rounded-full flex  justify-between items-center"
              />
            </div>

            <div id="name" className="flex flex-col align-middle w-2/5 p-3 ">
              <h1 className="text-2xl font-medium">Name</h1>
              <h3>name</h3>
            </div>
            <div id="name" className="flex flex-col align-middle w-1/5 p-3 ">
              <h1 className="text-2xl font-medium">Name</h1>
              <h3>name</h3>
            </div>
            <div
              id="profile-data"
              className="w-1/5 p-3 flex flex-col justify-around"
            >
              <div id="profile-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <div id="profile-icon">
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
                        <Shopitem />
                        <Shopitem />
                        <Shopitem />
                        <Shopitem />
                      </div>
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                      <div>asdasd</div>
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