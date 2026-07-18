// alert("Hi,Nice to Meet you  :)");
console.log("Hello from JS!")
var users=[
    {
        "name": "Virat Kohli",
        "gender": "Male",
        "img": "virat.avif"
    },
    {
        "name":"Smriti Mandhana",
        "gender": "Female",
        "img": "smriti.jpeg"
    }
]
var id=0;
function toggleUser()
{
    id=(id+1)%2
    var userImage=document.getElementById("user-image");
    userImage.src=users[id].img;
    var userName=document.getElementById("user-name");
    userName.innerHTML=users[id].name;
    var userGender=document.getElementById("user-gender");
    userGender.innerHTML=users[id].gender;
}