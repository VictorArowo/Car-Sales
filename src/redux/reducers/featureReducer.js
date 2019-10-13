import { ADD_FEATURE, REMOVE_FEATURE } from '../types';

const initialCarState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const featureReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      if (
        state.car.features.findIndex(item => item.id === action.payload.id) ===
        -1
      ) {
        const featureToAdd = state.store.find(
          item => item.id === action.payload.id
        );
        return {
          ...state,
          car: {
            ...state.car,
            features: [...state.car.features, featureToAdd],
            price: state.car.price + featureToAdd.price
          }
        };
      }
      return {
        ...state
      };

    case REMOVE_FEATURE:
      const featureToRemove = state.store.find(
        item => item.id === action.payload.id
      );
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            item => item.id !== action.payload.id
          ),
          price: state.car.price - featureToRemove.price
        }
      };

    default:
      return state;
  }
};
