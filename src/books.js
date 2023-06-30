// NAMED EXPORT

//Local Images (src folder)

// better performance because optimized
// add one more book to array
// download all three images (rename)
// setup images folder in the src
// import all three images in the books.js
// set image property equal to import
// and yes each image requires new import

import img1 from './images/photo-1.jpg'
import img2 from './images/photo-2.jpg'
import img3 from './images/photo-3.jpg'

export const books = [
  {
    img: img1,
    title: 'Happy Place',
    author: 'Emily Henry',
    id: 1,
  },
  {
    img: img2,
    title: 'Atomic Habits',
    author: 'James Clear',
    id: 2,
  },
  {
    img: img3,
    title: 'Do It Today',
    author: 'Darius Foroux',
    id: 3,
  },
]
