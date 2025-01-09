const axios = require('axios');

export const axiosInstance = axios.create({
  baseURL: '/'
});

const thenRederSnackbar = (showSnack, res) => {
  // if (showSnack) store.dispatch(commonSnackbar(res.data));
  return res;
};

const catchRenderSnackbar = err => {
  // if (
  //   (err && err.code === 'ERR_NETWORK') ||
  //   (err && err.response.data === 'Please Authenticate')
  // ) {
  //   store.dispatch(commonSnackbar({ message: err.message, status: 500 }));
  // }
  // if (err && err.response) {
  //   store.dispatch(commonSnackbar(err.response.data));
  // }
  // store.dispatch(commonLoader(false));
  throw new Error(err);
};

export const getCall = async ({
  instance = axiosInstance,
  url,
  Autorization,
  headers
}) => {
  return instance
    .get(url, {
      headers: {
        Autorization,
        ...headers
      }
    })
    .then(res => res)
    .catch(err => catchRenderSnackbar(err));
};

export const postCall = async ({
  instance = axiosInstance,
  url,
  body,
  Autorization,
  showSnack = true,
  headers
}) => {
  return instance
    .post(url, body, {
      headers: {
        Autorization,
        ...headers
      }
    })
    .then(res => thenRederSnackbar(showSnack, res))
    .catch(err => catchRenderSnackbar(err));
};

export default axiosInstance;
