const contacts = {
    "Josuke": "+380977137103",
    "Jonathan": "+380954134118",
    "Joseph": "+380915792707"
}

function findPhoneByName(name) {
    if (contacts[name]) {
        console.log ("Name: " + (name) + "; Number: " + contacts[name])
    } else {
        console.log("Contact " + (name) + " not found!");
    }
}

findPhoneByName("Jonathan")
findPhoneByName("Josuke")
findPhoneByName("Joseph")
findPhoneByName("Jotaro")