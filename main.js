let emailMenu           = document.querySelector('.navbar-email');
let desktopMenu         = document.querySelector('.desktop-menu');
let iconMenuMobile      = document.querySelector('.menu');
let mobileMenu          = document.querySelector('.mobile-menu');
let iconShopping        = document.querySelector('.navbar-shopping-cart');
let asideShopping       = document.querySelector('.product-detail');
let divcardscontainer   = document.querySelector('.cards-container')
let productDetailLeft   = document.querySelector('.product-detail-left')
let productDetailClose  = document.querySelector('.product-detail-close')
let myordercontentContainer = document.querySelector('.my-order-content')
let countCarrito        = document.querySelector('.navbar-shopping-cart div')
let totalCarrito        = document.querySelector('.total')
let modal               = document.querySelector('.modal')
let cerrarModal         = document.querySelector('.boton-modal')
let productImageInfor   = document.querySelector('.product-detail-left > img:nth-child(2)')
let labelPriceInfo      = document.querySelector('.product-info-left p:nth-child(1)')
let labelNameInfo       = document.querySelector('.product-info-left p:nth-child(2)')
let labelInforInfo      = document.querySelector('.product-info-left p:nth-child(3)')
let buttonInfo          = document.querySelector('.add-to-cart-button')
let productosEnCarrito  = []
let productoACarrito    = []

countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
totalCarrito.innerText = '$0.00'

emailMenu.addEventListener('click', toggleMenu);
iconMenuMobile.addEventListener('click', toggleMenuMobile);
iconShopping.addEventListener('click', toggleAsideShopping)
productDetailClose.addEventListener('click',closeProductDetail)
buttonInfo.addEventListener('click', butonClick)
cerrarModal.addEventListener('click', closeModal)


function butonClick(){
    agregarCarrito(productoACarrito)
}
function toggleMenu(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideShopping(){
    productDetailLeft.classList.add('inactive')
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    asideShopping.classList.toggle('inactive')
}

function openProductDetail(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.remove('inactive')
}

function closeProductDetail(){
    productoACarrito = []
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.add('inactive')
}

function verificarProducto(nameProduct){
    return productosEnCarrito.some(function(articulo){
        return articulo === nameProduct
    })
}

function closeModal(){
    modal.style.display = 'none'
}

let productList = []
productList.push({
    name:"Red Xbox controlXbox Core Wireless Controller – Pulse Red",
    price:60,
    image:"https://images.pexels.com/photos/6794851/pexels-photo-6794851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: 'Experimenta el diseño modernizado del control inalámbrico Xbox en color rojo pulso, con superficies moldeadas y geometría refinada para mayor comodidad y control sin esfuerzo durante el juego, con batería de hasta 40 horas.'
})
productList.push({
    name:"Smart TV Full HD 1080p",
    price:200,
    image: "https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: 'Alta definición de 1080p: mira televisión con una resolución Full HD de 1080p clara y nítida y experimente una imagen brillante con la serie D de VIZIO.'
})
productList.push({
    name:"Apple Watch 6",
    price:200,
    image:"https://images.pexels.com/photos/5081424/pexels-photo-5081424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: 'La pantalla Retina siempre encendida tiene casi un 20% más de área de pantalla que la serie 6, por lo que es más fácil ver y usar todo.'
})
productList.push({
    name:"Iphone 11",
    price:400,
    image:"https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: 'Totalmente desbloqueado y compatible con la compañía telefónica de tu elección (por ejemplo, AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).'
})
productList.push({
    name:"Airpots",
    price:1500,
    image:"https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: 'Cancelación activa de ruido para un sonido envolvente'
})
productList.push({
    name:"Play Station 4 controller",
    price:100,
    image:"https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: 'Solo 2,5 horas de tiempo de carga y hasta 15 horas de tiempo de reproducción.'
})
productList.push({
    name:"Macbook Air 13",
    price:1200,
    image:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: ' la laptop MacBook Pro de 13 pulgadas es portátil y potente. Es más rápida que una CPU de 8 núcleos de próxima generación, tiene una unidad de procesamiento de gráficos de 10 núcleos y hasta 24 GB de memoria unificada'
})

function renderListProduct(productList){
    for (const product of productList) {
        let divproductCard = document.createElement('div')
        let imgproductcard = document.createElement('img')
        let divproductinfo = document.createElement('div')
        let divdivproductinfo = document.createElement('div')
        let pprice = document.createElement('p')
        let pname = document.createElement('p')
        let figureproductinfo = document.createElement('figure')
        let imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        divproductinfo.classList.add('product-info')
        pprice.innerText ='$' + product.price
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(divproductinfo)

        divcardscontainer.appendChild(divproductCard)

        imgproductcard.addEventListener('click', function(){
            mostrarInfoProduct(product.image, product.price, product.name, product.desc)
            openProductDetail()
        });


        imgproductinfo.addEventListener('click', function(){
            let productoAgregado = []
            productoAgregado.push({
                name: product.name,
                price: product.price,
                image: product.image
            })
            agregarCarrito(productoAgregado)
        })
    }
}

/* Funcion para agregar productos al carrito */
function agregarCarrito(producto){
    if(verificarProducto(producto[0].name)){
        productoACarrito= []
        return modal.style.display = 'grid'
    }

    /* Creacion de elemtentos HTML */
    let divShoppingCart = document.createElement('div')
    let figureShoppingCart = document.createElement('figure')
    let imgfigureShoppingCart = document.createElement('img')
    let pnameShoppingCart = document.createElement('p')
    let ppriceShoppingCart = document.createElement('p')
    let imgcloseShoppingCart = document.createElement('img')

    /* Se agrega contenido a cada uno de los elementos */
    divShoppingCart.classList.add('shopping-cart')
    imgfigureShoppingCart.setAttribute('src', producto[0].image)
    pnameShoppingCart.innerText = producto[0].name
    ppriceShoppingCart.innerText ='$' + producto[0].price
    imgcloseShoppingCart.setAttribute('src','./icons/icon_close.png')
    imgcloseShoppingCart.classList.add('removeList')

    /* Se insertan los documentos */
    figureShoppingCart.appendChild(imgfigureShoppingCart)
    divShoppingCart.appendChild(figureShoppingCart)
    divShoppingCart.appendChild(pnameShoppingCart)
    divShoppingCart.appendChild(ppriceShoppingCart)
    divShoppingCart.appendChild(imgcloseShoppingCart)
    myordercontentContainer.appendChild (divShoppingCart)

    /* Se agregan la cantidad de productos ademas de la suma de precios */
    countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
    totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))
    productosEnCarrito.push(producto[0].name)
    
    /* Funcion para quitar productos del carrito */
    imgcloseShoppingCart.addEventListener('click', function(){
        divShoppingCart.remove()
        countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
        totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price))
        productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name),1)
    }) 

}

function mostrarInfoProduct(imagen, precio, nombre, descripcion){
    productImageInfor.setAttribute('src', imagen)
    labelPriceInfo.innerText = '$' + precio
    labelNameInfo.innerText = nombre
    labelInforInfo.innerText = descripcion
    productoACarrito = []
    productoACarrito.push({
        name: nombre,
        price: precio,
        image: imagen
    })
}

renderListProduct(productList);