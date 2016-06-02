

$('nav > ul > li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('active');
});

// JavaScript
window.sr = ScrollReveal({duration:1000, distance:'5%', scale:1, viewFactor:0.3 });
sr.reveal('.quote', { origin:'right' });
sr.reveal('.blog-text-one', { origin:'left' });
sr.reveal('.blog-text-two', { origin:'left', delay:100 });
sr.reveal('.blog-text-three', { origin:'left', delay:200 });
