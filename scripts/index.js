const popup = document.querySelector('.popup');
const certificatePopup = document.querySelectorAll('.certificate-card');
const popupImage = document.querySelector('.popup-image');
const popupName = document.querySelector('.popup-name');
const popupSchool = document.querySelector('.popup-school');
const closePopupButton = document.querySelector('.close-icon');

function openPopup () {
    popup.classList.add('popup_opened');
    document.addEventListener('mousedown', closePopupOverlay);
    document.addEventListener('keydown', closePopupEscape);
}

function closePopup () {
    popup.classList.remove('popup_opened');
    document.removeEventListener('mousedown', closePopupOverlay);
    document.removeEventListener('keydown', closePopupEscape);
}

const closePopupOverlay = function(evt) {
    const openPopup = document.querySelector('.popup_opened');
        if(evt.target === openPopup) {
            closePopup(openPopup);
        }
  }
  
const closePopupEscape = function(evt) {
    if(evt.key === 'Escape') {
      const openPopup = document.querySelector('.popup_opened');
      closePopup(openPopup);
    }
  }

function certificateData (card) {
    const image = card.querySelector('.certificate-image');
    const certificateName = card.querySelector('.certificate-name');
    const certificateSchool = card.querySelector('.certificate-school');

    popupImage.src = image.src;
    popupName.textContent = certificateName.textContent;
    popupSchool.textContent = certificateSchool.textContent;
    openPopup(certificatePopup);
}

certificatePopup.forEach(function(card) {
    card.addEventListener('click', function() {
      certificateData(card)
    });
  });

closePopupButton.addEventListener('click', closePopup);