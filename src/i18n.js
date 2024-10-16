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
                    Portfolio: {
                        PersonalTitle:"Personal Projects",
                        WorkedOn: "Professionnal Projects",
                        WebDev:"Web Development",
                        GameEngine:"Game Engine Projects",
                        Electronics:"Electronics Projects",
                        DarianInfo1:"A personal website created for a friend who is currently training to become a luthier.",
                        DarianInfo2:"I offered to make his website when he showed me the one he had previously made with Wix.",
                        DarianInfo3:"This website is currently hosted on a default Vercel domain but will be moved to the correct domain once the project is fully completed.",
                        FroodKB:"Frood 75% Keyboard",
                        FroodInfo1: "The link leads to a GitHub repository for a mechanical keyboard PCB I designed.",
                        FroodInfo2:"I decided to work on this project for several reasons: The PCBs available online always seemed to lack something, whether it was the right layout or a rotary encoder. Additionally, a single PCB cost around $60, whereas ordering a custom batch of five PCBs costs the same. I also enjoy learning new skills, and using KiCAD was a particularly enjoyable experience. On top of that, I love personalizing projects, and a mechanical keyboard is ideal for customization. While most people focus on choosing switches and keycaps, I also design the cases using my 3D printer to create a mold for epoxy resin. Now, even the PCBs are custom-made.",
                        FailedHumanities: "Failed Humanities",
                        FailedHumanitiesInfo: "Click here to know more about Failed Humanities.",
                    },
                    FailedHumanities: {
                        Info1: '"Failed Humanities" is a Work-In-Progress project aimed at creating short-form movies using Unreal Engine.',
                        Info2: "I am working on this project alone, handling everything from scriptwriting and 3D modeling to creating the environments, animations, and audio.",
                        Info3: "All the videos will be uploaded to this YouTube channel:",
                        Info4: "A subscription would be appreciated if you're interested in the project, but please note that no videos will be uploaded for a while.",
                        Info5: "Below is a few screenshot of the videos I already started working on.",
                    },
                    Error: {
                        ErrorTag: "404",
                        ErrorText: "Page Not Found",
                        Return: "Return To Main Menu"
                    },
                    Other: {
                        Video: "Video"
                    }
                }
            },
            fr: {
                translation: {
                    Navigation: {
                        Home: "Page Principale",
                        About: "À Propos de moi",
                        Portfolio: "Portfolio",
                        Contact: "Me Joindre",
                        FailedHumanities: "Failed Humanities"
                    },
                    Languages: {
                        fr: "Français",
                        en: "Anglais"
                    },
                    Contact: {
                        Contact: "Pour Me Joindre",
                        PhoneNumberTag: "Numéro de Téléphone:",
                        EmailAddressTag: "Adresse Email:",
                        SocialsTag: "Réseaux Sociaux:"
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
                    Portfolio: {
                        PersonalTitle:"Projets Personnels",
                        WorkedOn: "Projets Professionnels",
                        WebDev:"Developement Web",
                        GameEngine:"Projet de Game Engine",
                        Electronics:"Projets Électronique",
                        DarianInfo1:"Site web personnel créé pour un ami, qui est actuellement en formation pour devenir luthier.",
                        DarianInfo2:"J'ai proposé de créer son site web quand il m'a montré celui qu'il avait précédemment fait avec Wix.",
                        DarianInfo3:"Ce site est actuellement hébergé sur un domaine par défaut de Vercel, mais il sera migré vers le bon domaine une fois que le projet sera terminé à 100%.",
                        FroodKB:"Frood 75% Keyboard",
                        FroodInfo1: "Le lien renvoie à un repo GitHub créé pour un PCB de clavier mécanique que j'ai conçu.",
                        FroodInfo2:"J'ai décidé de travailler sur ce projet pour plusieurs raisons : Les PCBs disponibles en ligne manquaient toujours de quelque chose, soit la disposition correcte, soit un encodeur rotatif. De plus, un seul PCB coûtait environ 60 $, tandis que commander la fabrication de 5 PCBs coûtait le même prix. J'aime apprendre de nouvelles techniques, et apprendre à utiliser KiCAD a été une expérience vraiment agréable. En outre, j'aime personnaliser les projets, et un clavier mécanique est le candidat parfait pour la personnalisation. Alors que la plupart des gens choisissent simplement les switches et les keycaps, je fabrique également les boîtiers avec mon imprimante 3D pour créer un moule et utiliser de la résine époxy. Désormais, même les PCBs sont personnalisés.",
                        FailedHumanities: "Failed Humanities",
                        FailedHumanitiesInfo: "Cliquez ici pour en savoir plus sur Failed Humanities.",

                    },
                    FailedHumanities: {
                        Info1: "«Failed Humanities» est un projet en cours de développement visant à créer des courts-métrages à l'aide d'Unreal Engine.",
                        Info2: "Je travaille seul sur ce projet en m'occupant de tout, de l'écriture des scripts et de la modélisation 3D à la création des environnements, des animations et de l'audio.",
                        Info3: "Toutes les vidéos seront téléchargées sur cette chaîne YouTube:",
                        Info4: "Un abonnement serait apprécié si le projet vous intéresse, mais notez qu'aucune vidéo ne sera téléchargée avant un certain temps.",
                        Info5: "Ci-dessous, quelques captures d'écran des vidéos sur lesquelles j'ai déjà commencé à travailler.",
                    },
                    Error: {
                        ErrorTag: "404",
                        ErrorText: "Page Non Trouvé",
                        Return: "Retourner Au Menu Principal"
                    },
                    Other: {
                        Video: "Vidéo"
                    }
                }
            }
        }
    });

export default i18n;