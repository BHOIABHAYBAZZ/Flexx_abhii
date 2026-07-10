const arr = [];

export const myReducer = (state = arr, action) => {
  switch (action.type) {
    case "Add":
      const exist = state.find((item) => item.id === action.payload.id);

      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];

    case "incqty":
      return state.map((item, index) =>
        index === action.index
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "decqty":
      return state.map((item, index) =>
        index === action.index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );

    case "remove":
      return state.filter((_, index) => index !== action.index);

    case "clear":
      return [];

    default:
      return state;
  }
};
