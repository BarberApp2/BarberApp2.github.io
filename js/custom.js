function openDrawerMenu() {
    var x = document.getElementById("main-nav-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

function sendApi(data) {
    console.log(data);
    document.getElementById("form-sent").classList.remove("invisible");
    var url = 'https://aplicacionesmovilesbe.herokuapp.com/barberapp';
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.json());
        })
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
        });
}

function handleFormSubmit() {
    var email = document.getElementById("form-email").value;
    var message = document.getElementById("form-message").value;

    if (email != "" && message != "") {
        sendApi({
            email: email,
            message: message
        });
    }
};