
  const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    
   const carouselImage = document.getElementById('carousel-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
 
        let currentIndex = 0;
              
        function updateImage() {
            carouselImage.src = images[currentIndex];
            currentCounter.textContent = currentIndex + 1;
        }
        
       function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
        
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
        
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            }
        });
        

       
