const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaNBiscuits(callback){
  reader.question("Would you like some tea?: ", function(answerTea) {
    reader.question("Would you like a biscuit?: ", function(answerB) {
      teaSponce = answerTea; bSponce = answerB; callback(teaSponce, bSponce);
    });
  });
}

teaNBiscuits( () => {
  console.log(`So thats ${teaSponce} to tea, and ${bSponce} to a biscuit`);
  reader.close()

});
