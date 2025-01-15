$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('header').addClass('scroll')
  } else {
    $('header').removeClass('scroll')
  }
})
/* Open the sidenav */
function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}
/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
function openCart() {
  document.getElementById("sideCart").style.width = "450px"; 
  document.getElementById("blur-overlay").classList.add("active");
  document.body.classList.add("no-scroll"); 
}

function closeCart() {
  document.getElementById("sideCart").style.width = "0"; 
  document.getElementById("blur-overlay").classList.remove("active"); 
  document.body.classList.remove("no-scroll"); 
}

$(document).ready(function () {
  $('.owl-slider').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    smartSpeed: 450,
    rtl: true,
  });

  $('.categories-slider').owlCarousel({
    items: 3,
    loop: false,
    dots: true,
    nav: true,
    margin: 25,
    pagination: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },

      600: {
        items: 2,
        nav: true
      },

      900: {
        items: 3,
        nav: true
      },

      // 1200: {
      //   items: 5,
      //   nav: true
      // }
    }
  });
  $('.plates-slider').owlCarousel({
    items: 4,
    loop: false,
    dots: true,
    nav: true,
    margin: 15,
    pagination: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },

      600: {
        items: 2,
        nav: true
      },

      900: {
        items: 3,
        nav: true
      },

      1200: {
        items: 4,
        nav: true
      }
    }
  });
  $(".owl-prev > span").html('<i class="fas fa-arrow-right"></i>');
  $(".owl-next > span").html('<i class="fas fa-arrow-left"></i>');
  $("#modal").modal("show");


});

$(document).on('show.bs.modal', function (e) {
  var modal = $(e.target).find('.modal-dialog');
  modal.css({
    transform: 'translateY(-50px)',
    opacity: 0
  });
  setTimeout(() => {
    modal.css({
      transform: 'translateY(0)',
      opacity: 1,
      transition: 'all 0.5s ease-out'
    });
  }, 10);
});

$(document).on('hide.bs.modal', function (e) {
  var modal = $(e.target).find('.modal-dialog');
  modal.css({
    transform: 'translateY(-50px)',
    opacity: 0,
    transition: 'all 0.5s ease-in'
  });
});


// otp password time counter
function moveToNext(current, nextId) {
  if (current.value.length === 1) {
    const nextInput = document.getElementById(nextId);
    if (nextInput) nextInput.focus();
  }
}

function moveToPrevious(event, prevId) {
  if (event.key === 'Backspace' && event.target.value === '') {
    const prevInput = document.getElementById(prevId);
    if (prevInput) prevInput.focus();
  }
}
function startCountdown(durationInSeconds) {
  const timerElement = document.getElementById('timer');
  let remainingTime = durationInSeconds;

  timerElement.textContent = `  الوقت المتبقي ${remainingTime} `;

  const countdown = setInterval(() => {
    remainingTime -= 1;
    timerElement.textContent = `  الوقت المتبقي ${remainingTime} `;

    if (remainingTime <= 0) {
      clearInterval(countdown);
      timerElement.textContent = 'انتهي الوقت ';
      disableInputs();
    }
  }, 1000); // Decrements every 1 second
}

// Disable all input fields when time is up
function disableInputs() {
  document.querySelectorAll('.code-input input').forEach(input => {
    input.disabled = true;
  });
}

// Start the countdown timer with 1:30 on page load
window.onload = function () {
  startCountdown(90); // 90 seconds for 1:30
};

// Function to start the countdown
function startCountdown(seconds) {
  var timerElement = document.getElementById("timer"); // Assume you have a <p> with id="timer"
  var interval = setInterval(function () {
    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    // Format minutes and seconds to always show two digits
    timerElement.innerHTML = formatTime(minutes) + ":" + formatTime(remainingSeconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(interval);
      timerElement.innerHTML = "00:00"; 
    }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}




// ************************************************** 
// eye password hide and show 
const passwordInput = document.getElementById('passwordInput');
const togglePasswordButton = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');
togglePasswordButton.addEventListener('click', function () {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  eyeIcon.classList.toggle('fa-eye');
  eyeIcon.classList.toggle('fa-eye-slash');
});
//  *********************** 

  // JavaScript function to toggle the corner color
  function toggleColor(element) {
    element.classList.toggle("active");
  }
  
  // checking on checkbox and radio 
  function toggleCheckbox(orderItem) {
    const checkbox = orderItem.querySelector('.form-check-input');
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }
  }

  function toggleRadio(formCheck) {
    const radio = formCheck.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
  }