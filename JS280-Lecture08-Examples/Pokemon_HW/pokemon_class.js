//class
function PokemonDetail(nationalNo, hp, type, species, height, weight, abilities, localNo, name) {
    this.nationalNo = nationalNo;
    this.hp = hp;
    this.type = type;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.localNo = localNo;
    this.name = name;
}

module.exports = PokemonDetail;

