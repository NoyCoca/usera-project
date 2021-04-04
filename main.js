// {"_id":"605acace98de45687c4c6279","index":9,"picture":"http://placehold.it/32x32","age":26,"name":{"first":"Guzman","last":"Dillon"},"email":"guzman.dillon@undefined.ca","phone":"+1 (857) 407-2403"}
class User {
    constructor(age, firstName, lastName, email, phone, picture) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.picture = picture;
    }
}

const MAINAPI = "https://next.json-generator.com/api/json/get/NJ-UoW2Xq";
function getUsers() {
    return fetch(MAINAPI)
        .then(res => res.json())
}
let usersArray = []

async function printUsersCards() {
    try {
        gif.src = "https://cdn.dribbble.com/users/1415337/screenshots/10781083/loadingdots2.gif"
        await getUsers()
            .then(res => {
                if (usersArray.length < 10) {
                    res.forEach(user => {
                        user = new User(user.age, user.name.first, user.name.last, user.email, user.phone, user.picture)
                        usersArray.push(user)
                    })
                }
                maininfo.innerHTML = `<div id="userscards"></div>`
                usersArray.forEach(user => {
                    userscards.innerHTML +=
                        `<div class="card" style="width:400px" >
    <img class="card-img-top" src=${user.picture}>
    <div class="card-body">
    <h2>${user.firstName} ${user.lastName}</h2>
    <p class="card-text"> age: ${user.age} </p>
    <p class="card-text"> phone: ${user.phone}</p>
    <p class="card-text"> email: ${user.email} </p>
    <a href= "http://127.0.0.1:5501/user.html" target=_blank class="btn btn-primary" id="${user.phone}" onclick="userNewPage(event)"> see propile</a>
    </div> `
                })
            })
    }
    finally {
        gif.src = ""
    }
}
printUsersCards()

function printUsersTable() {
    maininfo.innerHTML = `<table id="table" class="table table-hover"">
        <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Age</th>
        <th>Phone</th>
        <th>picture</th>
        </tr>
       </table>`
    usersArray.forEach(user => {
        table.innerHTML += `<tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email} </td>
            <td>${user.age}</td>
            <td>${user.phone}</td>
            <td>${user.picture}</td>
          </tr>`
    })
}

function addNewUser() {

    maininfo.innerHTML =
        `   <div class="container">
    <form  >
        <label for="firstname">First name:</label>
        <input type="text" id="firstname" class="form-control" placeholder="Enter first name" >

        <label for="lastname">Last name:</label>
        <input type="text" id="lastname" class="form-control"  placeholder="Enter last name" >

        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" >

        <label for="chackemail">Chack email:</label>
        <input type="email" class="form-control" id="chackemail" placeholder="Enter email"   onchange="chackEmail()" >
        <p id="printEmailChack"></p>

        <label for="age">Age:</label>
        <input type="number" id="age" class="form-control"  placeholder="Enter age" >
  
        <label for="phone">Phone:</label>
        <input type="number" id="phone" class="form-control"  placeholder="Enter phone number">
  
    </form>
    <button type="submit" class="btn btn-primary" onclick="sandUserInfo()" >Submit</button>
  </div>`
}

function chackEmail() {
    if (chackemail.value == email.value) {
        printEmailChack.innerHTML = "The email is the same"
        printEmailChack.style.color = "green";
    }
    else {
        printEmailChack.innerHTML = "The email is not the same"
        printEmailChack.style.color = "red";
    }
}

function sandUserInfo() {
    if (printEmailChack.innerHTML == "The email is the same") {
        let user = new User(age.value, firstname.value, lastname.value, email.value, phone.value, "http://placehold.it/32x32")
        usersArray.push(user)
        maininfo.innerHTML = `
        <h1> User added successfully </h1>
        <button type="button" class="btn btn-primary" onclick="printUsersCards()">back to users</button>`}
}

function userNewPage(event) {
    let userId = event.target.id;
    let userPage = usersArray.find(user => {
        return user.phone == userId;
    });
    localStorage.setItem("user", JSON.stringify(userPage))
}

// function searchUser() {
//     let x = usersArray.find(user => {
//         user.firstName == Search.value;
// })
//    }

