const url = "https://openapi.programming-hero.com/api/categories"

const loadCategories = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
} 

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categoryContainer.innerHTML= "";
    for(const category of categories){
        const allCategory = document.createElement("div");

        allCategory.innerHTML = `<div>
                    <ul class="space-y-6">
                        <li class="text-[16px] text-gray-600 cursor-pointer">${category.category_name}</li>
                    </ul>
                   </div>`;
        
                   categoryContainer.append(allCategory);
            
    }
}













loadCategories();

