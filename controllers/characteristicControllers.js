const characteristicsModel = require('../models/Characteristic');

const getCharacteristics = async (req, res) => {
  try {
    const allCharacteristics = await characteristicsModel.findAllCharacteristics();
    res.status(200).json({ allCharacteristics });
  }
  catch(err) {
    res.status(404).send({message: err.message});
  }
}

module.exports = {
  getCharacteristics,
};