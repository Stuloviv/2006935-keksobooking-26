import{createAdMarker} from './map.js';
import{showAlert} from './util.js';

function getData (onSuccess, onError) {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
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
}


function sendData (onSuccess, onFail, body) {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}


getData((data) => {
  createAdMarker(data);
},
(error) => {
  showAlert(`При загрузке возникла ошибка ${error}. Проверьте соединение и перезагрузите страницу.`);
}
);


export {sendData};
