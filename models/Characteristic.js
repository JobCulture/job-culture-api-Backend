const characteristicData = require('../database/database');

class Characteristic {

    static async findAllCharacteristics() {
        const characteristics = await characteristicData.query('SELECT * FROM "characteristic" ORDER BY id');
        return characteristics.rows;       
    }
}

module.exports = Characteristic;
