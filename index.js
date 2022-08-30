console.log("Your index.js file is loaded correctly!");
$('a.nav-link').hover(function(){
  console.log("test");
  $(this).css('color', '#00AEEF');
  }, function(){
  $(this).css('color', '#ffffff');
});