const mongoose = require("mongoose");
const appointmentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  relation: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  mobile2: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  selectSlot: {
    type: String,
    default: "Not selected",
    required: true,
  },
  reason: {
    type: String,
  },
  hospitalId: {
    type: String,
    required: true,
  },
  hospitalEmail: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

const Appointment = mongoose.model("appointmentDetails", appointmentSchema);

module.exports = Appointment;
