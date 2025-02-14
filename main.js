const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
navbarShoppingCart.addEventListener('click', toggleProductDetail)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}
function toggleProductDetail() {
    aside.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}

const productList = [];

    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    productList.push({
        name: 'Pantalla',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    productList.push({
        name: 'Bici',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    const cardsContainer = document.querySelector('.cards-container')

    function renderProducts(arr){
        for (product of arr){
            const productCard = document.createElement('div')
            productCard.classList.add('product-card')
            const image = document.createElement('img')
            image.setAttribute('src', product.image)
            image.setAttribute('alt',product.name)
        
            const productInfo = document.createElement('div')
            productInfo.classList.add('product-info')
            const productInfoDiv = document.createElement('div')
            const productPrice = document.createElement('p')
            productPrice.innerText = "$" + product.price
            const productName = document.createElement('p')
            productName.innerText = product.name
        
            productInfoFigure = document.createElement('figure')
            productImgCart = document.createElement('img')
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        
            productInfoFigure.appendChild(productImgCart)
            productInfoDiv.append(productPrice,productName)
            productInfo.append(productInfoDiv,productInfoFigure)
            productCard.append(image,productInfo)
        
            cardsContainer.appendChild(productCard)
        }
    }

    renderProducts(productList)

