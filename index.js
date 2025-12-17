const url = "https://openapi.programming-hero.com/api/categories"
let cart = [];
let total = 0;

// remove active class
const removeActive = () => {
    const allCategories = document.querySelectorAll(".category");
    allCategories.forEach (clikced => clikced.classList.remove("active"));
}

// load plant details
const plantsdetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch (url)
    .then (res => res.json())
    .then (data => displayPlantsDetails(data.plants));
}

//display plant details
const displayPlantsDetails = (plant) => {
    console.log(plant)
      const displaydetails = document.getElementById("display-details");
      displaydetails.innerHTML = `<div class="space-y-4">
                                    <img class="h-70 w-100 rounded-lg shadow-sm mx-auto" src="${plant.image} " alt="plant image"/>
                                    <div class="flex justify-between items-center">
                                        <h1 class="text-xl font-semibold">${plant.name} </h1>
                                        <p class="text-xl font-semibold">${plant.price} </p>
                                    </div>
                                    <p class="text-gray-600">${plant.description}</p>
                                 </div>  `;
    document.getElementById("my_modal_3").showModal();
}

//load categories
const loadCategories = () => {
    fetch (url)
    .then (res => res.json())
    .then (data => displayCategories(data.categories));
} 


//display plant categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categoryContainer.innerHTML= "";
    for(const category of categories){
        const allCategory = document.createElement("li");

        allCategory.innerHTML = 
                  `<li id="category-num-${category.id}" onclick="loadByCategories('${category.id}')" class="category text-[16px] text-gray-600 cursor-pointer">${category.category_name}</li>`;
        
                   categoryContainer.append(allCategory);
            
    }
}

//load all plants
const loadPlants = (id) => {
    document.getElementById("all-plants").classList.add("hidden");
    document.getElementById("spinner").classList.remove("hidden");
    const url = "https://openapi.programming-hero.com/api/plants";

    fetch (url)
    .then (res => res.json())
    .then (data => displayPlants(data.plants));
}


//display plants
const displayPlants = (plants) => {
    const plantsContainer = document.getElementById("plants-container");
    plantsContainer.innerHTML = "";

    for (const plant of plants) {
        const allPlants = document.createElement("div");
        allPlants.innerHTML = 
                    `<div class="border border-green-500 rounded-md shadow-lg p-4 max-h-[450px]">
                            <img onclick="plantsdetails(${plant.id})" class="plant-img h-50 w-full rounded-lg shadow-sm mx-auto" src="${plant.image}"/>
                            <div class="space-y-3 mt-4">
                                <h3 class="name text-[14px]">${plant.name}</h3>
                                <p class="text-xs text-gray-600"> ${plant.description}</p>
                                <div class="flex justify-between items-center">
                                    <h3 class="text-[14px] text-green-800">${plant.category}</h3>
                                    <p class="text-[14px]"> 
                                    <span class= "price"> ${plant.price} </span> Nok </p>
                                </div>
                                <button onclick="addToCart(this)" class="bg-green-900 text-white w-full rounded-md p-2 cursor-pointer">Add to Cart</button>
                           </div>   
                     </div>`;
        
        plantsContainer.append(allPlants);

    document.getElementById("all-plants").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
    }
}

//load plants by categories
const loadByCategories = (id) =>  {
    const currentCategory = document.getElementById(`category-num-${id}`);
    removeActive();
    currentCategory.classList.add("active");
    
    document.getElementById("all-plants").classList.add("hidden");
    document.getElementById("spinner").classList.remove("hidden");

  fetch (`https://openapi.programming-hero.com/api/category/${id}`)
  .then(res => res.json())
  .then(data => displayPlants(data.plants));

  document.getElementById("all-plants").classList.remove("hidden");
  document.getElementById("spinner").classList.add("hidden");
  
};


loadPlants();
loadCategories();


//add to cart feature
const addToCart = (btn) => {
    const plantCart = btn.parentNode.parentNode;
    const plantImg = plantCart.querySelector(".plant-img").src;
    const plantName = plantCart.querySelector(".name").innerText;
    let price = Number(plantCart.querySelector(".price").innerText);
    const selectedItem = {
        plantName:plantName,
        plantImage: plantImg,
        plantPrice: price,
    };
    cart.push(selectedItem);
    displayCart(cart);
    total = total + price;
    displayTotal(total);
}


//displaying items to cart
const displayCart = (cart) => {
const container = document.getElementById("cart-container");
container.innerHTML = "";

for (let item of cart){
    const cartItem = document.createElement("div"); 
    cartItem.innerHTML = `<div class="relative flex flex-row gap-4 items-center whitespace-normal bg-green-100 shadow-md rounded-md">
                    <img class="h-10 w-10 rounded-lg" src="${item.plantImage}" alt=""/>
                    <div class="">
                        <h2 class="text-gray-600 font-semibold plant-title"> ${item.plantName} </h2>
                        <p class="text-gray-600 font-medium plant-price"> ${item.plantPrice}Nok</p>
                    </div>
                    <i onclick="removeCart(this)" class="fa-solid fa-xmark absolute top-[-1] right-0 md:top-2 md:right-2 text-gray-600 cursor-pointer hover:text-red-600"></i>
                </div>`;
                container.append(cartItem);
}

}


//calculating total price
const displayTotal = (val) => {
 document.getElementById("total-price").innerHTML = val;
}


// remove items from cart
const removeCart = (btn) => {
    const item = btn.parentNode;
    const plantTitleToRemove = item.querySelector(".plant-title").innerText;
    const plantPrice = parseFloat(item.querySelector(".plant-price").innerText);
    console.log(plantPrice)


    cart = cart.filter (
        item => item.plantName != plantTitleToRemove
    );
    total = total -plantPrice; 

    displayCart(cart);
    displayTotal(total);
    console.log(cart);
}
