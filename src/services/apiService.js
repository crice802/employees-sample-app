export function index() {
  return fetch(`/api/employees`)
  .then(res => res.json())
}