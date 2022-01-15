export function search() {
  return fetch(`/api/employees`, {mode: "cors"})
  .then(res => res.json())
}