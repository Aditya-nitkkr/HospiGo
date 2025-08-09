const bcrypt = require("bcrypt");

const handleHashPassword = async (plainPassword) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(plainPassword, saltRounds);
  return hashed;
};
const comparePassword = async (userPassword, hashedPassword) => {
  return await bcrypt.compare(userPassword, hashedPassword);
};
module.exports = { handleHashPassword, comparePassword };
