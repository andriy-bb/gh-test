const headersLi = document.querySelectorAll('[data-tab]');
const articles = document.querySelectorAll('[data-tab-content]');

headersLi.forEach(function(items) {
    items.addEventListener('click', function(){

            const article = document.querySelector('#' + this.dataset.tab)
            articles.forEach(function(item) {
            item.classList.add('hidden')
            article.classList.remove('hidden')
        })
    })
})
