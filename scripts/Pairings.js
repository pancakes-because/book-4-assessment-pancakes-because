import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebMatch = null 

    for (const celebrity of celebrityArray) { 
        if (celebrity.id === kidObject.celebrityId) {
            celebMatch = celebrity
        }
    }

    return celebMatch
}

export const Pairings = () => {
    let html = ""
    html += "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

// DEBUGGING NOTES 

/* original error: (dev tools) missing code for Parings.js: 1, The requested module "./database.js" does not provide an export named "getCelebrities" */ 
// added "getCelebrities" export function in database.js. 
// it defines the "getCelebrities" import statement in Pairings.js and makes it work. 
// see this under line 104 in database.js 

// original error: misspelled variable in return statement on line 13, return celebritiy.
// "celebritity" is misspelled with an extra "i". 
// this should match with line 7, where the variable is declared, and be "celebrity". 

/* original error: (dev tools) missing code for Parings.js: 1, The requested module "./database.js" does not provide an export named "getChildren" */ 
// added "getChildren" export function in database.js. 
// it defines the "getChildren" import statement in Pairings.js and makes it work. 
// see this under line 108

/* original error: incorrect operator sign used on line 18, html = "<ul>" */ 
// "html" is declared as a variable on line 17. 
// we want to add "<ul>" string to the variable, which holds an empty string. 
// so we need to change this to a += sign. 

/* original error: the "sport" property is misspelled on line 24 , ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.Sport} star, by ${kid.wish} */ 
/* in ${kidsStar.Sport}, it's trying to reference the "sport" property in the objects from the "celebrities" array */ 
// changed this to ${kidsStar.sport}


//ALGORITHMIC THINKING TO EXPLAIN WHAT THIS MODULE IS DOING 

/* ultimate goal of module: we want an html section called "Pairings" that shows celebrities with their matching kids and the activities/wishes they'll be doing together. */ 
// line 9, we're making a function that matches each celebrity with a child, called "findCelebrityMatch"
// line 9, for each celebrity, the celeb id must match with a child's, or kidObect's, celebrityId
/* line 9, the parameters we're passing in referring to the variables we made to reference the children and celebrities info. from database.js */ 
// line 9, use a for...of loop to loop through each celebrity in the celebrities array
// line 10-11, if they match, then we reassign the celebrity variable to the new value
// line 10-11, use an if statement to set the condition that the ids must match 
// line 11, then make celebrity variable = kidObject
// also return the variable to use it later... 

// line 19, we're making a function that takes the celebrity and child information and makes html out of it 
// line 22, we have a for...of loop that loops through each kid/child 
/* line 23, we're invoking the "findCelebrityMatch" function to find the celebrity match for each kid/child that I have in the children array. */ 
/* line 23, the "kidStar" variable is storing the function or celebrity match information to reference in the html string we're making */ 
// line 24, we have an empty html string stored in a variable, called "html" -- what will appear in the browser
// as the function works, we are looping through each kid we have and grabbing their celebrity match and the kids wish and converting that to html to show up in the browser 

