export default function TripList() {

  fetch('http://localhost:3000/trips')
    .then(res => res.json())
    .then(json => console.log(json))

  return (
    <div>
      <h2>Trip List</h2>
    </div>
  )
}
