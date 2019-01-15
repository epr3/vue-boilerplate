import axios from 'axios';

export default (baseURL = 'https://jsonplaceholder.typicode.com') => {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  const getPosts = () => api.get('/posts');
  const getPost = id => api.get(`/posts/${id}`);

  return {
    getPosts,
    getPost
  };
};
