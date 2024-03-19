let form = document.getElementById('myForm')  // login form
const searchSection = document.getElementById('search-section') // search section
const searchInput = document.getElementById('search')
const searchButton = document.getElementById('search-button')
const searchMessage = document.getElementById('search-message')
const logoutButton = document.getElementById('logout-button')
const body = document.querySelector('body')
document.getElementById('loading-spinner').style.display = 'block';


// onload , check if token is valid
window.onload = checkToken

// prevent form from submitting
form.addEventListener('submit', function (event) {
    event.preventDefault()

    // get the data from the form
    let formData = new FormData(form)
    let username = formData.get('username')
    let password = formData.get('password')

    console.log('username: ' + username)
    console.log('password: ' + password)

    // make a fetch request to our server
    login(username, password)
})

function login(username, password) {

    // send a POST request to the server as JSON
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // save the token to localStorage
            localStorage.setItem('token', data.token)

            if (data.error) {
                alert(data.error)
                return
            }

            alert('Login Successful!')
            loggedInView(data.token)
        })

        .catch(err => {
            console.log(err)
        })
}

function loggedInView(token) {
    let message = document.getElementById('message')
    let decoded = atob(token.split('.')[1])
    decoded = JSON.parse(decoded)
    message.innerHTML = `Hello ${decoded.username}, Welcome to our Website!`
    form.style.display = 'none'
    searchSection.style.display = 'block'
    logoutButton.style.display = 'block'
    body.style.display = 'block'  // Show the body after determining login status

    document.getElementById('loading-spinner').style.display = 'none';
    document.body.style.display = 'block';
}

function loggedOutView() {
    form.style.display = 'block'
    searchSection.style.display = 'none'
    logoutButton.style.display = 'none'
    body.style.display = 'block'  // Show the body after determining login status

    document.getElementById('loading-spinner').style.display = 'none';
    document.body.style.display = 'block';
}


// check if token is valid
async function checkToken() {
    form.style.display = 'none'
    try {
        // get token from localStorage
        let token = localStorage.getItem('token')

        // send a POST request to the server as JSON
        let response = await fetch('http://localhost:3000/checkToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        })

        let data = await response.json()
        console.log(data)
        if (data.status === 'OK') {
            loggedInView(token)
        } else {
            loggedOutView()  // Call loggedOutView if the token is not valid
        }
    } catch (err) {
        loggedOutView()  // Also call loggedOutView if an error occurs
        console.log(err)
    }
}

// search
searchButton.addEventListener('click', function (event) {
    event.preventDefault()
    let searchValue = searchInput.value
    console.log(searchValue)

    // Create a new URLSearchParams object
    let params = new URLSearchParams()

    // Add your search value as a query parameter
    params.append('q', searchValue)

    // Add the query string to the URL
    window.location.search = params.toString()

    // navigate to search.html
    window.location.href = 'search.html?search=' + searchValue

})

// logout
logoutButton.addEventListener('click', function (event) {
    event.preventDefault()
    localStorage.removeItem('token')
    location.reload()
})

