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
const cLeft = document.querySelectorAll('.c-left');
const cRight = document.querySelectorAll('.c-right');
const imgPath = document.querySelectorAll('#imgpath');
const defaultItm = document.querySelectorAll('.img-style');

const allLocaton = [
  {
    imagePath: [
      'assets/img/image1.png',
      'assets/img/image2.png',
      'assets/img/image3.png',
    ],
    locationName: '1Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image4.png',
      'assets/img/image5.png',
      'assets/img/image6.png',
    ],
    locationName: '2Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image7.png',
      'assets/img/image8.png',
      'assets/img/image9.png',
    ],
    locationName: '3Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image8.png',
      'assets/img/image9.png',
      'assets/img/image7.png',
    ],
    locationName: '4Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },

  {
    imagePath: [
      'assets/img/image8.png',
      'assets/img/image9.png',
      'assets/img/image7.png',
    ],
    locationName: '5Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image8.png',
      'assets/img/image9.png',
      'assets/img/image7.png',
    ],
    locationName: '6Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image8.png',
      'assets/img/image9.png',
      'assets/img/image7.png',
    ],
    locationName: '7Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
  {
    imagePath: [
      'assets/img/image8.png',
      'assets/img/image9.png',
      'assets/img/image7.png',
    ],
    locationName: '8Ponta Delgada Portugal',
    rating: 4.59,
    desc: '4,56a kilomiters aways',
    Date: 'jul 21-21',
    price: '$295',
    days: 'night',
  },
];

// this toggle account btn
accountIcon.addEventListener('click', () => {
  console.log(accountToggle.classList.toggle('drop-hide'));
});

hideMenu.addEventListener('click', function () {
  showMenu.classList.remove('hide-menu');
  hideMenu.classList.add('hide-menu');
});
// this navigate the category scroll
btnLeft.addEventListener('click', function () {
  scrollContainer.scrollBy(-500, 0);
});

btnRight.addEventListener('click', function () {
  scrollContainer.scrollBy(500, 50);
});

//this load the images when the windows loaded
window.addEventListener('DOMContentLoaded', function () {
  // scrollControl();
  defaultItm.forEach(function (value, index) {
    value.src = allLocaton[index].imagePath[0];
  });
});

let imageIndex = 0;
cLeft.forEach(function (leftKey, i) {
  leftKey.addEventListener('click', function () {
    const itemLenth = allLocaton[0].imagePath.length;
    imageIndex--;

    if (imageIndex < 0) {
      imageIndex = itemLenth - 1;
    }
    imgPath.forEach(function (imgsrc, indexNumber) {
      if (i === indexNumber) {
        imgsrc.src = allLocaton[indexNumber].imagePath[imageIndex];
      }
    });
  });
});

cRight.forEach(function (rightKey, i) {
  rightKey.addEventListener('click', function () {
    const itemLenth = allLocaton[0].imagePath.length;
    imageIndex++;

    if (imageIndex > itemLenth - 1) {
      imageIndex = 0;
    }
    imgPath.forEach(function (imgSrc, indexNumber) {
      if (i === indexNumber) {
        imgSrc.src = allLocaton[indexNumber].imagePath[imageIndex];
      }
    });
  });
});
