module.exports = class Page {
    
  open(path) {
    return browser.url(`https://sdonelli.github.io/activity-9/source/${path}`);
  }

  forceOnBlur() {
    $("#content").click();
  }

  /**
   * Workaround when testing validation based on HTML type.
   */
  forceOnBlurIn(forceOnSelector, clickOnSelector) {
    if (forceOnSelector.isFocused()) {
      $(clickOnSelector).click();
    }
  }

};
