const filenames = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
  "pic6.jpg",
  "pic7.jpg",
  "pic8.jpg",
  "pic9.jpg",
  "pic10.jpg",
  "pic11.jpg",
  "pic12.jpg",
  "pic13.jpg",
];

// Build objects with filename + public URL
export const IMAGES = filenames.map((name) => ({
  filename: name,
  url: `/images/${name}`, // served from /public/images/
}));

export const IMAGE_POOL = IMAGES.map((x) => x.url);
export const IMAGE_PATHS = IMAGES.map((x) => x.filename);

console.table(IMAGES);
