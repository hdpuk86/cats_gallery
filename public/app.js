var app = function(){

  var catArray = [
    {name: "Brian", favFood: "Cheese", imageURL: "https://www.millbryhill.co.uk/blog/wp-content/uploads/2012/09/halloween_costume_dog_black_cat.jpg"},
    {name: "Kitty", favFood: "Mice", imageURL: "http://cdn.vashtie.com/blog/wp-content/uploads/2009/06/hello-kitty-hat1.jpg"},
    {name: "Poppy", favFood: "Cat food", imageURL:"https://i.pinimg.com/originals/7d/88/13/7d881383dc98cf78ae12f2b7aa602316.jpg"},
    {name: "Tom", favFood: "Kibble", imageURL:"https://i.pinimg.com/736x/ac/ca/8c/acca8cdbd15fd9f5f9079bccb27f5cdf--cat-hat-pug-dogs.jpg"},
    {name: "Sookie", favFood: "Chicken", imageURL:"http://3.bp.blogspot.com/-KB3udSxzho0/To8qKvu3MZI/AAAAAAAAL10/PYNIGrsgxUo/s1600/cat.jpg"},
    {name: "Tabby", favFood: "Felix", imageURL:"http://www.likecool.com/Gear/Pet/Halloween%20Chris%20Woebken%20dresses%20a%20dog%20up%20like%20a/Halloween-Chris-Woebken-dresses-a-dog-up-like-a.jpg"},
    {name: "Fluffy", favFood: "Grass", imageURL:"http://www.petful.com/wp-content/uploads/2010/10/dog-dressed-as-cat-costume.png"}
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
  image.innerHTML = "<img width='500' src='" + imageURL + "' alt='cat image'/>"
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
