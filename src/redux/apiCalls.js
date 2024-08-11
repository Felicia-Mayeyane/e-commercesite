import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "./userRedux";

import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";

import { publicRequest, userRequest } from "../requestMethods";


export const login = async (dispatch, userCredentials) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", userCredentials); // Use publicRequest
    dispatch(loginSuccess(res.data));
    // Save token to local storage
    localStorage.setItem('persist:root', JSON.stringify({
      user: JSON.stringify({
        currentUser: res.data,
      }),
      isFetching: false,
      error: false
    }));
  } catch (err) {
    dispatch(loginFailure());
    throw err; // Re-throw the error to handle it in the component
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await userRequest.get("/products"); // Use userRequest
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`); // Use userRequest
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (dispatch, id, updatedProduct) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, updatedProduct); // Use userRequest
    dispatch(updateProductSuccess({ id, product: res.data }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (dispatch, newProduct) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products", newProduct); // Use userRequest
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
