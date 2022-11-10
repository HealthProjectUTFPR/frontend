/* eslint-disable no-param-reassign */
export default function onRequest({ app: { $axios } }) {
  $axios.onRequest((config) => {
    const token = localStorage.getItem('token');
    if (token && token != null && token !== '') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status, 10);
    if (code === 401 || code === 403) {
      localStorage.setItem('token', '');
    }
  });
}
