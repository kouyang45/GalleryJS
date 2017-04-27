var chico=[
  { description: "bidwell park",
  picture:"https://www.downtownchico.com/bidwell-park.htm",
  from:"downtownchico.com"
  }
  { description: "bear hole",
  picture:"https://www.pinterest.com/pin/446067538063953238/",
  from:"pinterest.com"
  }
  { description: "observatory",
  picture:"http://robinindar.com/portfolio/public-mosaic-art/chico-observatory-night-sky-mosaic/",
  from:"robinindar.com"
  }
  { description: "beach hut",
  picture:"http://restaurantschico.com/beach-hut-deli",
  from:"restaurantschico.com"
  }
  { description: "bidwell mansion"
  picture:"https://www.parks.ca.gov/?page_id=460",
  from:"parks.ca.gov"
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
  console.log(randomNumber);
}
