require("dotenv").config();
require("./authentication/google");
const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const app = express();
const authRoutes = require("./routes/userRoutes");
const appointmentRoute = require("./routes/appointmentRoute");
const userAppointment = require("./routes/userAppoitmentRoute");
const connectDB = require("./config/db");
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;
const cors = require("cors");
const path = require("path");
const { errorMiddleWare } = require("./middleWares/error-middleware");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(cookieParser());
app.use(express.json());

connectDB(URL);
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoute);
app.use("/api/user", userAppointment);

app.use(errorMiddleWare);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
