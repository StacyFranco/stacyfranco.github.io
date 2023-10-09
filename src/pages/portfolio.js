/* Change this file to get your personal Porfolio */

// favicon : to change into your personal icon subtitute the /public/favicon.ico for your icon. You must keep the same name!


//Language selector: to change the laguages of the site change the selectors in the array and in the objects that use this selectors!
const LanguageOptions = ["en","pt"];
const ThemeOptions = ["dark","light"];
    

// Perfil Card
const PersonalInfo = {
    firstName: "Stacy",
    lastName: "B. Franco",
    age: "31",
    //Put the name of the image with the extension in the avatarPath and Save your image on the paste: /public/images/
    avatarPath: "linkdin_3.jpg" ,
    title: {
        en: ["Full Stack Programmer","Web Developer"],
        pt: ["Programador Full Stack","Desenvolvedor Web"],
    },
    resumeLink:"",
    resumeName:{
        en: "Resume",
        pt: "Currículo"
    },
    adress: "Piraquara, PR",
    country: {
        en: "Brazil",
        pt: "Brasil"
    },
    copyright: { // if using please leave my copyright thanks!
        en: "2023 © Created by Stacy Franco.",
        pt: "2023 © Criado por Stacy Franco."
    },
    skills:{
      en:["⚡"],
      pt:["⚡"]
    }
};

//Medias to contact... if you do not have one of them just comment the line
const socialMediaLinks = {
/* Your Social Media Link */
github: "https://github.com/StacyFranco",
linkedin: "https://www.linkedin.com/in/stacyfranco/",
instagram: "https://www.instagram.com/stacyfranco167/",
whatsapp: "https://wa.me/5541988190927",
// change only your email... let the "mailto"+ ther...
email: "mailto:"+"stacyfranco@hotmail.com",

};

// Name of the pages
const NavBarNames = {
    // Ps. Just ajust names for language or little changes because icon and content will not change!
    //***** Don't change English names! they are used in the route of pages!***** /
    en:["Home","About","Skills","Portfolio", "Contact"],
    pt:["Início","Sobre","Experiência","Portfólio", "Contato"],
};


// Page Home
const home = {
  title:{
      en: ["Hi I'm ","Stacy Franco"," a fullstack developer."],
      pt: ["Oi, eu sou ","Stacy Franco", " uma desenvolvedora fullstack."]
  },
  content:{
      en:"I use my knowledge in React and Node to implement the most diverse projects in search of good user interaction with the service.",
      pt:"Eu uso meu conhecimento em React e Node para implementar os mais diversos projetos na busca de uma boa interação do usuario com o serviço."

  },
  buttons:{
      en:["About me","Skills and Certifications"],
      pt:["Sobre mim"," Habilidades e Certificados"]
  }
}



// Page About
const about = {
    title:{
        en: ["Every great History has a ","beginning","!"],
        pt: ["Cada grande história, sempre tem"," um começo","!"]
    },
    content:{
        en:"I'm starting my journey in the world of programming. Despite being just at the beginning of this journey, I already find myself in love with the path! With every step I take, I encounter new obstacles with countless possibilities to overcome them! Since I was little, I've been passionate about challenges and puzzles, these obstacles, which range from solving bugs in codes under development to finding a new solution to implement a project, are like fuel driving me to discover simple and creative ways to be successful in my work! Using the knowledge acquired and always seeking to learn more, I am sure that this will be another great success story!",
        pt:"Estou iniciando a minha jornada no mundo da programação, e apesar de estar apenas no começo desta jornada já me encontro apaixonada pelo caminho! A cada passo que dou, encontro novos obstáculos com inúmeras possibilidades para superá-los! Apaixonada desde de pequena por desafios e quebra-cabeças, esses obstáculos, que vão desde solucionar bugs de códigos em desenvolvimento até achar uma solução nova para implementar um projeto, são como combustível me impulsionando a descobrir formas simples e criativas de obter êxito no meu trabalho! Usando o conhecimento adquirido e buscando sempre aprender mais tenho certeza que essa será mais uma grande história de sucesso! "

    },
    buttons:{
        en:["See my projects","Contact me"],
        pt:["Veja meus projetos","Entre em Contato"]
    }
}

