const Appointment = require("../models/appointmentSchema");

const handleSaveAppointment = async (req, res) => {
  console.log(req);
  const { appointmentDate, doctorId } = req.body;
  console.log("req body", req.body);

  try {
    const existing = await Appointment.findOne({
      appointmentDate,
      doctorId,
    });

    if (existing) {
      return res.json({
        message:
          "Appointment already exists for this doctor and user on this date",
      });
    }

    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    console.log(newAppointment);

    return res.json({ message: "Successfully made an Appointment" });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Failed to make appointment" });
  }
};

const handleFetchAppointments = async (req, res) => {
  const { email } = req.user;
  // console.log(email);

  try {
    const appointments = await Appointment.find({ hospitalEmail: email });
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: "No appointments found" });
    }

    console.log(typeof appointments);

    return res
      .status(200)
      .json({ message: "Fetch the appointments", appointments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch appointments" });
  }
};

const handleAppointmentStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.status_id,
      { status },
      { new: true }
    );
    // console.log(updatedAppointment);
    return res.send(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
};
module.exports = {
  handleSaveAppointment,
  handleFetchAppointments,
  handleAppointmentStatus,
};
