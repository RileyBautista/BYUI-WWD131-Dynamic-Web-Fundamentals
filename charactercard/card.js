var startHealth = 100;
const decreaseHealth = 20;
const characterImage = document.querySelector('#characterImage');
const characterName = document.querySelector('.name');
const characterClass = document.querySelector('#characterClass');

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
        if(this.stats.level == 67) {
            characterImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fm%2FBSDl-JB632EAAAAC%2F67-67-meme.gif&f=1&nofb=1&ipt=61467f508912bf6bf547ac63a78dc26758208cfaa74e9deb62ede87e0906325e&ipo=images";
            characterName.textContent = "SIX SEVENNNNNNNNNNN";
            characterClass.innerHTML = '<b>Class: </b> SIX SEVENNNNNNNNNNN';
        } else if(this.stats.level == 68){
            characterImage.src = "snortleblat.webp";
            characterName.textContent = "Snortleblat";
            characterClass.innerHTML = '<b>Class: </b> Swamp Power Diplomat';
            this.stats.health = 1000;
            document.querySelector('#health').innerHTML = '<b>Health: </b> ' + snortleblat.stats.health;
        } else if(this.stats.level == 100){
            characterImage.src = "glorious_snortleblat.jpg";
            characterName.textContent = "Glorious Snortleblat";
            characterClass.innerHTML = '<b>Class: </b> Ultimate Swamp Power Diplomat';
        }
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