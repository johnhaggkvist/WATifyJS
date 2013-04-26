WATify.js
==========

Inspired by the answer in this [thread](http://codegolf.stackexchange.com/a/11462). I got the idea of having a WATifyer that obfuscates JavaScript.

The idea is based on the fact that EcmaScript accepts [most unicode characters in variable names](http://mathiasbynens.be/notes/javascript-identifiers).

Utilizing that there are a couple of characters in the Cyrillic range that [look the same as Latin characters when using a lot of fonts](http://www.unicodemap.org/range/9/Cyrillic/) one can construct two valid variable names that _look_ the same in a font, but consists of different characters and therefore are different identifier.

So, I forked UglifyJS 2 (that is perfectly capable of minifying variable names while not breaking the code). Wrote and algorithm that outputs similar looking words, took a name that has a lot of exchangeable characters (`BOOMBOX`), and pushed play. :)

The results are:

My original JavaScript (readable, outputs the area 10 times).

    $ cat demo.js 
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

Way too readable! Enter WATify!

    $ ./bin/uglifyjs demo.js -b -m
    (function() {
        var ВООМВОХ = function(ВООМВОХ, ВООМВОX) {
            return ВООМВОХ * ВООМВОX;
        }, ВООМВОX = 100, ВООМВOХ = 200, ВООМВOX = ВООМВОХ(ВООМВOХ, ВООМВОX), ВООМBОХ = 10, ВООМBОX = 0;
        for (;ВООМBОX < ВООМBОХ; ВООМBОX++) {
            console.log(ВООМВOX);
        }
    })();
    
Now thats more like it! This is still valid JavaScript and will run in you console, still outputs the area 10 times.
