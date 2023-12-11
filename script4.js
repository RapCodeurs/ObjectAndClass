if(jQuery){
    console.log('jQUERY est bien installé !');

    $('p').remove();
    $('#goals').prepend('<li>Objectif 0</li>');
    $('#goals').append('<li>Objectif 5</li>');
    

}else {
    console.log('JQUERY n\'est pas installé !');
}