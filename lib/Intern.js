// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./lib/Employee');
;
class Intern extends Employee {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }
}

module.exports = Intern;
