import {getRandomArrayElement, getRandomInteger} from './util.js';
import {NAMES, MESSAGE, DESCRIPTION} from './const.js';

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from({length:getRandomInteger(1,2)}, () => getRandomArrayElement(MESSAGE)).join("\n"),
  name: getRandomArrayElement(NAMES),
});

const createCommets = () => {
  const commetsAmount = getRandomInteger(0, 31);
  const comments = [];
  for (let i = 0; i < commetsAmount; i++) {
    comments.push(createComment(i));
  }
  return comments;
};

const createPost = (element, index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comment: createCommets(),
});

export {createPost};
