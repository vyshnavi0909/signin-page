document.getElementById('toggle-checkbox').addEventListener('click' , function() {
    const image = this.querySelector('img');
    if(image.classList.contains('hidden')) {
        image.classList.remove('hidden');
    }
    else {
        image.classList.add('hidden');
    }
})