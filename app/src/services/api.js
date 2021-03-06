export function getRappers() {
  return fetch('http://localhost:3000/api/rappers', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addRappers(rapper) {
  return fetch('http://localhost:3000/api/rappers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rapper)
  })
    .then(response => response.json());
}

export function deleteRappers(rapper) {
  return fetch('http://localhost:3000/api/rappers/' + rapper.id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application.json' },
  })
    .then(response => response.json());
}