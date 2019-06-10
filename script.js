// ==UserScript==
// @namespace    https://openuserjs.org/users/rodprincipe
// @name         AndreaddFixer
// @description  Fix the links in the website
// @version      0.1
// @license      MIT
// @author       rodprincipe
// @include      https://www.andreadd.it/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

$('.plussbullets a').each(function(i){
    var urla = $(this).attr('href');
    var urlb = urla.replace("viewer.html?file=","");
    var urlsplit = urlb.split("/");
    var nome = urlsplit[urlsplit.length-1];
    $(this).attr('href',urlb);
    $(this).attr('download',nome);

});
