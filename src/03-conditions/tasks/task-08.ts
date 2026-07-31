/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

type Information = {
    passenger: string
    onlineCheckIn: boolean
    cabinClass: string
    baggageWeightKG: number
}
let Passenger: Information = {
    passenger: `Fajar Nugroho`,
    onlineCheckIn: true,
    cabinClass: `Economy`,
    baggageWeightKG: 24
}

if(!Passenger.onlineCheckIn){
    console.log(`Please complete online check-in first`);
} else {
    if(Passenger.baggageWeightKG > 20){
        if(Passenger.cabinClass == `Business`){
            console.log(`Extra baggage allowed`);
        }else {
            console.log(`Additional Baggage fee required`);
        }
    } else {
        console.log(`You can proceed to boarding pass printing`);
    }
}