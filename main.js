const likesBtn = document.querySelector(".likes__btn");
const likesCounter = document.querySelector(".likes__counter");
const img = document.querySelector(".photo__img");
const author = document.querySelector('.photo__user span');
let counter = 0;

const increaseLikes = () => {
  counter += 1;
  likesCounter.innerHTML = counter;
}

likesBtn.addEventListener("click", increaseLikes);

const url = "https://api.unsplash.com/photos/?client_id=AZ6UxQxiwcIZDhQW0ymIUyBWvLWo8HwEd1iDRrud4cs";
let data = [];

async function getData() {
  const response = await fetch(url);
  return await response.json();
}
getData().then((responseData) => {
  responseData.forEach(el => {
    img.src = el.urls.regular;
    author.innerHTML = el.user.name;
  });
});
