import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.headers["set-cookie"];
  if (!token) {
    return res.status(403).send("Not Authenticated");
  }
  token = new String(req.headers["set-cookie"]).split(";")[0];
  token = token.substring(4);
  // let token = req.headers["set-cookie"][0];

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.payload = decoded;
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;
