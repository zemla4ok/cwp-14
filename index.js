const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config);
let films = require('./data/films.json');
const actors = require('./data/actors.json');

db.sequelize.addHook('beforeBulkCreate', () => {
    console.log('beforeCreate');
});
db.sequelize.addHook('afterBulkCreate', () => {
    console.log('afterCreate');
});
Work();

async function Work(){
    await db.sequelize.sync({force: true});

    //1. validation fields
    /*
    await db.films.create({
        title: 'eeee boy',
        rating: -1337,
        year: 1900,
        budget: -159,
        gross: 0,
        poster: 'no'
    });*/

    //2. insert 3 films in package
    await db.films.bulkCreate(films.slice(0,3));

    //3. package update
    await db.actors.bulkCreate(actors);
    await db.actorfilms.bulkCreate([
        {actorId: 1, filmId: 1},
        {actorId: 2, filmId: 2},        
    ])

    //4. delete actors where liked = 0;
    await db.actors.destroy({
        where: {
            liked: 0
        }
    });
}