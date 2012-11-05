mocha.setup({ ui: 'bdd', ignoreLeaks: true });
window.expect = SinonExpect.enhance(expect, sinon, 'was');
window.onload = function() {
  var runner;
  if (window.mochaPhantomJS) {
    runner = mochaPhantomJS.run();
  } else {
    runner = mocha.run();
    runner.globals(['jQuery*']);
  }
};