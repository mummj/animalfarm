'use script'

//console.log('hello world')

//target the form
const form = document.getElementsByTagName('FORM')[0];

function makeNewArticle(article){
    this.article=article;
}

makeNewArticle.prototype.render =function(){
    let article = document.createElement('article');
    article.textContent =  this.form;
}