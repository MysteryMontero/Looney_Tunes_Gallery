document.addEventListener('DOMContentLoaded', function() {
    // Predefined character data with images and descriptions
    const characters = [
        { 
            id: 1, 
            name: "Bugs Bunny", 
            year: 1940,
            firstEpisode: "A Wild Hare",
            type: "Rabbit",
            popularity: 10,
            images: [
                'bugs1.jpg',
                'bugs2.jpg',
                'bugs3.jpg'
            ],
            bio: "Starting off with the fan favorite; Bugs Bunny, who's basically the mascot of the francise. Bugs is an anthropomorphic gray and white rabbit famous for his clever and cunning personality. He is known for his famous catchphrase 'Eh, what's up, doc?' and is known for causing mischief or oursmarting his antagonists like Elmer Fudd and the Tazmanian Devil."
        },
        { 
            id: 2, 
            name: "Daffy Duck", 
            year: 1937,
            firstEpisode: "Porky's Duck Hunt",
            type: "Duck", 
            popularity: 8,
            images: [
                'images/Daffy_Duck.jpg',
                'images/daffy-duck-05.jpg',
                'daffy3.jpg'
            ],
            bio: "Daffy Duck, a black and orange duck that used to be known for his distinctive lisp and zany, screwball personality, until it was changed overtime to be portrayed more as Bugs Bunny's rival and self-centered behavior. Daffy is known to get in same situations as his so-called rival Bugs Bunny, buts leans more towards the losing side. Other times he is seen as the main character ironically helping Bugs like in the movie: Looney Tunes: Back in Action."
        },
        { 
            id: 3,
            name: "Porky Pig", 
            year: 1935,
            firstEpisode: "I Haven't Got a Hat",
            type: "Pig", 
            popularity: 7,
            images: [
                'porky1.jpg',
                'porky2.jpg',
                'porky3.jpg'
            ],
            bio: "Daffy Duck is an anthropomorphic black duck known for his distinctive lisp and zany, screwball personality. He's often portrayed as Bugs Bunny's rival and is famous for his comedic and often self-centered behavior."
        },
        { 
            id: 4,
            name: "Tweety Bird", 
            year: 1942, 
            type: "Bird",
            firstEpisode: "A Tale of Two Kitties",
            popularity: 7,
            images: [
                'porky1.jpg',
                'porky2.jpg',
                'porky3.jpg'
            ],
            bio: "Daffy Duck is an anthropomorphic black duck known for his distinctive lisp and zany, screwball personality. He's often portrayed as Bugs Bunny's rival and is famous for his comedic and often self-centered behavior."
        },
        // Add more characters with similar structure
    ];

    // Get the selected character from localStorage
    const selectedCharacter = JSON.parse(localStorage.getItem('selectedCharacter'));
    
    if (!selectedCharacter) {
        alert('No character selected');
        window.location.href = 'gallery.html';
        return;
    }

    // Find the full character details
    const character = characters.find(char => char.id === selectedCharacter.id);

    if (!character) {
        alert('Character not found');
        window.location.href = 'gallery.html';
        return;
    }

    // Update page elements
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-bio').textContent = character.bio;
    document.getElementById('first-appeared').textContent = `First Appeared: ${character.year} in "${character.firstEpisode}"`;
    document.getElementById('character-type').textContent = `Type: ${character.type}`;
    document.getElementById('popularity').textContent = `Popularity: ${character.popularity}/10`;

    // Image gallery functionality
    const characterImage = document.getElementById('character-image');
    const prevBtn = document.getElementById('prev-image');
    const nextBtn = document.getElementById('next-image');

    let currentImageIndex = 0;

    function updateImage() {
        characterImage.src = character.images[currentImageIndex];
    }

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + character.images.length) % character.images.length;
        updateImage();
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % character.images.length;
        updateImage();
    });

    // Initialize first image
    updateImage();
});