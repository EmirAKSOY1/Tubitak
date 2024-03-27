// Slider'ın kaydırılması için gerekli JavaScript kodları
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// İleri veya geri gitmek için bir fonksiyon
function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlider();
}

// Slider'ın güncellenmesi için bir fonksiyon
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.transform = 'translateX(0)';
    } else if (index === currentSlide - 1 || (currentSlide === 0 && index === totalSlides - 1)) {
      slide.style.transform = 'translateX(-100%)';
    } else {
      slide.style.transform = 'translateX(100%)';
    }
  });
}

// Otomatik geçiş için
setInterval(() => {
  moveSlide(1);
}, 5000); // 5 saniyede bir geçiş yapacak
