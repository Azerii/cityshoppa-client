import { setModalData, setModalOpen } from '../redux/actions';
import { store } from '../redux/store';

export const loadModal = async id => {
  const dispatch = store.dispatch;

  if (!id) return;

  const modalData = {
    contentType: 'products',
    id
  };

  dispatch(setModalData(modalData));
  setTimeout(() => {
    dispatch(setModalOpen(true));
  });
};

export const shuffleArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const getRandomRange = (width, max) => {
  let lower = Math.floor(Math.random() * (max - width));
  let upper = lower + width;

  return {
    lower,
    upper
  };
};

export const categories = [
  'Fashion',
  'Technology',
  'Food',
  'Gifts',
  'Crafts',
  'Services',
  'Transport',
  'Hair and Beauty',
  'Books',
  'Consumer electronics',
  'Health',
  'Fitness',
  'Construction',
  'Arts and Graphics',
  'Catering services',
  'Arts',
  'Furniture',
  'Jewellery',
  'Toys',
  'Games',
  'Real estate',
  'Care',
  'Handyman',
  'Finance',
  'Photography',
  'Music',
  'Vacations and Travels',
  'Farming',
  'Hospitality',
  'Pets',
  'Home and Garden',
  'Pharmaceuticals',
  'Convenience stores',
  'Home-mades',
  'Mobile services',
  'Automobile'
];

// const businesses = [
//   'Michelin',
//   'Nestle',
//   'Xiaomi',
//   `L'Oreal`,
//   'Reckitt Benckisser',
//   'Nivea',
//   'Sunlight',
//   'Molfix',
//   'Pernod Ricard'
// ];

// export const dummyData = {
//   products: [
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/300x300/food'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage:
//         'https://source.unsplash.com/300x300/' +
//         categories[Math.floor(Math.random() * (categories.length - 1))]
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage:
//         'https://source.unsplash.com/300x300/' +
//         categories[Math.floor(Math.random() * (categories.length - 1))]
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: 'consectetur adipiscing',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       price: Math.random() * 50,
//       discount: Math.floor(Math.random() * (100 - 1)),
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     }
//   ],
//   services: [
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     },
//     {
//       id: uuid(),
//       name: ' arcu qoremixes',
//       decription:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
//       category: categories[Math.floor(Math.random() * (categories.length - 1))],
//       business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
//       contentImage: 'https://source.unsplash.com/random/300x300'
//     }
//   ],
//   categories
// };
