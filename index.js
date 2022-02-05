/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const createEmployeeRecord = function (employee) {
    let employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
   }
   return employeeRecord
}

const createEmployeeRecords = function (record) {
    return record.map(employee => createEmployeeRecord(employee))
}

const createTimeInEvent = function (timeInString) {
    let timeInArray = timeInString.split(" ")
    
    let timeInEvent = {
        type: "TimeIn",
        hour: Number(timeInArray[1]),
        date: timeInArray[0]
    }
    
    
    this.timeInEvents.push(timeInEvent)
    return this
}

const createTimeOutEvent = function (timeInString) {
    let timeInArray = timeInString.split(" ")
    
    let timeOutEvent = {
        type: "TimeOut",
        hour: Number(timeInArray[1]),
        date: timeInArray[0]
    }
    
    
    this.timeOutEvents.push(timeOutEvent)
    return this
}

const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    
    return (timeOut.hour - timeIn.hour)/100
}

const wagesEarnedOnDate = function (date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const calculatePayroll = function (employeeRecords) {
   const record = employeeRecords.map(employee => allWagesFor.call(employee))
    return record.reduce((acc,total) => acc+total)
}   

const findEmployeeByFirstName = function (employees, firstNameString) {
    return employees.find(employee => employee.firstName === firstNameString)
}