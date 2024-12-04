// submit the form
$(document).on("submit", ".myForm", function (event) {
  event.preventDefault();
  $(this).find(".name-error").text("");
  $(this).find(".mobile-error").text("");
  $(this).find(".email-error").text("");
  $(this).find(".name-error").removeClass("bounce");
  $(this).find(".email-error").removeClass("bounce");
  $(this).find(".mobile-error").removeClass("bounce");
  var data = {};
  var isValid = true;
  $(this)
    .serializeArray()
    .forEach(function (item) {
      data[item.name] = item.value;
    });
  if (data["name"].length < 3) {
    $(this).find(".name-error").text("Please Enter a Valid Name");
    $(this).find(".name-error").addClass("bounce");
    isValid = false;
  }
  if (data["mobile"].length < 10) {
    $(this)
      .find(".mobile-error")
      .text("Mobile number must be at least 10 characters long");
    $(this).find(".mobile-error").addClass("bounce");
    isValid = false;
  }
  if (data["mobile"].length > 13) {
    $(this)
      .find(".mobile-error")
      .text("Mobile number must be at least 10 characters long");
    $(this).find(".mobile-error").addClass("bounce");
    isValid = false;
  }
  if (data["email"] == "") {
    $(this).find(".email-error").text("Enter a valid email");
    $(this).find(".email-error").addClass("bounce");
    isValid = false;
  }
  if (isNaN(data["mobile"])) {
    $(this).find(".mobile-error").text("Enter a valid number");
    $(this).find(".mobile-error").addClass("bounce");
    isValid = false;
  }

  if (isValid) {
    // form is valid, submit it via AJAX
    console.log(data);
    $(this).find(".submit").prop("disabled", true);
    $(this).find(".name-error").text("");
    $(this).find(".email-error").text("");
    $(this).find(".mobile-error").text("");
    $(this).find(".name-error").removeClass("bounce");
    $(this).find(".email-error").removeClass("bounce");
    $(this).find(".mobile-error").removeClass("bounce");
    //console.log(data);

    $.ajax({
      type: "POST",
      url: "process_form.php",
      data: $(this).serialize(),
      success: function (data) {
        $(".myForm").each(function () {
          this.reset();
        });
        if (data == "success") {
          window.location.href = "thankyou.php";
        }
      },
    });
  }
});

// // Disable right-click
// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });

// // Disable key (Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, and Ctrl+U)
// document.addEventListener('keydown', function (e) {
//   if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
//       e.preventDefault();
//   }

//   if (e.ctrlKey && e.key === 'U') {
//       e.preventDefault();
//   }
// });
// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2500, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after interaction
  },
});

$(document).ready(function () {
  // Add click event listener for swiper-slide
  $(".swiper-slide").click(function () {
    // Find the img inside the clicked slide and get its src
    let imgSrc = $(this).find("img").attr("src");
    $(".imagePopContainer").addClass("d-flex");
    $(".imagePopContainer img").attr("src", imgSrc);
  });
  $(".imagePopContainer").click(function () {
    $(this).removeClass("d-flex");
  });
});
