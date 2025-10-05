// // # 📊 Project: Complex API 2

// // ### Goal: Use data returned from one api to make 
// // a request to another api and display the data returned


// //find api.     
// //find second api.
// //getkey.       doesnt require key
// // run it through postman.co     came back as 200 ok
// //build event listener 
// //make function one
// // call function 
// //set variables
// //console log to make sure it works
// //create a fetch and json return
// //console log data to decide what parameters to pull
// //console log individual ones
// //catch to return errors
// //make second function
// //second fetch
// //pass info from first function and fetch to second one 
// //fetch and print to DOM

document.querySelector('button').onclick = zooNimals
// // document.querySelector('button').onclick = 
//https://serpapi.com/search.json?q=Apple&engine=google_images&ijn=0

function zooNimals() {
    const name = document.querySelector('input').value;
    const url = `https://api.api-ninjas.com/v1/animals?name=${name}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'FZPMSMFvr0txm6HH2Bz4Aw==AZ4MCpvg1bK7LHM2',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data => {
            console.log(data);

            let animalName = data[0].name;
            document.querySelector('h4').innerText = data[0].name;

            animalPIC(animalName);
        }))
        .catch(error => {
            console.error('Error fetching animal info:', error);
        })
}
function animalPIC(animalName) {
    const apiKey= "-vjZNj2DpDVqyHydrBxXn8gfCaDIwzjEt5L9uU3cvLA"
    const picUrl = `https://api.unsplash.com/photos/random?query=${animalName}&client_id=${apiKey}`

fetch(picUrl)
        .then(result => result.json())
        .then(data => {
            console.log(data);
         document.querySelector('img').src = data.urls.small;
            
         
        })
        .catch(err => console.error("Error fetching songs:", err));


}

