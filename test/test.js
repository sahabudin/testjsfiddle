$('#idlah a').click(function(event){
    event.preventDefault();
    var href_val = $(this).attr('href');
    alert(href_val);
    $(this).parent().addClass('red');
});

$('#child li').click(function(event){
    event.preventDefault();
    var href_val = $(this).children().attr('href');
    alert(href_val);
    $(this).addClass('red');
});