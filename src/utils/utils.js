export const validThumbnail = (t) => {
  return (t && t.indexOf('https://') === 0) ? t : '/logo.png';
}