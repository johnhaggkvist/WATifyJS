;(function () {
  var calculateSquareArea = function (width, height) { return width * height },
      height = 100,
      width = 200,
      area = calculateSquareArea(width, height),
      numberOfTimesToPrintResult = 10,
      i = 0;

  for (; i < numberOfTimesToPrintResult; i++) {
    console.log(area);
  }
})();
