document.addEventListener('DOMContentLoaded', function() {
    const charactersContainer = document.getElementById('characters-container');
    const sortBtn = document.getElementById('sort-btn');

    // Make sure this is in your gallery.js file
document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'Title.html';
});
    
    // Looney Tunes characters data
    const characters = [
        { id: 1, name: "Bugs Bunny", year: 1940, firstEpisode: "A Wild Hare", type: "Rabbit", popularity: 10 },
        { id: 2, name: "Daffy Duck", year: 1937, firstEpisode: "Porky's Duck Hunt", type: "Duck", popularity: 8 },
        { id: 3, name: "Porky Pig", year: 1935, firstEpisode: "I Haven't Got a Hat", type: "Pig", popularity: 7 },
        { id: 4, name: "Tweety Bird", year: 1942, firstEpisode: "A Tale of Two Kitties", type: "Canary", popularity: 7 },
        { id: 5, name: "Sylvester", year: 1945, firstEpisode: "Life with Feathers", type: "Cat", popularity: 6 },
        { id: 6, name: "Marvin the Martian", year: 1948, firstEpisode: "Haredevil Hare", type: "Martian", popularity: 5 },
        { id: 7, name: "Wile E. Coyote", year: 1949, firstEpisode: "Fast and Furry-ous", type: "Coyote", popularity: 9 },
        { id: 8, name: "Road Runner", year: 1949, firstEpisode: "Fast and Furry-ous", type: "Bird", popularity: 8 },
        { id: 9, name: "Tasmanian Devil", year: 1954, firstEpisode: "Devil May Hare", type: "Tasmanian Devil", popularity: 7 },
        { id: 10, name: "Yosemite Sam", year: 1945, firstEpisode: "Hare Trigger", type: "Human", popularity: 6 },
        { id: 11, name: "Jeremy Callinan", year: 1864, firstEpisode: "Call the Callinan", type: "Human", popularity: 0}
    ];
    
