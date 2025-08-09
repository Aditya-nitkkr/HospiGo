const express = require("express");
const {
  handleSaveAppointment,
  handleFetchAppointments,
  handleAppointmentStatus,
} = require("../controllers/appointmentControllers");
const {isAdmin } = require("../authentication/jwt-auth");
const router = express.Router();

router.post("/create", handleSaveAppointment);
router.get("/admin", isAdmin, handleFetchAppointments);
router.put("/admin/update-status/:status_id",handleAppointmentStatus);

module.exports = router;
