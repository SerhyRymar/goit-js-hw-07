import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї
const galleryContainer = document.querySelector(".gallery");

function craetePictureCardsMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
                <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
</div>`;
		})
		.join(" ");
}

const pictureGallery = craetePictureCardsMarkup(galleryItems);
galleryContainer.innerHTML = pictureGallery;

// 2.Підключення скрипту і стилів бібліотеки SimpleLightbox

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
	/* options */
});