$(function () 
{
    $("#IContainer").sortable({
        update: function () 
        {
            getImages();
        }        
    });
});

function getImages() {
    var val = [];
    $('.item').each(function () 
    {
        val.push($(this).attr("id")
            .replace("imageNo", ""));
    });
    $('#values').val(val);
}