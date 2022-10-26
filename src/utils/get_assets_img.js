export default function getAssetUrl(image) {
  return new URL(`../assets/img/${image}`, import.meta.url)
}
