const adviceId = document.querySelector('#advice-id')
const adviceText = document.querySelector('#advice-text')
const btn = document.querySelector('.btn')

btn.onclick = () => {
    
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        adviceId.innerText = data.slip.id
        adviceText.innerText = data.slip.advice
    })
    .catch(error => console.error('Error:', error))
}