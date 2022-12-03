const IMG_NAMES = [
  'cat_1.jpeg',
  'cat_2.webp',
  'cat_3.jpeg',
  'cat_4.jpeg',
  'cat_5.jpeg'
]

export default () => {
  return new Promise((resolve, reject) => {
    resolve(IMG_NAMES)
  })
}
