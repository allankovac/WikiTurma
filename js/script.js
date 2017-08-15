jQuery(document).ready(function( $ ){
    var uls = $('#menu ul');
    uls.hide();
    //$('#conteudo').hide();
    $('#menu > li').click(function( e ){    
        uls.hide();
        $('#menu > li').css('background-color',"#428bca");
        $( this ).find('ul').show();
        $( this ).css('background-color',"#2476ff");
    });
   
});