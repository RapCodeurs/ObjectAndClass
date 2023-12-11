$(() =>{
    if(jQuery){
        console.log('JQUERY est bien installé !')
    } else {
        console.log('JQUERY n\'est pas installé !')
    }


    $('h1, h2').show('slow');
    $('.content').hide('slow');
})