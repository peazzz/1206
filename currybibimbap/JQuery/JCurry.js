
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



$(document).ready(function () {
  $(".areaimg").click(function () {
    $(".hiimg").animate({ opacity: '0' });
    $(".areaimg").animate({ opacity: '0' });
    $(".hiimg").toggle();
    $(".areaimg").toggle();
  });
});



$(document).ready(function () {
  $(".areaimg").click(function () {
    $(".row").append("<img src='images/map.png' width=100% height=100%>");
    $(".row").append("<button class='button1'>上一頁</button>");
  });
});
