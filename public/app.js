var app = function(){

  var catArray = [
    {name: "Brian", favFood: "Cheese", imageURL: "images/cat1.jpeg"},
    {name: "Kitty", favFood: "Mice", imageURL: "images/cat2.jpg"},
    {name: "Poppy", favFood: "Cat food", imageURL: "images/cat3.jpg"},
    {name: "Tom", favFood: "Kibble", imageURL:"images/cat4.jpg"},
    {name: "Sookie", favFood: "Chicken", imageURL:"images/cat5.jpg"},
    {name: "Tabby", favFood: "Felix", imageURL:"images/cat6.jpg"},
    {name: "Fluffy", favFood: "Grass", imageURL:"images/cat7.png"}
  ]

  for(cat of catArray){
    var catInfo = listCatInfo(cat.name, cat.favFood, cat.imageURL);
    addCat(catInfo);
  }

};

var createCatName = function(name){
  var catName = document.createElement('li');
  catName.innerText = "Name: " + name;
  return catName;
}

var createCatFavouriteFood = function(food){
  var favouriteFood = document.createElement('li');
  favouriteFood.innerText = "Favourite food: " + food;
  return favouriteFood;
}

var createCatImage = function(imageURL){
  var image = document.createElement('li');
  image.classList.add("catImage");
  image.innerHTML = "<img src='" + imageURL + "' alt='cat image'/>"
  return image;
}

var listCatInfo = function(name, favFood, imageURL){
  var listName = createCatName(name);
  var listFavFood = createCatFavouriteFood(favFood);
  var listImageURL = createCatImage(imageURL);
  var catList = document.createElement('ul');
  catList.classList.add("cat");
  catList.appendChild(listName);
  catList.appendChild(listFavFood);
  catList.appendChild(listImageURL);
  return catList;
}

var addCat = function(catInfo){
  var catSection = document.getElementById('cats');
  catSection.appendChild(catInfo);
}

window.onload = app;
