'use script'

//console.log('hello world')

//target the form
const form = document.getElementsByTagName('FORM')[0];

function makeNewArticle(){
    let article = document.createElement('article');
    article.textContent =  this.form;
}