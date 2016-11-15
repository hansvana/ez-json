# ez_json
Minimal vanilla-js POST library for JSON.

You're probably only using this because I told you to.

```javascript
ez_json(url [,data] ,success [,fail]);

  url: The path to the API
  data: (optional) JSON formatted object with data
  success: function to run on success, returns json response
  fail: (optional) function to run on fail, returns error string
```

## Usage
1. Download the ez_json.js file into your project folder.
2. Include the file in the header of the HTML file, *above* your own script.  
`<script src='ez_json.js'></script>`
3. Use according to one of the following examples.

### Request without sending data
```javascript
ez_json('http://my.url/file.php', success, fail);
```

### Request while sending JSON data
```javascript
ez_json('http://my.url/file.php', success, fail);
```
