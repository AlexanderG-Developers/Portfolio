document.getElementById('dark').addEventListener("click", () =>{
    document.querySelector("body").classList.add("DarkMode");
});
document.getElementById('light').addEventListener("click", () =>{
    document.querySelector("body").classList.remove("DarkMode");
});


//Active



document.getElementById('dark').addEventListener("click", () =>{
    document.getElementById("dark").classList.add("active-dark");
});
document.getElementById('dark').addEventListener("click", () =>{
    document.getElementById('light').classList.remove("active-light");
});

document.getElementById('light').addEventListener("click", () =>{
    document.getElementById("light").classList.add("active-light");
});
document.getElementById('light').addEventListener("click", () =>{
    document.getElementById('dark').classList.remove("active-dark");
});

//lateral-bar



document.querySelector('#show').addEventListener("click", () =>{
    document.querySelector('.settings').classList.toggle("see");
});



//Traducciones

//Ingles
document.querySelector('#Ingles').addEventListener("click", () =>{
    //Nav

    document.querySelector('#Skills').innerText= "Skills";

    document.querySelector('#About').innerText= "About Me";
    document.querySelector('#Sopport').innerText= "Sopport to the Comunity";
    document.querySelector('#Contacto').innerText= "Contact";
    //Header
    document.querySelector('span').innerText= "Welcome";
    document.querySelector('#Alexander').innerText= "I'm Alexander G";
    document.querySelector('#Love').innerText= "I love programming, teaching and helping other people learn more every day; and I also love to learn more every day"

    //Hi
    document.querySelector('#Hi').innerText= "Hello";
    document.querySelector('.I').innerText= "I am Alexander G, since I was little I have been interested in everything that has to do with computing, computing. But it was recently that I found out about the existence of Html, I was amazed by that simple html, but then I learned more and more, I really like this world of programming, and given my experience, it made me sensitive to most newbies. help them to give advice and follow their learning, although I am not yet an expert but what little I like to help, if you want my help get in contact";

    //Skills
    document.querySelector('#Skil').innerText= "My Skills";
    document.querySelector('#Skil').innerText= "My Skills";
    document.querySelector('.DB').innerText= "Database: MongoDB";
    document.querySelector('.lengu').innerText= "Languages: Html, Css, JavaScript, Python";
    document.querySelector('.frame').innerText= "Frameworks: Bootstrap and Tailwind CSS";
    document.querySelector('.edit').innerText= "Coder Editors: Atom and VSCode";
    document.querySelector('.learn').innerText= "Learning: Php, Java, React, Flask, Django, API Creation, JSON";
    document.querySelector('.languje').innerText= "Languages: English, German, Portuguese, I'm learning all three";



    //OpenSource
    document.querySelector('#Like').innerText= "I like working on open source projects";
    document.querySelector('#l-text').innerText= "Every time I have time and knowledge to help, I help in OpenSource projects, I really like it, knowledge is obtained, with effort and time and others, it is true, but there are people without the means to pay for a course or hire people, and that and for other reasons I like to help people for free and collaborate on projects. Although yes, I am still not up to the task of very large projects, for which I will study as much as possible.";



    //Curisity
    document.querySelector('#Curis').innerText= "Curiosities";
    document.querySelector('#texto-curisity').innerText= "This page, I create it, with html, css, js, pure, the only thing is that I use a preprocessor, Sass, but from the sass code I only use, @import and the variables, note that I could have done it with React, Tailwind Css or Bootstrap , but I preferred to do it the old-fashioned way, so you know it can still be done. The images except for the mode icons, I create them";


    //Contact
    document.querySelector('.want-contact').innerText= "Do you want to contact me";
    document.querySelector('#text-contact').innerText= "Either to hire me, to support you in an OpenSource project OR to hire me, to support you in an OpenSource project or simply to give you advice";







});





//Portugués

