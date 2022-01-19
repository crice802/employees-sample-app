export {
  index,
  deleteEmp,
  update,
}

function update(employee) {
  return fetch(`api/employees/${employee.id}`, {
    method: "PATCH", 
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(employee)
  }).then(res => res.json())
}

function deleteEmp(id) {
  return fetch(`api/employees/${id}`, {
    method: 'DELETE'
  }).then(res => res.json())
}

function index() {
  return fetch(`/api/employees`)
  .then(res => res.json())
}

