const mongoose = require("mongoose");
//First of all we will create a mongoose schema with the following keys and a notes array where a user
// can store multiple notes
const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  // creating a realtionship between user model and note model using the ObjectId
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passHash;
  },
});

module.exports = mongoose.model("user", userSchema);
