document.addEventListener('DOMContentLoaded', function() {
    const galleryBtn = document.getElementById('gallery-btn');
    const titleScreen = document.querySelector('.title-screen');
    const galleryScreen = document.querySelector('.gallery-screen');
    
    galleryBtn.addEventListener('click', function() {
        titleScreen.style.display = 'none';
        galleryScreen.style.display = 'block';
        // Later we'll add code here to load and display characters
    });
});




/*
// First, let's modify the script.js file to handle the button click and set up our data structure

document.addEventListener('DOMContentLoaded', function() {
  const galleryBtn = document.getElementById('gallery-btn');
  const titleScreen = document.querySelector('.title-screen');
  const galleryScreen = document.querySelector('.gallery-screen');
  
  // Looney Tunes characters data structure (an array of objects)
  const characters = [
      { id: 1, name: "Bugs Bunny", year: 1940, type: "Rabbit", popularity: 10 },
      { id: 2, name: "Daffy Duck", year: 1937, type: "Duck", popularity: 8 },
      { id: 3, name: "Porky Pig", year: 1935, type: "Pig", popularity: 7 },
      { id: 4, name: "Tweety Bird", year: 1942, type: "Canary", popularity: 7 },
      { id: 5, name: "Sylvester", year: 1945, type: "Cat", popularity: 6 },
      { id: 6, name: "Marvin the Martian", year: 1948, type: "Martian", popularity: 5 },
      { id: 7, name: "Wile E. Coyote", year: 1949, type: "Coyote", popularity: 9 },
      { id: 8, name: "Road Runner", year: 1949, type: "Bird", popularity: 8 },
      { id: 9, name: "Tasmanian Devil", year: 1954, type: "Tasmanian Devil", popularity: 7 },
      { id: 10, name: "Yosemite Sam", year: 1945, type: "Human", popularity: 6 }
  ];
  
  // Sort function - Quick Sort implementation
  function quickSort(arr, property, direction = 'asc') {
      if (arr.length <= 1) {
          return arr;
      }
      
      const pivot = arr[Math.floor(arr.length / 2)];
      const less = [];
      const equal = [];
      const greater = [];
      
      for (let element of arr) {
          // Compare based on the property
          const comparison = direction === 'asc' 
              ? element[property] - pivot[property] 
              : pivot[property] - element[property];
              
          if (comparison < 0) {
              less.push(element);
          } else if (comparison > 0) {
              greater.push(element);
          } else {
              equal.push(element);
          }
      }
      
      return [...quickSort(less, property, direction), ...equal, ...quickSort(greater, property, direction)];
  }
  
  // Function to display characters in the gallery
  function displayCharacters(charArray) {
      galleryScreen.innerHTML = `
          <div class="gallery-header">
              <h2>Looney Tunes Character Gallery</h2>
              <div class="sort-controls">
                  <label for="sort-by">Sort by:</label>
                  <select id="sort-by">
                      <option value="name">Name</option>
                      <option value="year">Year</option>
                      <option value="popularity">Popularity</option>
                  </select>
                  <select id="sort-direction">
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                  </select>
                  <button id="sort-btn">Sort</button>
                  <button id="back-btn">Back to Title</button>
              </div>
          </div>
          <div class="characters-grid">
              ${charArray.map(char => `
                  <div class="character-card">
                      <h3>${char.name}</h3>
                      <p>First Appeared: ${char.year}</p>
                      <p>Type: ${char.type}</p>
                      <p>Popularity: ${char.popularity}/10</p>
                  </div>
              `).join('')}
          </div>
      `;
      
      // Add event listeners to new elements
      document.getElementById('sort-btn').addEventListener('click', sortCharacters);
      document.getElementById('back-btn').addEventListener('click', function() {
          galleryScreen.style.display = 'none';
          titleScreen.style.display = 'block';
      });
  }
  
  // Function to sort characters based on user selection
  function sortCharacters() {
      const sortBy = document.getElementById('sort-by').value;
      const sortDirection = document.getElementById('sort-direction').value;
      
      // Special case for sorting by name (string comparison)
      if (sortBy === 'name') {
          const sortedChars = [...characters].sort((a, b) => {
              const comparison = a.name.localeCompare(b.name);
              return sortDirection === 'asc' ? comparison : -comparison;
          });
          displayCharacters(sortedChars);
      } else {
          // Use our quickSort for numeric properties
          const sortedChars = quickSort([...characters], sortBy, sortDirection);
          displayCharacters(sortedChars);
      }
  }
  
  // Event listener for the gallery button
  galleryBtn.addEventListener('click', function() {
      titleScreen.style.display = 'none';
      galleryScreen.style.display = 'block';
      displayCharacters(characters);
  });
}); */