import { getTokenConfig } from '../util/localStorageUtil';
import instance from './instance';

export const getArticles = async offset => {
  const response = await instance.get('/article', {
    params: {
      offset: offset
    }
  });
  return response.data;
}

export const getArticlesByAuthor = async (username, offset) => {
  const response = await instance.get('/article', {
    params: {
      author: username,
      offset: offset
    }
  });
  return response.data;
}

export const getArticle = async slug => {
  const response = await instance.get(`/article/${slug}`, getTokenConfig());
  return response.data;
}

export const postArticle = async article => {
  const response = await instance.post('/article', article, getTokenConfig());
  return response.data;
}

export const deleteArticle = async slug => {
  const response = await instance.delete(`/article/${slug}`, getTokenConfig());
  return response.data;
}

export const getComments = async slug => {
  const response = await instance.get(`/article/${slug}/comments`);
  return response.data;
}

export const postComment = async (slug, comment) => {
  const response = await instance.post(`/article/${slug}/comments`, comment, getTokenConfig());
  return response.data;
} 

export const deleteComment = async (slug, commentId) => {
  const response = await instance.delete(`/article/${slug}/comments/${commentId}`, getTokenConfig());
  return response.data;
}
