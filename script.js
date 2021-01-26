const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')



const generateJoke = async () => {
  const config = {
    headers: {
      "accept":"application/json"
    }
  }
  
  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
    
}

// const generateJoke = () => {
//   const config = {
//     headers: {
//       "accept":"application/json"
//     }
//   }
//   fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke
//     })
// }

generateJoke()

jokeBtn.addEventListener('click', () => generateJoke())
