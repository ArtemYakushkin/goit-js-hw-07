import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const card = createGalletyItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', card);
galleryContainer.addEventListener('click', onPictureClick);

function createGalletyItem(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
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
            </div> `;
    }).join('');
} 

function onPictureClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const htmlInstance = basicLightbox.create(
        `<img
      class="gallery__image"
      src="${event.target.dataset.source}"
      data-source="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />`,
        {
            onShow: htmlInstance => addEventListener('onShow', htmlInstance),
            onClose: htmlInstance => removeEventListener('onClose', htmlInstance),
        },
    );
    htmlInstance.show();
    window.addEventListener('keydown', onEscKeyPress);
    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
            htmlInstance.close();
        }
    }
}


