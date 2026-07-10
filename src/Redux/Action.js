export const myAction = (payload) => {
  return {
    type: "Add",
    payload,
  };
};

export const incrementquantity = (index) => {
  return {
    type: "incqty",
    index,
  };
};

export const decrementquantity = (index) => {
  return {
    type: "decqty",
    index,
  };
};

export const removefromcart = (index) => {
  return {
    type: "remove",
    index,
  };
};

export const clearcart = () => {
  return {
    type: "clear",
  };
};