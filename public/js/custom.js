 $(document).ready(function() {
      $("#sidebar-button").on('click', function(){
        $(".side-menu").toggleClass('open');
    });
  });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
        $("#sidemenu").load("sidemenu.html");

});

$(document).ready(function() {
	document.getElementById("uploadBtn").onchange = function () {
	    document.getElementById("uploadFile").value = this.value;
	};

	document.getElementById("uploadBtn2").onchange = function () {
	    document.getElementById("uploadFile2").value = this.value;
	};

	document.getElementById("uploadBtn3").onchange = function () {
	    document.getElementById("uploadFile3").value = this.value;
	};

	document.getElementById("uploadBtn4").onchange = function () {
	    document.getElementById("uploadFile4").value = this.value;
	};

	document.getElementById("uploadBtn5").onchange = function () {
	    document.getElementById("uploadFile5").value = this.value;
	};

	document.getElementById("uploadBtn6").onchange = function () {
	    document.getElementById("uploadFile6").value = this.value;
	};
});