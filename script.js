// Scroll to top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnScrollToTop").style.display = "block";
  } else {
    document.getElementById("btnScrollToTop").style.display = "none";
  }
}

document.getElementById("btnScrollToTop").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
