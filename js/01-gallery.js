import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї
const galleryContainer = document.querySelector(".gallery");

function craetePictureCardsMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
</div>`;
		})
		.join(" ");
}

const pictureGallery = craetePictureCardsMarkup(galleryItems);
galleryContainer.innerHTML = pictureGallery;

// 2.Реалізація делегування на div.gallery і отримання url великого зображення.
galleryContainer.addEventListener("click", clickOnGalleryContainer);

function clickOnGalleryContainer(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== "IMG") {
		return;
	}

// 3.Відкриття модального вікна по кліку на елементі галереї.
	const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
	instance.show();

// 4.Закриття з клавіатури
	galleryContainer.addEventListener("keydown", (e) => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
}
