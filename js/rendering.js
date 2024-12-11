import {createPost} from './data.js';
import {POST_AMOUNT} from './const.js';

const allPosts = Array.from({length:POST_AMOUNT},createPost);

function renderAllPosts () {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  allPosts.forEach((post) => {
    const postElement = pictureTemplate.cloneNode(true);
    const postInfo = postElement.querySelector('.picture__img');
    const postLikes = postElement.querySelector('.picture__likes');
    const postComment = postElement.querySelector('.picture__comments');

    postInfo.src = post.url;
    postInfo.alt = post.description;
    postLikes.textContent = post.likes;
    postComment.textContent = post.comment.length;

    fragment.appendChild(postElement);
  });
  pictureContainer.appendChild(fragment);
}

export {renderAllPosts};


