const database = {
    celebrities: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        sport: "Hockey"
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        sport: "Basketball"
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        sport: "Golf"
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        sport: "Baseball"
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        sport: "Gymnastics"
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        sport: "Gymnastics"
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        sport: "Baseball"
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        sport: "Basketball"
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        sport: "Hockey"
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        sport: "Football"
    }],
    children: [{
        id: 1,
        name: "Christan Swindles",
        celebrityId: 6,
        wish: "Throw the opening pitch at a baseball game"
    }, {
        id: 2,
        name: "Findlay Dumini",
        celebrityId: 8,
        wish: "Drive a race car"
    }, {
        id: 3,
        name: "Micheil Guerrazzi",
        celebrityId: 9,
        wish: "Visit the White House"
    }, {
        id: 4,
        name: "Karine McKennan",
        celebrityId: 6,
        wish: "Drive a race car"
    }, {
        id: 5,
        name: "Cissy Weavers",
        celebrityId: 5,
        wish: "Disneyworld trip and spend the day with Mickey Mouse"
    }, {
        id: 6,
        name: "Bendick Standbrooke",
        celebrityId: 2,
        wish: "Sing a song with Taylor Swift and pet her cats"
    }, {
        id: 7,
        name: "Ethyl Copnell",
        celebrityId: 4,
        wish: "Dunk on LeBron James"
    }, {
        id: 8,
        name: "Elisha Betchley",
        celebrityId: 2,
        wish: "Ride on a helicopter"
    }, {
        id: 9,
        name: "Enrica Mathivon",
        celebrityId: 1,
        wish: "Take care of ponies on a farm and spend the whole night riding one"
    }, {
        id: 10,
        name: "Humfrid Madner",
        celebrityId: 4,
        wish: "Put out a fire as a fireman after riding on the truck with the siren on"
    }]
}

export const getCelebrities = () => {
    return database.celebrities.map(celebrity => ({...celebrity}))
}

export const getChildren = () => {
    return database.children.map(child => ({...child}))
}

//DEBUGGING NOTES 

// original error: misspelling on line 72, wissh: "Drive a race car"
// changed "wissh" to "wish", so it matches the other objects and ids 

// original error: misspelling on line 72, wissh: "Ride on a helicopter" on line 92 
// changed "wissh" to "wish", so it matches the other objects and ids 

// original: error: misspelling on line 16, spōrt: "Golf"
// changed "spōrt" to "sport", so it matches the other objects and ids 

/* original error: (dev tools) missing code for Parings.js: 1, The requested module "./database.js" does not provide an export named "getCelebrities" */ 
// added "getCelebrities" export function in database.js. 
// it defines the "getCelebrities" import statement in Pairings.js and makes it work. 
// see this under line 104 

/* original error: (dev tools) missing code for Parings.js: 1, The requested module "./database.js" does not provide an export named "getChildren" */ 
// added "getChildren" export function in database.js. 
// it defines the "getChildren" import statement in Pairings.js and makes it work. 
// see this under line 108 

// original: error: misspelling on line 39, mane: "Tiffanie Tubby" 
// changed "mane" to "name", so it matches with the other objects and ids 