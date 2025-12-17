const url = "https://openapi.programming-hero.com/api/categories"

const removeActive = () => {
    const allCategories = document.querySelectorAll(".category");
    allCategories.forEach (clikced => clikced.classList.remove("active"));
}

const plantsdetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch (url)
    .then (res => res.json())
    .then (data => displayPlantsDetails(data.plants));
}

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

const loadCategories = () => {
    fetch (url)
    .then (res => res.json())
    .then (data => displayCategories(data.categories));
} 

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


const loadPlants = (id) => {
    document.getElementById("all-plants").classList.add("hidden");
    document.getElementById("spinner").classList.remove("hidden");
    const url = "https://openapi.programming-hero.com/api/plants";

    fetch (url)
    .then (res => res.json())
    .then (data => displayPlants(data.plants));
}


const displayPlants = (plants) => {
    const plantsContainer = document.getElementById("plants-container");
    plantsContainer.innerHTML = "";

    for (const plant of plants) {
        const allPlants = document.createElement("div");
        allPlants.innerHTML = 
                    `<div onclick="plantsdetails(${plant.id})" class="border border-green-500 rounded-md shadow-lg p-4 max-h-[450px]">
                            <img class="h-50 w-full rounded-lg shadow-sm mx-auto" src="${plant.image}"/>
                            <div class="space-y-3 mt-4">
                                <h3 class="text-[14px]">${plant.name}</h3>
                                <p class="text-xs text-gray-600"> ${plant.description}</p>
                                <div class="flex justify-between items-center">
                                    <h3 class="text-[14px] text-green-800">${plant.category}</h3>
                                    <p class="text-[14px]"> ${plant.price} Nok</p>
                                </div>
                                <button id="btn" class="bg-green-900 text-white w-full rounded-md p-2 cursor-pointer">Add to Cart</button>
                           </div>   
                     </div>`;
        
        plantsContainer.append(allPlants);

    document.getElementById("all-plants").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
    }
}

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

