var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = (btn.closest(".modal").style.display = "none");
    };
});



var suggestBtns = document.querySelectorAll(".suggest-rounds");

suggestBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = (btn.closest(".modal").style.display = "none");
    };
});