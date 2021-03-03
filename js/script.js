(function () {
    let firstTime, secondTime;
    window.addEventListener('DOMContentLoaded', (event) => {
        firstTime = new Date().getTime();
        console.log('DOM Content is finally loaded', firstTime);
        console.log('time difference was: ', (secondTime - firstTime) / 1000)
        
        const users = getUsers();
        users.forEach(addUser)

        const oldestPerson = getOldest(users);
        console.log('The oldest person is ', oldestPerson.name, oldestPerson.age)
    });

    secondTime = new Date().getTime();
    
    console.log('hello from anonymous fn', secondTime)
})()

function getOldest(userObjs) {
    let oldest = userObjs[0];

    for (let i = 1; i < userObjs.length; i++) {
        if (userObjs[i].age > oldest.age) {
            oldest = userObjs[i]
        }
    }

    return oldest;
}

function addUser(userObj) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${userObj.studentNo}</td>
        <td>${userObj.name}</td>
        <td>${userObj.age}</td>
    `;
    document.getElementById('table-content').appendChild(newRow);
}

function getUsers() {
    return [{
        studentNo: 123,
        name: 'harry',
        age: 15
    },
    {
        studentNo: 234,
        name: 'Ron',
        age: 16
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
        studentNo: -1,
        name: 'Hagrid',
        age: 65
    }];
}