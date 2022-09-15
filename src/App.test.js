import React from 'react';
import { shopReducer } from './redux/shoppingReducer';
import { legacy_createStore as createStore } from 'redux';
import { INITIAL_STATE as shoppingState } from './redux/shoppingReducer';
import App from './App';
import Products  from './pages/Products';
import Item  from './component/Item';
import Checkout from './pages/Checkout';
import {render, screen, fireEvent} from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';




describe('Tests for Products page ', () => {
  test ('Test if Product page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>) ;

    expect(screen.getByTestId('products-header'))
    .toHaveTextContent(/Shopping cart Project/);

    

    dummyItems.forEach( (item) => {
      expect(screen.queryByTestId(`pid${item.id}`));
      
      expect(screen.queryByTestId(`name${item.id}`))
      .toHaveTextContent(`${item.name}`);

      expect(screen.queryByTestId(`min${item.id}`))
      .toHaveTextContent(`${item.minQuantity}`);

      expect(screen.queryByTestId(`value${item.id}`))
      .toHaveTextContent(`INR ${item.price}`);

      expect(screen.queryByTestId(`qty${item.id}`))
      .toHaveTextContent(/0/);

      expect(screen.queryByTestId(`cartQty`))
      .toHaveTextContent(/0/);

     

    })

    const addBtn = screen.queryByTestId(`add1`);
    fireEvent.click(addBtn);
    expect(screen.queryByTestId(`qty1`)).toHaveTextContent(/1/);
    expect(screen.queryByTestId(`cartQty`))
      .toHaveTextContent(/0/);

      fireEvent.click(addBtn);
      expect(screen.queryByTestId(`qty1`)).toHaveTextContent(/2/);
    expect(screen.queryByTestId(`cartQty`))
      .toHaveTextContent(/0/);

      fireEvent.click(addBtn);
      expect(screen.queryByTestId(`qty1`)).toHaveTextContent(/3/);
    expect(screen.queryByTestId(`cartQty`))
      .toHaveTextContent(/3/);

      fireEvent.click(addBtn);
      expect(screen.queryByTestId(`qty1`)).toHaveTextContent(/4/);
    expect(screen.queryByTestId(`cartQty`))
      .toHaveTextContent(/4/);

      const remBtn = screen.queryByTestId(`rem1`);
      fireEvent.click(remBtn);
      expect(screen.queryByTestId(`qty1`)).toHaveTextContent(/3/);
      expect(screen.queryByTestId(`cartQty`))
        .toHaveTextContent(/3/);

        fireEvent.click(remBtn);
        expect(screen.queryByTestId(`qty1`)).toHaveTextContent(/0/);
        expect(screen.queryByTestId(`cartQty`))
          .toHaveTextContent(/0/);

});

});

// describe('Test Add to cart', () => {
//   test('Add to cart test', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

describe('Checkout page ', () => {
  test('tests checkout page loading from local storage', async () => {
    window.history.pushState({}, '', '/checkout')
  
  
    setLocalStorage('appState',state);

  render(
    <Provider store={store} >
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>) ; 

expect(screen.getByTestId('products-header'))
.toHaveTextContent(/Shopping cart Project/);

state.cart.forEach( (item) => {
  const cost = item.price * item.qty;
  //console.log(item.price)
  expect(screen.queryByTestId(`pid${item.id}`));
  
  expect(screen.queryByTestId(`name${item.id}`))
  .toHaveTextContent(`${item.name}`);

  expect(screen.queryByTestId(`qty${item.id}`))
  .toHaveTextContent(`${item.qty}`);

  expect(screen.queryByTestId(`price${item.id}`))
  .toHaveTextContent(`${item.price}`);

  expect(screen.queryByTestId(`cost${item.id}`))
  .toHaveTextContent(`Cost: ${cost}`);

  
})

const totalVal = state.cart.reduce((acc,it) => acc + (it.qty * it.price),0);
expect(screen.queryByTestId(`total`))
  .toHaveTextContent(`Total Amount: INR ${totalVal}`);



});

});

const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });



const state = {"cart":[
  {
    "image": "black.jpeg",
    "name": "Black",
    "price": 250,
    "minQty": 3,
    "curr": "INR",
    "qty": 4,
    "id": 1
  },
  {
    "image": "blue.jpeg",
    "name": "Blue",
    "price": 350,
    "minQty": 3,
    "curr": "INR",
    "qty": 4,
    "id": 2
  },
  {
    "image": "brown.jpeg",
    "name": "Brown",
    "price": 350,
    "minQty": 2,
    "curr": "INR",
    "qty": 4,
    "id": 3
  }
]};

const dummyItems = [{ "id": 1, "imageName": "black.jpeg", "name": "Black", "price": 250, "currency": "INR", "minQuantity": 3 }, { "id": 2, "imageName": "blue.jpeg", "name": "Blue", "price": 350, "currency": "INR", "minQuantity": 3 }, { "id": 3, "imageName": "brown.jpeg", "name": "Brown", "price": 350, "currency": "INR", "minQuantity": 2 }, { "id": 4, "imageName": "green.jpeg", "name": "Green", "price": 500, "currency": "INR", "minQuantity": 2 }, { "id": 5, "imageName": "orange.jpeg", "name": "Orange", "price": 250, "currency": "INR", "minQuantity": 1 }, { "id": 6, "imageName": "yellow.jpeg", "name": "Yellow", "price": 350, "currency": "INR", "minQuantity": 1 }]; 