import { getChildren } from "./database.js"

const children = getChildren()

/* start of event listener */ 
document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("child")) {

            const [, childId] = itemClicked.id.split("--")

            for (const child of children) {

                if (child.id === parseInt(childId)) {
                    window.alert(`${child.name} has a wish of ${child.wish}`)
                }
            }
        }
    }
)

/* end of event listener */ 

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="child--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

// original error: errors in code on line 9, html += `<li>${child,name}</li>`
// the vscode error shows "name" crossed out. the errors says "name" has been deprecated. 
/* seems like this is supposed to use dot notation to access the "name" property of the objects from the children array from database.js*/ 
// changed ${child,name} to "${child.name}"

/* original error: (npm test requirements) missing an id for each child in html on line 9, html += `<li>${child.name}</li>` */ 
// each "child" needs a unique id number. 
// using dev tools, we know that an id is not being added for each child. 
// see CelebrityList.js and "Celebrities" section in browser to compare 
// added "id="child--${child.id}" to <li> opening tag to insert an id
// so each child gets an id as we loop through the "child" objects in the "children" array