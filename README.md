# ez-json
Minimal vanilla-js POST library for JSON.

You're probably only using this because I told you to.

```javascript
ez-json(url, [data], success, fail);

  url: The path to the API
  data: (optional) JSON formatted object with data
  success: function to run on success, json response as parameter
  fail: function to run on fail, error string as parameter
```

## Usage
1. Download the ez-json.js file into your project folder.
2. Include the file in the header of the HTML file, *above* your own script.  
`<script src='ez-json.js'></script>`
3. Use according to one of the following examples.

### Request without sending data
```javascript
ez-json('http://my.url/file.php', success, fail);
```

### Request while sending JSON data
```javascript
ez-json('http://my.url/file.php', success, fail);
```
