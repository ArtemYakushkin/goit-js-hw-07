import { galleryItems } from './gallery-items.js';

const galleryLightBox = document.querySelector('.gallery');
const itemGallery = createGalletyItem(galleryItems);

galleryLightBox.insertAdjacentHTML('beforeend', itemGallery);
galleryLightBox.addEventListener('click', onPictureClick);

function createGalletyItem(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `
            <li>
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
                </a>
            </li>`;
    }).join('');
};

function onPictureClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    let lightbox = new SimpleLightbox('.gallery a', { 
        preloading: false,
        alertError: false
     });
    console.log(lightbox);
}
