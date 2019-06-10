// ==UserScript==
// @name          AndreaddFixer
// @namespace     https://openuserjs.org/users/rodprincipe
// @description   Fix the links in the website
// @copyright     2019, rodprincipe (https://openuserjs.org/users/rodprincipe)
// @license       MIT
// @version       0.1
// @author        rodprincipe
// @include       https://www.andreadd.it/*
// @require       https://code.jquery.com/jquery-3.3.1.min.js
// @grant         none
// ==/UserScript==

// ==OpenUserJS==
// @author rodprincipe
// ==/OpenUserJS==


$('.plussbullets a').each(function(i){
    var urla = $(this).attr('href');
    var urlb = urla.replace("viewer.html?file=","");
    var urlsplit = urlb.split("/");
    var nome = urlsplit[urlsplit.length-1];
    $(this).attr('href',urlb);
    //uncomment next line to direct download
    //$(this).attr('download',nome);       
});
