const contacts = [
    { name: "Josuke", phone: "+380977137103" },
    { name: "Jonathan", phone: "+380954134118" },
    { name: "Joseph", phone: "+380915792707" }
];

function findPhoneByName(name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            console.log (contacts[i])
            return;
        }
    }
        console.log("Contact " + (name) + " not found!");
}

findPhoneByName("Jonathan")
findPhoneByName("Josuke")
findPhoneByName("Joseph")
findPhoneByName("Jotaro")