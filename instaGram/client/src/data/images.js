// client/src/data/images.js

// Vite will scan the folder and turn each file into a build-ready URL
const files = import.meta.glob("../assets/images/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
  as: "url",
});

// Grab just the URLs and put them in an array
export const IMAGE_POOL = Object.values(files);
// export const IMAGE_POOL = [
//   "/images/pic1.jpg",
//   "/images/pic2.jpg",
//   "/images/pic3.jpg",
//   "/images/pic4.jpg",
//   "/images/pic5.jpg",
//   "/images/pic6.jpg",
//   "/images/pic7.jpg",
//   "/images/pic8.jpg",
//   "/images/pic9.jpg",
//   "/images/pic10.jpg",
//   "/images/pic11.jpg",
//   "/images/pic12.jpg",
//   "/images/pic13.jpg",
// ];
