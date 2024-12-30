import {renderAllPosts} from './rendering.js';

const getData = (onSuccess, onError) => () =>
  fetch("https://29.javascript.htmlacademy.pro/kekstagram/data",
    {
      method: "GET",
      credentials: "same-origin",
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось загрузить данные.');
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });

const sendData = (body, onSuccess, onError) => fetch(
  'https://29.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }
    return onSuccess();
  })
  .catch(onError);

const loadPostsFromServer = getData((data) => {
  renderAllPosts(data);
}, console.error);

export {loadPostsFromServer, sendData};
