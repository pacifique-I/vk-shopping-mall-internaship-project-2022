// CREATING VALIABLES 
let balance=1200

// SELECTING BALANCE HOLDER 
const balanceHolder = document.querySelector(".balance")

// SELECTING PRODUCT CONTAINER
const productsContainer = document.querySelector(".products-wrapper")

// SELECTING NAV LINK
const navLinkHome = document.querySelector(".homee")
const navLinkCart = document.querySelector(".cartee")
const navLinkAbout = document.querySelector(".aboutee")
const navLinkContact = document.querySelector(".contactee")

// SELECTING PAGES
const pageHome = document.querySelector(".home")
const pageCart = document.querySelector(".cart")
const pageAbout = document.querySelector(".about")
const pageContact = document.querySelector(".contact")
const content = document.querySelectorAll(".content")

// SELECTING MOUSE OVER 
const mouseOver = document.querySelector(".mouse")

// SELECTING FOOTER HOLDER 
const footer = document.querySelector(".footer")


// SELECTING CLOSER AND OPENRERS FOR CATEGORIES 
const categories= document.querySelector(".categories")
const logo = document.querySelector(".logo")
const close = document.querySelector(".closeCategories")

// SELECTING THE SUB CATEGORY OPENERS 

const openershirts = document.querySelector(".openershirts")
const openerPants = document.querySelector(".openerPants")
const openerTshirts = document.querySelector(".openerT-shirts")
const openerShoes = document.querySelector(".openerShoes")
const subCat = document.querySelectorAll(".sub-cat")

// SELECTING THE SUB-CATEGORIES 

const shirts = document.querySelector(".shirts")
const pants = document.querySelector(".pants")
const tshirts = document.querySelector(".t-shirts")
const shoes = document.querySelector(".shoes")

// SELECTING ACCOUNT CONTROLER BUTTON AND ACCOUNT DETAILS

const accountControler = document.querySelector(".accountControl")
const account = document.querySelector(".account")
const closeAccount = document.querySelector(".closeAccount")

// SELECTING NAVIGATION PAGES LINK 
const navigationLink = document.querySelectorAll(".navigatePages")

//SELECTING SUBMIT BUTTON
let namw;
let mail;
let buttonnn = document.querySelector(".send-button")
let logOut = document.querySelector(".log-out")
let loginOverflow = document.querySelector(".overflow-log-in")

buttonnn.addEventListener("click",(e)=>{
    e.preventDefault()
    namw = document.querySelector(".user-name").value
    mail = document.querySelector(".user-mail").value
    if(namw == "" || mail == ""){
        alert("please fill all the fields!")
    }
    else{
        let userNameHolder = document.querySelector(".user-name-holder")
        userNameHolder.textContent = namw
        loginOverflow.style.display = "none"
    }
})

logOut.addEventListener("click",(e)=>{
    loginOverflow.style.display = "flex"
    userNameHolder.textContent = ""
})

let userNameHolder = document.querySelector(".user-name-holder")
userNameHolder.textContent = namw


