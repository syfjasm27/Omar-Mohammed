

// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

// testimonials one -------------------------------------------------------------

let testiArr = [
  {
    imgCard: "img/testi1.jpg",
    nameClient: "Ali Saaeed",
    jobClient: " Graphic Designer",
    testiClient:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quia earum tenetur optio deserunt assumenda suscipit ",
  },

  {
    imgCard: "img/testi2.jpg",
    nameClient: "Khaled Mohammed",
    jobClient: " Telecommunicatin Engineer",
    testiClient:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quia earum tenetur optio deserunt assumenda suscipit ",
  },

  {
    imgCard: "img/testi3.jpg",
    nameClient: "Tamir smeeh",
    jobClient: " Programmer ",
    testiClient:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quia earum tenetur optio deserunt assumenda suscipit ",
  },

  {
    imgCard: "img/testi4.jpg",
    nameClient: "Ritha Zaid",
    jobClient: " Site Manager",
    testiClient:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quia earum tenetur optio deserunt assumenda suscipit ",
  },
];

const testiCard = document.querySelector(".index-page .testimonials .card");
const clientImg = document.querySelector(
  ".index-page .testimonials .card .img img"
);
const clientName = document.querySelector(
  ".index-page .testimonials .card .right h3"
);
const clientJob = document.querySelector(
  ".index-page .testimonials .card .right h6"
);
const clientTesti = document.querySelector(
  ".index-page .testimonials .card .right p"
);

const clientChange = document.querySelector(
  ".index-page .testimonials .card .right .change-client button"
);

clientImg.src = testiArr[0].imgCard;
clientName.innerHTML = testiArr[0].nameClient;
clientJob.innerHTML = testiArr[0].jobClient;
clientTesti.innerHTML = testiArr[0].testiClient;
  let card = 0 ;
  clientChange.addEventListener("click", () =>{

    card++;
    if (card == testiArr.length) {
      card = 0 ;
    }
    clientImg.src = testiArr[card].imgCard;
    clientName.innerHTML = testiArr[card].nameClient;
    clientJob.innerHTML = testiArr[card].jobClient;
    clientTesti.innerHTML = testiArr[card].testiClient;
    
  });
  
   

  // top function ------------------------------------------------------------------ /

  // Get the button
let myTopButton = document.querySelector(" .arrow-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myTopButton.style.display = "flex";
  } else {
    myTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
