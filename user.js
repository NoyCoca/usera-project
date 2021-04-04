let user =JSON.parse( localStorage.getItem("user"))
console.log(localStorage)
userInfo.innerHTML =  `
<header> 
<h1>${user.firstName} ${user.lastName}</h1>
<a id="logo" href="https://tech-career-alternative.firebaseapp.com/" target="_blank"> 
<img src="https://tech-career-alternative.firebaseapp.com/image001.png" alt="logo" style="width:80px;">
</a>
</header>

<p> age: ${user.age} </p>
<p> phone: ${user.phone}</p>
<p> email: ${user.email}</p>
<div id ="userPageImg"> <img src=${user.picture}></div>
<a href= "http://127.0.0.1:5501/index.html" class="btn btn-primary">back to users</a>
`
