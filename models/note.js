// 1. Connecting to the Mongo Database
const mongoose = require("mongoose");

// 2.Creating Schema to store the note in DB
const noteSchema = mongoose.Schema({
  content: {
    type: String,
    minLength: 3,
    required: true,
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
      required: [true, "User Phone Number Required"],
    },
  },
  important: Boolean,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

// 3. Creating Model of our note schema
module.exports = mongoose.model("Note", noteSchema);

// 4. To delete _id and _v from the MongoDB
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
