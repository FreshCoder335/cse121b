/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let MyProfile = 
{
    name: "Jeremiah Powell",
    profilePicture : ('images/personalpicture.png'),
    favoriteFoods: 
    [
        'barbecue', 'burgers', 'sandwiches', 'soup'
    ],
    hobbies: ['Gaming', 'Snowboarding', 'Firearms'],
    placesLived: []
};




/* Populate Profile Object with placesLive objects */
MyProfile.placesLived.push(
    {
        place: 'Logan, Utah',
        length: 'six months',
    },
    {
        place: 'Idaho Falls, Idaho',
        length: 'Six Years',
    },
    {
        place: 'Rigby, Idaho',
        length: 'Sixteen Years',
    },
    {
        place: 'Independece, Missouri',
        length: 'Two years',
    },
    {
        place: 'Rexburg, Idaho',
        length: 'Two years'
    }
);



/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = MyProfile.name;


/* Photo with attributes */
document.getElementById('photo').src = MyProfile.profilePicture;
document.getElementById('photo').alt = MyProfile.name;

/* Favorite Foods List*/
MyProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
MyProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
MyProfile.placesLived.forEach(place => {
    
    let dt = document.createElement('dt');
    dt.textContent = place.place;

   
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


