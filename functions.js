async function getAllRecipes() {
  recipeBox.classList.remove("hidden");
  const result = await fetch(
    `https://api.edamam.com/search?q=${userInputIngredients}&app_id=${appId}&app_key=${apiKey}${urlData}`
  );
  const data = await result.json();
  recipes=data.hits;
  displayRecipe(recipes[0]);
}

//https://api.edamam.com/search?q=${userInputIngredients}&app_id=${appId}&app_key=${apiKey}${urlData}
let dietry = "dietry requirement";
let allergy = "allergy";

function allergyChecker() {
  //Collects the allergy and dietry information from the form and pushes anything that's been checked into the allery and dietry arrays in order to send off for the search
  let allergyArr = [
    { name: "vegan", type: dietry, checked: form.vegan.checked },

    { name: "vegetarian", type: dietry, checked: form.vegetarian.checked },
    { name: "gluten-free", type: dietry, checked: form.glutenfree.checked },
    { name: "nuts", type: allergy, checked: form.nuts.checked },
    { name: "eggs", type: allergy, checked: form.eggs.checked },
    { name: "milk", type: allergy, checked: form.milk.checked },
  ];

  allergyArr.map((i) => {
    if (i.checked) {
      if (i.type === dietry) {
        dietryArr.push(i);
      }
      if (i.type === allergy) {
        allergiesArr.push(i);
      }
    }
  });
  urlBuilder();
}



function urlBuilder(){
  userInputIngredients = form.search.value;
  if(!userInputIngredients){
    userInputIngredients = "falafel"
  }
  //Takes the allergy and dietry arrays and turns them into urls
  excludeUrl=""
  healthUrl=""

  for(let i=0; i<allergiesArr.length; i++){
    excludeUrl+=`&excluded=${allergiesArr[i].name}`;
  }

  for(let i=0; i<dietryArr.length; i++){
    healthUrl+=`&health=${dietryArr[i].name}`;
  }
  urlData = excludeUrl + healthUrl
  fullUrl = `https://api.edamam.com/search?q=${userInputIngredients}&app_id=${appId}&app_key=${apiKey}${urlData}`
  console.log(fullUrl)
  getAllRecipes();

}



//
