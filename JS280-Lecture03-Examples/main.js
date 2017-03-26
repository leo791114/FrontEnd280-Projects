$(function () {

    //class
    // function Pokemon(nationalNo, hp, type, species, height, weight, abilities, localNo, japanese) {
    //     this.nationalNo = nationalNo;
    //     this.hp = hp;
    //     this.type = type;
    //     this.species = species;
    //     this.height = height;
    //     this.weight = weight;
    //     this.abilities = abilities;
    //     this.localNo = localNo;
    //     this.japanese = japanese;
    //     this.attack = function (other) {
    //         other.hp -= 20;
    //     };
    // }

    // var Fushigidane = new Pokemon(
    //     1,
    //     1200,
    //     ["Grass", "Poison"],
    //     "Seed Pokémon",
    //     0.71,
    //     6.9,
    //     "Overgrow",
    //     [1, 226, 231, 80],
    //     "Fushigidane"
    // );  //object,data

    // var Hitokage = new Pokemon(
    //     4,
    //     2000,
    //     ["Fire"],
    //     ["Lizard Pokémon"],
    //     0.61,
    //     8.5,
    //     "Blaze",
    //     [4, 229, 238, 84],
    //     "Hitokage"
    // );

    // var pokemons = [Fushigidane, Hitokage];

    var $pokemons = [];
    for (var index = 1; index <= 3; index++) {
        $pokemons.push($("<div></div>").addClass("col-md-3").text("one pokemon"));
    }

    $("#pokemons").append(pokemon1);
    $("#pokemons").append(pokemon2);
    $("#pokemons").append(pokemon3);

});