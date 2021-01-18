$(document).ready(function(){
    
            $('#fullpage').fullpage({
				scrollBar:true /*fullpage 사용시 반드시 적용되는 옵션*/
			})//end fullpage

			$('.product').bxSlider({auto:true,mode:'fade'})//end bxslide
			$('#brand').bxSlider({auto:true,slideWidth:380,maxSlides:3,minSlides:3,slideMargin:20,moveSlides:1,
			pager:false})//end bxslide


            $('.bt').on('click',function(){
               // $('nav').toggle();
			   $('header').toggleClass('on');
                $('.menu').toggleClass('on');
            })// click event

			console.log($(window).height())
			console.log($('body').height())

			/*위로가기 버튼*/
			$('.quickmenu>a:first').on('click',function(event){
				$('html,body').animate({scrollTop:0},600)
				event.preventDefault()
			})

			/*페이지 하단 이동 버튼*/
			$('.quickmenu>a:last').on('click',function(event){
				var wheight=$(window).height() // 창의 높이 값
				var bheight=$('body').height() // 페이지 전체 높이
				$('html,body').animate({scrollTop:bheight-wheight},600)
				event.preventDefault()
			})

			$(window).on('scroll',function(){
				//스크롤이 발생되면 .quickmenu 가 보이게 합니다
				//스크롤이 발생되었다는 의미는 $(window).scrollTop() 의 위치가 0보다 크다는 의미로 잡으면 되겠죠

				if ($(window).scrollTop()>0)
				{
					$('.quickmenu').show()
				}else{
					$('.quickmenu').hide()
				}
				console.log($(window).scrollTop())
			})
    
        })//end ready