//CREATING CART PRODUCTS
let products=[
    {
        "title":"vatican cross",
        "description":"the cross from st paul's cathedral.",
        "price":20.98,
        "thumbnail":"images/cross.jpg"
    },
    {
        "title":"dior cap",
        "description":"the brand new hat from dior",
        "price":12.8,
        "thumbnail":"images/dior-caps.jpg"
    },
    {
        "title":"airforce 1",
        "description":"the brand new nike airforce 1",
        "price":200,
        "thumbnail":"images/airforce.jpg"
    },
    {
        "title":"chrome hearts pant",
        "description":"brand new fashion pant from chrome heart",
        "price":60.78,
        "thumbnail":"images/chrome-hearts-Pant.jpg"
    },
    {
        "title":"supreme shoes",
        "description":"new spreme super shoes",
        "price":196.45,
        "thumbnail":"images/supreme.webp"
    },
    {
        "title":"supreme Jacket",
        "description":"new supreme jacket for fashion",
        "price":78.23,
        "thumbnail":"images/supreme-jacket.webp"
    },
    {
        "title":"dior-sneaker",
        "description":"the brand new dior masterpiece for fashion",
        "price":89.34,
        "thumbnail":"images/dior-sneaker.jpg"
    },
    {
        "title":"chrome-heart t-shirt",
        "description":"the brand chome-hearts t-shirt",
        "price":13.78,
        "thumbnail":"images/chrome-hearts-t-shirt.jpg"
    },
    {
        "title":"dior",
        "description":"the brand new dior masterpiece for fashion",
        "price":30.98,
        "thumbnail":"images/dior.jpg"
    },
    {
        "title":"balenciaga shoes",
        "description":"the brand new balenciaga masterpiece for fashion",
        "price":230.73,
        "thumbnail":"images/balenciaga-shoes.jpg"
    },
    {
        "title":"black sunglasses",
        "description":"make fashion with health",
        "price":16.58,
        "thumbnail":"images/black-sunglasses.jpg"
    },
    {
        "title":"fashion dress",
        "description":"the brand new dress for women fashion",
        "price":38.12,
        "thumbnail":"images/dress-for-girls.jpg"
    },
    {
        "title":"LV shoes",
        "description":"the brand new shoes for fashion",
        "price":490.08,
        "thumbnail":"images/louis-vuitton-shoes.webp"
    },
    {
        "title":"LV sneaker",
        "description":"the brand new sneaker 2022 for fashion",
        "price":94.93,
        "thumbnail":"images/louis-vuitton-sneaker.jpg"
    },
    {
        "title":"LV T-shirt",
        "description":"the brand new LV t-shirt",
        "price":70.98,
        "thumbnail":"images/louis-vuitton-tshirt.webp"
    },
    {
        "title":"Gucci pants",
        "description":"the brand new gucci pant for men",
        "price":56.98,
        "thumbnail":"images/gucci-pants.jpg"
    },
    {
        "title":"Gucci shoes",
        "description":"the brand new gucci shoes for fashion",
        "price":76.98,
        "thumbnail":"images/gucci-shoes.jpg"
    },
    {
        "title":"Gucci sunglasses",
        "description":"the brand new gucci sunglasses for fashion",
        "price":16.88,
        "thumbnail":"images/gucci-sunglasses.jpg"
    },
    {
        "title":"Gucci belt",
        "description":"the brand new gucci belt for men",
        "price":56.2,
        "thumbnail":"images/gucci-belt.jpg"
    },
    {
        "title":"hand-bag for women",
        "description":"the brand new hand-bag for women by hermes",
        "price":46.12,
        "thumbnail":"images/hermes-hand-bag.jpg"
    },
    {
        "title":"barmain t-shirt",
        "description":"the brand new t-shirt for men by barmain",
        "price":26.34,
        "thumbnail":"images/barmain.jpg"
    },
    {
        "title":"vatican cross",
        "description":"the cross from st paul's cathedral.",
        "price":20.98,
        "thumbnail":"images/cross.jpg"
    },
    {
        "title":"dior cap",
        "description":"the brand new hat from dior",
        "price":12.8,
        "thumbnail":"images/dior-caps.jpg"
    },
    {
        "title":"airforce 1",
        "description":"the brand new nike airforce 1",
        "price":200,
        "thumbnail":"images/airforce.jpg"
    },
    {
        "title":"chrome hearts pant",
        "description":"brand new fashion pant from chrome heart",
        "price":60.78,
        "thumbnail":"images/chrome-hearts-Pant.jpg"
    },
    {
        "title":"supreme shoes",
        "description":"new spreme super shoes",
        "price":196.45,
        "thumbnail":"images/supreme.webp"
    },
    {
        "title":"supreme Jacket",
        "description":"new supreme jacket for fashion",
        "price":78.23,
        "thumbnail":"images/supreme-jacket.webp"
    },
    {
        "title":"dior-sneaker",
        "description":"the brand new dior masterpiece for fashion",
        "price":89.34,
        "thumbnail":"images/dior-sneaker.jpg"
    },
    {
        "title":"chrome-heart t-shirt",
        "description":"the brand chome-hearts t-shirt",
        "price":13.78,
        "thumbnail":"images/chrome-hearts-t-shirt.jpg"
    },
    {
        "title":"dior",
        "description":"the brand new dior masterpiece for fashion",
        "price":30.98,
        "thumbnail":"images/dior.jpg"
    },
    {
        "title":"balenciaga shoes",
        "description":"the brand new balenciaga masterpiece for fashion",
        "price":230.73,
        "thumbnail":"images/balenciaga-shoes.jpg"
    },
    {
        "title":"black sunglasses",
        "description":"make fashion with health",
        "price":16.58,
        "thumbnail":"images/black-sunglasses.jpg"
    },
    {
        "title":"fashion dress",
        "description":"the brand new dress for women fashion",
        "price":38.12,
        "thumbnail":"images/dress-for-girls.jpg"
    },
    {
        "title":"LV shoes",
        "description":"the brand new shoes for fashion",
        "price":490.08,
        "thumbnail":"images/louis-vuitton-shoes.webp"
    },
    {
        "title":"LV sneaker",
        "description":"the brand new sneaker 2022 for fashion",
        "price":94.93,
        "thumbnail":"images/louis-vuitton-sneaker.jpg"
    },
    {
        "title":"LV T-shirt",
        "description":"the brand new LV t-shirt",
        "price":70.98,
        "thumbnail":"images/louis-vuitton-tshirt.webp"
    },
    {
        "title":"Gucci pants",
        "description":"the brand new gucci pant for men",
        "price":56.98,
        "thumbnail":"images/gucci-pants.jpg"
    },
    {
        "title":"Gucci shoes",
        "description":"the brand new gucci shoes for fashion",
        "price":76.98,
        "thumbnail":"images/gucci-shoes.jpg"
    },
    {
        "title":"Gucci sunglasses",
        "description":"the brand new gucci sunglasses for fashion",
        "price":16.88,
        "thumbnail":"images/gucci-sunglasses.jpg"
    },
    {
        "title":"Gucci belt",
        "description":"the brand new gucci belt for men",
        "price":56.2,
        "thumbnail":"images/gucci-belt.jpg"
    },
    {
        "title":"hand-bag for women",
        "description":"the brand new hand-bag for women by hermes",
        "price":46.12,
        "thumbnail":"images/hermes-hand-bag.jpg"
    },
    {
        "title":"barmain t-shirt",
        "description":"the brand new t-shirt for men by barmain",
        "price":26.34,
        "thumbnail":"images/barmain.jpg"
    },
    {
        "title":"vatican cross",
        "description":"the cross from st paul's cathedral.",
        "price":20.98,
        "thumbnail":"images/cross.jpg"
    },
    {
        "title":"dior cap",
        "description":"the brand new hat from dior",
        "price":12.8,
        "thumbnail":"images/dior-caps.jpg"
    },
    {
        "title":"airforce 1",
        "description":"the brand new nike airforce 1",
        "price":200,
        "thumbnail":"images/airforce.jpg"
    },
    {
        "title":"chrome hearts pant",
        "description":"brand new fashion pant from chrome heart",
        "price":60.78,
        "thumbnail":"images/chrome-hearts-Pant.jpg"
    },
    {
        "title":"supreme shoes",
        "description":"new spreme super shoes",
        "price":196.45,
        "thumbnail":"images/supreme.webp"
    },
    {
        "title":"supreme Jacket",
        "description":"new supreme jacket for fashion",
        "price":78.23,
        "thumbnail":"images/supreme-jacket.webp"
    },
    {
        "title":"dior-sneaker",
        "description":"the brand new dior masterpiece for fashion",
        "price":89.34,
        "thumbnail":"images/dior-sneaker.jpg"
    },
    {
        "title":"chrome-heart t-shirt",
        "description":"the brand chome-hearts t-shirt",
        "price":13.78,
        "thumbnail":"images/chrome-hearts-t-shirt.jpg"
    },
    {
        "title":"dior",
        "description":"the brand new dior masterpiece for fashion",
        "price":30.98,
        "thumbnail":"images/dior.jpg"
    },
    {
        "title":"balenciaga shoes",
        "description":"the brand new balenciaga masterpiece for fashion",
        "price":230.73,
        "thumbnail":"images/balenciaga-shoes.jpg"
    },
    {
        "title":"black sunglasses",
        "description":"make fashion with health",
        "price":16.58,
        "thumbnail":"images/black-sunglasses.jpg"
    },
    {
        "title":"fashion dress",
        "description":"the brand new dress for women fashion",
        "price":38.12,
        "thumbnail":"images/dress-for-girls.jpg"
    },
    {
        "title":"LV shoes",
        "description":"the brand new shoes for fashion",
        "price":490.08,
        "thumbnail":"images/louis-vuitton-shoes.webp"
    },
    {
        "title":"LV sneaker",
        "description":"the brand new sneaker 2022 for fashion",
        "price":94.93,
        "thumbnail":"images/louis-vuitton-sneaker.jpg"
    },
    {
        "title":"LV T-shirt",
        "description":"the brand new LV t-shirt",
        "price":70.98,
        "thumbnail":"images/louis-vuitton-tshirt.webp"
    },
    {
        "title":"Gucci pants",
        "description":"the brand new gucci pant for men",
        "price":56.98,
        "thumbnail":"images/gucci-pants.jpg"
    }
]
balanceHolder.textContent = `$ ${balance}`

