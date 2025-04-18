const scenes = {
  start: {
    image: 'start.jpg',
    text: 'Youre at the LSC. Where do you want to go?',
    left: 'downstairs',
    right: 'foodCourt',
    choiceTextLeft: 'Go Downstairs',
    choiceTextRight: 'Head to Food Court'
  },
  downstairs: {
    image: 'downstairs.jpg',
    text: 'You walk downstairs. Only a couple spots are open.',
    left: 'eatAlone',
    right: 'findFriend',
    choiceTextLeft: 'Eat Alone',
    choiceTextRight: 'Find a Friend'
  },
  foodCourt: {
    image: 'foodcourt.jpg',
    text: 'Tons of options! Are you in a rush or want to chill?',
    left: 'grabNGo',
    right: 'chillLunch',
    choiceTextLeft: 'Grab and Go',
    choiceTextRight: 'Chill Lunch'
  },
  eatAlone: {
    image: 'solo.jpg',
    text: 'You find a quiet spot and enjoy your sandwich alone. Peaceful.',
    left: 'start',
    right: 'start',
    choiceTextLeft: 'Restart',
    choiceTextRight: 'Restart'
  },
  findFriend: {
    image: 'friends.jpg',
    text: 'You meet up with a friend and grab sushi together!',
    left: 'start',
    right: 'start',
    choiceTextLeft: 'Restart',
    choiceTextRight: 'Restart'
  },
  grabNGo: {
    image: 'takeout.jpg',
    text: 'You grab a burrito and head to class. Quick and satisfying!',
    left: 'start',
    right: 'start',
    choiceTextLeft: 'Restart',
    choiceTextRight: 'Restart'
  },
  chillLunch: {
    image: 'piano.jpg',
    text: 'You sit near the piano lounge with a bowl of pho. Good vibes.',
    left: 'start',
    right: 'start',
    choiceTextLeft: 'Restart',
    choiceTextRight: 'Restart'
  }
};

let currentScene = 'start';

function updateScene() {
  const scene = scenes[currentScene];
  document.getElementById('story-image').src = scene.image;
  document.getElementById('story-text').innerText = scene.text;
  document.getElementById('left-button').innerText = scene.choiceTextLeft;
  document.getElementById('right-button').innerText = scene.choiceTextRight;
}

function goLeft() {
  currentScene = scenes[currentScene].left;
  updateScene();
}

function goRight() {
  currentScene = scenes[currentScene].right;
  updateScene();
}

updateScene();
