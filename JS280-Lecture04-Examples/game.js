/**
 * 
 * @param {string} name 
 * @param {integer} currentHP 
 * @param {integer} hp 
 * @param {string} gender 
 * @param {float} weight 
 * @param {float} height 
 * @param {array} categories 
 * @param {object} powerUp 
 * @param {object} evolve 
 */
function Pokemon(
    name,
    currentHP,
    hp,
    gender,
    weight,
    height,
    categories,
    powerUp,
    evolve,
    abilities
) {
    this.name = name;
    this.currentHP = currentHP;
    this.hp = hp;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.categories = categories;
    this.powerUp = powerUp;
    // this.powerUpMethod = powerUpMethod;
    this.evolve = evolve;
    // this.evolveMethod = evolveMethod;
    this.abilities = abilities;
}



Pokemon.prototype.evolve = function (player) {

};



function Player(
    name,
    stardust,
    candy
) {
    this.name = name;
    this.stardust = stardust;
    this.candy = candy;
}


Player.prototype.canPowerUp = function (pokemon) {

    return this.stardust >= pokemon.powerUp.stardust &&
        this.candy[pokemon.name] >= pokemon.powerUp.candy;

};

Player.prototype.canEvolve = function (pokemon) {
    return this.stardust >= pokemon.powerUp.stardust;
};

Player.prototype.powerUp = function (player) {
    if (this.canPowerUp(pokemon)) {
        this.candy[pokemon.name] -= pokemon.powerUp.candy;
        this.stardust -= pokemon.powerUp.stardust;
        pokemon.powerUpMethod();
    }
};

Player.prototype.evolve = function (player) {
    if (player.canEvolve(this)) {
        this.candy[this.name] -= pokemon.evolve.candy;
        pokemon.evolveMethod();
    }
};