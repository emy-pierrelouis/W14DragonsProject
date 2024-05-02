// Adding plug-in (flatpickr)
// https://flatpickr.js.org/
flatpickr(".calendar");

// Adding plug-in (color)
// https://iro.js.org/
var colorPicker = new iro.ColorPicker('#picker', 
{
    // color picker options
    // Option guide: https://iro.js.org/guide.html#color-picker-options
    width: 260,
    // Pure red, green and blue
    colors: [
      "rgb(255, 0, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)",
    ],
    handleRadius: 9,
    borderWidth: 1,
    borderColor: "#fff",
});