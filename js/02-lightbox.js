import { galleryItems } from './gallery-items.js';
// Change code below this line

const selectorGallery = document.querySelector("ul.gallery");
selectorGallery.classList.add("gallery");

galleryItems.forEach(function (galleryItem) {
  const makerLi = document.createElement("li");
  makerLi.classList.add("gallery__item");
  selectorGallery.appendChild(makerLi);

  const makerBtn = document.createElement("a");
  makerLi.append(makerBtn);
  makerBtn.classList.add("gallery__link");
  makerBtn.href = galleryItem.original;

  const makerImg = document.createElement("img");
  makerBtn.append(makerImg);
  makerImg.classList.add("gallery__image");
  makerImg.src = galleryItem.preview;
  makerImg.dataset.source = galleryItem.original;
  makerImg.alt = galleryItem.description;

  makerBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let gallery = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});
