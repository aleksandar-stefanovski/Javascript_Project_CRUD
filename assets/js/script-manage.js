/////////////
// manage //
///////////

var addStudentBtn = document.getElementById("addStudentBtn");
var studentsArray = [];

// constructor
function Student(firstName, lastName, birthDay, homeTown) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = birthDay;
    this.homeTown = homeTown;
}



// event for students value save
addStudentBtn.addEventListener("click", function () {

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let birthDay = document.getElementById("birth").value;
    let homeTown = document.getElementById("hometown").value;

    if (firstName == "" || lastName == "") {

        document.getElementById("invalidText").innerText = `Enter your Name and Last Name.`;
        document.getElementById("invalidText").style = "color:red; margin: 12px 0;";
    }

    else {

        document.getElementById("invalidText").innerText = "";
        let student = new Student(firstName, lastName, birthDay, homeTown);
        studentsArray.push(student);
        printStudent(studentsArray);
        clearForm();

    }



});


// print function
function printStudent(studentsArray) {
    document.getElementById("right").innerHTML = "";
    let index = 1;
    for (let i of studentsArray) {
        // dom elements
        document.getElementById("right").innerHTML += `
       

        <div class="student-holder" id="student-holder-${index}" style="border-bottom: 1px solid #ccc; padding-bottom:32px; display:flex; align-items:center; justify-content: space-between; margin: 32px 16px;">
            <div class="student-info" style="width 70%;">
                <ul class="student-list" style="display:flex; ">
                    <li class="list-item" id = "list-name-${index}" style="margin:0 8px; list-style:none"; > First Name: ${i.firstName}, </li>
                    <li class="list-item" id = "list-lastName-${index}" style="margin:0 8px; list-style:none;"> Last Name: ${i.lastName}, </li>
                    <li class="list-item" id = "list-birth-${index}" style="margin:0 8px; list-style:none;"> Birth: ${i.birthDay}, </li>
                    <li class="list-item" id = "list-homeTown-${index}" style="margin:0 8px; list-style:none;"> Hometown: ${i.homeTown}.</li> 
                </ul>
            </div>

        <div class="buttons" id="btns-container" style="display:flex; width: 30%; justify-content:flex-end;"> 
        <button class="editBtn" id="edit-Btn-${index}" style=" margin: 0 8px;
        padding: 8px 16px;
        border-radius: 5px;
        font-size: 14.8px;
        border: 0;
        cursor: pointer;
        background-color: rgba(26, 65, 97, 0.6);
        color: #fff;">
        Edit</button> 
        
        <button class="deleteBtn" id="delete-Btn-${index}" style=" margin: 0 4px;
        padding: 8px 16px;
        border-radius: 5px;
        font-size: 14.8px;
        border: 0;
        cursor: pointer;
        background-color: red;
        color: #fff;">Delete</button> 
        
        </div>
        </div>
        `;

        index++;
    }
}

// let test = document.querySelector(student-list);
// console.log(test);
// edit and delete event
document.addEventListener("click", function (e) {
    // edit
    if (e.target.className == "editBtn") {

        let index = parseInt(e.target.id.split("-")[2]);

        
            let lione = document.getElementById(`list-name-${index}`);
            let litwo = document.getElementById(`list-lastName-${index}`);
            let lithree = document.getElementById(`list-birth-${index}`);
            let lifour = document.getElementById(`list-homeTown-${index}`);

            let editName = prompt("Change First Name");
            let editLastN = prompt("Change Last Name");
            let editBday = prompt("Change Birthday");
            let editHtown = prompt("Change Hometown");

            lione.innerText = `First Name: ${editName}`;
            litwo.innerText = `Last Name: ${editLastN}`;
            lithree.innerText = `Birth: ${editBday}`;
            lifour.innerText = `Hometown: ${editHtown}`;
        
    }


    // delete 
    if (e.target.className == "deleteBtn") {
        let index = parseInt(e.target.id.split("-")[3]);
        // console.log(index);
        if (confirm("Are you sure you want to Delete these Student Informations?")) {
            studentsArray.splice(index, 1);
            printStudent(studentsArray);
        }
        else {
            return false;
        }



    }
});


// clearform
function clearForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("birth").value = "";
    document.getElementById("hometown").value = "";
}













        // cancel button
        // document.getElementById("btns-container").innerHTML = `
        // <button class="update-btn" id="update-Btn-${index}" style=" margin: 0 8px;
        // padding: 8px 16px;
        // border-radius: 5px;
        // font-size: 14.8px;
        // border: 0;
        // cursor: pointer;
        // background-color: rgba(26, 65, 97, 0.6);
        // color: #fff;">
        // Update</button>

        // <button class="cancel-btn" id="cancel-Btn-${index}" style=" margin: 0 8px;
        // padding: 8px 16px;
        // border-radius: 5px;
        // font-size: 14.8px;
        // border: 0;
        // cursor: pointer;
        // background-color: rgba(217, 30, 24, .8);
        // color: #fff;">
        // Cancel</button>`;


