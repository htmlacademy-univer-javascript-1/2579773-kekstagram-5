import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = document.querySelector('.big-picture__cancel');

function openFullPicture (post){
  bigPicture.classList.remove('hidden');

  bigPictureImg.src = post.url;
  likesCount.textContent = post.likes;
  commentsCount.textContent = post.comment.length;
  socialCaption.textContent = post.description;

  socialComments.textContent = '';

  post.comment.forEach((comment) => {
    const commentListItem = document.createElement('li');
    commentListItem.classList.add('social__comment');
    const commentImg = document.createElement('img');
    commentImg.classList.add('social__picture');
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');

    commentImg.src = comment.avatar;
    commentImg.alt = comment.name;
    commentText.textContent = comment.message;
    commentImg.width = 35;
    commentImg.height = 35;

    socialComments.appendChild(commentListItem);
    commentListItem.appendChild(commentImg);
    commentListItem.appendChild(commentText);
  });

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

export {openFullPicture};
