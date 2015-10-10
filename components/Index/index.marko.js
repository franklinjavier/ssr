function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>Express View Streaming Demo</title></head><body><h1>Express View Streaming Demo</h1> Hello ' +
      escapeXml(data.name) +
      '! <ul>');

    forEach(data.colors, function(color) {
      out.w('<li style="color: ' +
        escapeXmlAttr(color) +
        '">' +
        escapeXml(color) +
        '</li>');
    });

    out.w('</ul></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);