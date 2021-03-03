(function () {
    let firstTime, secondTime;
    window.addEventListener('DOMContentLoaded', (event) => {
        const users = getUsers(); // unsorted array of user object

        document.getElementById('sort-btn').addEventListener('click', event => {
            const sortedUsers = sortUsers(users);
            console.log(sortedUsers)
            renderTable(sortedUsers);
        })
        
        renderTable(users)

        const oldestPerson = getOldest(users);
        console.log('The oldest person is ', oldestPerson.name, oldestPerson.age)
    });

    secondTime = new Date().getTime();
    
    console.log('hello from anonymous fn', secondTime)
})()

function sortUsers(userObjs) {
    for (let i = 0; i < userObjs.length - 1; i++) {
        for (let j = i + 1; j < userObjs.length; j++) {
            if (userObjs[i].age > userObjs[j].age) {
                let temp = userObjs[j];
                userObjs[j] = userObjs[i];
                userObjs[i] = temp;
            }
        }
    }
    
    return userObjs;
}

function renderTable(userObjs) {
    document.getElementById('table-content').innerHTML = ''; // clear the table body content
    // iterate through the userObjs array, for each of them call the addUser
    userObjs.forEach(user => addUser(user));
}

function getOldest(userObjs) {
    let oldest = userObjs[0];

    for (let i = 1; i < userObjs.length; i++) {
        if (userObjs[i].age < oldest.age) {
            oldest = userObjs[i]
        }
    }

    return oldest;
}

// expect an array of userObj as input
// add a new row to the table for each user object
function addUser(userObj) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${userObj.studentNo}</td>
        <td>${userObj.name}</td>
        <td>${userObj.age}</td>
        <td>${userObj.studentNo > 0}</td>
    `;
    document.getElementById('table-content').appendChild(newRow);
}

function getUsers() {
    return [{
        studentNo: -1,
        name: 'Hagrid',
        age: 65
    },{
        studentNo: 123,
        name: 'harry',
        age: 15
    },
    {
        studentNo: 135,
        name: 'Hermione',
        age: 17
    },
    {
        studentNo: -1,
        name: 'Snape',
        age: 55
    },
    {
        studentNo: 234,
        name: 'Ron',
        age: 16
    }];
}