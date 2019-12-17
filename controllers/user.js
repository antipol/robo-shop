exports.login = (req, res, next) => {
  res.render("user/login");
};

exports.signup = (req, res, next) => {
  res.render("user/signup");
};

exports.profile = (req, res, next) => {
  res.render("user/profile");
};
