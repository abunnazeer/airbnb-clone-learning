'use strict';
const accountIcon = document.querySelector('.account-icon');
const accountToggle = document.querySelector('.drop-hide');
const showMenu = document.querySelector('.menu');
const hideMenu = document.querySelector('.second-menu');
const showhide = document.querySelector('.hide-menu');
// scroll variables
const scrollContainer = document.querySelector('.cat');
const btnLeft = document.querySelector('.cat-scroll-left');
const btnRight = document.querySelector('.cat-scroll-right');

const allLocaton = [
  {
    imagePath: 'assets/img/image.png',
    locationName: 'Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image.png',
      'assets/img/image.png',
      'assets/img/image.png',
    ],
    locationName: 'Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image.png',
      'assets/img/image.png',
      'assets/img/image.png',
    ],
    locationName: 'Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image.png',
      'assets/img/image.png',
      'assets/img/image.png',
    ],
    locationName: 'Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
];
accountIcon.addEventListener('click', () => {
  console.log(accountToggle.classList.toggle('drop-hide'));
});

hideMenu.addEventListener('click', function () {
  showMenu.classList.remove('hide-menu');
  hideMenu.classList.add('hide-menu');
});

btnLeft.addEventListener('click', function () {
  scrollContainer.scrollBy(-500, 0);
});

btnRight.addEventListener('click', function () {
  scrollContainer.scrollBy(500, 50);
});
