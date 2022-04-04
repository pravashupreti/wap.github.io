// Q.1 
function askPassword(ok, fail) {
    let password = prompt("password?", '')
    if (password == "rockstar") ok()
    else fail()
}

let user = {
    name: "John",
    loginOk() {
        alert(`${this.name} logged in`)
    },
    loginFail() {
        alert(`${this.name} failed to log in`)
    }
}

// Fixed after binding the user object to the functional parameter
askPassword(user.loginOk.bind(user), user.loginFail.bind(user))


// Q2

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        // Fixed after binding the group EC to the functional param of foreach
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student)
        }.bind(this))
    }
}

// Fixed after binding group object and execute 
group.showList.bind(group)()