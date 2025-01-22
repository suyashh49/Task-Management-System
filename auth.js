const jwt = require("jsonwebtoken");
const secretKey = "a1B2c3D4e5F6g7H8i9J0k1L2m3N4"; 

const generateToken = (userId) => {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
