module.exports = (Sequelize, sequelize) => {
    return sequelize.define('ActorsFilms', {
        actorId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        filmId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
};