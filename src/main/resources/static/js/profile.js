$('document').ready(async function(){

let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function openModal(date) {
//     clicked = date;
//
//     const eventForDay = events.find(e => e.date === clicked);
//
//     if (eventForDay) {
//         for (let i = 0; i<events.length; i++) {
//             if (currentUserId == events[i].user) {
//                 document.getElementById('eventText').innerText = eventForDay.title;
//                 deleteEventModal.style.display = 'block';
//             }
//         }
//     } else {
//         newEventModal.style.display = 'block';
//     }
//
//     backDrop.style.display = 'block';
// }

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText =
        `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for(let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${month + 1}/${i - paddingDays}/${year}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            const eventForDay = events.find(e => e.date === dayString);

            if (i - paddingDays === day && nav === 0) {
                daySquare.id = 'currentDay';
            }

            if (eventForDay) {
                const eventDiv = document.createElement('div');
                for (let i = 0; i<events.length; i++){
                        console.log(events[i].user);
                    if (currentUserId === events[i].user) {
                        eventDiv.classList.add('event')
                        eventDiv.innerText = eventForDay.title;
                        daySquare.appendChild(eventDiv);
                    }
                }
                // eventDiv.classList.add('event');




            }

            daySquare.addEventListener('click', () => openModal(dayString));
        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
}

function closeModal() {
    eventTitleInput.classList.remove('error');
    newEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    load();
}

let currentUserId = $("#user-id").attr("user-id")

function saveEvent() {
    if (eventTitleInput.value) {
        eventTitleInput.classList.remove('error');

        events.push({
            date: clicked,
            title: eventTitleInput.value,
            user: currentUserId
        });

        localStorage.setItem('events', JSON.stringify(events));
        closeModal();
    } else {
        eventTitleInput.classList.add('error');
    }
}

function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });

    document.getElementById('saveButton').addEventListener('click', saveEvent);
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('closeButton').addEventListener('click', closeModal);
}

initButtons();
load();

// //Edit user details functionality
//     $(".user-info-btn").on('click', function(e){
//         let userContent = $(this).parent().siblings(".user-info").children("p");
//     })
// });

let editUserInfo = $(".edit-user-info");
    editUserInfo.on("click", async function(){
        if ($(".user-info-btn").text() === "Submit"){
            $(".user-info-btn").text("Edit");
            $(".user-info").attr("contenteditable", "false");
            let username = $("#username").text()
            let email = $("#email").text()
            let user = {
                username:username,
                email:email
            }
            let userDetails = {
                method:"post",
                headers:{
                    "X-CSRF-TOKEN":$("input[name='_csrf']").attr("value"),
                    "Content-Type": 'application/json'
                },
                body:JSON.stringify(user)
            }
            console.log(userDetails);
            await fetch(`${window.location.protocol}//${window.location.host}/profile`,userDetails);
        } else {
            $(".user-info").attr("contenteditable", "true");
            $(".user-info-btn").text("Submit");
        }
    })


// This is for the profile picture
const keys = (await fetch(
    `${window.location.protocol}//${window.location.host}/keys`)
    .then(results => results.json()));

const client = filestack.init(keys.fileStackKey);
$("#profilePicChangeButton").on("click", function(){
    client.picker({
        accept: ["image/*"],
    transformations: {
      circle: true,
      crop: false,
      rotate: false,
      force: true
    },
    onFileUploadFinished: function(file){
      $("#profilePicInput").val(file.url);
      $("#profilePicForm").submit();
    }
  }).open();
})

});