export const TOOLTIP_GAP_FORM = {
    CONTACT_MCZ: "L’établissement a un PF ou un Comité d’hygiène/ PCI avec responsabilité, imputabilité et autorité",
    TYPE_HEALHP_STRUCTURE: "Type de structure de santé",
    NUMBER_OF_POPULATION_AREA: "nombre de Population  de l'aire",
    NUMBER_OF_POPULATION_MOVED: "nombre de Population  déplacées",
    NUMBER_OF_POPULATION_RETURNED: "nombre de Population retournées",
    LOCATION_MORE_THAN_AN_HOUR: "Localité éloignée plus d'une heure",
    REMOTE_POPULATION: "Localité éloignée plus d'une heure",
    VULNERABLE_POPULATION_UNABLE_TO_ACCESS_HEALTH_SERVICES: "Population vulnérable rapportant incampable d'acceder aux services de santé quant ils en ont besoin",
    DTP3_COVERAGE_IN_CHILDREN_UNDER_1_YEAR: "Couverture en DTC3 (DPT3 / PENTA3) chez les < 1 an, par unité administrative",
    MORTALITY_UNDER_5_YEARS: "Mortalité de moins de 5ans (deaths per 10,000 per day)",
    POURCENTAGE_OF_PEOPLE_WHICH_HAVE_ACCESS_WATER_PROTECTED: "pourcentage des menages avec accès à une source d'eau protegée",
    POINT_FOCAL_CONTACT_IN_HEALTH_ARE: "Contact du point focal dans l'aire de santé",
    // SECOND FORM
    ESTABLISHMENT_HAS_PF_OR_PCI_WITH_RESPONSIBILITY: "L’établissement a un PF ou un Comité d’hygiène/PCI avec responsabilité, imputabilité et autorité",
    TDR_AVAILABLE_AND_THE_PF_KNOWS_IT: "TDR disponible et le PF les connait bien",
    PF_TIME_ALLOCATION: "Le PF a du temps alloué pour effectuer ses tâches en PCI",
    TEMP_AND_SYMPTOMS_OF_MVE_ARE_VERIFIED: "Température et symptômes de MVE sont vérifiés correctement - Thermo flash fonctionnel",
    TEMPERATURE_AND_SYMPTOMS_OF_MVE_ARE_VERIFIED: "Température et symptômes de MVE sont vérifiés correctement - Thermo flash fonctionnel",
    GOOD_USAGE_OF_THE_REGISTRATION_OF_TRIAGE: "Utilisation correcte de la fiche et du registre de triage",
    ZONE_IDENTIFIED_ISO: "Zone bien identifiée « Isolement » et à l’écart des autres unités/service",
    TOILETS_DEDICATED_IN_THE_AREA_OF_ISOLATION: "Latrines / toilettes dédiées dans la zone d'isolement ou présence d’un bassin de lit/ urinoir",
    REGION_ISO_STATION_WASH_HANDS_AND_FURNITURES: "L'espace d'isolement comprend: une station de lavage des mains, des fournitures (EPI, un lit,bassin/ urinoir, etc.), une zone pour mettre les EPI et une zone pour enlever les EPI"
}

