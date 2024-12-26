const getData = (onSuccess, onError) => () =>
  fetch("https://29.javascript.htmlacademy.pro/kekstagram/data",
    {
      method: "GET",
      credentials: "same-origin",
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });

const sendData = (body) => fetch(
  'https://29.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }
  })
  .catch(() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });

export {getData, sendData};
