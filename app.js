const urlSite = window.location.href;
const imageItem = document.querySelector('.gallery-item__image').src;
const titleItem = document.querySelector('.product-intro__title-text').innerHTML;
const price = document.querySelector('.price__value').innerText;

let object = { url: urlSite, picture: imageItem, name: titleItem, price: price };

let newList = [];

const items = localStorage.getItem('items');
if (items) {
    newList = JSON.parse(items);
}
newList.push(object);
localStorage.setItem('items', JSON.stringify(newList));
