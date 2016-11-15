function ez_json(url, data, success, fail) {

  var reqType = 'POST';

  // shift arguments if no data, thanks jQuery!
  if (typeof data === 'function') {
    fail = success || undefined;
    success = data;
    data = undefined;
    reqType = 'GET';
  }

  var request = new XMLHttpRequest();
  request.open(reqType, url, true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      success(JSON.parse(this.response));
    } else {
      // We reached our target server, but it returned an error
      fail("Failed with status " + this.status);
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    fail("There was a connection error");
  };

  request.send(
    reqType === 'POST' ? json.stringify(data) : null;
  );
}
