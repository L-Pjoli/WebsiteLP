import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    Navigation: {
                        Home: "Home",
                        About: "About Me",
                        Portfolio: "Portfolio",
                        Contact: "Contact",
                        FailedHumanities: "Failed Humanities"
                    },
                    Languages: {
                        fr: "French",
                        en: "English"
                    },
                    Contact: {
                        Contact: "How To Contact Me",
                        PhoneNumberTag: "Phone Number:",
                        EmailAddressTag: "Email Address:",
                        SocialsTag: "Socials"
                    },
                    FailedHumanities: {
                        Info1: "Failed Humanities is a Work In Progress project aimed at creating short-form movies using Unreal Engine.",
                        Info2: "I am working on this project alone, from the creation of the scripts, to 3D modeling of a lot of the models, to the creation of the environment, as well as the animations and audio.",
                        Info3: "All the videos will be uploaded on this youtube channel:",
                        Info4: "A subscription would be appreciated if you are interested in this project, but there will not be a video uploaded for a while.",
                        Info5: "Below is a few screenshot of the videos I already started working on.",
                    },
                    About: {
                        AboutTag: "About Me",
                        Info1: "My name is Louis-Philippe Jolicoeur. I have experience in everything related to a Full-Stack developer job.",
                        Info2: "The languages I master the most are: Typescript, React, C# and PowerShell, and I also know Java and Angular in a theoretical context. With that being said, I can easily learn other languages.",
                        Info3: "One of the first big projects I contributed to was with Desjardins. I was part of the team at Umaknow that was tasked with modernizing the SharePoint intranet and worked with people, as well as tools from Desjardins during the length of that project.",
                        Info4: "The project that I consider the most important in my professional experience was for a payment processor company. I created, individually, from the start of the project, a payment portal for clients to view their transactions. Here are some of the tasks I accomplished:",
                        Task1: "Create the front-end in React.",
                        Task2: "Create the Backend with an Express.Js server running on an Azure App Service instance.",
                        Task3: "Modify and improve an API with Azure Functions, called from Azure APIM. The APIs were calling a CosmosDB database.",
                        Task4: "Create a connection system with Azure B2C.",
                        Info5: "I also have knowledge with the functionality of CRM, where I learned how to use Pipedrive.",
                        Info6: "Here is my resume:",
                    },
                    Other:{
                        Video:"Video"
                    }
                }
            },
            fr: {
                translation: {
                    Navigation: {
                        Home: "Page Principale",
                        About: "À Propos de moi",
                        Portfolio: "Portfolio",
                        Contact: "Contact",
                        FailedHumanities: "Failed Humanities"
                    },
                    Languages: {
                        fr: "Français",
                        en: "Anglais"
                    },
                    Contact: {
                        Contact: "Comment Me Contacter",
                        PhoneNumberTag: "Numéro de Téléphone:",
                        EmailAddressTag: "Adresse Email:",
                        SocialsTag: "Réseaux Sociaux:"
                    },
                    FailedHumanities: {
                        Info1: "Failed Humanities est un projet en cours qui vise à créer des courts métrages en utilisant Unreal Engine.",
                        Info2: "Je travail sur ce projet tout seul: de la création des scripts, jusqu'au modellage 3D de beaucoup des models, à la création de l'environement, ainsi que les animations et l'audio.",
                        Info3: "Toutes les videos vont se retrouver dur cette chaîne Youtube:",
                        Info4: "Une Subscription serait aprécier si vous êtes intéressé dans ce projet, mais il ne va pas avoir de vidéo prête avant un certain temps.",
                        Info5: "Plus bas se retrouve quelques images sur certaines des vidéos qui ont été commencé.",
                    },
                    About: {
                        AboutTag: "À propos de moi",
                        Info1: "Je m’appelle Louis-Philippe Jolicoeur. J’ai de l’expérience dans toutes les facettes d’un poste de développeur Full Stack.",
                        Info2: "Les langages informatiques que je maitrise sont : TypeScript, React, C# et PowerShell, et je suis familier avec Java et Angular dans un contexte plus théorique. Cela dit, je peux facilement m’adapter et apprendre d’autres langages.",
                        Info3: "Un des premiers gros projets pour lequel j’ai contribué était avec Desjardins. Je faisais partie de l’équipe à Umaknow qui avait la tâche de moderniser l’intranet SharePoint, et j’ai travaillé avec des employés ainsi que des outils de Desjardins durant la durée de ce projet.",
                        Info4: "Le projet, que je considère le plus important dans mon expérience professionnelle était pour une compagnie de processeur de paiements. J’ai construit, individuellement, à partir du début du projet, un portail de paiements pour que les clients puissent visualiser leurs transactions. Voici quelques tâches que j’ai accomplis :",
                        Task1: "Créer le frontend fait en React.",
                        Task2: "Créer le backend fait avec un serveur Express.Js qui roulait sur une instance de Azure App Service.",
                        Task3: "Modifier et améliorer un API fait avec Azure Functions et appelé avec Azure APIM, qui modifie une base de données dans Azure CosmosDB.",
                        Task4: "Créer un système de connexion avec Azure B2C.",
                        Info5: "J’ai aussi des connaissances dans le fonctionnement des CRM, où j’ai appris comment fonctionnait Pipedrive.",
                        Info6: "Voici mon CV:",
                    },
                    Other:{
                        Video:"Vidéo"
                    }
                }
            }
        }
    });

export default i18n;