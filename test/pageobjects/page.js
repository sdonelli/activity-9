module.exports = class Page {
    
  open(path) {
    return browser.url(`https://sdonelli.github.io/activity-9/source/${path}`);
  }

};
