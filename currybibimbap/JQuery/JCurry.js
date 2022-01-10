
$(document).ready(function () {
  $(".hiimg").mouseenter(function () {
    $(".areaimg").animate({ opacity: '0.3' }, 120);
  });
});


$(document).ready(function () {
  $(".hiimg").mouseleave(function () {
    $(".areaimg").animate({ opacity: '1' }, 120);
  });
});



$(document).ready(function () {
  $(".areaimg").mouseenter(function () {
    $(".hiimg").animate({ opacity: '0.3' }, 120);
  });
});



$(document).ready(function () {
  $(".areaimg").mouseleave(function () {
    $(".hiimg").animate({ opacity: '1' }, 120);
  });
});



$(document).ready(function () {
  $(".hiimg").click(function () {
    $(".areaimg").hide("1000");
  });
});
