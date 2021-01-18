import { setModalData, setModalOpen } from '../redux/actions';
import { store } from '../redux/store';

const uuid = require('uuid');

export const loadModal = async () => {
    const dispatch = store.dispatch

    const modalData = {
        product: 'Grilled Chicken',
        business: 'Julius Berger' 
    }
    
    dispatch(setModalData(modalData))
    setTimeout(() => {
        dispatch(setModalOpen(true))
    });
}

export const getRandomRange = (width, max) => {
    let lower = Math.floor(Math.random() * max);
    let upper = lower + width;

    if (((max - lower) < width) || upper < width) {
        return getRandomRange(width, max)
    }

    return {
        lower,
        upper
    }
}

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
]

const businesses = [
    'Michelin', 'Nestle', 'Xiaomi', `L'Oreal`, 'Reckitt Benckisser', 'Nivea', 'Sunlight', 'Molfix', 'Pernod Ricard'
]

export const dummyData = {
    products: [
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/300x300/food'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/300x300/' + categories[Math.floor(Math.random() * (categories.length - 1))]
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/300x300/' + categories[Math.floor(Math.random() * (categories.length - 1))]
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: 'consectetur adipiscing',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            price: Math.random() * 50,
            discount: Math.floor(Math.random() * (100-1)),
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
    ],
    services: [
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
        {
            id: uuid(),
            name: ' arcu qoremixes',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at condimentum arcu.',
            category: categories[Math.floor(Math.random() * (categories.length - 1))],
            business: businesses[Math.floor(Math.random() * (businesses.length - 1))],
            contentImage: 'https://source.unsplash.com/random/300x300'
        },
    ],
    categories
}