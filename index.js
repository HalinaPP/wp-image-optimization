const c = 5;

const loadImages = () => {
  console.log('load-imaged');
  const sharpedImagePath = 'images/sharp/image';

  const picturesContainer = document.getElementById('pictures');
  console.log(picturesContainer);

  for (let i = 1; i <= 10; i++) {
    const picture = `<picture>
    <source
      type="image/webp"
      srcset="
          ${sharpedImagePath}${i}-w320.webp   320w,
          ${sharpedImagePath}${i}-w768.webp   768w,
          ${sharpedImagePath}${i}-w1024.webp 1024w,
          ${sharpedImagePath}${i}-w1920.webp
        "
      loading="lazy"
    />
    <source
      type="image/jpeg"
      loading="lazy"
      srcset="
      ${sharpedImagePath}${i}-w320.jpeg   320w,
      ${sharpedImagePath}${i}-w768.jpeg   768w,
      ${sharpedImagePath}${i}-w1024.jpeg 1024w,
      ${sharpedImagePath}${i}-w1920.jpeg
        "
    />
    <img src="${sharpedImagePath}${i}-w1920.jpeg" alt="" />
  </picture>`;

    picturesContainer.innerHTML = picturesContainer.innerHTML + picture;
  }
};
