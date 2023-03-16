let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1. Write a JavaScript statement that selects the #main-titleID element. 
  //Remember there are a couple of ways to query id. 
  //Change the text of the title to something shorter.
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "Need for speed"; 

  // Part 2. Select the body and change the background-color to a new color of your choice.
  const bodyEl = document.querySelector("body");
  bodyEl.style.backgroundColor = '#9DC6E6';

  // Part 3. Select DOM's Favorite Things list and remove the last list item.
  const favoriteThings = document.querySelector('#favorite-things');
  const lastItem = favoriteThings.lastElementChild;
  favoriteThings.removeChild(lastItem);

  // Part 4. Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
  const specialTitle = document.querySelectorAll('.special-title');
    specialTitle.forEach(title => {
    title.style.fontSize = '2rem';
  });

  // Part 5. Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  const racesList = document.querySelector('#past-races');
  const raceItems = racesList.childNodes;
  for (let i = 0; i < raceItems.length; i++) {
      if (raceItems[i].textContent === 'Chicago') {
      raceItems[i].remove();
      break; 
    }
  }

  // Part 6. Let's add to DOM's Past Races list. Create a new <li>element, 
  // change the new <li>text to the name of a city, and append it to the Past Races list.
  const newRace = document.createElement('li');
  newRace.textContent = 'Paris';
  racesList.appendChild(newRace);

  // Part 7. Create a new .blog-post corresponding to the new city added in Part 6. 
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, 
  // and a new <p> with some text. Think about what order you want to create the elements, 
  // and what order you want to append them in.

  const mainDiv = document.querySelector('.main');

  const blogPost = document.createElement('div');
  blogPost.classList.add('blog-post', 'purple');

  const cityHeading = document.createElement('h1');
  cityHeading.textContent = 'Paris, I love you';

  const cityParagraph = document.createElement('p');
  cityParagraph.textContent = 'I WON THE RACE ON THE CHAMPS ELYSEES!';

  blogPost.appendChild(cityHeading);
  blogPost.appendChild(cityParagraph);

  mainDiv.appendChild(blogPost);
  
  

  // Part 8 Query select the #quote-titleID element and add a click event handler. 
  // That event handler should use the function randomQuote whenever #quote-title is clicked
  document.querySelector('#quote-title').addEventListener('click', randomQuote);

  // Part 9
  /**
   * Select all .blog-post class elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.

The mouseout handler should toggle the class .purple
The mouseenter handler should toggle the class .red
Use the document node property .classList and the document node method .toggle().
   */

const blogPosts = document.querySelectorAll('.blog-post');

blogPosts.forEach(post => {

  post.addEventListener('mouseout', () => {
    event.preventDefault();
    post.classList.toggle('purple');
  });

  post.addEventListener('mouseenter', () => {
    event.preventDefault();
    post.classList.toggle('red');
  });
});
// I want to change color of blog-posts
// blogPosts.forEach(post => post.style.backgroundColor = '#455866');

});