document.querySelector('#Portugués').addEventListener("click", () =>{
    //Nav

    document.querySelector('#Skills').innerText= "Habilidades";

    document.querySelector('#About').innerText= "Sobre mim";
    document.querySelector('#Sopport').innerText= "Ajuda a comunidade";
    document.querySelector('#Contacto').innerText= "Contato";
    //Header
    document.querySelector('span').innerText= "Receber";
    document.querySelector('#Alexander').innerText= "Eu sou Alexander G";
    document.querySelector('#Love').innerText= "Amo programar, ensinar e ajudar outras pessoas a aprender mais a cada dia; e também adoro aprender mais a cada dia";

    //Hi
    document.querySelector('#Hi').innerText= "Olá";
    document.querySelector('.I').innerText= "Eu sou Alexander G, desde pequeno me interesso por tudo que tem a ver com computação. Mas foi recentemente que descobri sobre a existência do Html, fiquei maravilhado com aquele simples html, mas depois fui aprendendo cada vez mais, gosto muito deste mundo da programação e, dada a minha experiência, me tornou sensível à maioria dos novatos . ajude-os a dar conselhos e a seguir o seu aprendizado, embora eu ainda não seja um especialista mas do pouco gosto de ajudar, se quiser minha ajuda entre em contato";

    //Skills
    document.querySelector('#Skil').innerText= "Minhas habilidades";

    document.querySelector('.DB').innerText= "Banco de dados: MongoDB";
    document.querySelector('.lengu').innerText= "Linguagens: Html, Css, JavaScript, Python";
    document.querySelector('.frame').innerText= "Frameworks: Bootstrap, Tailwind Css";
    document.querySelector('.edit').innerText= "Editores de código: Atom, VSCode";
    document.querySelector('.learn').innerText= "Aprendizagem: Php, Java, React, Flask, Django, Criação de API, JSON";
    document.querySelector('.languje').innerText= "Idiomas: inglês, alemão, português, estou aprendendo os três";



    //OpenSource
    document.querySelector('#Like').innerText= "Eu gosto de trabalhar em projetos de código aberto";
    document.querySelector('#l-text').innerText= "Cada vez que tenho tempo e conhecimento para ajudar, ajudo em projetos OpenSource, gosto muito, o conhecimento se obtém, com esforço e tempo e outros, é verdade, mas tem gente sem condições de pagar um curso ou contratar pessoas, e por isso e por outros motivos gosto de ajudar as pessoas de graça e colaborar em projetos. Embora sim, ainda não estou à altura de projetos muito grandes, para os quais estudarei o máximo possível.";



    //Curisity
    document.querySelector('#Curis').innerText= "Curiosidades";
    document.querySelector('#texto-curisity').innerText= "Esta página, eu crio ela, com html, css, js, pure, a única coisa é que eu uso um pré-processador, Sass, mas do código sass que eu só uso, @import e as variáveis, note que eu poderia ter feito isso com React, Tailwind Css ou Bootstrap, mas eu preferi fazer do jeito antigo, então você sabe que ainda pode ser feito. As imagens, exceto para os ícones de modo, eu as crio";


    //Contact
    document.querySelector('.want-contact').innerText= "Você quer entrar em contato comigo";
    document.querySelector('#text-contact').innerText= "Para me contratar, para apoiá-lo em um projeto OpenSource OU para me contratar, para apoiá-lo em um projeto OpenSource ou simplesmente para lhe dar conselhos";

});









//RE-Establecer

