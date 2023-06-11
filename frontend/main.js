$(function() {

  var scrollItem = $(".second-1");
  var scrollText = scrollItem.find(".second-div");
  var scrollImage = scrollItem.find("img");
  var scrollTextCount = scrollItem.find(".second-text");
  var textColor = "#000000"; // Початковий колір тексту
  var scrollCount = 0; // Лічильник прокруток

  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    var imageDiv = document.getElementById("scroll-content");
    // Виконувати функцію тільки в межах блоку "scroll-content"
    if(scrollPosition < 750){
      setTimeout(function(){
        scrollTextCount.find(".second-count").text("01");
        scrollImage.attr("src", "images/main_2.png");
        scrollText.find("h1").text("SNOWMASS");
        scrollText.find("h3").text("mountain");
        scrollText.find("p").text("Our mountain is a majestic masterpiece that captivates the senses and invites you to embark on an unforgettable adventure.");
        scrollTextCount.css("color", "#FFFFFF");
        imageDiv.style.opacity = "1";
      }, 500); // Затримка перед зміною зображення
    }else if (scrollPosition >= 750 && scrollPosition < 900) {
      setTimeout(function(){
        scrollTextCount.find(".second-count").text("02");
        scrollImage.attr("src", "images/main_3.png");
        scrollText.find("h1").text("MT DALY");
        scrollText.find("h3").text("mountain");
        scrollText.find("p").text("Rising proudly into the sky, our mountain stands as a testament to the earth's raw power and beauty. ");
        scrollTextCount.css("color", "#20363A");
        imageDiv.style.opacity = "1";
      }, 500); // Затримка перед зміною зображення
    } else if (scrollPosition > 900) {
      setTimeout(function(){
        scrollTextCount.find(".second-count").text("03");
        scrollImage.attr("src", "images/main_4.png");
        scrollText.find("h1").text("SHEEP");
        scrollText.find("h3").text("mountain");
        scrollText.find("p").text("Whether you're an avid hiker or a leisurely stroller, our mountain boasts a network of scenic trails that weave through lush forests, babbling streams, and alpine meadows.");
        scrollTextCount.css("color", "#D1D1D1");
        imageDiv.style.opacity = "1";
      }, 500); // Затримка перед зміною зображення
    }
  });
});

function checkInput() {
  var emailInput = document.getElementById("footer-email-input");
  var email = emailInput.value.trim();

  if (email === "") {
      emailInput.classList.add("error");
      alert("The input field is empty!");
  } else if (!isValidEmail(email)) {
      emailInput.classList.add("error");
      alert("Please enter a valid email address!");
  }
}

function isValidEmail(email) {
  var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}


