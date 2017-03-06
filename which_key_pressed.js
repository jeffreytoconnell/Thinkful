<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <input type="text" placeholder="Type here">
  <button type="button">Click me</button>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <div class="output"></div>
</body>
</html>

// javascript

$(function() {
  $('button').mousedown(function(event) {
    $('.output').text('Button clicked: ' + event.which);
  });

  $('input').keydown(function(event) {
    $('.output').text('Key pressed: ' + event.key);
  });
});

