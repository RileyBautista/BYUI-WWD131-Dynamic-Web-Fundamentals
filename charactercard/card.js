var startHealth = 100;
const decreaseHealth = 20;

var startLevel = 5;

const snortleblat = {
    stats: {
        health: startHealth,
        level: startLevel
    },
    changeHealth: function() {
        this.stats.health -= decreaseHealth;
        if(this.stats.health <= 0) {
            this.stats.health = 0;
            alert('RIP Snortleblat');
        }
    },
    changeLevel: function() {
        this.stats.level += 1;
    }
}

document.querySelector('#health').innerHTML = '<b>Health: </b> ' + snortleblat.stats.health;
document.querySelector('#level').innerHTML = '<b>Level: </b> ' + snortleblat.stats.level;

document.querySelector('#changeHealth').addEventListener('click', function() {
    snortleblat.changeHealth();
    document.querySelector('#health').innerHTML = '<b>Health: </b> ' + snortleblat.stats.health;
});

document.querySelector('#changeLevel').addEventListener('click', function() {
    snortleblat.changeLevel();
    document.querySelector('#level').innerHTML = '<b>Level: </b> ' + snortleblat.stats.level;
});