// src/data/scrumData.js
export const pillars = [
    {
        title: "Transparence",
        icon: "🔍",
        definition: `La transparence garantit que tous les aspects importants du processus Scrum
sont visibles et compris par tous les acteurs.

Les informations clés comme l’avancement du travail, les obstacles
et les responsabilités doivent être clairement partagées afin de
faciliter la prise de décision.`
    },
    {
        title: "Inspection",
        icon: "🧐",
        definition: `L’inspection consiste à examiner régulièrement les artefacts Scrum
et l’avancement du travail afin de détecter rapidement les écarts.

Elle permet d’identifier les problèmes ou risques suffisamment tôt
pour éviter des impacts négatifs sur le produit.`
    },
    {
        title: "Adaptation",
        icon: "🔄",
        definition: `L’adaptation consiste à ajuster rapidement le processus, le plan
ou le produit lorsque l’inspection révèle des écarts ou des problèmes.

Elle permet à l’équipe Scrum de rester flexible et de s’améliorer
en continu.`
    }
];

export const roles = [
    {
        title: 'Product Owner',
        icon: '📦',
        definition:
            "Porte la vision du produit, priorise le Product Backlog et s’assure que chaque fonctionnalité apporte de la valeur métier.",
    },
    {
        title: 'Scrum Master',
        icon: '🛡️',
        definition:
            "Garant du cadre Scrum, il facilite les événements, accompagne l’équipe et supprime les obstacles à la progression.",
    },
    {
        title: 'Dev Team',
        icon: '💻',
        definition:
            "Équipe pluridisciplinaire responsable de la conception, du développement et de la livraison de l’incrément.",
    },
];

export const events = [
    {
        title: 'Sprint Planning',
        icon: '🗓️',
        objective:
            "Définir l’objectif du sprint et planifier les éléments à réaliser.",
        participants: 'Product Owner, Dev Team, Scrum Master',
        when: 'Début du Sprint',
    },
    {
        title: 'Daily Scrum',
        icon: '☕',
        objective:
            "Synchroniser l’équipe et ajuster le plan de travail quotidien.",
        participants: 'Dev Team',
        when: 'Chaque jour du Sprint',
    },
    {
        title: 'Sprint Review',
        icon: '🎬',
        objective:
            "Inspecter l’incrément livré et recueillir le feedback des parties prenantes.",
        participants: 'Product Owner, Dev Team, Parties prenantes',
        when: 'Fin du Sprint',
    },
    {
        title: 'Sprint Retrospective',
        icon: '🔄',
        objective:
            "Identifier des actions d’amélioration pour les prochains sprints.",
        participants: 'Product Owner, Dev Team, Scrum Master',
        when: 'Après la Sprint Review',
    },
];


export const artefacts = [
    {
        title: 'Product Backlog',
        icon: '📋',
        definition:
            "Liste priorisée et évolutive de tout ce qui est nécessaire pour améliorer le produit.",
    },
    {
        title: 'Sprint Backlog',
        icon: '📝',
        definition:
            "Ensemble des éléments sélectionnés pour le sprint, accompagné d’un plan de réalisation.",
    },
    {
        title: 'Increment',
        icon: '✅',
        definition:
            "Version du produit intégrant toutes les fonctionnalités terminées et conformes à la définition de « Done ».",
    },
];

