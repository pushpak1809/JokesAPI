// GEt https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');



// const generateJokes = () => {
//     const setheader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }



//     fetch('https://icanhazdadjoke.com', setheader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((error) => {
//             console.log(error);
//         })








// Async Method 
const generateJokes = async() => {
    try{
        const setheader = {
            headers: {
                Accept: "application/json"
            }
        }
    
    
    
       const res = await fetch('https://icanhazdadjoke.com', setheader)
       const data=await res.json()
       jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`The error is ${err}`)
    }
        


}

jokebtn.addEventListener('click', generateJokes);
generateJokes();