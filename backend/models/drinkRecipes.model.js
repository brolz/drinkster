const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  drinkName: { type: String, required: true },
  recipe: { type: Array, required: true },
  instructions: { type: String, required: true },
});

module.exports = Drink = mongoose.model("drinks", DrinkSchema);
