function displayRecipe(){
    recipeBox.classList.remove("hidden");
    recipeSelectDisplay.classList.add("hidden")
    recipeBox.children[1].innerText="";
    
    console.log(recipes)


    for(let i=0; i<recipes.length; i++){

        let li=document.createElement("li");
        li.classList.add("recipe-list-item")
        let box=document.createElement("div");
        box.classList.add("recBoxInfo")

        let infoBox = document.createElement("div");


        let recLink = document.createElement("a")
        recLink.href=recipes[i].recipe.url;
        let recTitle=document.createElement("h2");
        recTitle.innerText=recipes[i].recipe.label;
        recLink.appendChild(recTitle)
        recLink.setAttribute('target', '_blank')
        // recTitle.addEventListener("click", ()=>{
            
        //     //sends recipes[i] to displayPickedRecipe() function
        //     displayPickedRecipe(recipes[i].recipe)
        // })

        let recipeBoxFull = document.createElement("div");
        recipeBoxFull.classList.add("recipe-box-full")
        let timeUl = document.createElement("ul");
        timeUl.classList.add("search-time-list")

        let recTime = document.createElement("li");
        recTime.innerText = "Time: " + recipes[i].recipe.totalTime + " minutes";
        
        timeUl.appendChild(recTime);

        if(recipes[i].recipe.cuisineType)
        {let recCuisine = document.createElement("li")
            recCuisine.innerText = "Cuisine: " + recipes[i].recipe.cuisineType[0];
            box.appendChild(recCuisine)
            timeUl.appendChild(recCuisine);
        }

        let image=document.createElement("img");
        image.classList.add("search-res-img");
        image.src=recipes[i].recipe.image;

        infoBox.appendChild(image);


        let ingredientBox = document.createElement("div");
        ingredientBox.classList.add("ingredient-box")
        let ingredientsTitle = document.createElement("h4");

        ingredientsTitle.innerText="Ingredients:"
        
        let ingredientList = document.createElement("ul");

        for(let index=0; index<recipes[i].recipe.ingredientLines.length; index++){
            //For the ingredient display on search results
            
            let ingredientItem = document.createElement("li");
            ingredientItem.innerText=recipes[i].recipe.ingredientLines[index];
            ingredientList.appendChild(ingredientItem)   
        }
        ingredientBox.appendChild(ingredientsTitle);
        ingredientBox.appendChild(ingredientList);

        recipeBoxFull.appendChild(infoBox);
        recipeBoxFull.appendChild(ingredientBox)
        box.appendChild(recLink);
        box.appendChild(timeUl);
        box.appendChild(recipeBoxFull);
        li.appendChild(box);

        recipeBox.children[1].appendChild(li)



    }

}

function displayPickedRecipe(recipe){
    recipeBox.classList.add("hidden");
    recipeSelectDisplay.classList.remove("hidden");

    recipeSelectTitle.innerText=recipe.label
    console.log(recipe)
    recipeSelectImg.src=recipe.image;
    for(let i=0; i<recipe.ingredientLines.length; i++){
        let li = document.createElement("li");
        li.innerText=recipe.ingredientLines[i];
        recipeSelectIngredients.appendChild(li)
    }
}

backButton.addEventListener("click", ()=>{
    recipeSelectDisplay.classList.add("hidden")
    recipeBox.classList.remove("hidden")
})