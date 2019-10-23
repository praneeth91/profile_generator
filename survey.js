const readline = require('readline');
let questionsArray = ['What is your Name? (NickNames are fine too) ', 'What\'s an activity you like doing?', 'What do you listen to while doing that?', 'Which meal is your favourite (eg: dinner, brunch, etc.', 'What\'s your favourite thing to eat for that meal?', 'Which sport is your absolute favourite?', 'What is your superpower? In a few words, tell us what you are amazing at!'];
let array = [];
  function askQuestion (i, questionsArray) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  rl.question(questionsArray[i] , (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    array.push(answer);
    rl.close();
    if (i !== questionsArray.length -1) {
      askQuestion (++i, questionsArray);
    }
    else{
      console.log(`My name is ${array[0]}. My favorite activity is ${array[1]} and i like listening to ${array[2]} while doing that.My favorite meal is ${array[3]} and my favorite thing about it is ${array[4]}.My favorite sport is ${array[5]}.My superpower is ${array[6]}`);
    }
  });
}
askQuestion (0, questionsArray);