// OPEN AND CLOSE CATEGORIES 
let width = window.innerWidth
logo.addEventListener("click",()=>{
    if(width <= 755){
        categories.style.width=width+"px"
        categories.style.left="0"
    }else{
        categories.style.width="350px"
        categories.style.left="0"
    }
    
})

close.addEventListener("click",()=>{
    categories.style.width="0px"
    categories.style.left="-10%"
})

// OPPEN SUB CATEGORIES 

openershirts.addEventListener("click",()=>{
    subCat.forEach((e)=>{
        e.style.height = "0";
        e.style.visibility = "hidden";
    })

    shirts.style.height = "auto";
    shirts.style.visibility = "visible";
})
openerPants.addEventListener("click",()=>{
    subCat.forEach((e)=>{
        e.style.height = "0";
        e.style.visibility = "hidden";
    })

    pants.style.height = "auto";
    pants.style.visibility = "visible";
})
openerTshirts.addEventListener("click",()=>{
    subCat.forEach((e)=>{
        e.style.height = "0";
        e.style.visibility = "hidden";
    })

    tshirts.style.height = "auto";
    tshirts.style.visibility = "visible";
})
openerShoes.addEventListener("click",()=>{
    subCat.forEach((e)=>{
        e.style.height = "0";
        e.style.visibility = "hidden";
    })

    shoes.style.height = "auto";
    shoes.style.visibility = "visible";
})

