function dropDown(){
    $('#menu > li')(function(e){    
    if($('> ul').css('display') == 'none'){
        $(' > ul').css('display','block');
    }else{
        $('#menu > li').find('ul').css('display','none');
    }
    });
}