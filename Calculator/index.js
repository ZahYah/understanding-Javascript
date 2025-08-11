let output = localStorage.getItem("output") || "";

      displayCalculation();

      function updateCalculation(num) {
        output += num;
        localStorage.setItem("output", output);
        displayCalculation();
      }

      function displayCalculation() {
        document.querySelector(".js-output").innerHTML = output;
      }