function handleNameInput(event) {
    const name = event.target.value;
    const nameElement = document.getElementById('name');
    alert("The animal name is"+ name)
}

function handleSubmit(event) {
    event.prevent.Default()
    const nameElement = document.getElementById('name')

    if(!nameElement.value){
        alert("The name is required")
        return;
    }
    const breedInput = document.getElementById('breed')

    if(!breedInput.value){
        alert("Please provide the breed")
        return;
    }
    const age = document.getElementById('age').value
    if(!age){
        alert("Age is nothing but a number")
        return;
    } 
    fetch("http://localhost:3000/animals", {
        method: "POST",
        body:JSON.stringily({
            name: nameElement.value,
            breed: breedInput.value,
            age,
        })
    })
    
}