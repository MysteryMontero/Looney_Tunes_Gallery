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
                'images/Bugs_Bunny.jpg',
                'images/Bugs_Elmer.jpg',
                'images/Big_Chungus.jpg'
            ],
            bio: "Starting off with the fan favorite; Bugs Bunny, who's basically the mascot of the francise. Bugs is an anthropomorphic gray and white rabbit famous for his clever and cunning personality. He is known for his famous catchphrase 'Eh, what's up, doc?' and is known for causing mischief or oursmarting his antagonists like Elmer Fudd and the Tazmanian Devil. Bugs almost always comes out on top in his confrontations. He's often portrayed as cool and collected, rarely losing his composure even in the most chaotic situations. Bugs has been Looney Tunes' most prominent character and was the first cartoon character to get a star on the Hollywood Walk of Fame."
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
                'images/Duck_Dodger.jpg'
            ],
            bio: "Daffy Duck, a black and orange duck that used to be known for his distinctive lisp and zany, screwball personality, until it was changed overtime to be portrayed more as Bugs Bunny's rival and self-centered behavior. Daffy is known to get in same situations as his so-called rival Bugs Bunny, buts leans more towards the losing side. Other times he is seen as the super hero; Duck Dodgersn seen usually facing off against Marvin the Martian."
        },
        { 
            id: 3,
            name: "Porky Pig", 
            year: 1935,
            firstEpisode: "I Haven't Got a Hat",
            type: "Pig", 
            popularity: 7,
            images: [
                'images/Porky_Pig.jpg',
                'images/Cadet.jpg',
                'images/thats_all_folks.jpg'
            ],
            bio: "Porky Pig debuted in 'I Haven't Got a Hat' (1935) and is famous for his stuttering speech and his signature closing line, 'Th-th-th-that's all folks!' As one of the earliest Looney Tunes stars, Porky was the studio's first character to draw mainstream popularity. Despite his speech impediment, Porky is generally depicted as an everyman character—intelligent, kindhearted, and usually the straight man to more outlandish characters like Daffy Duck. Though his prominence decreased with the rise of Bugs Bunny, he remains a foundational character in the Looney Tunes universe."
        },
        { 
            id: 4,
            name: "Tweety Bird", 
            year: 1942, 
            type: "Bird",
            firstEpisode: "A Tale of Two Kitties",
            popularity: 7,
            images: [
                'images/Tweety.jpg',
                'images/Tweety_Sylvester.jpg',
                'images/Tweety_Granny.jpg'
            ],
            bio: "Tweety is a little bird fella that is characterized by his innocent baby-talk voice, yellow feathers, and large head. Don't let his cute appearance fool you—behind his sweet facade, Tweety is quite clever and often outsmarts his nemesis, Sylvester the Cat. His famous catchphrase 'I tawt I taw a puddy tat!' perfectly captures his childlike persona. While often portrayed as vulnerable, Tweety usually finds ingenious ways to escape danger, sometimes with the help of Granny, his owner."
        },
        { 
            id: 5, 
            name: "Sylvester", 
            year: 1945, 
            firstEpisode: "Life with Feathers",
            type: "Cat", 
            popularity: 6,
            images: [
                'images/Sylvester.jpg',
                'images/Sylvester_Bulldog.jpg',
                'images/SylvesterJr.jpg'
            ],
            bio: "Sylvester the Cat is recognizable by his black and white fur, red nose, and his famous lisp that turns 'suffering succotash' into his memorable catchphrase. Eternally hungry and persistently chasing Tweety Bird, Sylvester's schemes inevitably backfire in comical ways. Despite his constant failures, his determination never wavers. Besides his pursuits of Tweety, Sylvester also appeared in cartoons with his son, Sylvester Jr. where he tries to teach his son how to catch prey, and fails in the process."
        },
        { 
            id: 6, 
            name: "Marvin the Martian", 
            year: 1948, 
            firstEpisode: "Haredevil Hare",
            type: "Martian", 
            popularity: 5,
            images: [
                'images/Marvin.jpg',
                'images/Marvin_Bugs.jpg',
                'images/Marvin_Daffy.jpg'
            ],
            bio: "Marvin the Martian is known for his quiet, deadpan demeanor that contrasts with his destructive plans. With his distinctive appearance—a helmet reminiscent of Roman soldiers, skirt-like lower garment, and basketball shoes—Marvin was created as a more formidable opponent for Bugs Bunny. His soft, emotionless voice (inspired by radio character Ned Sparks) makes his frequent threats to destroy Earth all the more unsettling. Often accompanied by his dog K-9, Marvin's schemes typically involve his 'Illudium Q-36 Explosive Space Modulator' and are usually foiled by Bugs Bunny. He is also rivals with Daffy Duck in his Duck Dodgers, though half the time Marvin has an easier time due to Daffy's shenanigans."
        },
        { 
            id: 7, 
            name: "Wile E. Coyote", 
            year: 1949, 
            firstEpisode: "Fast and Furry-ous",
            type: "Coyote", 
            popularity: 9,
            images: [
                'images/Wile.jpg',
                'images/Wile_dynamite.jpg',
                'images/Wile_Runner.jpg'
            ],
            bio: "Wile E. Coyote first appeared alongside the Road Runner in 'Fast and Furry-ous' (1949). A self-proclaimed 'super genius,' Wile E. is perpetually hungry and obsessed with catching the Road Runner, but his elaborate schemes—often involving contraptions from the fictional Acme Corporation—invariably fail in spectacular fashion. Despite endless falls from cliffs, explosions, and other painful mishaps, he never gives up his pursuit. In cartoons without the Road Runner, Wile E. occasionally speaks and matches wits with Bugs Bunny. His persistence despite constant failure has made him a sympathetic and enduring character."
        },
        { 
            id: 8, 
            name: "Road Runner", 
            year: 1949, 
            firstEpisode: "Fast and Furry-ous",
            type: "Bird", 
            popularity: 8,
            images: [
                'images/Road_Runner.jpg',
                'images/Road_Runner_Seeds.jpg',
                'images/Road_Runner_Wile.jpg'
            ],
            bio: "The Road Runner debuted alongside Wile E. Coyote in 'Fast and Furry-ous' (1949). A cheerful, speedy bird who travels the highways of the Southwestern United States, the Road Runner's vocabulary consists almost entirely of 'Beep Beep!' sounds. Always outsmarting his predator with seemingly effortless ease, the Road Runner appears to defy the laws of physics, easily navigating dangerous terrains that prove catastrophic for his pursuer. Though the Road Runner's screentime is often limited compared to Wile E. Coyote's elaborate schemes, his carefree attitude and uncanny ability to escape have made him equally memorable."
        },
        { 
            id: 9, 
            name: "Tasmanian Devil", 
            year: 1954, 
            firstEpisode: "Devil May Hare",
            type: "Tasmanian Devil", 
            popularity: 7,
            images: [
                'images/Taz.jpg',
                'images/Taz_Bugs.jpg',
                'images/Taz_Spin.jpg'
            ],
            bio: "The Tasmanian Devil, or 'Taz,' is a freak of nature known for his ferocious appetite, limitless energy, and tornado-like spinning ability, Taz is characterized by his grunts, growls, and rarely coherent speech. Despite his initially limited appearances in the original shorts, Taz grew to become one of the most popular Looney Tunes characters by the 1990s. His popularity led to his own show, 'Taz-Mania,' and extensive merchandising. Beneath his wild exterior, various iterations have shown Taz to have a surprisingly complex personality, sometimes even displaying a sensitive side."
        },
        { 
            id: 10, 
            name: "Yosemite Sam", 
            year: 1945, 
            firstEpisode: "Hare Trigger",
            type: "Human", 
            popularity: 6,
            images: [
                'images/Sam.jpg',
                'images/Sam_Bugs.jpg',
                'images/Sam_Cards.jpg'
            ],
            bio: "Yosemite Sam was created as a more formidable adversary for Bugs Bunny. With his fiery red mustache, short stature, and explosive temper, Sam is typically portrayed as an outlaw, pirate, or other antagonistic roles. His catchphrases include 'I'm the meanest, toughest hombre that ever crossed the Rio Grande!' His aggressive personality and willingness to use firearms made him a stark contrast to the more mild-mannered Elmer Fudd. Despite his tough talk and determination, Sam invariably ends up outwitted by Bugs Bunny in their confrontations."
        },
        { 
            id: 11, 
            name: "Jeremy Callinan", 
            year: 1864, 
            firstEpisode: "Call the Callinan",
            type: "Human", 
            popularity: 0,
            images: [
                'images/Jeremy.jpg',
                'images/Andrew.jpg',
            ],
            bio: "Jeremy Callinan is one of the most looney characters in Looney Tunes. Jeremy is known as the city's hero electrician, always there to help people in need of an electricity fix. Although he fails and explodes most of the time, he somehow manages to pull through in the end. he also owns a billion-dollar company involved in seling the most pristine electric toilet paper in the world. He's even participated in WW2 where he and Daffy Duck storm into a secret Nazi base, place a toilet paper bomb, and completely cover the whole base in toilet paper. Unfortunately, Jeremy quit the Looney Tunes business early in his life to search for a different career, makng his debut short and his popularity downfall. No one knows where he is to this very day."
        },
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