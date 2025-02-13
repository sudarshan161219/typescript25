"use strict";
//* Protected Constructor And Child Classes
class Department {
    constructor(name) {
        this.name = name;
    }
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
class ItDepartment extends Department {
    constructor() {
        super(...arguments);
        this.holidays = [];
    }
}
class AdminDepartment extends Department {
    constructor() {
        super(...arguments);
        this.holidays = [];
    }
}
