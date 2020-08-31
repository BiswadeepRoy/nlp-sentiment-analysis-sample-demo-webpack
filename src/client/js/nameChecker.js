function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Ankita",
        "Biswadeep"
    ]

    if (names.includes(inputText)) {
        if (window != null) {
            alert("You are a valid member");
        }
        return true;
    } else {
        return false;
    }
}

export { checkForName }