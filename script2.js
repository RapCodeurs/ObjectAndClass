if(jQuery){
    console.log('jQUERY est bien installé !');

    //$('.content').last().css('font-style', 'italic');
    $('p.content:last-of-type').css('font-style', 'italic');
    $('.content').css('color', 'green');
    $('h1').css('color', 'yellow');
    $('h2').css('color', 'blue');

}else {
    console.log('JQUERY n\'est pas installé !');
}