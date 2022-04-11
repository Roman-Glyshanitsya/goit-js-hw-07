import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGalleryList = document.querySelector('.gallery');
const galleryMarkup = createsImageGalleryMarkup(galleryItems);

imageGalleryList.insertAdjacentHTML('beforeend', galleryMarkup);

imageGalleryList.addEventListener('click', onImageClick);

function createsImageGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__item" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
       />
      </a>
  `;
    })
    .join('');
}

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
