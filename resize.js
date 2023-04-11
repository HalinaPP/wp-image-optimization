/*import { readdir } from 'fs';
import sharp from 'sharp';
import { path } from 'path';*/
import { readdir } from 'fs';
import sharp from 'sharp';
import path from 'path';

const imageSizes = [320, 768, 1024, 1920];

const resize = (width, image) => {
  const ext = path.extname(image);
  const imageName = path.basename(image, ext);
  const inputImagePath = `./images/${image}`;
  const sharpedWebImagePath = `./images/sharp/${imageName}-w${width}.webp`;
  const sharpedImagePath = `./images/sharp/${imageName}-w${width}.jpeg`;

  sharp(inputImagePath)
    .resize(width, width, {
      fit: sharp.fit.inside,
      withoutEnlargement: true
    })
    .webp()
    .toFile(sharpedWebImagePath);

  sharp(inputImagePath)
    .resize(width, width, {
      fit: sharp.fit.inside,
      withoutEnlargement: true
    })
    .jpeg({ quality: 80 })
    .toFile(sharpedImagePath);
};

readdir('./images', (err, files) => {
  console.log(files);
  files.forEach((file) => {
    imageSizes.map((size) => resize(size, file));
  });
});
