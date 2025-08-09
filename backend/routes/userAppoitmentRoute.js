const express = require("express");
const { handleUserAppointment } = require("../controllers/userAppointment");
const { requireAuth } = require("../authentication/jwt-auth");

const router = express.Router();

router.get("/appointment", requireAuth, handleUserAppointment);

module.exports = router;
