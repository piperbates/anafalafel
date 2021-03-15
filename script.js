let allergiesArr = [];
let dietryArr = [];
let recipes=[]

submitButton.addEventListener("click", (e) => {
  allergiesArr=[];
  dietryArr=[];
  e.preventDefault();
  allergyChecker();
});

let excludeUrl=""
let healthUrl=""

let urlData = excludeUrl + healthUrl
let userInputIngredients=""


let fullUrl = `https://api.edamam.com/search?q=${userInputIngredients}&app_id=${appId}&app_key=${apiKey}${urlData}`

// urlBuilder(userInputHealth, userInputAllergies)
// /*
// a url builder that takes in the users requests and searches using the above function
//  */
