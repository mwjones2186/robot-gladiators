//player data
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//ememy data
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    // Alert players they are starting the round

    //log a resulting message to the console wso we knoe that it worked

    //subtract the value of enemyAttack from the value of platerHealth and use that result to update value in playerHealth valuse
enemyHealth = enemyHealth - playerAttack;
    console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

);
if (enemyHealth <=0) {
    window.alert (enemyName + " has died!");
} else {
    window.alert (enemyName + " still has " + enemyHealth + " health left.");
};


playerHealth = playerHealth - enemyAttack;
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
);
if (playerHealth <= 0) {
    window.alert (playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

};

fight();

var promptFight = window.confirm ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if player chooses fight
if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight"){
    enemyHealth = enemyHealth - playerAttack;
    console.log ( playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining. ");

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  };

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }; 
  
} else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip");
    var confirmSkip = window.confirm ( "Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert ( playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;

    }
else {
    fight();
};