
$(function () {
    for (var index = 1; index <= 151; index++) {
        var link;
        if (index < 10) {
            link = './public/Pokemons/Pokemons/' + '00' + index + '.png';
            $('body').append('<img>');
            $('img:last-child').attr('src', link);
        } else if (index >= 10 && index < 100) {
            link = './public/Pokemons/Pokemons/' + '0' + index + '.png';
            $('body').append('<img>');
            $('img:last-child').attr('src', link);
        } else {
            link = './public/Pokemons/Pokemons/' + '0' + index + '.png';
            $('body').append('<img>');
            $('img:last-child').attr('src', link);
        }
    }
});