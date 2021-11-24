
const rolls = process.argv.slice(2);
//set up node command lines

const diceRoll = function() {
  //set up diceRoll function
  let newArray = [];
  //make variable to hold new array which equal the number of elements as is the value of 'rolls'
  let combine = "";
  //make variable to give fial string 
    for (i = 0; i < rolls; i++) {
      //loop though the number of times as equal to value of 'rolls'
      let newNum = Math.floor(Math.random() * 6) + 1;
      //determine the new value of each element in new array based on the randomize() prototype & use Math floro to round down
      newArray.push(newNum);
      //push the randomized values as they determiend through the loop into the emty array
    }
    combine = newArray.join(",");
    //make the new elements in the array into concanated strings
console.log(`Rolled ${rolls} dice: ${combine}`);
};
return diceRoll();

