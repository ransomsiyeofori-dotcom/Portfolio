const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const close = document.getElementById("close");

menu.addEventListener("click", function(){
   nav.classList.add("active");
  
}
);

close.addEventListener("click", function(){
  nav.classList.remove("active");
  });
  
  const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

// Update dots when the user swipes
slider.addEventListener('scroll', () => {
  const slideWidth = slider.clientWidth;
  const index = Math.round(slider.scrollLeft / slideWidth);
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
});

// Click on dots to jump to an image
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slider.scrollTo({
      left: index * slider.clientWidth,
      behavior: 'smooth'
    });
  });
});
