import { createContext, useReducer, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function reducer(crrstate, action) {
  if (action.type === "ADD CART") {
    return [
      ...crrstate,
      {
        name: action.payload.name,
        image: action.payload.image,
        type: action.payload.type,
        price: Number(action.payload.price),
        id: crrstate.length + 1,
      },
    ];
  } else if (action.type === "DELETE DATA") {
    return [...crrstate.filter((item) => item.id !== action.payload.id)];
  }
  return crrstate;
}

export const Store = createContext([]);

function Data(props) {
  let [data, dispatchdata] = useReducer(reducer, []);
  let [total, setTotal] = useState(0);
  let [productQuantity, setProductQuantity] = useState(1);
 
  function sendcart(image, name, type, price) {
    let sidecart = {
      type: "ADD CART",
      payload: {
        image: image,
        name: name,
        type: type,
        price: price,
      },
    };

    setTotal((crrtotal) => crrtotal + price);
    dispatchdata(sidecart);
    toast('Item Added Successfully to cart', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function deletecartitem(id) {
    const itemToDelete = data.find(item => item.id === id);

    if (itemToDelete) {
      setTotal((crrtotal) => crrtotal - itemToDelete.price);  

      let deleteitem = {
        type: "DELETE DATA",
        payload: { id },
      };

      dispatchdata(deleteitem);
      toast('Item Deleted Successfully from cart', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  function decrement() {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  }

  function increment() {
    setProductQuantity(productQuantity + 1);
  }
 
  return (
    <Store.Provider
      value={{
        sendcart,
        data,
        deletecartitem,
        total,
        productQuantity,
        setProductQuantity,
        decrement,
        increment,
      }}
    >
      <ToastContainer />
      {props.children}
    </Store.Provider>
  );
}

export default Data;
