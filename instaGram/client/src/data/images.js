// src/data/images.js

// Vite will scan all image files in assets/images
const files = import.meta.glob("../assets/images/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
  import: "default", // import the actual file so we can resolve URL
});

export const IMAGES = Object.entries(files).map(([path]) => {
  const filename = path.split("/").pop(); // e.g. "pic1.jpg"
  // Use Vite's URL resolver to get a safe, build-ready URL
  const url = new URL(path.replace("../", "/src/"), import.meta.url).href;

  return { filename, url };
});

// Optional: if other code still expects just URLs or filenames
export const IMAGE_POOL = IMAGES.map((x) => x.url);
export const IMAGE_PATHS = IMAGES.map((x) => x.filename);

// Debug log (remove once confirmed working)
console.table(
  IMAGES.map((img) => ({
    filename: img.filename,
    url: img.url,
  }))
);