document.getElementById('compare-btn').addEventListener('click', function() {
    const sortBy = document.getElementById('sort-by').value;
    const sortDirection = document.getElementById('sort-direction').value;
    
    
    const results = document.createElement('div');
    results.className = 'algorithm-comparison';
    results.innerHTML = '<h3>Algorithm Comparison Results</h3>';
    
    const algorithms = ['quickSort', 'bubbleSort', 'insertionSort', 'selectionSort'];
    
    algorithms.forEach(algo => {
        console.time(algo);
        
        // Run the sort
        let sorted;
        if (algo === 'quickSort') sorted = quickSort([...characters], sortBy, sortDirection);
        if (algo === 'bubbleSort') sorted = bubbleSort([...characters], sortBy, sortDirection);
        if (algo === 'insertionSort') sorted = insertionSort([...characters], sortBy, sortDirection);
        if (algo === 'selectionSort') sorted = selectionSort([...characters], sortBy, sortDirection);
        
        console.timeEnd(algo);
        
        // Add to results
        const resultItem = document.createElement('p');
        resultItem.textContent = `${algo}: completed (check browser console for timing)`;
        results.appendChild(resultItem);
    });
    
    // Display results
    const existingResults = document.querySelector('.algorithm-comparison');
    if (existingResults) existingResults.remove();
    document.querySelector('.gallery-header').appendChild(results);
    
    // Show a message about checking the console
    alert('Algorithm comparison complete! Check the browser console (F12) to see timing results.');
});




    // Display initial characters
    displayCharacters(characters);
    
    // Sort button event listener
    sortBtn.addEventListener('click', function() {
        sortCharacters();
    });
    
    // Function to display characters in the grid
    function displayCharacters(charArray) {
        charactersContainer.innerHTML = '';
        
        charArray.forEach(char => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';
            
            characterCard.innerHTML = `
                <h3>${char.name}</h3>
                <p>First Appeared: ${char.year}</p>
                <p>First Episode: "${char.firstEpisode}"</p>
                <p>Type: ${char.type}</p>
                <p>Popularity: ${char.popularity}/10</p>
            `;
            
            charactersContainer.appendChild(characterCard);
        });
    }

    const algorithmInfo = {
        quickSort: "Quick Sort: A divide-and-conquer algorithm with O(n log n) average time complexity. Efficient for large datasets.",
        bubbleSort: "Bubble Sort: A simple comparison algorithm with O(n²) time complexity. Inefficient for large datasets but easy to understand.",
        insertionSort: "Insertion Sort: Builds the final sorted array one item at a time with O(n²) time complexity. Efficient for small or nearly sorted datasets.",
        selectionSort: "Selection Sort: A simple comparison algorithm with O(n²) time complexity that finds the minimum element and puts it at the beginning."
    };
    
    // Quick Sort implementation
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
    
    function bubbleSort(arr, property, direction = 'asc') {
        const result = [...arr];
        const n = result.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                // Compare based on property and direction
                let shouldSwap;
                if (property === 'name') {
                    shouldSwap = direction === 'asc' 
                        ? result[j].name.localeCompare(result[j + 1].name) > 0
                        : result[j].name.localeCompare(result[j + 1].name) < 0;
                } else {
                    shouldSwap = direction === 'asc'
                        ? result[j][property] > result[j + 1][property]
                        : result[j][property] < result[j + 1][property];
                }
                
                if (shouldSwap) {
                    // Swap elements
                    [result[j], result[j + 1]] = [result[j + 1], result[j]];
                }
            }
        }
        
        return result;
    }
    
    // Insertion Sort implementation
    function insertionSort(arr, property, direction = 'asc') {
        const result = [...arr];
        const n = result.length;
        
        for (let i = 1; i < n; i++) {
            const current = result[i];
            let j = i - 1;
            
            // Compare based on property and direction
            let shouldContinue;
            if (property === 'name') {
                while (j >= 0 && ((direction === 'asc' 
                        ? current.name.localeCompare(result[j].name) < 0
                        : current.name.localeCompare(result[j].name) > 0))) {
                    result[j + 1] = result[j];
                    j--;
                }
            } else {
                while (j >= 0 && ((direction === 'asc' 
                        ? current[property] < result[j][property]
                        : current[property] > result[j][property]))) {
                    result[j + 1] = result[j];
                    j--;
                }
            }
            
            result[j + 1] = current;
        }
        
        return result;
    }
    
    // Selection Sort implementation
    function selectionSort(arr, property, direction = 'asc') {
        const result = [...arr];
        const n = result.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minMaxIndex = i;
            
            for (let j = i + 1; j < n; j++) {
                // Compare based on property and direction
                let shouldUpdate;
                if (property === 'name') {
                    shouldUpdate = direction === 'asc'
                        ? result[j].name.localeCompare(result[minMaxIndex].name) < 0
                        : result[j].name.localeCompare(result[minMaxIndex].name) > 0;
                } else {
                    shouldUpdate = direction === 'asc'
                        ? result[j][property] < result[minMaxIndex][property]
                        : result[j][property] > result[minMaxIndex][property];
                }
                
                if (shouldUpdate) {
                    minMaxIndex = j;
                }
            }
            
            if (minMaxIndex !== i) {
                [result[i], result[minMaxIndex]] = [result[minMaxIndex], result[i]];
            }
        }
        
        return result;
    }

    // Function to sort characters based on user selection
    // Replace your existing sortCharacters function with this one
    function sortCharacters() {
        const algorithm = document.getElementById('sort-algorithm').value;
        const sortBy = document.getElementById('sort-by').value;
        const sortDirection = document.getElementById('sort-direction').value;
        
        // Show which algorithm is being used
        const statusMessage = document.createElement('div');
        statusMessage.className = 'sort-status';
        statusMessage.textContent = `Sorting with ${algorithm} by ${sortBy} in ${sortDirection}ending order`;
        statusMessage.innerHTML += `<br><small>${algorithmInfo[algorithm]}</small>`;
        
        // Add or replace status message
        const existingStatus = document.querySelector('.sort-status');
        if (existingStatus) {
            existingStatus.remove();
        }
        document.querySelector('.gallery-header').appendChild(statusMessage);
        
        console.time(algorithm);
        let sortedChars;
        
        // Special case for sorting by name (string comparison)
        if (sortBy === 'name' && algorithm === 'quickSort') {
            sortedChars = [...characters].sort((a, b) => {
                const comparison = a.name.localeCompare(b.name);
                return sortDirection === 'asc' ? comparison : -comparison;
            });
        } else {
            // Use the selected sorting algorithm
            switch(algorithm) {
                case 'bubbleSort':
                    sortedChars = bubbleSort([...characters], sortBy, sortDirection);
                    break;
                case 'insertionSort':
                    sortedChars = insertionSort([...characters], sortBy, sortDirection);
                    break;
                case 'selectionSort':
                    sortedChars = selectionSort([...characters], sortBy, sortDirection);
                    break;
                case 'quickSort':
                default:
                    sortedChars = quickSort([...characters], sortBy, sortDirection);
                    break;
            }
        }
        console.timeEnd(algorithm);
        
        displayCharacters(sortedChars);
    }
    
    displayCharacters(sortedChars);
    function displayCharacters(charArray) {
        charactersContainer.innerHTML = '';
        
        charArray.forEach(char => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';
            
            characterCard.innerHTML = `
                <h3>${char.name}</h3>
                <p>First Appeared: ${char.year}</p>
                <p>Type: ${char.type}</p>
                <p>Popularity: ${char.popularity}/10</p>
            `;
            
            // Add click event to navigate to character detail page
            characterCard.addEventListener('click', () => {
                // Store character data in localStorage to pass to next page
                localStorage.setItem('selectedCharacter', JSON.stringify(char));
                window.location.href = `character-detail.html?id=${char.id}`;
            });
            
            charactersContainer.appendChild(characterCard);
        });
    }
});