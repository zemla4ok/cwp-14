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

    
}