const authorize = (arrType) => (req, res, next) => {
  const { user } = req;
  if (arrType.findIndex((ele) => ele === user.type) > -1) {
    next();
  } else {
    res.status(403).send("Bạn đã đăng nhập , nhưng kho có quyền");
  }
};

module.exports = {
  authorize,
};
