function TekkenHero(pick1, pick2, callback) {
    console.log('pick hero: ' + pick1 + ', ' + pick2);
    callback();
}

TekkenHero('jin', 'paul', function() {
    console.log('picked');
})