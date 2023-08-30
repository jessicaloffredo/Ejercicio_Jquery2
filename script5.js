$(document).ready(function(){
  $("div").click(function(){
      altura=$(this).height()
      anchura=$(this).width()
      $(this).height(altura-8).width(anchura-8);
      $(this).css("background-color", "#0000FF")
      $(this).css("font-size", "50%")
      $(this).css("color", "#FFFFFF")
  })
})