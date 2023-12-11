if(jQuery){
    console.log('il est bien installé !')

    $(function(){
        $('h1').css('color', 'green');
        $('h2').css('font-style', 'italic').text('Mes meilleurs articles');
    
    })

}else{
    console.log('Il n\'est pas installé !');
}






