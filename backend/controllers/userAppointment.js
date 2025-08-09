const Appointment = require("../models/appointmentSchema");

const handleUserAppointment = async (req, res) => {
  try {
    const { email } = req.user;

    const userAppointmentData = await Appointment.find({ email });
    console.log(userAppointmentData);

    return res.status(200).json({ userAppointmentData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch  user appointment" });
  }
};
module.exports = {
  handleUserAppointment,
};
