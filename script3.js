if(jQuery){
    console.log('jQUERY est bien installé !');
    
    let intro = $('#introduction').html();
    console.log($('#introduction-copy').html(intro));
    console.log($('#goals').html());

    $('#goals').css({
        'font-style': 'italic',
        'color':'green',
        //'background': 'black'
    });

    let element = $('#goals');

    $.data(element, "Objectifs", {
        0: "Etudier",
        1: "Trouver un stage",
        2: "Trouver un job",
        3: "Valider son CDI",
        4: "Ok"
    })

    $('#goals li').each(function(index){
        $(this).text($.data(element, "Objectifs")[index])
    })
    
 
}else {
    console.log('JQUERY n\'est pas installé !');
}