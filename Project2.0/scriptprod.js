//Jared Dylan Simons Block 3
//Student No: L38876914

//Refrence - Authour:Minh Quang  Site:https://www.codehim.com/collections/javascript-shopping-cart-examples-with-demo/
//The codes below are used to create the placment settings for each products slide

//START Refrence - Authour:Minh Quang  Site:https://www.codehim.com/collections/javascript-shopping-cart-examples-with-demo/
//first Product Box: 
var slideIndex = 1;         
showDivs(slideIndex);       

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {        //Code initilises each product box
  var i;                        
  var x = document.getElementsByClassName("slide1"); //first product slide is called "slide1"
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//second Product Box: 
var slideIndex1 = 1;         
showDivs1(slideIndex1);

function plusDivs2(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("slide2");
  if (n > x.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "block";  
}

//third Product Box:
var slideIndex2 = 1;         
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slide3");
  if (n > x.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}

//fourth Product Box
var slideIndex3 = 1;             
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("slide4");
  if (n > x.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}

//fifth Product Box
var slideIndex4 = 1;              
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("slide5");
  if (n > x.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex4-1].style.display = "block";  
}

//sixth Product Box
var slideIndex5 = 1;              
showDivs5(slideIndex5);

function plusDivs4(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("slide6");
  if (n > x.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex5-1].style.display = "block";  
}


// Code to initialize price array 
var bag =[];   
    
$(document).ready(function(){              // Animation code for cart container:        
  $('.cart').click(function(){
    $('.checkout-container').fadeToggle();
  });
  
  $('.checkout').addClass('disabled');      //Checkout and clear button disabled until product is added
  $('#bin').addClass('disabled');
});

$(document).on('click','.add-to-cart',function(e){  //Checkout and clear button disabled until product is added
  e.preventDefault();
  $('.empty').hide();
  
  
  if($(this).hasClass('disable')){    //disable mutiple clicks for Add Product option
    return false;
  }
  $(document).find('.add-to-cart').addClass('disable');
 
  
  
  //Product add animation
  var parent = $(this).parents('.snip');
  var src = parent.find('img').attr('src');
  var cart = $(document).find('.cart');
  
  var posTop = parent.offset().top;    //return the coordinates of a element
  var posLeft = parent.offset().left;
 
  $('<img />', { 
   class: 'animation-fly',
   src: src
}).appendTo('body').css({
    'top': posTop,      
    'left': parseInt(posLeft)
  }); 
  
  setTimeout(function(){        //Time out animation code
    $(document).find('.animation-fly').css({
      'top': cart.offset().top,
      'left': cart.offset().left
    });
    setTimeout(function(){
      $(document).find('.animation-fly').remove(); //after fly animation
      var quantity = parseInt(cart.find('#count-item').data('count'))+1;
       if(quantity<2){
         cart.find('#count-item').text(quantity + ' item').data('count', quantity);
       }
       else{
         cart.find('#count-item').text(quantity + ' items').data('count', quantity);      }
      cart.find('#count-item').text(quantity + (quantity<2 ?' item':' items')).data('count', quantity);
      
    //add item to cart
    var name = parent.find('h4').text();
    var price = parent.find('.real').text();
    var txt3 = document.createElement("hr");
    var txt4 = document.createElement("hr");
       
    $('.col1-name').append(name,txt3);
    $('.col2-price').append(price,txt4);
    $('.checkout').addClass('add-animation');
    $('.checkout').removeClass('disabled');
    
    $('#bin').addClass('add-animation2');
    $('#bin').removeClass('disabled');
    
    //find total amount calculation
    var price2 = parseFloat(parent.find('.real').data('price')); //get "data-price" from <div class="real">
    bag.push(price2);                                            
    var total = 0;
    $(".total-amount").text(function(){
     for(var i in bag){
      total += bag[i];    //calculate sum of all numbers in the array 
     }
     var last = "£ " + total.toFixed(2);
     $('.pay-last').text(last);
     return last;   // return total only -> bug.
     
    });
      
      $(document).find('.add-to-cart').removeClass('disable');
    },1000);
  },500);
  
  //Clear cart function
  $('.bin').on('click',function(){     
   $('.col1-name').empty();
   $('.col2-price').empty();
   $('.empty').show();
   $('.checkout').removeClass('add-animation');
   $('#bin').removeClass('add-animation2');
   $('.checkout').addClass('disabled');
   $('#bin').addClass('disabled');
   bag = [];
   $('.total-amount').add('.pay-last').text("$ " + bag.length);
   cart.find('#count-item').text(0 + ' item').data('count', 0);
 });
  
});




//Code for bill funcyion
$(document).ready(function(){
  $('#coupon').on('click',function(){
    alert("minhquanghust.blogspot.com Coupon Code:" + '\n' + "25% off: 0511Q-1601CV" +'\n' + "15% off: 0511Q-1701NA" + '\n' + "10% off: 0511Q-1901QA")
  });
})
//END Refrence - Authour:Minh Quang  Site:https://www.codehim.com/collections/javascript-shopping-cart-examples-with-demo/