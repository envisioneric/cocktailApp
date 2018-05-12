function findDrink(){
	// save user input here
	var drinkSearch = document.getElementById('drinkSearch').value;
	document.getElementById('drinkBox').innerHTML = "";

	$.ajax({
		url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch,
		dataType: "json",



		success: function(myRecipes) {
			let drinkArray = myRecipes.drinks;
			if(drinkArray == null){
				document.getElementById("drinkBox").innerHTML =
				"<p class='error'>Sorry, this is not a drink!</p>"
			} else {
				for(i = 0; i < drinkArray.length; i++){
					console.log(drinkArray[i].strDrink);
					let drinkName = drinkArray[i].strDrink;
					let drinkThumb = drinkArray[i].strDrinkThumb;
					let drinkCategory = drinkArray[i].strCategory;
					let drinkIngredients = 
					"<span class='ingredientsBold'>Recipe: </span>" 
					+ drinkArray[i].strIngredient1 
					+ ", " 
					+ drinkArray[i].strIngredient2 
					+ ", " 
					+ drinkArray[i].strIngredient3 
					+ ".";
					let drinkInstructions = drinkArray[i].strInstructions;
				// search results will display these elements.
				document.getElementById("drinkBox").innerHTML += 
				"<div class='drinkItem col-lg-4 col-md-4 col-sm-6 col-xs-12'>" 
				+ "<img src='" + drinkThumb + "'>" 
				+ "<h1 class='drinkTitle'>" + drinkName +"</h1>" 
				+ "<h2 class='drinkCategory'>" + drinkCategory + "</h2>" 
				+ "<div class='ingredientsWrapper'>" 
				+ "<p class='ingredients'>" + drinkIngredients + "</p>" 
				+ "</div>" 
				+ "<p class='drinkInstructions mb-0'>"+ drinkInstructions + "</p>" 
				+ "</div>"
				var resetDisplay = function() {
					$('#drinkBox').html('');
				}
			}
		}
	},
	type: 'GET'
})
}

$("#btnSearch").on('click', function(){
	findDrink();
});

$("#drinkSearch").on('keypress', function(event){
	if(event.keyCode === 13) {
		findDrink();
	}
});

