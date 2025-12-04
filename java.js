
  const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    
   const carouselImage = document.getElementById('carousel-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
 
           // Текущий индекс
        let currentIndex = 0;
        
        // Функция для обновления изображения
        function updateImage() {
            carouselImage.src = images[currentIndex];
            currentCounter.textContent = currentIndex + 1;
        }
        
        // Функция для следующего изображения
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }
        
        // Функция для предыдущего изображения
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
        
        // Добавляем обработчики событий
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
        
        // Дополнительно: поддержка клавиш управления
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            }
        });
        
       