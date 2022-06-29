import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpg';
import product3 from './images/product-3.jpg';
import product4 from './images/product-4.jpg';
import sweet from './images/sweet.jpg';
import sweet1 from './images/sweet3.jpg';
import sweet2 from './images/sweet-2.jpg';
import sweet3 from './images/sweet-3.jpg';
import icon1 from './images/icons/Menu.png';
import icon2 from './images/icons/MapMarker.png';
import icon3 from './images/icons/Invoice.png';
import icon4 from './images/icons/Donut.png';


export const productData = [

    {
        id:1,
        img: product1,
        alt: 'Pizza',
        name: 'Supreme Pizza',
        desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
        price:'19.99',
        
    }
    ,
     {
        id:2,
        img: product2,
        alt: 'Pizza',
        name: 'Hawaiian Paradise',
        desc:
            ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
        price: '16.99',
        
    },
     {
        id:3,
        img: product3,
        alt: 'Pizza',
        name: 'Veggie Overload',
        desc:
            ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
        price: '14.99',
        
    },
     {
        id:4,
        img: product4,
        alt: 'Burger',
        name: 'Supreme Pizza',
        desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
        price:'19.99',
        
    }
];

export const productDataTwo = [
     {
        id:5,
        img: sweet2,
        alt: 'Donuts',
        name: 'Doughlicious',
        desc:
            'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
        price: '9.99',
        
    },
    {
        id:6,
        img: sweet3,
        alt: 'Ice Cream',
        name: 'Caramel Wonder',
        desc:
            'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
        price: '12.99',
        
    },
     {
        id:7,
        img: sweet1,
        alt: 'Brownie',
        name: 'Brownie Bunch',
        desc:
            'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
        price: '9.99',
        
    },
     {
        id:8,
        img: sweet,
        alt: 'Brownie',
        name: 'Brownie Bunch',
        desc:'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
        price: '9.99',
        
    }
];

export const features = [
    {
        img: icon1,
        title: 'Select location',
        desc:'Choose the location where your food will be delivered.',
        
    },
    {
        img: icon2,
        title: 'Choose order',
        desc:'Check the menu to pick your favorite foods',
        
    },
    {
        img: icon3,
        title: 'Pay advanced',
        desc:'Its quick, safe, and simple. Select several methods of payment',
        
    },
    {
        img: icon4,
        title: 'Enjoy meals',
        desc:'Food is made and delivered directly to your home.',
        
    },
  
];
