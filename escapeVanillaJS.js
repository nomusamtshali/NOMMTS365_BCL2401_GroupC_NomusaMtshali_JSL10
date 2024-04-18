document.addEventListener("DOMContentLoaded", () => {
  // 🪲 Bug: Incorrect ID used for attaching the event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // 🪲 Bug: Incorrect element ID
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    // 🪲 Bug: What's mssing from JS concepts?
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // 🪲 Bug: Incorrect function call
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(", ")}`;
  });

 // 🪲 Bug: Asynchronous function ?
 document.getElementById("solveRoom3").addEventListener("click", async () => { // added the async keyword to the event listener function in order to turn the function into an asynchronous function.
    
    const response = await fetch('directions.json'); 
    const directions = await response.json();
    const message = await navigateLabyrinth(directions); // replaced the .then() methods with the await keywords in order to take advantage of the async/await syntax.

    // 🪲 Bug: Incorrect method
    document.getElementById("room3Result").textContent = message; // used .textContent in order to return the complete text content, including the hidden text (message).
                });
        });

function findMostRecentBook(books) {
  // 🪲 Bug: Logic error
  return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book  : mostRecent); // in order to find the most recent book, I used > (greater than) instead of < (less than) in the comparison of publication dates. 
}

function findIntersection(setA, setB) {
  // 🪲 Bug: Incorrect logic
  const intersection = new Set([...setA].filter(concept => setB.has(concept))); // used the spread operator (...) to convert the sets to arrays. the findIntersection function will now use set operations and array methods to find the intersection between the two input sets, ensuring that only the elements present in both sets will be/are included in the output.
  // implemented an array.prototype.filter() method as the filter() method will iterate through each element of the array and apply the provided callback function to each element. If the callback function returns true, the element will get included in the new array that the filter() creates.
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) { // this loop iterates through the directions array and logs each step to the console.
    // 🪲 Bug: No delay
  await new Promise((resolve) => setTimeout(resolve, 1000)); // the await keyword will pause the execution of the function until the Promise resolves. this means that the function will wait for 1 second before moving on to the next line.
    console.log(`Navigating: ${direction.step}`); // the (current) step of the labyrinth navigation will be logged to the console.
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
} // once the loop finishes iterating through all the elements of directions, the function will return a string, which is the final message displayed.
 