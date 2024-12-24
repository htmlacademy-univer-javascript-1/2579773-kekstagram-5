import {isEscapeKey} from './util.js';
import {closeModal, clickEscapeKeyModal} from './form.js';

const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;

function openSuccessModal () {
  const successElement = successTemplate.cloneNode(true).querySelector('.success');
  const successInner = successElement.querySelector('.success__inner');
  const successButton = successElement.querySelector('.success__button');

  document.body.append(successElement);

  successButton.addEventListener('click', closeSuccessModal);
  document.addEventListener('keydown', clickEscapeKeySuccess);
  document.addEventListener('click', clickOutside);

  function closeSuccessModal() {
    successElement.remove();
    document.removeEventListener('keydown', clickEscapeKeySuccess);
    document.removeEventListener('click', clickOutside);
    closeModal();
  }

  function clickEscapeKeySuccess(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
      closeSuccessModal();
    }
  }

  function clickOutside(evt) {
    if (!successInner.contains(evt.target)) {
      closeSuccessModal();
    }
  }
}

function openErrorModal () {
  const errorElement = errorTemplate.cloneNode(true).querySelector('.error');
  const errorInner = errorElement.querySelector('.error__inner');
  const errorButton = errorElement.querySelector('.error__button');

  document.body.append(errorElement);
  document.removeEventListener('keydown', clickEscapeKeyModal);

  errorButton.addEventListener('click', closeErrorModal);
  document.addEventListener('keydown', clickEscapeKeyError);
  document.addEventListener('click', clickOutside);

  function closeErrorModal() {
    errorElement.remove();
    document.removeEventListener('keydown', clickEscapeKeyError);
    document.removeEventListener('click', clickOutside);
    document.addEventListener('keydown', clickEscapeKeyModal);
  }

  function clickEscapeKeyError(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
      closeErrorModal();
    }
  }

  function clickOutside(evt) {
    if (!errorInner.contains(evt.target)) {
      closeErrorModal();
    }
  }
}

export {openSuccessModal, openErrorModal};
