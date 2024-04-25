fetch('./js/products.json')
.then(response => response.json())
.then(jsonData => {
  console.log(jsonData);
})
.catch(error => console.error('Error loading JSON file', error));

const tabItemCoffee = document.querySelector('.tab-item-coffee');
const tabItemTea = document.querySelector('.tab-item-tea');
const tabItemDessert = document.querySelector('.tab-item-dessert');
const allImages = document.querySelectorAll('.img-1 img, .img-2 img, .img-3 img, .img-4 img, .img-5 img, .img-6 img, .img-7 img, .img-8 img');
const allCoffeeLists = document.querySelectorAll('.coffee-list');
const allText = document.querySelectorAll('.text-1, .text-2, .text-3');
const updateButton = document.querySelector('.update-btn');
let isTeaTab = false;

document.addEventListener('DOMContentLoaded', function() {
    const tabItemCoffee = document.querySelector('.tab-item-coffee');
    tabItemCoffee.click();
});

// Update Button - page Menu

function handleResize() {

    let openImages = document.querySelectorAll('.coffee-5, .coffee-6, .coffee-7, .coffee-8');
    if (isTeaTab && window.innerWidth <= 768 || isTeaTab && window.innerWidth >= 768) {
        updateButton.style.display = 'none';
        openImages.forEach((img) => {
            img.style.display = 'none';
        });
    } else {
        updateButton.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
        openImages.forEach((img) => {
            img.style.display = window.innerWidth <= 768 ? 'none' : 'block';
        });
    }
}

window.addEventListener('resize', handleResize);

updateButton.addEventListener('click', function() {

    let openImages = document.querySelectorAll('.coffee-5, .coffee-6, .coffee-7, .coffee-8');
    openImages.forEach((img) => {
        img.style.display = 'block';
    });
    updateButton.style.display = 'none';
});

// Container Menu - page Menu/ Coffee/ Tea/ Dessert + Modal

let imageDataCoffee = [
    [
        {
            src: "./assets/img/menu-coffee-1.jpg",
            alt: 'Irish coffee',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-coffee-2.jpg",
            alt: 'Kahlua coffee',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-coffee-3.jpg",
            alt: 'Honey raf',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-coffee-4.jpg",
            alt: 'Ice cappuccino',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-coffee-5.jpg",
            alt: 'Espresso',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-coffee-6.jpg",
            alt: 'Latte',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-coffee-7.jpg",
            alt: 'Latte macchiato',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-coffee-8.jpg",
            alt: 'Coffee with cognac',
            width: 340,
            height: 340
        }
    ]
];

let currentDataCoffeeIndex = 0;

