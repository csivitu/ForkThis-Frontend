import React from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, red, mauve, green } from "@radix-ui/colors";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { useState } from "react";
import purchaseHandler from "../../controllers/purchaseHandler";
import { ToastContainer } from "react-toastify";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "500px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 17,
  fontWeight: 500,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

// Your app...
const Flex = styled("div", { display: "flex" });

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
      red: {
        backgroundColor: red.red4,
        color: red.red11,

        "&:hover": { backgroundColor: red.red5 },
        "&:focus": { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        "&:hover": { backgroundColor: mauve.mauve5 },
        "&:focus": { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
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
    variant: "green",
  },
});

const submitHandler= (id, quantity, size) => async()=>{
  const formData = {
    item:id,
    count:quantity*1,
    size
  }
  console.log(formData)
  await purchaseHandler(formData);
}

// const acceptbutton = (props) => {

//   await acceptChallengeHandler(formdata);
// };

const AlertDialogDemo = ({id, name, coins, countInStock})=>{
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState('')

  const quantityarr = [];
  for (var i = 1; i <= countInStock; i++) {
    quantityarr.push(i);
    if (i === 10) break;
  }

  return (
  <AlertDialog>
    <ToastContainer/>
    <AlertDialogTrigger asChild>
      <Button variant="mauve">Order Item</Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="bg-white">
      {/* <AlertDialogTitle>
        <div className="bg-white">Do you want to order this item ?</div>
      </AlertDialogTitle> */}

        <AlertDialogDescription>
          <div>
            <div>Item : {name}</div>
            <div>
              {countInStock > 0 ? (
                <>
                  Quantity:{" "}
                  <select
                    as="select"
                    value={quantity}
                    onChange={(element) => setQuantity(element.target.value)}
                  >
                    {quantityarr.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <>Out of Stock</>
              )}
            </div>
            <div>
              {countInStock > 0 ? <>Total Coins: {quantity * coins} </> : ""}
            </div>
          </div>
          <div>
            {countInStock>0?<>Quantity:<select onchange={(element)=>setQuantity(element.target.value)}>
                                        { 
                                            quantityarr.map((x)=>(
                                                <option key={x} value={x}>
                                                    {x}
                                                </option>
                                            ))
                                            
                                        }
              </select></>:<>
                  Out of Stock
              </>}
          </div>
          {countInStock>0?<>
            {name==='T-Shirts'?<>
                <select className="" onchange={(element)=>setSize(element.target.value)}>
                  <option value="">Size</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
            </>:''}
          </>:''}
          <div>
            {countInStock>0?
              <>Total Coins: {quantity*coins} </>:""
            }
            
          </div>
        <div className="bg-white mt-2"><b> Once an order is placed , it cannot be cancelled.</b>
        </div>
      </AlertDialogDescription>
      <Flex
        css={{
          backgroundColor: "white",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        {countInStock>0?<AlertDialogAction asChild>
            <Button variant="green" onClick={submitHandler(id, quantity, size)}>Confirm Order</Button>
          </AlertDialogAction>:""}
        <div className="bg-white">
          <AlertDialogCancel asChild>
            <Button variant="red" css={{ marginLeft: 25 }}>
              Cancel
            </Button>
          </AlertDialogCancel>
        </div>
      </Flex>
    </AlertDialogContent>
  </AlertDialog>
)};

export default AlertDialogDemo;
