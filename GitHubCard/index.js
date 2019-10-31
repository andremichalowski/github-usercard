//===========STEP 1: AXIOS GET   ==========//
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://github.com/axios/axios
           https://api.github.com/users/andremichalowski
*/


let gitData = {};
// ***1. ADD AXIOS TAG IN HTML
// ***2: AXIOS GET
axios.get('https://api.github.com/users/andremichalowski')
  // ***3: ADD ".THEN" ."CATCH"
  .then(response => {
    // ***4: CONSOLE.LOG(RESPONSE)
    // console.log(response);
    // ***5: LOOK FOR USABLE DATA FROM AXIOS LINK 
    //  TO USE AS AN ARRAY TO REFERENCE FOR JS CONSTRUCTOR
        // ***6. USE THAT DATA IN A CONSOLE LOG TO VIEW IT AND THEN CONSTRUCT A FUNCTION
        // console.log(response.data);
    // ***6. ADD AN OBJECT AT TOP TO PUSH THE AXIOS DATA TOO
    // ***7. ADD OBJECTS USING>>> objectUrAdding2.nameUWillReferToIt = response.theExtensionUFoundIn6,
    gitData.img = response.data.avatar_url;
    gitData.name = response.data.name;
    gitData.login = response.data.login;
    gitData.location = response.data.location;
    gitData.profileUrl = response.data.url;
    gitData.followers = response.data.followers;
    gitData.following = response.data.following;
    gitData.bio = response.data.bio;
    //???DO THESE NEED TO BE PUT IN STRING FORM FOR JSON
    // console.log(gitData); //...looks good!
    // ***8. FOR ADD SOME CONTENT : gitdata.bio (to reference....)
  })
  .catch(error => {
    console.log(`Failed: `, error);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

//Create Function
function createCard(img, name, login, location, profileUrl, followers, following, bio) {
  // 1. Create HTML markup:
  const cCard = document.createElement('div');
   const cImg = document.createElement('div');
   const cCardInfo = document.createElement('div');
   const cName = document.createElement('h3');
   const cLoginUN = document.createElement('p');
   const cLocation = document.createElement('p');
   const cProfileText = document.createElement('p');
   const cProfileUrl = document.createElement('a');
   const cFollowers = document.createElement('p');
   const cFollowing = document.createElement('p');
   const cBio = document.createElement('p');
 
  // 2. Define HTML structure:
    cCard.append(cImg, cCardInfo, cName, cLoginUN, cLocation, cProfileText, cProfileUrl, cFollowers, cFollowing, cBio);
 
  // 3. Add some class names:
   cCard.classList.add('card');
   cCardInfo.classList.add('card-info');
   cName.classList.add('name');
   cLoginUN.classList.add('p');
   cLocation.classList.add('p');

 // 4. Add some content!:
   cImg.src = img;
   cName.textContent = name;
   cLoginUN.textContent = login;
   cLocation.textContent = gitData.location;
   cProfileText.textContent = 'Profile', gitData.profileURL;
   cFollowers.textContent = gitData.followers;
   cFollowing.textContent = gitData.following;
   cBio.textContent = gitData.bio;

//  // 5. Return: 
   return cCard;
}

//  //-----Append Manual and Loop------
 const cards = document.querySelector('.cards');
 console.log(cards);
//  // // Append Manual:
//  //   function appendbody(title, date) {
//  //     body.append(createArticle(data.title, 'date', 'firstParagraph', 'secondParagraph', 'thirdParagraph'));
//  //   };
//  //   appendbody();
 
//  // Append Loop
  //  gitData.forEach((data => {
  //        cards.append(createCard(data.cImg, data.cCardInfo, data.cName, data.cLogin, data.cLocation));
  //      }));
  // console.log(gitData);

  cards.append(createCard(gitData.img, gitData.name, gitData.login, gitData.location, gitData.profileUrl, gitData.followers, gitData.following, gitData.bio));













/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ["ELAndrews", "sergeikabuldzhanov", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

// followersArray.forEach(element => {
// 	axios.get("https://api.github.com/users/" + element)
// 		.then(response => {
// 			console.log(response.data);
// 			const container = document.querySelector(".cards");
// 			container.append(card(response.data))
// 		}).catch(error => {
// 			console.log("errors");
// 		})
// });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

















  // //-------- Lecture example -----
  // axios.get('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=6c3220540cfd11e43807a5cde257fc1b')
  // .then(response => {
  //   // 2- Have a look at the data that we get back from the server
  //   // We need to verify where our array of data is located in the response object
  //   console.log(response.data.list);

  //   // 3- Loop through the data in the array
  //   response.data.list.forEach(city => {
  //     // 4- Do something with each data point in the data array
  //     console.log(`In ${city.name} the weather is ${city.weather[0].description}`);
  //   });
  // })
  // .catch(error => {
  //   console.log(error);
  // });