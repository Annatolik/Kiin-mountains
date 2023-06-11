function checkInputs() {
    // Отримати всі вводи за допомогою їх id
    var input1 = document.getElementById("input-1").value;
    var input2 = document.getElementById("input-2").value;
    var input3 = document.getElementById("input-3").value;
    var input4 = document.getElementById("input-4").value;
    var input5 = document.getElementById("input-5").value;
    var input6 = document.getElementById("input-6").value;
    var input7 = document.getElementById("input-7").value;

    // Перевірити, чи всі вводи заповнені
    if (
      input1 !== "" &&
      input2 !== "" &&
      input3 !== "" &&
      input4 !== "" &&
      input5 !== "" &&
      input6 !== "" &&
      input7 !== ""
    ) {

      const data = {
        input1,
        input2,
        input3,
        input4,
        input5,
        input6,
        input7
      };
    
      fetch('/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.text())
        .then(message => {
          alert(message);
        })
        .catch(error => {
          console.error(error);
        });

      alert("Your data is saved! The administration will contact you during the day."); // Вивести алерт успіху

      // Очистити значення вводів
      document.getElementById("input1").value = "";
      document.getElementById("input2").value = "";
      document.getElementById("input3").value = "";
      document.getElementById("input4").value = "";
      document.getElementById("input5").value = "";
      document.getElementById("input6").value = "";
      document.getElementById("input7").value = "";
    } else {
      alert("Please fill in all inputs.");
    }
  }