document.querySelector('#Re-Establecer').addEventListener("click", () =>{
    //Nav

    document.querySelector('#Skills').innerText= "Habilidades";
    document.querySelector('#About').innerText= "Sobre Mì";

    document.querySelector('#Sopport').innerText= "Apoyo a la Comundad";
    document.querySelector('#Contacto').innerText= "Contacto";
    //Header
    document.querySelector('span').innerText= "Bienvenido";
    document.querySelector('#Alexander').innerText= "Yo soy Alexander G";
    document.querySelector('#Love').innerText= "Amo programar, enseñar, y ayudar a las demás personas a aprender cada día mas; y también amo aprender cada día mas";


    //Hi
    document.querySelector('#Hi').innerText= "Hola";
    document.querySelector('.I').innerText= "Soy Alexander G, desde pequeño me ha interesado todo lo que tiene que ver con informática, computación. Pero hace poco fue que me entere de la existencia de Html, me asombré de aquel simple html, pero luego fui aprendiendo mas y mas, realmente me gusta este mundo de la programación, y dada mi experiencia, me hizo como sensible a los mas novatos, por eso me gusta ayudarlos dar consejos y seguir su aprendizaje, aunque aun no soy un experto pero de lo poco que se me gusta ayudar, si quieres mi ayuda ve a Contacto";

    //Skills
    document.querySelector('#Skil').innerText= "Mis Habilidades";

    document.querySelector('.DB').innerText= "Base De Datos: MongoDB";
    document.querySelector('.lengu').innerText= "Lenguajes: Html, Css, JavaScript, Python";
    document.querySelector('.frame').innerText= "Frameworks: Bootstrap, Tailwind Css";
    document.querySelector('.edit').innerText= "Editores de código: Atom, VSCode";
    document.querySelector('.learn').innerText= "Aprendiendo: Php, Java, React, Flask, Django, Creacion de APIs, JSON";
    document.querySelector('.languje').innerText= "Idiomas: ingles, Aleman, Portugues, Actualmente estoy aprendiendo los tres";



    //OpenSource
    document.querySelector('#Like').innerText= "Me Gusta Trabajar en proyectos OpenSource";
    document.querySelector('#l-text').innerText= "Cada vez que, tengo, tiempo, y Conocimientos para ayudar, ayudo en proyectos OpenSource, a mi realmente me gusta, el conocimiento se obtiene, con esfuerzo y tiempo y demás, es cierto, pero hay personas sin los medios para costear un curso o para contratar gente, y eso y por otras razones me gusta ayudar a la gente de forma gratuita y colaborar en proyectos. Aunque si, realmente todavía no estoy a la altura de proyectos muy grande, por lo cual voy a estudiar todo lo posible.";



    //Curisity
    document.querySelector('#Curis').innerText= "Curiosidades";
    document.querySelector('#texto-curisity').innerText= "Esta pagina, la cree, con html, css, js, puro, lo único es que use un preprocesador, Sass, pero del código de sass solo use, @import y las variables, nótese que lo pude haber hecho con React, Tailwind Css o Bootstrap, pero preferí hacerlo a la antigua, para que sepan que todavía se puede. Las imagenes a execion de los iconos de los modos, los cree yo.";


    //Contact
    document.querySelector('.want-contact').innerText= "¿Deseas Contactarme?";
    document.querySelector('#text-contact').innerText= "Ya sea para, contratarme, para, apoyarte en un proyecto OpenSource o Simplemente para darte consejos sobre este mundo de la programación, pues, puedes contactarme por:";

});










//Active Idiomas

//Re-Establecer

document.getElementById('Re-Establecer').addEventListener("click", () =>{
    document.getElementById("Re-Establecer").classList.add("active-dark");
    document.getElementById('Portugués').classList.remove("active-dark");
    document.getElementById('Ingles').classList.remove("active-dark");

});

//Portugués

    document.getElementById('Portugués').addEventListener("click", () =>{
        document.getElementById("Portugués").classList.add("active-dark");
        document.getElementById('Re-Establecer').classList.remove("active-dark");
        document.getElementById('Ingles').classList.remove("active-dark");

    });



//Ingles

    document.getElementById('Ingles').addEventListener("click", () =>{
        document.getElementById("Ingles").classList.add("active-dark");
        document.getElementById('Re-Establecer').classList.remove("active-dark");
        document.getElementById('Portugués').classList.remove("active-dark");



});
