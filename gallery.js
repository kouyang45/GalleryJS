var chico=[
  { description: "Bidwell Park",
  picture:"http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg",
  from:"bidwellpark.org/"
  },
  { description: "Bear Hole",
  picture:"https://s-media-cache-ak0.pinimg.com/736x/91/51/cd/9151cdacefa31f37bbd2fdcbbef89f1b.jpg",
  from:"pinimg.com"
  },
  { description: "Observatory",
  picture:"http://robinindar.com/wp-content/uploads/2015/02/observatory-06-006.jpg",
  from:"robinindar.com"
  },
  { description: "Beach Hut",
  picture:"http://restaurantschico.com/wp-content/uploads/2012/01/restaurants-chico-ca-beach-hut-deli.jpg",
  from:"restaurantschico.com"
  },
  { description: "Bidwell Mansion",
  picture:"http://c8.alamy.com/comp/BY16WE/elk238-x095-california-chico-bidwell-mansion-state-historic-park-1865-BY16WE.jpg",
  from:"alamy.com"
  }];
var current;
function shuffleGallery()
{
  var randomNumber= chico[Math.floor(Math.random()*chico.length)];
  while (current == randomNumber)
  {
      randomNumber= chico[Math.floor(Math.random()*chico.length)];
  }
  current = randomNumber;
  document.getElementById("caption").innerHTML= current.description;
  document.getElementById("picture").src= current.picture;
  document.getElementById("source").innerHTML= "Image courtesy of: " + current.from
  console.log(randomNumber);
}
