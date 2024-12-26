import {openFullPicture} from './full-screen.js';

function renderAllPosts (posts) {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const postElement = pictureTemplate.cloneNode(true);
    const postInfo = postElement.querySelector('.picture__img');
    const postLikes = postElement.querySelector('.picture__likes');
    const postComment = postElement.querySelector('.picture__comments');
    const postElementDiv = document.createElement('div');

    postInfo.src = post.url;
    postInfo.alt = post.description;
    postLikes.textContent = post.likes;
    postComment.textContent = post.comments.length;

    postElementDiv.appendChild(postElement);
    fragment.appendChild(postElementDiv);

    postElementDiv.addEventListener('click', () => {
      openFullPicture(post);
    });
  });
  pictureContainer.appendChild(fragment);
}

export {renderAllPosts};
