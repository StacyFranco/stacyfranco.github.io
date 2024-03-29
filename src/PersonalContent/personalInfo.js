/* Change this file to get your personal Porfolio */

// favicon : to change into your personal icon subtitute the /public/favicon.ico for your icon. You must keep the same name!


//Language selector: to change the laguages of the site change the selectors in the array and in the objects that use this selectors!
const LanguageOptions = ["en", "pt"];
const ThemeOptions = ["dark", "light"];


// Perfil Card
const PersonalInfo = {
  firstName: "Stacy",
  lastName: "B. Franco",
  age: "31",
  //Put the name of the image with the extension in the avatarPath and Save your image on the paste: /public/images/
  avatarPath: "Stacy.png",
  avatarAlt:{
    en: "Personal Photo",
    pt: " Foto Pessoal"
  },
  title: {
    en: ["Full Stack Programmer", "Web Developer"],
    pt: ["Programadora Full Stack", "Desenvolvedora Web"],
  },
  resumeLink:{
    en: "",
    pt:"https://drive.google.com/file/d/1s9ykET8YVF_tTlhIr25GhRBYev9AEfe1/view?usp=drive_link",
  }, 
  resumeName: {
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
  skills: {
    en: [
      "⚡ React.js ➞ Next.js and Vite",
      "⚡ Node.js ➞ Next.js and Nest.js",
      "⚡ Sass, Postman, Next.js",
      "⚡ GIT knowledge",
  ],
    pt: [
      "⚡ React.js ➞ Next.js e Vite",
      "⚡ Node.js ➞ Next.js e Nest.js",
      "⚡ Sass, Postman, Next.js",
      "⚡ Conhecimento em GIT",
    ]
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
  email: "mailto:" + "stacyfranco@hotmail.com",

};

// Name of the pages
const NavBarNames = {
  // Ps. Just ajust names for language or little changes because icon and content will not change!
  //***** Don't change English names! they are used in the route of pages!***** /
  en: ["Home", "About", "Certificates", "Portfolio", "Contact"],
  pt: ["Início", "Sobre", "Certificados", "Portfólio", "Contato"],
};



// Page Home
const home = {
  title: {
    en: ["Hi I'm ", "Stacy Franco", " a fullstack developer."],
    pt: ["Oi, eu sou ", "Stacy Franco", " uma desenvolvedora fullstack."]
  },
  content: {
    en: "A passionate individual who always thrives over challenges. Ready to take new projects or work on old ones. Keeping the flame of learning burning and the code flowing.",
    pt: "Uma pessoa apaixonada que sempre triunfa nos desafios. Pronta para assumir novos projetos ou trabalhar nos antigos. Mantendo a chama do aprendizado acesa e o código fluindo."

  },
  buttons: {
    en: ["About me", "My Certificates"],
    pt: ["Sobre mim", " Meus Certificados"]
  }
}



// Page About
const about = {
  title: {
    en: ["Every great History has a ", "beginning", "!"],
    pt: ["Cada grande história, sempre tem", " um começo", "!"]
  },
  content: {
    en: "I'm starting my journey in the world of programming. Despite being just at the beginning of this journey, I already find myself in love with the path! With every step I take, I encounter new obstacles with countless possibilities to overcome them! Since I was little, I've been passionate about challenges and puzzles, these obstacles, which range from solving bugs in codes under development to finding a new solution to implement a project, are like fuel driving me to discover simple and creative ways to be successful in my work! Using the knowledge acquired and always seeking to learn more, I am sure that this will be another great success story!",
    pt: "Estou iniciando a minha jornada no mundo da programação, e apesar de estar apenas no começo desta jornada já me encontro apaixonada pelo caminho! A cada passo que dou, encontro novos obstáculos com inúmeras possibilidades para superá-los! Apaixonada desde de pequena por desafios e quebra-cabeças, esses obstáculos, que vão desde solucionar bugs de códigos em desenvolvimento até achar uma solução nova para implementar um projeto, são como combustível me impulsionando a descobrir formas simples e criativas de obter êxito no meu trabalho! Usando o conhecimento adquirido e buscando sempre aprender mais tenho certeza que essa será mais uma grande história de sucesso! "

  },
  buttons: {
    en: ["See my projects", "Contact me"],
    pt: ["Veja meus projetos", "Entre em Contato"]
  }
}


//Page Contact
const contact = {
  title: {
    en: ["Let's work ", "together", "!"],
    pt: ["Vamos trabalhar ", "juntos", "!"]
  },
  content: {
    en: ["If my work it is of your interest and you believe I have something to contribute to your project/company, please contact me.", " You can do this through social networks, email and/or WhatsApp which can be found below. I will try to get in touch as soon as possible!"],
    pt: ["Se meu trabalho te interessou e você acredita que tenho algo para contribuir para seu projeto/empresa entre em contato comigo.", " Você pode fazer isso através das redes sociais, e-mail e/ou WhatsApp que se encontram abaixo. Tentarei entrar em contato o mais breve possível!"]

  },
  /* placeholders:{
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
   }*/

}

//Page Certificates:
const certificatesHeader = {
  title: {
    en: [" Always ", "learning", "!"],
    pt: ["Sempre ", "aprendendo", "!"]
  },

  content: {
    en: "A fundamental part of a programmer's life is always seeking more knowledge. Below you can see the proof of my search with the certificates of my studies.",
    pt: "Parte fundamental na vida de um programador é estar sempre buscando mais conhecimento. Abaixo você pode ver a comprovação desta minha busca com os certificados dos meus estudos."
  }
};
const skills={
  en:[],
  pt:[]
}

const certificates = {
  data: [
    {
      id: "0",
      url:"https://app.devaria.com.br/conquistas/18/532c4248b49e4682a2a678186ac1bbe8",
      image: {
        src: "ModulosBasicos.svg",
        alt: {
          en: "Certificate Icon",
          pt: "Ícone do certificado"
        }
      },
      title: {
        en: "Basic Modules",
        pt: "Módulos Básicos"
      },
      content: {
        en: "Devaria’s Basic Curse",
        pt: "Curso Básico Devaria"
      }
    },
    {
      id: "1",
      url: "https://app.devaria.com.br/conquistas/16/22074b78a735461bb9650f3d16d0dca5",
      image: {
        src: "NodeBasico.svg",
        alt: {
          en: "Certificate Icon",
          pt: "Ícone do certificado"
        }
      },
      title: {
        en: "Basic Node",
        pt: "Node Básico"
      },
      content: {
        en: "Devaria’s Introduction to Node Course",
        pt: "Curso de introdução ao Node da Devaria"
      }
    },
    {
      id: "2",
      url:"https://app.devaria.com.br/conquistas/25/f61fa0f992b94905a98fd795792d05a7",
      image: {
        src: "ReactBasico.svg",
        alt: {
          en: "Certificate Icon",
          pt: "Ícone do certificado"
        }
      },
      title: {
        en: "Introduction to React.js",
        pt: "Introdução ao React.js"
      },
      content: {
        en: "Devaria’s introduction to React course",
        pt: "Curso de Introdução ao React.js da Devaria"
      }
    },
    {
      id: "3",
      url: "https://app.devaria.com.br/conquistas/15/ccc270a5dcb940ba8ea34278f2ff09b8",
      image: {
        src: "NodeAvancado.svg",
        alt: {
          en: "Certificate Icon",
          pt: "Ícone do certificado"
        }
      },
      title: {
        en: "Advanced Node",
        pt: "Node Avançado"
      },
      content: {
        en: "Devaria’s Advanced Node Curse",
        pt: "Curso Avançado de Node da Devaria"
      }
    },
    {
      id: "4",
      url:"https://app.devaria.com.br/conquistas/26/bcb3cf9b12424443b15039a63a30614d",
      image: {
        src: "ReactAvancado.svg",
        alt: {
          en: "Certificate Icon",
          pt: "Ícone do certificado"
        }
      },
      title: {
        en: "Advanced React",
        pt: "React Avançado"
      },
      content: {
        en: "Devaria’s Advanced React Curse",
        pt: "Curso Avançado de React da Devaria"
      }
    },
  ]
}

// Page Portfolio:

const projectsHeader = {
  title: {
    en: ["Look my ", "projects", ":"],
    pt: ["Veja os meus ", "projetos", ":"]
  },

  content: {
    en: "Here are the main projects that I have worked on since I started my studies. With them I aim to show what I have learned in the different technologies that I have study!",
    pt: "Aqui estão os principais projetos que já realizei desde que comecei meus estudos e visam mostrar o que tenho aprendido nas diversas tecnologias que tenho estudado!"
  }
};

const projects = {
  data: [
    {
      id: "0",
      name: "Devagram",
      image: {
        src: "Devagram.PNG",
        alt: {
          en: "Devagram image",
          pt: "Imagem do Devagram"
        }
      },
      description:
      {
        en: "This project creates a social network emulating the features of Instagram. It was developed alongside Node and React classes. This project was created in Portuguese ",
        pt: "Esse projeto consiste na criação de uma rede social emulando as funcionalidades do Instagram. Ele foi desenvolvido junto as aulas de Node e React.Esse projeto foi criado em português"
      },
      tools: ["sass", "mongo", "javascript", "node", "react", "next"],

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
      name: "Portfolio",
      image: {
        src: "Portifolio.PNG",
        alt: {
          en: "Portfolio image",
          pt: "Imagem do Portfólio"
        }
      },
      description:
      {
        en: "This project creates a portfolio web page. It was developed with React and Sass using Next. It was made so that it could be personalized by whoever uses the application. This Project was created in english but has support for portuguese language",
        pt: "Este projeto cria uma página web de um portifólio. Foi desenvolvido com React e Sass usando o Next. Foi feito para que pudesse ser personalizado por quem usa a aplicação. Esse projeto foi criado em inglês com opção de visualização em português também."
      },
      tools: ["sass", "javascript", "react", "next"],

      links: [
        {
          name: "Github",
          url: "https://github.com/StacyFranco/stacyfranco.github.io",
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
        src: "Jammming.PNG",
        alt: {
          en: "Jammming image",
          pt: "Imagem do Jammming"
        }
      },
      description:
      {
        en: "Design of a page made in React to create a playlist for Spotify. This project was created in  english",
        pt: "Projeto de uma pagina feita em  react para criação de playlist para o spotify. Esse projeto foi criado em inglês"
      },
      tools: ["css", "javascript", "react"],
 
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
  ]
}

const projectBtn = {
  en: "Learn more",
  pt: "Saiba mais"
}

export {
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
  certificatesHeader,
  certificates
}