
$(document).on("input paste focus", "#input_search,#input_search_mobile", function() {
    $("#response_search_results, #response_search_results_mobile").show()
});

$(document).on("click", function(a) {
    if ($(a.target).closest("#input_search,#input_search_mobile").length === 0) {
        $("#response_search_results, #response_search_results_mobile").hide()
    }
});


$(document).on("input paste focus", "#input_location", function() {
    $("#response_search_location").show()
});

$(document).on("click", function(a) {
    if ($(a.target).closest("#input_location").length === 0) {
        $("#response_search_location").hide()
    }
});





$('.wishlist').on('click', function(){
  $(this).toggleClass('in');
});
