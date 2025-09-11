// client/src/data/images.js

// Vite will scan the folder and turn each file into a build-ready URL
const files = import.meta.glob("../assets/images/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
  as: "url",
});

// Build objects with BOTH filename + url
export const IMAGES = Object.entries(files).map(([path, url]) => {
  const filename = path.split("/").pop(); // e.g. "pic1.jpg"
  return { filename, url };
});

// For backwards compatibility (if you still need them elsewhere)
export const IMAGE_POOL = IMAGES.map((img) => img.url); // just urls
export const IMAGE_PATHS = IMAGES.map((img) => img.filename); // just filenames
