function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>Express View Streaming Demo</title></head><body><h1>Login</h1> Hello ' +
      escapeXml(data.name) +
      '!</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);