export const GAP_SCORE_CARD_LABELS = {
    ONE_POINT_FOCAL: {
        mainTitle: "Point focal et comité d’hygiène en place",
        key_1: "L’établissement a un PF ou un Comité d’hygiène/PCI avec responsabilité, imputabilité et autorité",
        key_2: "TDR disponible et le PF les connait bien",
        key_3: "Le PF a du temps alloué pour effectuer ses tâches en PCI",
    },
    TWO_TRIAGE_EN_PLACE: {
        mainTitle: 'Triage en place',
        key_1: "Température et symptômes de MVE sont vérifiés correctement - Thermo flash fonctionnel",
        key_2: "Fiche de triage et registre disponibles",
        key_3: "Utilisation correcte de la fiche et du registre de triage",
    }
    ,
    THREE_IDENTIF_ZONE: {
        mainTitle: 'Identification d’une zone d’isolement / attente',
        key_1: "Zone bien identifiée « Isolement » et à l’écart des autres unités/service",
        key_2: "Latrines / toilettes dédiées dans la zone d'isolement ou présence d’un bassin de lit/ urinoir",
        key_3: "L'espace d'isolement comprend: une station de lavage des mains, des fournitures (EPI, un lit,bassin/ urinoir, etc.), une zone pour mettre les EPI et une zone pour enlever les EPI",
    }
    ,
    FOUR_LAVAGE_MAINS: {
        mainTitle: 'Lavage des mains / Stations pour l’hygiène des mains',
        key_1: "Devrait inclure (Eau propre + savon et/ou; Solution hydro-alcoolique et/ou; Solution d’eau chlorée 0.05% [si les deux précédents ne sont pas disponible]",
        key_2: "Le personnel est capable d’effectuer l’hygiène des mains correctement (selon technique OMS)",
        key_3: "Présence de posters sur les différentes techniques d’hygiène des mains au niveau de chaque station de LVM",
    }
    ,
    FIVE_DISP_ET_USAGE: {
        mainTitle: 'Disponibilité et usage des Équipements de Protection Individuel (EPI)',
        key_1: "EPI accessible au personnel en tout moment et en quantité suffisante dans la salle d’habillage",
        key_2: "Présence de posters (précautions standards et MVE) MSP/0MS sur comment mettre et enlever les EPI",
        key_3: "Le personnel est en mesure de mettre et retirer les EPI (précautions standards et MVE) en suivant correctement l’ensemble des étapes",
    }
    ,
    SIX_TRIAGE_DECHETS: {
        mainTitle: "Tri des déchets",
        key_1: "Des poubelles étanches, couvertes et étiquetées (infectieux ou non-infectieux) et les affiches sur la gestion des déchets sont disponibles dans tous les points de service aux patients)",
        key_2: "Des contenants pour objets piquants/ tranchants sont disponibles à tous les points d'utilisation",
        key_3: "Les déchets sont triés selon les types de déchets (e.g. indiqué par des couleurs) : Infectieux, non-infectieux, piquants/tranchants",
    },
    SEVEN_ELIM_DECHETS: {
        mainTitle: "Élimination des déchets",
        key_1: "Le personnel porte les EPI appropriés (gants en latex ou en nitrile, gants de ménage, lunettes de protection, bottes en caoutchouc, tabliers et masques de protection) lors de la manipulation des déchets",
        key_2: "Les déchets sont brûlé sur place dans un incinérateur ou un système existe pour leur transport dans un autre endroit approprié",
        key_3: "Une fosse à placenta ou déchet organique est présent lorsque requis",
    },
    EIGHT_FORMATION_PERS: {
        mainTitle: "Formation du personnel",
        key_1: "L’ensemble du personnel a été formé au minimum sur les précautions standards, les précautions additionnelles (périodes pratiques et théoriques) et un accent sur Ébola et/ou fièvres hémorragiques dans les derniers 6 mois",
        key_2: "Un registre est tenu contenant le nom des prestataires de soin qui ont reçu la formation, la date, le type de formation et l’organisme qui a donné la formation.",
        key_3: "Le prestataire de soin reçoit une formation continue à travers la supervision sur place",
    }
    ,
    NINE_ALERT_CAS_SUSPECTS_IN_HOSP: {
        mainTitle: "Alerte des cas suspect intra-hospitalier (au niveau des FOSA)",
        key_1: "Un numéro d’alerte est connu et visible",
        key_2: "Les patients hospitalisés sont dépistés au moins deux fois par jour pour identifier les cas suspects",
        key_3: "Une fois identifiés, les cas suspects sont déplacés vers la zone d'isolement/de transit et une alerte est déclenchée",
    },
    TEN_TRIAGE_EN_PLACE: {
        mainTitle: "Stérilisation",
        key_1: "Matériel de stérilisation disponible tel que Autoclave, poupinel et accessoires nécessaires à la stérilisation, EPI)",
        key_2: "SOP disponible sur comment effectuer la stérilisation du matériels/équipements",
        key_3: "Le personnel effectuant la stérilisation a été formé",
    },
    ELEVEN_BIO_NETT: {
        mainTitle: "Bio-nettoyage de l’environnement du patient",
        key_1: "SOP disponible sur comment effectuer le nettoyage /désinfection lorsqu’il y a des liquides corporels ou déversements de sang et le nettoyage et décontamination du matériel réutilisable",
        key_2: "Le personnel effectuant le nettoyage et la désinfection a été formé",
        key_3: "Le personnel de nettoyage porte les EPI appropriés (gants en latex ou en nitrile, lunettes de protection, bottes en caoutchouc, tabliers et masques de protection)",
    }
    ,
    TWELVE_EXPOS_AGENT: {
        mainTitle: "Exposition d’un agent de santé à la virus Ébola",
        key_1: "Un protocole d’évaluation et prise en charge en cas d’exposition est en place (incluant un registre, les outils d’évaluation, communication, etc.)",
        key_2: "La prise en charge du personnel de santé exposé est clairement définie et assurée",
        key_3: "L’équipe d’investigation est alertée et procède à l’investigation lorsqu’un agent de santé est exposé",
    }

} 