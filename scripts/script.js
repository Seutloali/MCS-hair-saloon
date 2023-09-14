'use strict';

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownEl = document.querySelector('.dropdown-contents');

const menuBtn = document.querySelector('.menu-icon');
const menuEl = document.querySelector('.menu-contents');
const overlayEl = document.querySelector('.overlay');

const dropdownList = document.querySelectorAll('.extended');

console.log(dropdownList);

const displayDropdown = (element1, element2) => {
  element1.classList.toggle('hidden');
  element2.classList.add('hidden');

  if (
    element1.classList.contains('hidden') &&
    element2.classList.contains('hidden')
  ) {
    overlayEl.classList.add('hidden');
  } else {
    overlayEl.classList.remove('hidden');
  }
};

dropdownBtn.addEventListener('click', () => {
  displayDropdown(dropdownEl, menuEl);
});

menuBtn.addEventListener('click', () => {
  displayDropdown(menuEl, dropdownEl);
});

overlayEl.addEventListener('click', () => {
  dropdownEl.classList.add('hidden');
  menuEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
});

dropdownList.forEach((dropdownSec) => {
  dropdownSec.addEventListener('click', () => {
    dropdownEl.classList.add('hidden');
    menuEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
  });
});

//bookings details

const nameEl = document.querySelector('.name-input');
const dateEl = document.querySelector('.date-input');
const hairstyleEl = document.getElementById('hairstyle');

const bookBtnEl = document.querySelector('.book-seat');

const responseEl = document.querySelector('.display-response');
const priceFieldEl = document.querySelector('.price-field');
const totalExpenseEl = document.querySelector('.netExp');

bookBtnEl.addEventListener('click', () => {
  bookBtnEl.classList.add('active');

  responseEl.innerHTML = `Hi ${nameEl.value}, your appointment was reserved for ${dateEl.value}`;

  priceFieldEl.classList.remove('hidden');

  let hairstylePrice = hairstyleEl.value * 100;

  totalExpenseEl.innerHTML = `${Number(hairstylePrice / 100).toFixed(2)}`;
});

//subscribe button section

const subscribeMailEl = document.querySelector('.subscription-mail');
const subscribeBtnEl = document.querySelector('.subscribe');

subscribeBtnEl.addEventListener('click', () => {
  subscribeBtnEl.innerHTML = 'Subscribed ✓';
  subscribeBtnEl.classList.add('subscribed');
});