//Page Contact
const contact = {
    title:{
        en: ["Let's work ","together","!"],
        pt: ["Vamos trabalhar ","juntos","!"]
    },
    content:{
        en:["If my work it is of your interest and you believe I have something to contribute to your project/company, please contact me."," You can do this through social networks, email and/or WhatsApp which can be found below. I will try to get in touch as soon as possible!"],
        pt:["Se meu trabalho te interessou e você acredita que tenho algo para contribuir para seu projeto/empresa entre em contato comigo."," Você pode fazer isso através das redes sociais, e-mail e/ou WhatsApp que se encontram abaixo. Tentarei entrar em contato o mais breve possível!"]

    },
    placeholders:{
        en:{
            name: "Full Name",
            phone: "Phone: +CC (NCD) XXX-XXXX",
            email: "E-mail",
            subject:"Subject",
            message:"Your message!",
            submit: "Send Message"
        },
        pt:{
            name: "Nome Completo",
            phone: "telefone: +DDD (DDI) XXXX-XXXX",
            email: "E-mail",
            subject:"Assunto",
            message: "Sua mensagem!",
            submit: "Enviar Mensagem"
        }
    }

}

//Page Skills:
const skillsHeader = {
  title: {
    en:["Skills and Certifications","",":"],
    pt:["Habilidades e Certificados","",":"]
  },
  
  content:{
    en:"Here are the main projects that I have worked on since I started my studies. With them I aim to show what I have learned in the different technologies that I have study!",
    pt:"Aqui estão os principais projetos que já realizei desde que comecei meus estudos e visam mostrar o que tenho aprendido nas diversas tecnologias que tenho estudado!"
  }
};

// Page Portfolio:

const projectsHeader = {
    title: {
      en:["Look my ","projects",":"],
      pt:["Veja os meus ","projetos",":"]
    },
    
    content:{
      en:"Here are the main projects that I have worked on since I started my studies. With them I aim to show what I have learned in the different technologies that I have study!",
      pt:"Aqui estão os principais projetos que já realizei desde que comecei meus estudos e visam mostrar o que tenho aprendido nas diversas tecnologias que tenho estudado!"
    }
  };

const projects = {
    data: [
      {
        id: "0",
        name: "Devagram",
        image: {
          src:"Devagram.PNG",
          alt:{
            en:"Devagram image",
            pt:"Imagem do Devagram"
          }},
        description:
        {
          en: "This project creates a social network emulating the features of Instagram. It was developed alongside Node and React classes ",
          pt:"Esse projeto consiste na criação de uma rede social emulando as funcionalidades do Instagram. Ele foi desenvolvido junto as aulas de Node e React"
        }, 
        tools: ["sass","mongo","java","node","react","next"],
          
        links: [
          {
            name: "Github Frontend",
            url: "https://github.com/StacyFranco/devagram-react-nextjs",
            icon: "github",
          },
          {
            name: "Github Backend",
            url: "https://github.com/StacyFranco/devagram-node-nextjs",
            icon: "github",
          },
          {
            name: "Live",
            url: "https://devagram-react-nextjs-stacyfranco.vercel.app/",
            icon: "web",
          },
        ],
      },
      {
        id: "1",
        name: "Portifolio",
        image: {
          src:"Portifolio.PNG",
          alt:{
            en:"Portifolio image",
            pt:"Imagem do Portifólio"
          }},
        description:
        {
          en: "This project creates a portfolio web page. It was developed with React and Sass using Next. It was made so that it could be personalized by whoever uses the application.",
          pt:"Este projeto cria uma página web de um portifólio. Foi desenvolvido com React e Sass usando o Next. Foi feito para que pudesse ser personalizado por quem usa a aplicação."
        }, 
        tools: ["sass","java","react","next"],
          
        links: [
          {
            name: "Github",
            url: "https://github.com/StacyFranco/portifolio",
            icon: "github",
          },
          {
            name: "Live",
            url:
              "https://stacyfranco.github.io/",
            icon: "web",
          },
        ],
      },
      {
        id: "2",
        name: "Jammming",
        image: {
          src:"Jammming.PNG",
          alt:{
            en:"Jammming image",
            pt:"Imagem do Jammming"
          }},
        description:
        {
          en: "Design of a page made in React to create a playlist for Spotify.",
          pt: "Projeto de uma pagina feita em  react para criação de playlist para o spotify."
        }, 
        tools: ["css","java","react"],
          
        links: [
          {
            name: "Github",
            url: "https://github.com/StacyFranco/Jammming",
            icon: "github",
          },
          {
            name: "Live",
            url:
              "",
            icon: "web",
          },
        ],
      },
    ]}

    const projectBtn = {
      en:"Learn more",
      pt:"Saiba mais"
    }

export{
    socialMediaLinks,
    PersonalInfo,
    LanguageOptions,
    NavBarNames,
    home,
    about,
    contact,
    ThemeOptions,
    projectsHeader,
    projects,
    projectBtn,
    skillsHeader
}