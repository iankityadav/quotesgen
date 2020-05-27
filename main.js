const button = document.querySelector("button");
button.addEventListener("click", updateQuote);
function updateQuote(){
$.ajax({
  url: "https://api.quotable.io/random",
  dataType: 'json',
  success: function(res) {
    $(document).ready(function(){
        $("#a").text(res.content);
        $("#b").text("- "+res.author);
        
    });
  }
});
}

updateQuote();
