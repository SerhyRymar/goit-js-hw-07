import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї
const galleryContainer = document.querySelector(".gallery");
const pictureGallery = craetePictureCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", pictureGallery);

function craetePictureCardsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
</div>`;
    }).join(' ');

}

// const galleryLink = document.querySelector(".gallery__link");

// galleryLink.addEventListener('click', function (e) {
//     e.preventDefault();
// });

// 2.Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContainer.addEventListener("click",  clickOnGalleryContainer);

function clickOnGalleryContainer(evt) {
    if (!evt.target.classList.contains("gallery__image")) {
			return;
		}
    console.log(evt.target);
}

// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr 
// і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

