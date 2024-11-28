const NAMES = [
  "Анастасия",
  "Илья",
  "Ксения",
  "Сергей",
  "Анна",
  "Илья",
  "Никита",
  "Алина",
  "Саша",
  "Мария",
];

const MESSAGE = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const DESCRIPTION = [
  "Какое сегодня чудесное утро!",
  "Отдыхаю с друзьями.",
  "Всем доброе утро!",
  "Оцените от 1 до 10",
  "Сегодня на рабочем вайбе",
  "Эстетика",
  "На прогулке",
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
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

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comment: createCommets(),
});

const allPosts = [];
for (let index = 1; index <= 25; index++) {
  allPosts.push(createPost(index));
}

console.log(allPosts);
