interface Vehicle {
  make: string
  model: string
  year: number
  start(): void
}

class Car implements Vehicle {
  make: string
  model: string
  year: number

  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }

  start(): void {
    console.log('Car engine started')
  }
}

const car = new Car('Toyota', 'Corolla', 2024)
car.start()

export default function VehicleExercise() {
  return (
    <main className="vehicle-card">
      <p className="eyebrow">TypeScript interface exercise</p>
      <h1>Vehicle</h1>
      <p className="vehicle-description">
        A <strong>{car.year} {car.make} {car.model}</strong> implements the{' '}
        <code>Vehicle</code> interface.
      </p>
      <div className="vehicle-details" aria-label="Car details">
        <span><small>Make</small>{car.make}</span>
        <span><small>Model</small>{car.model}</span>
        <span><small>Year</small>{car.year}</span>
      </div>
      <p className="engine-status">Open the browser console to see: “Car engine started”</p>
    </main>
  )
}
