<<<<<<< HEAD
let employee = {
  streetAddress: "",
  name: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign(employee, { [key]: value });
}
function deleteFromEmployeeByKey(employee, key) {
  const newObject = Object.assign({}, employee);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}
=======
// Write your solution in this file!
let employee = {
    streetAddress: '',
    name: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value})
}
function destructivelyUpdateEmployeeWithKeyAndValue( employee, key, value) {
    return Object.assign(employee, { [key]: value})
}
function deleteFromEmployeeByKey( employee, key) {
    const newObject = Object.assign ({}, employee)
    delete newObject [key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey( employee, key) {

delete employee[key]

return employee

}
    
>>>>>>> e93040fb4f5a200a632b614507dd62b5eff63126
