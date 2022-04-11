import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGalleryContainer = document.querySelector('.gallery');
const imageGalleryMarkup = createsImageGalleryMarkup(galleryItems);

imageGalleryContainer.addEventListener('click', onImageGalleryContainerClick);

imageGalleryContainer.insertAdjacentHTML('beforeend', imageGalleryMarkup);

function createsImageGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
      </a>
    </div>
  `;
    })
    .join('');
}

function onImageGalleryContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modalShow(event.target.dataset.source);
}

function modalShow(src) {
  const instance = basicLightbox.create(
    `
    <div class = "modal">
    <img src = "${src}" width = "900" height = "600"
    </div>
    `,
  );

  instance.show();
}
