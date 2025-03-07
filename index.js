// // Code your solution in this file!
// function distanceFromHqInBlocks(startstreet, endstreet) {
//  console.log (startstreet - endstreet);
//  return Math.abs(42 - 50);
// }
// distanceFromHqInBlocks(42, 50);

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}       
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}
console.log(distanceTravelledInFeet(34, 24));

function calculatesFarePrice(start, destination) {
if (start >= 0 && destination >= 0) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice);}
