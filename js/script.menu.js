const menu = document.querySelectorAll('[data-tabik]')
const strava = document.querySelectorAll('[data-tab-strava]')
const all = document.querySelector('.data-tab-1')

menu.forEach(function(item){
    item.addEventListener('click',function(){
        
        const stravas = document.querySelectorAll('.' + this.dataset.tabik)
        
        strava.forEach(function(item){
            item.classList.add('hidden');
        })
        
        stravas.forEach(function(item){
            item.classList.remove('hidden');
        })
    })
})


all.addEventListener('click', function(){
    const oneTabik = document.querySelectorAll('.tabik')

    oneTabik.forEach(function(item){
        item.classList.remove('hidden');
    })

})