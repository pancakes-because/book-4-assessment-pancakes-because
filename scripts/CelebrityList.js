import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

/* start of event listener */ 

document.addEventListener(
    "click", 
    (clickEvent) => {

        const itemClicked = clickEvent.target 

        if (itemClicked.id.startsWith("star")) {

            const [, starId] = itemClicked.id.split("--")

            for (const celebrity of celebrities) {

                if (celebrity.id === parseInt(starId)) {
                    window.alert(`${celebrity.name} is ${celebrity.sport} star`)
                }

            }
        }
    }
)
/* end of event listener */ 

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li id="star--${celebrity.id}">${celebrity.name}</li>`
    }

    html += "</ol>"
    return html
}

// DEBUGGING NOTES 

// original error: (dev tools) "celebrity" is not defined on line 9 
// changed variable name "star" in line 8 to "celebrity"
// this should define "celebrity" in line 9, which are the individual items we're looping through
// this made a bunch of html show up on the browser page, so I guess this is right? 