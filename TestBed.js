
      function load() {
         setTimeout(myURL, 9000);
         var result = document.getElementById("result");
         result.innerHTML = `The page will load after delay of 5 seconds using setTimeout()  method.`;
      }

      function myURL() {
         window.open('https://www.tutorialspoint.com/index.htm', name = self);
      }

