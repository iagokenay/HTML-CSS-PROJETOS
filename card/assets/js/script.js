var button = document.getElementById('read_buton');

button.addEventListener('click', function(){
   var card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')){
        return button.textContent = 'Ler Menos...';
    }

    button.textContent = 'Ler Mais...';

});