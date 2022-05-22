//player data
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;

if (playerHealth > 0){
        console.log ("Your player is still alive!");
};
else {
        console.log (" ded");
};

var playerAttack = 10;

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
    //log a resulting message to the console so we know it worked
console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

);

if (enemyHealth <=0) {
    window.alert (enemyName + " has dies!");
}
else {
    window.alert (enemyName + " still has " + enemyHealth + " health left.");
}
playerHealth = playerHealth - enemyAttack;

console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"

);

};

fight();