// ANIMATING ACCOUNT DETAILS SECTION 
accountControler.addEventListener("click",()=>{
    account.style.display = "flex";
    account.style.visibility = "visible";
    account.style.height= "auto"
})
closeAccount.addEventListener("click",()=>{
    account.style.display = "none";
    account.style.visibility = "hidden";
    account.style.height= "0"
})

// ACTIVATING THE ACTIVE PAGE LINK 
navigationLink.forEach((f)=>{
    f.addEventListener("click",()=>{
        navigationLink.forEach((r)=>{
            r.classList.remove("active");
        })
        f.classList.add("active");
    })
})



// INTEGRATING THE PAGES 
 navLinkHome.addEventListener("click",()=>{
    content.forEach((e)=>{
        e.classList.remove("active-page")
    })
    pageHome.classList.add("active-page")
})

navLinkAbout.addEventListener("click",()=>{
    content.forEach((e)=>{
         e.classList.remove("active-page")
    })
    pageAbout.classList.add("active-page")
})

navLinkContact.addEventListener("click",()=>{
    content.forEach((e)=>{
         e.classList.remove("active-page")
    })
    pageContact.classList.add("active-page")
})


//FILLING THE OBJECTS
let objectCounter=0;
let divCounter=0;
products.forEach((product)=>{
    let div = document.createElement("div")
    div.classList.add("product")
    div.setAttribute("data-index",divCounter)
    productsContainer.appendChild(div)
    divCounter++
})


// SELECTING ALL PRODUCTS
const allProducts = document.querySelectorAll(".product")


let productIndex
objectCounter = 0
products.forEach((product)=>{
    let productTitle = product.title
    let productDescription = product.description
    let productPrice = product.price
    let productImage = product.thumbnail
    

    allProducts.forEach((prod)=>{
        productIndex = prod.dataset['index']
        if(productIndex == objectCounter){
            prod.setAttribute("data-price",productPrice)

            let imageDiv = document.createElement("div")
            imageDiv.classList.add("image")
            let actualImage = document.createElement("img")
            actualImage.setAttribute("src",productImage)
            imageDiv.appendChild(actualImage)
            prod.appendChild(imageDiv)

            let titleDiv = document.createElement("div")
            titleDiv.classList.add("title")
            let actualTitle = document.createElement("span")
            actualTitle.textContent = productTitle
            titleDiv.appendChild(actualTitle)
            prod.appendChild(titleDiv)

            let descriptionDiv = document.createElement("div")
            descriptionDiv.classList.add("description")
            let actualdescription = document.createElement("span")
            actualdescription.textContent = productDescription
            descriptionDiv.appendChild(actualdescription)
            prod.appendChild(descriptionDiv)

            let priceAndAddToCartDiv = document.createElement("div")
            priceAndAddToCartDiv.classList.add("price-and-add-to-cart")

            let priceDiv = document.createElement("div")
            priceDiv.classList.add("price")
            let actualPrice = document.createElement("span")
            actualPrice.textContent = productPrice
            priceDiv.appendChild(actualPrice)
            priceAndAddToCartDiv.appendChild(priceDiv)

            let addCartDiv = document.createElement("div")
            addCartDiv.classList.add("add-cart")
            addCartDiv.setAttribute("data-index",productIndex)
            let imageIcon1 = document.createElement("img")
            imageIcon1.setAttribute("src","images/add.png")
            addCartDiv.appendChild(imageIcon1)

            let imageIcon2 = document.createElement("img")
            imageIcon2.setAttribute("src","images/cart.png")
            addCartDiv.appendChild(imageIcon2)

            let span = document.createElement("span")
            span.textContent = "add to cart"
            addCartDiv.appendChild(span)

            priceAndAddToCartDiv.appendChild(addCartDiv)

            prod.appendChild(priceAndAddToCartDiv)
            
        }
        
    })
    objectCounter++
})

