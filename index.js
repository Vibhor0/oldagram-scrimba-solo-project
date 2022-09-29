const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let likesCountOne = 0;
let likesCountTwo = 0;
let likesCountThree = 0;

const postPicOne = document.querySelector(".post-pic-one");
const likeIconOne = document.querySelector(".like-icon-one");
const postPicTwo = document.querySelector(".post-pic-two");
const likeIconTwo = document.querySelector(".like-icon-two");
const postPicThree = document.querySelector(".post-pic-three");
const likeIconThree = document.querySelector(".like-icon-three");
const likesCountOneEl = document.querySelector(".likes-count-one");
const likesCountTwoEl = document.querySelector(".likes-count-two");
const likesCountThreeEl = document.querySelector(".likes-count-three");

// localStorage.clear();

if(localStorage.getItem("Likes for Post1")) {
    likesCountOne = localStorage.getItem("Likes for Post1");
    likesCountOne = +likesCountOne;
}

if(localStorage.getItem("Likes for Post2")) {
    likesCountTwo = localStorage.getItem("Likes for Post2");
    likesCountTwo = +likesCountTwo;
}

if(localStorage.getItem("Likes for Post3")) {
    likesCountThree = localStorage.getItem("Likes for Post3");
    likesCountThree = +likesCountThree;
}
setLikes(likesCountThree, likesCountThreeEl);

setLikes(likesCountTwo, likesCountTwoEl);

setLikes(likesCountOne, likesCountOneEl);

function setLikes(num, numEl) {
    if(num) {
        numEl.textContent = `${num} likes`;
    } else {
        numEl.textContent = `${num} like`;
    }
}

function save(likes, postCount) {
    const s = "Likes for Post" + postCount;
    localStorage.setItem(s, likes.toString());
}

postPicOne.addEventListener("dblclick", function() {
    likesCountOne += 1;
    likesCountOneEl.textContent = `${likesCountOne} likes`;
    save(likesCountOne, 1);
});
likeIconOne.addEventListener("click", function() {
    likesCountOne += 1;
    likesCountOneEl.textContent = `${likesCountOne} likes`;
    save(likesCountOne, 1);
});
postPicTwo.addEventListener("dblclick", function() {
    likesCountTwo += 1;
    likesCountTwoEl.textContent = `${likesCountTwo} likes`;
    save(likesCountTwo, 2);
});
likeIconTwo.addEventListener("click", function() {
    likesCountTwo += 1;
    likesCountTwoEl.textContent = `${likesCountTwo} likes`;
    save(likesCountTwo, 2);
});
postPicThree.addEventListener("dblclick", function() {
    likesCountThree += 1;
    likesCountThreeEl.textContent = `${likesCountThree} likes`;
    save(likesCountThree, 3);
});
likeIconThree.addEventListener("click", function() {
    likesCountThree += 1;
    likesCountThreeEl.textContent = `${likesCountThree} likes`;
    save(likesCountThree, 3);
});
