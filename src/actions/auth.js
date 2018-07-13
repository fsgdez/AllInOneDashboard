import axios from './';

export const login = (body) => (dispatch) => {
  return axios
    .post('/api/auth/login', body)
    .then((data) => {
      console.log('data', data);
    })
    .catch((err) => {
      console.log('err', err);
    });
};
