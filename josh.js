

const container = document.getElementById('container');
let startIndex = 0;

function loadImages() {
  for (let i = startIndex; i < startIndex + 5; i++) {
    const image = document.createElement('img');
    image.src = `https://picsum.photos/id/${i}/500/300`;
    container.appendChild(image);
  }
  startIndex += 5;
}

container.addEventListener('scroll', () => {
  if (container.scrollLeft + container.clientWidth === container.scrollWidth) {
    loadImages();
  }
});

loadImages();