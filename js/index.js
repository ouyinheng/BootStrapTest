var i=0;
$(".oul>ul>li").on("click",function(){
	var otitle = $(this).text();
	var ocontent = $(this).next().children().eq(0).text();
	var ohref = $(this).next().children().eq(1).text();
	var stitle1 = $(this).next().children().eq(2).text();
	var simg1 = $(this).next().children().eq(3).text();
	var stitle2 = $(this).next().children().eq(4).text();
	var simg2 = $(this).next().children().eq(5).text();
	var stitle3 = $(this).next().children().eq(6).text();
	var simg3 = $(this).next().children().eq(7).text();
	$(this).addClass("active").siblings().removeClass("active");
	$(".title>h3").html(otitle);
	$(".title>p:eq(0)").html(ocontent);
	$(".title>p:eq(1)").html("如果你想去看看，那就快点击下面的按钮吧");
	$(".title>p:eq(2)>a").attr("href",ohref);
	$(".odisplay").empty();
	var newDiv1 = $(`
		<div class="col-12 col-sm-6 col-lg-4">
			<h2>`+stitle1+`</h2>
			<img src="`+simg1+`" alt="图片不见了" class="img-responsive">
		</div>
	`);
	$(".odisplay").append(newDiv1);
	var newDiv2 = $(`
		<div class="col-12 col-sm-6 col-lg-4">
			<h2>`+stitle2+`</h2>
			<img src="`+simg2+`" alt="图片不见了" class="img-responsive">
		</div>
	`);
	$(".odisplay").append(newDiv2);
	var newDiv3 = $(`
		<div class="col-12 col-sm-6 col-lg-4">
			<h2>`+stitle3+`</h2>
			<img src="`+simg3+`" alt="图片不见了" class="img-responsive">
		</div>
	`);
	$(".odisplay").append(newDiv3);
});

$(".oul>ul>li:eq(0)").trigger("click");



