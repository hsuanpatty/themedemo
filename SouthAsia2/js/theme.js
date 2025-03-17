$('.products-list').owlCarousel({
	loop: true,
	dots: true,
	margin: 10,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		767: {
			items: 1
		},
	}
})


//其它連到對應區塊
$("a").on("click", function () {
    var hrefLink = $(this).attr("href");
    console.log(hrefLink);
    $("html,body").animate(
      {
        scrollTop: $(hrefLink).offset().top //直接到相對位置
      },
      800
    );
});



// top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
	document.body.scrollTop > 20 ||
	document.documentElement.scrollTop > 20
  ) {
	document.getElementById("movetop").style.display = "block";
  } else {
	document.getElementById("movetop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// 字數
$(function(){
    var len = 30;
    $(".JQellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});
