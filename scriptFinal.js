$(() =>{
    if(jQuery){
        console.log('JQUERY est bien installé !')
    } else {
        console.log('JQUERY n\'est pas installé !')
    }

    let constraintsText = {
        name: 'Le nom d\'un utilisateur ne peut contenir plus de 20 caractères et ne doit contenir que des lettres.',
        email: 'Il doit s\'agir d\'un e-mail valide',
        password: 'Le mot de passe ne peut contenir que des chiffres et des lettres. Il doit disposer d\'au moins 6 caractères',
        birthDate: 'L\'utilisateur doit être une personne majeure',
        comment: 'Le commentaire ne peut excéder plus de 200 caractères'
    }

    $('input').each(function () {
        console.log($(this).attr('name'))
    })

    $('.js-hasHelpText').each(function () {
        let helpText = '<p class="help-text">' + constraintsText[$(this).attr('name')] + '</p>'
        $(this).after(helpText)
    })

    let form = $('#form')

    $('h1, lengend').hide().show('slow');
    form.animate({with: '50%'}, 2000);


    form.on('focus', 'input, textarea', function () {
        $(this).next('.help-text').show('slow')
    })

    form.on('blur', 'input, textarea', function () {
        $('.help-text').hide()
    })
});


