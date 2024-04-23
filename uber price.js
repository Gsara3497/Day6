class UberPriceCalculator {
    constructor(baseFarePerKm, farePerMinute, minFare) {
        this.baseFarePerKm = baseFarePerKm;
        this.farePerMinute = farePerMinute;
        this.minFare = minFare;
    }

    calculatePrice(distanceInKm, timeInMinutes) {
        const fareForDistance = distanceInKm * this.baseFarePerKm;
        const fareForTime = timeInMinutes * this.farePerMinute;
        const totalFare = fareForDistance + fareForTime;
        return Math.max(totalFare, this.minFare);
    }
}

let calculator = new UberPriceCalculator(1.5, 0.2, 5);
let distance = 10; // in kilometers
let time = 20; // in minutes
let price = calculator.calculatePrice(distance, time);
console.log(`Uber price: $${price}`);

//output:
//Uber price: $19

