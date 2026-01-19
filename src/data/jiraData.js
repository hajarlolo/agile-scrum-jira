export const jiraIntro = {
    title: "Qu'est-ce que Jira ?",
    description: "Jira est un outil puissant de gestion de projet Agile qui aide les équipes à planifier, suivre et gérer leurs projets de développement logiciel. Il est largement utilisé pour les cadres Scrum et Kanban afin d'assurer transparence et efficacité.",
    keyPoints: [
        "Gérer le contenu et les tâches (Issues)",
        "Suivre les Sprints et l'avancement",
        "Visualiser la performance de l'équipe"
    ]
};

export const jiraLifecycle = [
    {
        id: 1,
        step: "Créer un Projet",
        color: "#4ade80", // green
        description: "Mise en place des fondations structurelles.",
        details: [
            "Choisir la structure : Scrum ou Kanban",
            "Sélectionner un Modèle",
            "Définir le Nom et la Clé du Projet"
        ]
    },
    {
        id: 2,
        step: "Création du Backlog",
        color: "#facc15", // yellow
        description: "Remplir la liste du travail à effectuer.",
        details: [
            "Créer des Epics (Grandes fonctionnalités)",
            "Ajouter des User Stories",
            "Prioriser les éléments",
            "Estimer avec des Story Points"
        ]
    },
    {
        id: 3,
        step: "Planification de Sprint",
        color: "#60a5fa", // blue
        description: "S'engager sur le travail immédiat.",
        details: [
            "Sélectionner les stories pour le Sprint",
            "Définir l'Objectif du Sprint",
            "Démarrer le Sprint"
        ]
    },
    {
        id: 4,
        step: "Exécution du Sprint",
        color: "#c084fc", // purple
        description: "Là où le travail réel se produit.",
        details: [
            "Déplacer les tickets : À faire -> En cours -> Fait",
            "Mises à jour Daily Scrum",
            "Collaboration continue"
        ]
    },
    {
        id: 5,
        step: "Revue & Rétro",
        color: "#fb923c", // orange
        description: "Inspecter et Adapter.",
        details: [
            "Sprint Review : Démo du produit",
            "Rétrospective : Améliorer le processus"
        ]
    },
    {
        id: 6,
        step: "Rapports",
        color: "#f87171", // red
        description: "Mesurer et Améliorer.",
        details: [
            "Analyser les métriques",
            "Apprendre des données",
            "Optimiser les futurs sprints"
        ]
    }
];

export const jiraReports = [
    {
        title: "Diagramme Circulaire",
        icon: "🥧",
        definition: "Un graphique circulaire montrant la répartition des tickets.",
        usage: "Visualiser la distribution par Statut, Priorité ou Type d'issue pour repérer les goulots d'étranglement."
    },
    {
        title: "Burndown Chart",
        icon: "📉",
        definition: "Graphique du travail restant par rapport au temps.",
        usage: "Utilisé pendant le sprint pour voir si l'équipe est dans les temps pour terminer l'engagement."
    },
    {
        title: "Velocity Chart",
        icon: "🚀",
        definition: "Montre la quantité de valeur (Story Points) livrée dans les sprints passés.",
        usage: "Crucial pour prévoir la quantité de travail que l'équipe peut gérer dans les futurs sprints."
    },
    {
        title: "Filtre Bidimensionnel",
        icon: "📊",
        definition: "Une vue matricielle croisant deux statistiques différentes.",
        usage: "Analyser des relations de données complexes, ex. 'Statut par Priorité' ou 'Assigné par Type d'issue'."
    }
];

export const jiraWhy = {
    title: "Pourquoi Jira est Vital",
    points: [
        "Transparence : Tout le monde voit le statut.",
        "Suivi en temps réel : Plus de devinettes.",
        "Amélioration continue : Décisions basées sur les données.",
        "Alignement : Connecte les tâches aux objectifs commerciaux."
    ],
    quote: "Jira transforme les principes Agile en actions mesurables."
};

export const jiraDefinitions = [
    { title: "Projet", icon: "📁", desc: "Un projet Jira est un espace de travail qui contient toutes les tâches, sprints, utilisateurs et configurations liées à un objectif précis." },
    { title: "Issue", icon: "🧱", desc: "Une issue représente une unité de travail dans Jira, elle peut être de type ( Epic, Story, Task, Bug.)." },
    { title: "User Story", icon: "📘", desc: "courte description d’un besoin utilisateur,sert à guider le développement,écrite sous forme. En tant que [type d’utilisateur],je veux [fonctionnalité],afin de [bénéfice / objectif]." },
    { title: "Sous-tâche", icon: "🧾", desc: "Une Sub-task est une partie d’une issue principale, utilisée pour détailler le travail." },
    { title: "Backlog", icon: "🗂️", desc: "Le Product Backlog est la liste priorisée de toutes les issues du projet qui restent à réaliser." },
    { title: "Sprint", icon: "📅", desc: "Un Sprint est une période de temps fixe (1 à 4 semaines) durant laquelle l’équipe développe un incrément de produit." },
    { title: "Objectif de Sprint", icon: "🎯", desc: "Le Sprint Goal est l’objectif principal que l’équipe s’engage à atteindre durant le sprint." },
    { title: "Points de Story", icon: "🔢", desc: "Les Story Points sont une unité d’estimation de l’effort nécessaire pour réaliser une user story." },
    { title: "Tableau (Board)", icon: "📋", desc: "Le Board est une vue visuelle du travail avec des colonnes représentant les statuts des issues." },
    { title: "Workflow", icon: "🔄", desc: "Un Workflow définit le cycle de vie d’une issue (To Do → In Progress → Done)." },
    { title: "Statut", icon: "⚙️", desc: "Le Status indique l’état actuel d’une issue (To Do, In Progress, Done…)." },
    { title: "Rôles Jira", icon: "🧑💼", desc: "Admin, Product Owner, Developer, Scrum Master." },
    { title: "Permissions", icon: "🔐", desc: "Les Permissions contrôlent ce que chaque utilisateur peut faire dans un projet Jira." },
    { title: "JQL", icon: "🧮", desc: "Le JQL est un langage de requêtes utilisé pour rechercher des issues de manière avancée." },
    { title: "Priorité", icon: "📌", desc: "La Priority indique l’importance d’une issue (High, Medium, Low)." }
];