tabItemCoffee.addEventListener('click', function() {

    // Modal Product Card Coffee

    const activeModalAssortment1 = document.querySelector('.coffee-1');
    const activeModalAssortment2 = document.querySelector('.coffee-2');
    const activeModalAssortment3 = document.querySelector('.coffee-3');
    const activeModalAssortment4 = document.querySelector('.coffee-4');
    const activeModalAssortment5 = document.querySelector('.coffee-5');
    const activeModalAssortment6 = document.querySelector('.coffee-6');
    const activeModalAssortment7 = document.querySelector('.coffee-7');
    const activeModalAssortment8 = document.querySelector('.coffee-8');

    function loadAndDisplayImageCoffee(index) {
        if (index >= 0 && index < imageDataCoffee.length) {
            const imageData = imageDataCoffee[index][0];
            const imgElement = document.createElement('img');
            const s = document.querySelector('.size-s');
            const m = document.querySelector('.size-m');
            const l = document.querySelector('.size-l');

            s.click();
            m.classList.remove('active');
            s.classList.add('active');
            l.classList.remove('active');

            imgElement.src = imageData.src;
            imgElement.alt = imageData.alt;
            imgElement.width = imageData.width;
            imgElement.height = imageData.height;

            containerAssortmentImg.innerHTML = '';
            containerAssortmentImg.appendChild(imgElement);

            modalAssortmentProduct.classList.add('active');
            modalAssortmentProductTea.classList.remove('active');
            modalAssortmentProductDessert.classList.remove('active');
            document.body.style.overflow = 'hidden';
        }
    }

    activeModalAssortment1.addEventListener('click', function() {
        loadAndDisplayImageCoffee(0);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 0;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment2.addEventListener('click', function() {
        loadAndDisplayImageCoffee(1);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 1;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];

                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment3.addEventListener('click', function() {
        loadAndDisplayImageCoffee(2);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 2;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];

                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment4.addEventListener('click', function() {
        loadAndDisplayImageCoffee(3);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 3;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];

                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment5.addEventListener('click', function() {
        loadAndDisplayImageCoffee(4);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 4;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];

                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment6.addEventListener('click', function() {
        loadAndDisplayImageCoffee(5);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 5;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];

                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment7.addEventListener('click', function() {
        loadAndDisplayImageCoffee(6);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 6;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];

                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment8.addEventListener('click', function() {
        loadAndDisplayImageCoffee(7);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 7;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];

                    let assortmenProductText = document.querySelector('.assortment-product-text .product-text');
                    let assortmenProductText1 = document.querySelector('.assortment-product-text .product-text1');
                    let totalProductText = document.querySelector('.price-text');

                    assortmenProductText.textContent = jsonDataItem.name;
                    assortmenProductText1.textContent = jsonDataItem.description;
                    totalProductText.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProduct.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const s = document.querySelector('.size-s');
                    const m = document.querySelector('.size-m');
                    const l = document.querySelector('.size-l');
                    const addities1 = document.querySelector('.additives-1');
                    const addities2 = document.querySelector('.additives-2');
                    const addities3 = document.querySelector('.additives-3');
                    const priceText = document.querySelector('.price-text').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text').textContent.replace('$', ''));
                    let sum = priceText;
                    let numberOfAdditives = 0;

                    m.addEventListener('click', function() {
                        m.classList.add('active');
                        s.classList.remove('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    s.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.add('active');
                        l.classList.remove('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    l.addEventListener('click', function() {
                        m.classList.remove('active');
                        s.classList.remove('active');
                        l.classList.add('active');
                        addities1.classList.remove('active');
                        addities2.classList.remove('active');
                        addities3.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1.addEventListener('click', function() {
                        addities1.classList.toggle('active');
                        if (addities1.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2.addEventListener('click', function() {
                        addities2.classList.toggle('active');
                        if (addities2.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3.addEventListener('click', function() {
                        addities3.classList.toggle('active');
                        if (addities3.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceText = document.querySelector('.price-text');
                        priceText.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    tabItemCoffee.classList.toggle('active');
    tabItemDessert.classList.remove('active');
    tabItemTea.classList.remove('active');

    isTeaTab = false;
    handleResize();

    let displayNoneImg = document.querySelectorAll('.coffee-5, .coffee-6, .coffee-7, .coffee-8');
    displayNoneImg.forEach((img) => {
        img.style.display = '';
    });

    allCoffeeLists.forEach(coffeeList => {
        coffeeList.style.opacity = 0;
    });

    setTimeout(function() {
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                let productDataArray = [jsonData[0], jsonData[1], jsonData[2], jsonData[3], jsonData[4], jsonData[5], jsonData[6], jsonData[7]];
                allImages.forEach((img, index) => {

                    let currentImageCoffee = imageDataCoffee[index][currentDataCoffeeIndex];

                    img.src = currentImageCoffee.src;
                    img.alt = currentImageCoffee.alt;
                    img.width = currentImageCoffee.width;

                    let productIndex = index % productDataArray.length;
                    let currentProductData = productDataArray[productIndex];
                    let currentCoffeeText1 = document.querySelectorAll('.coffee-text.text-1')[index];
                    let currentCoffeeText2 = document.querySelectorAll('.coffee-text1.text-2')[index];
                    let currentCoffeeText3 = document.querySelectorAll('.coffee-text.text-3')[index];

                    currentCoffeeText1.textContent = currentProductData.name;
                    currentCoffeeText2.textContent = currentProductData.description;
                    currentCoffeeText3.textContent = `$${currentProductData.price}`;
                });

                currentDataCoffeeIndex = (currentDataCoffeeIndex + 1) % imageDataCoffee[0].length;

                allCoffeeLists.forEach(coffeeList => {
                    coffeeList.style.opacity = 1;
                });
            })
            .catch(error => console.error('Error loading JSON file', error));
    }, 600);
});

let imageDataTea = [
    [
        {
            src: "./assets/img/menu-tea-1.jpg",
            alt: 'Moroccan',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-tea-2.jpg",
            alt: 'Ginger',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-tea-3.jpg",
            alt: 'Cranberry',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-tea-4.jpg",
            alt: 'Sea buckthorn',
            width: 340,
            height: 340
        }
    ],
    [
        {src: ""}
    ],
    [
        {src: ""}
    ],
    [
        {src: ""}
    ],
    [
        {src: ""}
    ]
];

let currentDataTeaIndex = 0;

tabItemTea.addEventListener('click', function() {

    // Modal Product Card Tea

    const activeModalAssortment1 = document.querySelector('.tea-1');
    const activeModalAssortment2 = document.querySelector('.tea-2');
    const activeModalAssortment3 = document.querySelector('.tea-3');
    const activeModalAssortment4 = document.querySelector('.tea-4');

    function loadAndDisplayImageTea(index) {
        if (index >= 0 && index < imageDataTea.length) {
            const imageData = imageDataTea[index][0];
            const imgElement = document.createElement('img');
            const sTea = document.querySelector('.size-s-tea');
            const mTea = document.querySelector('.size-m-tea');
            const lTea = document.querySelector('.size-l-tea');

            sTea.click();
            mTea.classList.remove('active');
            sTea.classList.add('active');
            lTea.classList.remove('active');

            imgElement.src = imageData.src;
            imgElement.alt = imageData.alt;
            imgElement.width = imageData.width;
            imgElement.height = imageData.height;

            containerAssortmentImgTea.innerHTML = '';
            containerAssortmentImgTea.appendChild(imgElement);

            modalAssortmentProductTea.classList.add('active');
            modalAssortmentProduct.classList.remove('active');
            modalAssortmentProductDessert.classList.remove('active');
            document.body.style.overflow = 'hidden';
        }
    }

    activeModalAssortment1.addEventListener('click', function() {
        loadAndDisplayImageTea(0);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 8;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextTea = document.querySelector('.assortment-product-text-tea .product-text-tea');
                    let assortmenProductText1Tea = document.querySelector('.assortment-product-text-tea .product-text1-tea');
                    let totalProductTextTea = document.querySelector('.price-text-tea');

                    assortmenProductTextTea.textContent = jsonDataItem.name;
                    assortmenProductText1Tea.textContent = jsonDataItem.description;
                    totalProductTextTea.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductTea.classList.add('active');
                    modalAssortmentProduct.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sTea = document.querySelector('.size-s-tea');
                    const mTea = document.querySelector('.size-m-tea');
                    const lTea = document.querySelector('.size-l-tea');
                    const addities1Tea = document.querySelector('.additives-1-tea');
                    const addities2Tea = document.querySelector('.additives-2-tea');
                    const addities3Tea = document.querySelector('.additives-3-tea');
                    const priceTextTea = document.querySelector('.price-text-tea').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-tea').textContent.replace('$', ''));
                    let sum = priceTextTea;
                    let numberOfAdditives = 0;

                    mTea.addEventListener('click', function() {
                        mTea.classList.add('active');
                        sTea.classList.remove('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.add('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.remove('active');
                        lTea.classList.add('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Tea.addEventListener('click', function() {
                        addities1Tea.classList.toggle('active');
                        if (addities1Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Tea.addEventListener('click', function() {
                        addities2Tea.classList.toggle('active');
                        if (addities2Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Tea.addEventListener('click', function() {
                        addities3Tea.classList.toggle('active');
                        if (addities3Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextTea = document.querySelector('.price-text-tea');
                        priceTextTea.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment2.addEventListener('click', function() {
        loadAndDisplayImageTea(1);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 9;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextTea = document.querySelector('.assortment-product-text-tea .product-text-tea');
                    let assortmenProductText1Tea = document.querySelector('.assortment-product-text-tea .product-text1-tea');
                    let totalProductTextTea = document.querySelector('.price-text-tea');

                    assortmenProductTextTea.textContent = jsonDataItem.name;
                    assortmenProductText1Tea.textContent = jsonDataItem.description;
                    totalProductTextTea.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductTea.classList.add('active');
                    modalAssortmentProduct.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sTea = document.querySelector('.size-s-tea');
                    const mTea = document.querySelector('.size-m-tea');
                    const lTea = document.querySelector('.size-l-tea');
                    const addities1Tea = document.querySelector('.additives-1-tea');
                    const addities2Tea = document.querySelector('.additives-2-tea');
                    const addities3Tea = document.querySelector('.additives-3-tea');
                    const priceTextTea = document.querySelector('.price-text-tea').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-tea').textContent.replace('$', ''));
                    let sum = priceTextTea;
                    let numberOfAdditives = 0;

                    mTea.addEventListener('click', function() {
                        mTea.classList.add('active');
                        sTea.classList.remove('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.add('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.remove('active');
                        lTea.classList.add('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Tea.addEventListener('click', function() {
                        addities1Tea.classList.toggle('active');
                        if (addities1Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Tea.addEventListener('click', function() {
                        addities2Tea.classList.toggle('active');
                        if (addities2Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Tea.addEventListener('click', function() {
                        addities3Tea.classList.toggle('active');
                        if (addities3Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextTea = document.querySelector('.price-text-tea');
                        priceTextTea.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment3.addEventListener('click', function() {
        loadAndDisplayImageTea(2);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 10;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextTea = document.querySelector('.assortment-product-text-tea .product-text-tea');
                    let assortmenProductText1Tea = document.querySelector('.assortment-product-text-tea .product-text1-tea');
                    let totalProductTextTea = document.querySelector('.price-text-tea');

                    assortmenProductTextTea.textContent = jsonDataItem.name;
                    assortmenProductText1Tea.textContent = jsonDataItem.description;
                    totalProductTextTea.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductTea.classList.add('active');
                    modalAssortmentProduct.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sTea = document.querySelector('.size-s-tea');
                    const mTea = document.querySelector('.size-m-tea');
                    const lTea = document.querySelector('.size-l-tea');
                    const addities1Tea = document.querySelector('.additives-1-tea');
                    const addities2Tea = document.querySelector('.additives-2-tea');
                    const addities3Tea = document.querySelector('.additives-3-tea');
                    const priceTextTea = document.querySelector('.price-text-tea').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-tea').textContent.replace('$', ''));
                    let sum = priceTextTea;
                    let numberOfAdditives = 0;

                    mTea.addEventListener('click', function() {
                        mTea.classList.add('active');
                        sTea.classList.remove('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.add('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.remove('active');
                        lTea.classList.add('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Tea.addEventListener('click', function() {
                        addities1Tea.classList.toggle('active');
                        if (addities1Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Tea.addEventListener('click', function() {
                        addities2Tea.classList.toggle('active');
                        if (addities2Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Tea.addEventListener('click', function() {
                        addities3Tea.classList.toggle('active');
                        if (addities3Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextTea = document.querySelector('.price-text-tea');
                        priceTextTea.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortment4.addEventListener('click', function() {
        loadAndDisplayImageTea(3);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 11;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextTea = document.querySelector('.assortment-product-text-tea .product-text-tea');
                    let assortmenProductText1Tea = document.querySelector('.assortment-product-text-tea .product-text1-tea');
                    let totalProductTextTea = document.querySelector('.price-text-tea');

                    assortmenProductTextTea.textContent = jsonDataItem.name;
                    assortmenProductText1Tea.textContent = jsonDataItem.description;
                    totalProductTextTea.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductTea.classList.add('active');
                    modalAssortmentProduct.classList.remove('active');
                    modalAssortmentProductDessert.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sTea = document.querySelector('.size-s-tea');
                    const mTea = document.querySelector('.size-m-tea');
                    const lTea = document.querySelector('.size-l-tea');
                    const addities1Tea = document.querySelector('.additives-1-tea');
                    const addities2Tea = document.querySelector('.additives-2-tea');
                    const addities3Tea = document.querySelector('.additives-3-tea');
                    const priceTextTea = document.querySelector('.price-text-tea').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-tea').textContent.replace('$', ''));
                    let sum = priceTextTea;
                    let numberOfAdditives = 0;

                    mTea.addEventListener('click', function() {
                        mTea.classList.add('active');
                        sTea.classList.remove('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.add('active');
                        lTea.classList.remove('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lTea.addEventListener('click', function() {
                        mTea.classList.remove('active');
                        sTea.classList.remove('active');
                        lTea.classList.add('active');
                        addities1Tea.classList.remove('active');
                        addities2Tea.classList.remove('active');
                        addities3Tea.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Tea.addEventListener('click', function() {
                        addities1Tea.classList.toggle('active');
                        if (addities1Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Tea.addEventListener('click', function() {
                        addities2Tea.classList.toggle('active');
                        if (addities2Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Tea.addEventListener('click', function() {
                        addities3Tea.classList.toggle('active');
                        if (addities3Tea.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextTea = document.querySelector('.price-text-tea');
                        priceTextTea.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    tabItemCoffee.classList.remove('active');
    tabItemDessert.classList.remove('active');
    tabItemTea.classList.toggle('active');

    isTeaTab = true;
    handleResize();

    let displayNoneImg = document.querySelectorAll('.coffee-5, .coffee-6, .coffee-7, .coffee-8');
    displayNoneImg.forEach((img) => {
        img.style.display = 'none';
    });

    allCoffeeLists.forEach(coffeeList => {
        coffeeList.style.opacity = 0;
    });

    setTimeout(function() {
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                let productDataArray = [jsonData[8], jsonData[9], jsonData[10], jsonData[11]];
                allImages.forEach((img, index) => {

                    let currentImageTea = imageDataTea[index][currentDataTeaIndex];

                    img.src = currentImageTea.src;
                    img.alt = currentImageTea.alt;
                    img.width = currentImageTea.width;

                    let productIndex = index % productDataArray.length;
                    let currentProductData = productDataArray[productIndex];
                    let currentCoffeeText1 = document.querySelectorAll('.coffee-text.text-1')[index];
                    let currentCoffeeText2 = document.querySelectorAll('.coffee-text1.text-2')[index];
                    let currentCoffeeText3 = document.querySelectorAll('.coffee-text.text-3')[index];

                    currentCoffeeText1.textContent = currentProductData.name;
                    currentCoffeeText2.textContent = currentProductData.description;
                    currentCoffeeText3.textContent = `$${currentProductData.price}`;
                });

                currentDataTeaIndex = (currentDataTeaIndex + 1) % imageDataTea[0].length;

                allCoffeeLists.forEach(coffeeList => {
                    coffeeList.style.opacity = 1;
                });
            })
            .catch(error => console.error('Error loading JSON file', error));
    }, 600);
});

let imageDataDessert = [
    [
        {
            src: "./assets/img/menu-dessert-1.jpg",
            alt: 'Marble cheesecake',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-dessert-2.jpg",
            alt: 'Red velvet',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-dessert-3.jpg",
            alt: 'Cheesecakes',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-dessert-4.jpg",
            alt: 'Creme brulee',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-dessert-5.jpg",
            alt: 'Pancakes',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-dessert-6.jpg",
            alt: 'Honey cake',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-dessert-7.jpg",
            alt: 'Chocolate cake',
            width: 340,
            height: 340
        }
    ],
    [
        {
            src: "./assets/img/menu-dessert-8.jpg",
            alt: 'Black forest',
            width: 340,
            height: 340
        }
    ]
];

let currentDataDessertIndex = 0;

tabItemDessert.addEventListener('click', function() {

    // Modal Product Card Dessert

    const activeModalAssortmentDessert1 = document.querySelector('.dessert-1');
    const activeModalAssortmentDessert2 = document.querySelector('.dessert-2');
    const activeModalAssortmentDessert3 = document.querySelector('.dessert-3');
    const activeModalAssortmentDessert4 = document.querySelector('.dessert-4');
    const activeModalAssortmentDessert5 = document.querySelector('.dessert-5');
    const activeModalAssortmentDessert6 = document.querySelector('.dessert-6');
    const activeModalAssortmentDessert7 = document.querySelector('.dessert-7');
    const activeModalAssortmentDessert8 = document.querySelector('.dessert-8');

    function loadAndDisplayImageDessert(index) {
        if (index >= 0 && index < imageDataDessert.length) {
            const imageData = imageDataDessert[index][0];
            const imgElement = document.createElement('img');
            const sDessert = document.querySelector('.size-s-dessert');
            const mDessert = document.querySelector('.size-m-dessert');
            const lDessert = document.querySelector('.size-l-dessert');

            sDessert.click();
            mDessert.classList.remove('active');
            sDessert.classList.add('active');
            lDessert.classList.remove('active');

            imgElement.src = imageData.src;
            imgElement.alt = imageData.alt;
            imgElement.width = imageData.width;
            imgElement.height = imageData.height;

            containerAssortmentImgDessert.innerHTML = '';
            containerAssortmentImgDessert.appendChild(imgElement);

            modalAssortmentProductDessert.classList.add('active');
            modalAssortmentProductTea.classList.remove('active');
            modalAssortmentProduct.classList.remove('active');
            document.body.style.overflow = 'hidden';
        }
    }

    activeModalAssortmentDessert1.addEventListener('click', function() {
        loadAndDisplayImageDessert(0);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 12;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortmentDessert2.addEventListener('click', function() {
        loadAndDisplayImageDessert(1);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 13;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortmentDessert3.addEventListener('click', function() {
        loadAndDisplayImageDessert(2);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 14;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortmentDessert4.addEventListener('click', function() {
        loadAndDisplayImageDessert(3);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 15;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortmentDessert5.addEventListener('click', function() {
        loadAndDisplayImageDessert(4);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 16;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortmentDessert6.addEventListener('click', function() {
        loadAndDisplayImageDessert(5);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 17;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortmentDessert7.addEventListener('click', function() {
        loadAndDisplayImageDessert(6);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 18;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    activeModalAssortmentDessert8.addEventListener('click', function() {
        loadAndDisplayImageDessert(7);
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                const index = 19;
                if (index >= 0 && index < jsonData.length) {
                    const jsonDataItem = jsonData[index];
                    let assortmenProductTextDessert = document.querySelector('.assortment-product-text-dessert .product-text-dessert');
                    let assortmenProductText1Dessert = document.querySelector('.assortment-product-text-dessert .product-text1-dessert');
                    let totalProductTextDessert = document.querySelector('.price-text-dessert');

                    assortmenProductTextDessert.textContent = jsonDataItem.name;
                    assortmenProductText1Dessert.textContent = jsonDataItem.description;
                    totalProductTextDessert.textContent = `$${jsonDataItem.price}`;

                    modalAssortmentProductDessert.classList.add('active');
                    modalAssortmentProductTea.classList.remove('active');
                    modalAssortmentProduct.classList.remove('active');
                    document.body.style.overflow = 'hidden';

                    const sDessert = document.querySelector('.size-s-dessert');
                    const mDessert = document.querySelector('.size-m-dessert');
                    const lDessert = document.querySelector('.size-l-dessert');
                    const addities1Dessert = document.querySelector('.additives-1-dessert');
                    const addities2Dessert = document.querySelector('.additives-2-dessert');
                    const addities3Dessert = document.querySelector('.additives-3-dessert');
                    const priceTextDessert = document.querySelector('.price-text-dessert').textContent;
                    let priceTextToNumber = Number(document.querySelector('.price-text-dessert').textContent.replace('$', ''));
                    let sum = priceTextDessert;
                    let numberOfAdditives = 0;

                    mDessert.addEventListener('click', function() {
                        mDessert.classList.add('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 1;
                        sum = priceTextToNumber + 0.50;
                        updateTotal();
                    });

                    sDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.add('active');
                        lDessert.classList.remove('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 0;
                        sum = priceTextToNumber;
                        updateTotal();
                    })

                    lDessert.addEventListener('click', function() {
                        mDessert.classList.remove('active');
                        sDessert.classList.remove('active');
                        lDessert.classList.add('active');
                        addities1Dessert.classList.remove('active');
                        addities2Dessert.classList.remove('active');
                        addities3Dessert.classList.remove('active');
                        numberOfAdditives = 2;
                        sum = priceTextToNumber + 1.00;
                        updateTotal();
                    })

                    addities1Dessert.addEventListener('click', function() {
                        addities1Dessert.classList.toggle('active');
                        if (addities1Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities2Dessert.addEventListener('click', function() {
                        addities2Dessert.classList.toggle('active');
                        if (addities2Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    addities3Dessert.addEventListener('click', function() {
                        addities3Dessert.classList.toggle('active');
                        if (addities3Dessert.classList.contains('active')) {
                            numberOfAdditives++;
                        } else {
                            if (numberOfAdditives > 0) {
                                numberOfAdditives--;
                            }
                        }
                        sum = priceTextToNumber + 0.50 * numberOfAdditives;
                        updateTotal();
                    });

                    function updateTotal() {
                        const priceTextDessert = document.querySelector('.price-text-dessert');
                        priceTextDessert.textContent = `$${sum.toFixed(2)}`;
                    }
                }
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    });

    tabItemCoffee.classList.remove('active');
    tabItemDessert.classList.toggle('active');
    tabItemTea.classList.remove('active');

    isTeaTab = false;
    handleResize();

    let displayNoneImg = document.querySelectorAll('.coffee-5, .coffee-6, .coffee-7, .coffee-8');
    displayNoneImg.forEach((img) => {
        img.style.display = '';
    });

    allCoffeeLists.forEach(coffeeList => {
        coffeeList.style.opacity = 0;
    });

    setTimeout(function() {
        fetch('./js/products.json')
            .then(response => response.json())
            .then(jsonData => {
                let productDataArray = [jsonData[12], jsonData[13], jsonData[14], jsonData[15], jsonData[16], jsonData[17], jsonData[18], jsonData[19]];
                allImages.forEach((img, index) => {

                    let currentImageDessert = imageDataDessert[index][currentDataDessertIndex];

                    img.src = currentImageDessert.src;
                    img.alt = currentImageDessert.alt;
                    img.width = currentImageDessert.width;

                    let productIndex = index % productDataArray.length;
                    let currentProductData = productDataArray[productIndex];
                    let currentCoffeeText1 = document.querySelectorAll('.coffee-text.text-1')[index];
                    let currentCoffeeText2 = document.querySelectorAll('.coffee-text1.text-2')[index];
                    let currentCoffeeText3 = document.querySelectorAll('.coffee-text.text-3')[index];

                    currentCoffeeText1.textContent = currentProductData.name;
                    currentCoffeeText2.textContent = currentProductData.description;
                    currentCoffeeText3.textContent = `$${currentProductData.price}`;
                });

                currentDataDessertIndex = (currentDataDessertIndex + 1) % imageDataDessert[0].length;

                allCoffeeLists.forEach(coffeeList => {
                    coffeeList.style.opacity = 1;
                });
            })
            .catch(error => console.error('Error loading JSON file', error));
    }, 600);
});

// Modal Product Card - close Modal
// Coffee
let containerAssortmentImg = document.querySelector('.container-assortment-img');
const modalAssortmentProduct = document.querySelector('.back-color-modal');
const closeProductBtn = document.querySelector('.close-pruduct-btn');
const addities1 = document.querySelector('.additives-1');
const addities2 = document.querySelector('.additives-2');
const addities3 = document.querySelector('.additives-3');

closeProductBtn.addEventListener('click', function() {
    modalAssortmentProduct.classList.remove('active');
    containerAssortmentImg.innerHTML = '';
    document.body.style.overflow = '';
});

modalAssortmentProduct.addEventListener('click', function(event) {
    if (event.target === modalAssortmentProduct) {
        modalAssortmentProduct.classList.remove('active');
        containerAssortmentImg.innerHTML = '';
        document.body.style.overflow = '';
    }
});

// Tea
let containerAssortmentImgTea = document.querySelector('.container-assortment-img-tea');
const modalAssortmentProductTea = document.querySelector('.back-color-modal-tea');
const closeProductBtnTea = document.querySelector('.close-pruduct-btn-tea');

closeProductBtnTea.addEventListener('click', function() {
    modalAssortmentProductTea.classList.remove('active');
    containerAssortmentImgTea.innerHTML = '';
    document.body.style.overflow = '';
});

modalAssortmentProductTea.addEventListener('click', function(event) {
    if (event.target === modalAssortmentProductTea) {
        modalAssortmentProductTea.classList.remove('active');
        containerAssortmentImgTea.innerHTML = '';
        document.body.style.overflow = '';
    }
});

// Dessert
let containerAssortmentImgDessert = document.querySelector('.container-assortment-img-dessert');
const modalAssortmentProductDessert = document.querySelector('.back-color-modal-dessert');
const closeProductBtnDessert = document.querySelector('.close-pruduct-btn-dessert');

closeProductBtnDessert.addEventListener('click', function() {
    modalAssortmentProductDessert.classList.remove('active');
    containerAssortmentImgDessert.innerHTML = '';
    document.body.style.overflow = '';
});

modalAssortmentProductDessert.addEventListener('click', function(event) {
    if (event.target === modalAssortmentProductDessert) {
        modalAssortmentProductDessert.classList.remove('active');
        containerAssortmentImgDessert.innerHTML = '';
        document.body.style.overflow = '';
    }
});