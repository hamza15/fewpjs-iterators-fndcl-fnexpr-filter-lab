// Code your solution here
function findMatching(drivers, str) {
    let meet = drivers.filter(driver => {
        if (driver.toLowerCase() === str.toLowerCase()) {
            return driver
        }
    })
    return meet
}

function fuzzyMatch(drivers, str) {
    let people = drivers.filter(driver => {
        if (driver.charAt(0).toLowerCase() === str.charAt(0).toLowerCase()) {
            return driver
        }
    })
    return people
}

function matchName(drivers, str) {
    let match = drivers.filter(driver => {
        if (driver.name == str) {
            return driver
        }
    })
    return match
}