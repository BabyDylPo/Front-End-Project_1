
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = () => {
  // To iterate through the dog POJO 
  // I chose to create an Array of each one of the keys
  // Then I will key into dogs[Array[i]]
  // I think this will work... idk if some other way else is better... 
  // there's probably better ways
  
  // dogsKeyArray is an Array from the keys of the dogs Object
  // used to iterate through the POJO of Dogs and their respective Links
  let dogsKeyArray = Array.from(Object.keys(dogs));
  // dogsLinksArray is used to easily iterate and transport all of the HTML links
  let dogLinksArray = [];

  // iterate through dogsKeyArray enabling dogKey to be able to key into dogs 
  dogsKeyArray.forEach(( dogKey ) => {
    // create an <li> element template to attack dog name and link to
    let $dogLink = $("<li></li>");
    $dogLink.addClass("dog-link");

    // linkCreator will create a new link and now we append to $dogLink
    $dogLink.append(linkCreator(dogKey, dogs));
    // store in dogLinksArray for use in attackDogLinks()
    dogLinksArray.push($dogLink);
  });

  return dogLinksArray;
}

const linkCreator = (key, object) => {
  // creating an <a> element soon to be added to DOM
  let $newLink = $("<a></a>");

  // set innerHTML to the key(name of dog)
  $newLink.text(key);

  // set href attribute to the value(link to dog information)
  $newLink.attr("href", object[key]);

  return $newLink;
}

const attachDogLinks = () => {
  const $dropDownDogList = $(".drop-down-dog-list");
  let dogLinks = dogLinkCreator();

  // iterate through dogLinks and append the <li> elements to $dropDownDogList
  dogLinks.forEach(( $link ) => {
    // individual link appending happens below
    $dropDownDogList.append($link);
  })

  // probably unnecessary
  console.log("woof")
}

const handleEnter = () => {
  // show list of dogs when mouse is over .drop-down-dog-nav
  let $dropDownTrigger = $(".drop-down-dog-nav");
  $dropDownTrigger.mouseenter(() => {
    $(".dog-link").show();
  });
}

const handleLeave = () => {
  // hide list of dogs when mouse is over .drop-down-dog-nav
  let $dropDownTrigger = $(".drop-down-dog-nav");
  $dropDownTrigger.mouseleave(() => {
    $(".dog-link").hide();
  });
}

attachDogLinks();
handleEnter();
handleLeave();


