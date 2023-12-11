$(() =>{

    if(jQuery){
        console.log('JQUERY est bien installé !')
    
        $('#comment').keyup(function () {
            console.log('Vous avez quitté le champs !')
            $('#commentValue').html($(this).val());
        })
        

    } else {
        console.log('JQUERY n\'est pas installé !')
    }
})