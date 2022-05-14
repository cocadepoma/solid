import { Tesla, Audi, Toyota, Honda, Volvo, Ford, Vehicle } from './03-liskov-b';


(() => {

  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach(car => {
      console.log(`${car.constructor.name} ${car.getNumberOfSeats()} seats`);
    });
  }

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(2),
    new Ford(8),
  ];


  printCarSeats(cars);

})();