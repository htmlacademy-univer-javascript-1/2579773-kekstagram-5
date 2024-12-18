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
let currentComments;

function createComment (comment) {
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
}

function showCommentsLoader (comments, post) {
  if (comments >= post.comment.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
}

socialComments.textContent = '';

function showComments (post) {
  if (post.comment.length === 0) {
    socialComments.textContent = '';
    socialCommentCount.textContent = '0 из 0 комментариев';
    commentsLoader.classList.add('hidden');
    return;
  }

  const moreComments = Math.min(currentComments + 5, post.comment.length);
  for (let i = currentComments; i < moreComments; i++) {
    createComment(post.comment[i]);
  }

  currentComments = moreComments;
  socialCommentCount.textContent = `${currentComments} из ${post.comment.length} комментариев`;

  showCommentsLoader(currentComments, post);
}

function openFullPicture (post){
  bigPicture.classList.remove('hidden');

  bigPictureImg.src = post.url;
  likesCount.textContent = post.likes;
  commentsCount.textContent = post.comment.length;
  socialCaption.textContent = post.description;

  currentComments = 0;
  showComments(post);
  commentsLoader.onclick = () => showComments(post);

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