products.forEach((product)=>{

})

// SELECTING CART BUTTON
const cartButton = document.querySelectorAll(".add-cart")

const cartContainer = document.querySelector(".cart-items")

let buttonIndex
cartButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        let productCounter=0
        buttonIndex = button.dataset['index']
        products.forEach((product)=>{
            if (productCounter == buttonIndex) {
                let CartDiv = document.createElement("div")
                CartDiv.classList.add("cart-product")
                CartDiv.setAttribute("data-index",productCounter)
                CartDiv.setAttribute("data-price",product.price)

                let imageContainer = document.createElement("div")
                imageContainer.classList.add("image")
                let actualCartImage = document.createElement("img")
                actualCartImage.setAttribute("src",product.thumbnail)
                imageContainer.appendChild(actualCartImage)
                CartDiv.appendChild(imageContainer)

                let title = document.createElement("span")
                title.classList.add("cart-title")
                title.textContent = product.title
                CartDiv.appendChild(title)

                let price = document.createElement("span")
                price.classList.add("cart-price")
                price.setAttribute("data-price",product.price)
                price.textContent="$"+product.price
                CartDiv.appendChild(price)

                let checkOutAndRemove = document.createElement("div")
                checkOutAndRemove.classList.add("check-out-and-remove")

                let checkOut = document.createElement("div")
                checkOut.classList.add("checkout")
                checkOut.setAttribute("data-index",productCounter)

                let checkOutImage = document.createElement("img")
                checkOutImage.setAttribute("src","images/checkout.png")
                checkOut.appendChild(checkOutImage)

                let remove = document.createElement("div")
                remove.classList.add("remove")
                remove.setAttribute("data-index",productCounter)

                let removeImage = document.createElement("img")
                removeImage.setAttribute("src","images/remove.png")
                remove.appendChild(removeImage)

                checkOutAndRemove.appendChild(checkOut)
                checkOutAndRemove.appendChild(remove)

                CartDiv.appendChild(checkOutAndRemove)
                cartContainer.appendChild(CartDiv)
            }

            productCounter++
        })
    })
})


let cartElement=[]
let cartElementRemover=[]
let cartElementCheckout=[]

navLinkCart.addEventListener("click",()=>{
    content.forEach((e)=>{
         e.classList.remove("active-page")
    })
    pageCart.classList.add("active-page")

    // SELECTING CART ELEMENT
    const cartElementt = document.querySelectorAll(".cart-product")
    cartElement = cartElementt

    // SELECTING CART ELEMENT REMOVAL
    const cartElementRemoverr = document.querySelectorAll(".remove")
    cartElementRemover = cartElementRemoverr

    // SELECTING CART ELEMENT CHECKOUT
    const cartElementCheckoutt = document.querySelectorAll(".checkout")
    cartElementCheckout = cartElementCheckoutt
})

// INTEGRATING WITH CART ELEMENT 
let cartIndex
let index
let price
cartElementRemover.forEach((e)=>{
    e.addEventListener("click",()=>{
        index=e.dataset['index']
        cartElement.forEach((g)=>{
            cartIndex = g.dataset['index']
            if(cartIndex == index){
                g.classList.add("remove-item")
            }
        })
    })
})
balanceHolder.textContent = `$ ${balance}`


console.log(cartElementCheckout);
cartElementCheckout.forEach((e)=>{
    e.addEventListener("click",()=>{
        index=e.dataset['index']
        cartElement.forEach((g)=>{
            cartIndex = g.dataset['index']
            if(cartIndex == index){
                price = g.dataset['price']
                balance = balance-price
                alert("Your account is going to be charged with $"+price+" and your account will be left with $"+balance)
                g.classList.add("remove-item")
                // INTEGRATING THE BALANCE AREA 
                balanceHolder.textContent = `$ ${balance}`
            }
        })
    })
})


let counter=2
let bar = document.querySelector(".bar")
let menu = document.querySelector(".links")
bar.addEventListener("click",()=>{
    if(counter%2 != 0){
        menu.style.display = "none"
    }else{
        menu.style.display = "flex"
    }
    counter++
})
