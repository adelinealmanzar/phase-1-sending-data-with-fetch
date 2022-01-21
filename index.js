// Add your code here
const formDataObj = {
    dogName: 'Bryan',
    dogBreed: 'Poodle'
}

const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify(formDataObj)
    
}

const detinationURL = 'http://localhost:3000/dogs'

function postNewDog() {
    fetch(detinationURL, configurationObject)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error.message)
        alert('Sorry, there is an error')
    })
}
// postNewDog()


function submitData(userName, userEmail) {
    const usersObj = {
        name : userName,
        email : userEmail,
    }

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(usersObj)

    }
    const destinationURL = 'http://localhost:3000/users'
    return fetch(destinationURL, configurationObject).then(res => res.json()).then(user => {
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')
        h1.textContent = user.id
        body.appendChild(h1)
    }).catch(error => {
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')
        h1.textContent = error.message
        body.appendChild(h1)
        alert('Sorry, there was an error')
    })

}
submitData('adeline', 'almanzar.adeline@gmail.com')
