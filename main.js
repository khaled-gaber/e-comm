let nav = document.querySelector("nav")
let to_up = document.querySelector(".fa-arrow-up")
let cart = document.querySelector(".cart")
let shopping_icone = document.querySelector(".fa-cart-shopping")
let close_cart = document.querySelector(".fa-circle-xmark")
let toggle_icone = document.querySelector(".fa-bars")
let list_links = document.querySelector(".list_links")
var cart_container = document.querySelector(".cart .cart_products")
var amount = document.querySelector("nav .tools span")


window.onscroll = function(){
    if( window.scrollY > 0 ){
        nav.style.borderBottom = " 2px solid var(---main-color)"
    }else{
        nav.style.borderBottom = " 2px solid transparent"
    }

    if( window.scrollY > 400 ){
        to_up.style.display = "flex"
    }else{
        to_up.style.display = "none"

    }
}


to_up.addEventListener("click" , function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


shopping_icone.addEventListener("click" , function(){
    cart.classList.add("show")
})
close_cart.addEventListener("click" , function(){
    cart.classList.remove("show")
})

toggle_icone.addEventListener("click" , function(){
    this.classList.toggle("toggle")
    list_links.classList.toggle("toggle")
})


































// var products_container = document.querySelector(".products .container")


var products = [
    {
        id:1 ,
        img:"images/icone.png" ,
        name:"Product one",
        price:30,

    },
    {
        id:2 ,
        img:"images/jars.jpg" ,
        name:"Product two",
        price:45,
    },
    {
        id:3 ,
        img:"images/plate-2.png" ,
        name:"Product three",
        price:28,
    },
    {
        id:4 ,
        img:"images/plate-3.png" ,
        name:"Product four",
        price:28,
    },
    {
        id:5 ,
        img:"images/plate-1.png" ,
        name:"Product five",
        price:50,
    },
    {
        id:6 ,
        img:"images/salad-table.jpg" ,
        name:"Product six",
        price:60,
    },
    {
        id:7 ,
        img:"images/yogurt.png" ,
        name:"Product seven",
        price:75,
    },
    {
        id:8 ,
        img:"images/cupcake.png" ,
        name:"Product eight",
        price:72,
    },
    {
        id:9 ,
        img:"images/food-table.jpg" ,
        name:"Product nine",
        price:80,
    },
    {
        id:10,
        img:"images/coffee.jpg" ,
        name:"Product ten",
        price:100,
    },
]


// function set_products_on_html(){
//     var item = ""
//     for( var i = 0 ; i < products.length ; i++){
//         item += `
//         <div class="card">
//             <div>
//                 <img src="${products[i].img}" alt="">
//             </div>
//             <div class="card_details">
//                 <b>${products[i].name}</b>
//                 <p>$${products[i].price}</p>
//                 <button onclick='add_to_cart(${i})'> Add To Cart </button>
//             </div>
//         </div>`
//     }
//     products_container.innerHTML = item

// }
// set_products_on_html()



let data ;

if (localStorage.getItem("product")) {
    data = JSON.parse( localStorage.getItem('product') )
}else{
    data = []
}

function add_to_cart(id){
    data.push( products[id] )
    localStorage.setItem( "product" , JSON.stringify( data ) )
    display_product()
}



function display_product(){
    var item  = ''
    var totall = 0
    for( var i = 0 ; i < data.length ; i++ ){
        totall += data[i].price
        item += `
        <div class="card">
            <img src="${data[i].img}" alt="">
            <div>
                <b>${data[i].name}</b>
                <p>price : $${data[i].price}.00</p>
            </div>
            <div>
                <button>+</button>
                <span>0</span>
                <button>-</button>
            </div>
            <i onclick='delete_pro(${i})' class="fa-solid fa-trash"></i>
        </div>
        `
    }
    document.querySelector(".cart_totall span").innerHTML ="$" + totall + ".00"
    if( data.length > 0 ){
        cart_container.innerHTML = item
        amount.style.color = "var(---main-color)"
        amount.innerHTML = data.length
    }else{
        cart_container.innerHTML = " your cart is empty "
        cart_container.style.textAlign = "center"
        amount.style.color = "red"
        amount.innerHTML = data.length
    }
}
display_product()


function delete_pro(del){
    data.splice( del , 1 )
    localStorage.setItem("product" , JSON.stringify( data ))
    display_product()
}












