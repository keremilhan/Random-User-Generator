const generateBtn = document.getElementById('generate-btn');

async function getRandomUser(){
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json()
    const user = data.results[0]

    displayUser(user);
}

function displayUser(user){
    
    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML = `
    <div class="card mx-auto">
        <img src="${user.picture.large}">
        <div class="card-body d-flex flex-column">
            <p class="card-text fs-6 fw-bold"><i class="fa-solid fa-user fs-5 me-3" id="name"></i>Full Name: ${user.name.first} ${user.name.last}</p>
            <p class="card-text fs-6 fw-bold"><i class="fa-solid fa-location-pin fs-5 me-3"></i>Location: ${user.location.country}</p>
            <p class="card-text fs-6 fw-bold text-capitalize w-100"><i class="fa-solid fa-venus-mars me-2 pe-1"></i>Gender: ${user.gender}</p>
            <p class="card-text fs-6 fw-bold"><i class="fa-solid fa-phone fs-5 me-3"></i>Phone: ${user.phone}</p>
            <a href="#" onclick = getRandomUser() class="btn btn-primary align-self-center" id="generate-btn">Generate Person</a>
        </div>
    </div>
    `
}

getRandomUser();





