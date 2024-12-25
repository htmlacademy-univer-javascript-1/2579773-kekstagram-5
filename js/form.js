import {isEscapeKey} from './util.js';
import {openSuccessModal, openErrorModal} from './message-modals.js';

const postForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(postForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

function validateComment (value) {
  return value.length <= 140;
}

pristine.addValidator(
  textDescription,
  validateComment,
  'Комментарий не должен превышать 140 символов.'
);

function validateHashtags (value) {
  const hashtags = value.trim().split(' ');

  for (let i = 0; i < hashtags.length; i++) {
    const tag = hashtags[i].toLowerCase();
    if (tag && !/^#[^\s#]+$/i.test(tag)) {
      pristine.errorText = 'Введён невалидный хэш-тег.';
      return false;
    }
  }
  return true;
}

function validateDublicates (value) {
  const hashtags = value.trim().split(' ');

  for (let i = 0; i < hashtags.length; i++) {
    const tag = hashtags[i].toLowerCase();
    if (hashtags.slice(0, i).includes(tag)) {
      pristine.errorText = 'Хэш-теги повторяются.';
      return false;
    }
  }
  return true;
}

pristine.addValidator(
  textHashtags,
  (value) => {
    if (!validateHashtags(value)) {
      return false;
    }
    if (!validateDublicates(value)) {
      return false;
    }

    return true;
  },
  () => pristine.errorText
);

postForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    openSuccessModal();
  } else {
    openErrorModal();
  }
});

function openModal () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', clickEscapeKeyModal);
}

function clickEscapeKeyModal (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    closeModal();
  }
}

function closeModal() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  postForm.reset();
}

function addUploadListeners () {
  imgUploadCancel.addEventListener('click', closeModal);

  imgUploadInput.addEventListener('change', openModal);
}

export {closeModal, clickEscapeKeyModal, addUploadListeners};
