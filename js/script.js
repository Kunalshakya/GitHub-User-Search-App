let body = document.querySelector("body");
let themeBtn = document.querySelector("#themeChangeBtn");
let themeName = document.querySelector("#themeName")
let moonIcon = document.querySelector('#moonIcon')

themeBtn.addEventListener("click", () => {
	body.classList.toggle("dark");

    if(themeName.textContent === "DARK" || moonIcon.src === "./assets/icon-moon.svg"){
        themeName.textContent = "LIGHT"
        moonIcon.src = "./assets/icon-sun.svg"
    }else {
        themeName.textContent = "DARK"
        moonIcon.src = "./assets/icon-moon.svg"
    }

});

// Get the search input and button elements
const searchInput = document.getElementById("searchArea");
const searchButton = document.getElementById("searchBtn");

// Add an event listener to the button
searchButton.addEventListener("click", () => {

	let userName = searchInput.value.split(" ").join("");
    let userNotFound = document.getElementById('userNotFound');
    
	fetch("https://api.github.com/users/" + userName)
    .then(response => {
        if (response.ok) {
                userNotFound.style.display = "none"
                return response.json();
            } else {
                userNotFound.style.display = "block"
                throw new Error("User not found.");
            }
        })
  
		.then((data) => {
			console.log(data);

            let name = data.name;
            document.getElementById('userName').textContent = name;

            let profileImg = data.avatar_url;
            document.getElementById('profileImg').src = profileImg;
            document.getElementById('profileImgMobile').src = profileImg;

            let userId = data.login;
            let userIdUrl = data.html_url;
            document.getElementById('userId').textContent = "@"+userId;
            document.getElementById('userId').href = userIdUrl;

            let bio = data.bio;
            let userBio = document.getElementById('userBio');
            userBio.textContent = bio;

            let publicRepos = data.public_repos;
            let following = data.following;
            let followers = data.followers;
            let userRepo = document.getElementById('userRepo');
            userRepo.textContent = publicRepos;
            let userFollowers = document.getElementById('userFollowers');
            userFollowers.textContent = followers;
            let userFollowing = document.getElementById('userFollowing');
            userFollowing.textContent = following

            let location = data.location;
            let userLocation = document.getElementById('userLocation');
            userLocation.textContent = location;
            
		});
});
