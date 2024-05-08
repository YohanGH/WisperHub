import React from "react";
import PropTypes from "prop-types";
import "./cgu-style.css";

/**
 * Component logic for validate CGU
 * @param {boolean} props.setCguAccepted - CGU accepted or no
 * @returns
 */

export default function CGU({ setCguAccepted, cguAccepted }) {
  const validateCGU = (isAccepted) => () => {
    console.log(setCguAccepted);
    setCguAccepted(isAccepted);
  };

  return (
    <div className={cguAccepted ? "none" : "containerCgu"}>
      <h1>CONDITIONS GÉNÉRALES D’UTILISATION</h1>
      <br />
      <h2>Conditions Générales d’Utilisation</h2>
      <br />
      <p>
        <strong>Règlement (UE) 2016/679</strong> relatif à la protection des
        données à caractère personnel. Il est fortement recommandé de lire
        attentivement l’intégralité des présentes Conditions Générales
        d’Utilisation avant de consulter le site
        <strong>www.lyladoc.com</strong>.
      </p>
      <br />
      <p>
        Les présentes Conditions Générales d’Utilisation (ci-après les « CGU »)
        ont pour objet de déterminer les conditions d’accès et les règles
        d’utilisation dans lesquelles <strong>www.lyladoc.com</strong> offre
        l’accès à plusieurs services en ligne accessible par le lien suivant :
        <strong>www.lyladoc.com</strong>.(ci-après, “le Site”).
      </p>
      <br />
      <p>
        L’accès au site est subordonné au respect des CGU. Il est strictement
        réservé à l’utilisateur (ci-après, « l’Utilisateur ») tel que défini
        dans les CGU. <strong>WisperHub</strong> se réserve le droit de modifier
        ou de mettre à jour à tout moment, unilatéralement, les CGU au gré des
        changements ou additions effectués, afin notamment de se conformer à
        toutes évolutions légales, jurisprudentielles, éditoriales et/ou
        techniques ainsi qu’aux éventuelles modifications des conditions
        générales d’utilisation des services de l’Hébergeur. L’Utilisateur doit
        consulter régulièrement la dernière version des CGU disponible en
        permanence sur <strong>www.lyladoc.com</strong>.
      </p>
      <br />
      <h2>1. Objet du site</h2>
      <p>
        <strong>www.lyladoc.com</strong> a pour objet de mettre à la disposition
        des Utilisateurs une information et une aide concernant l’ensemble des
        activités liées à la pratique de la <strong>WisperHub</strong> Teams.
        Toute utilisation du site se fera dans le respect des CGU.
      </p>
      <br />
      <h2>
        2. Accès et utilisation de <strong>www.lyladoc.com</strong>
      </h2>
      <h3>
        2.1 Accès au site <strong>www.lyladoc.com</strong>
      </h3>
      <p>
        L’accès au Site est possible à partir d’un ordinateur, d’une tablette ou
        d’un smartphone connecté à un réseau de télécommunication selon les
        protocoles de communication utilisés sur le réseau Internet.{" "}
        <strong>WisperHub</strong>
        accorde à l’Utilisateur un droit de consultation, d’utilisation et
        d’accès aux Informations du site.
      </p>
      <br />
      <h3>2.2 Coût d’accès</h3>
      <p>
        L’accès à <strong>www.lyladoc.com</strong> est gratuit et ne fait pas
        l’objet d’un abonnement. Tous les logiciels et matériels nécessaires à
        l’utilisation ou au fonctionnement du site, l’accès à Internet ou les
        frais de communication sont à la charge exclusive de l’Utilisateur en
        dehors de son lieu de travail. Chaque Utilisateur est entièrement
        responsable de ses données de connexion le concernant. Sauf preuve
        contraire, toute connexion à <strong>www.lyladoc.com</strong>, ou
        transmission de données effectuées à partir des informations de
        connexion de l’Utilisateur, sera réputée avoir été effectuée par ce
        dernier.
      </p>
      <br />
      <h3>2.3 Durée d’accessibilité</h3>
      <p>
        L’accès de l’Utilisateur au Site est effectué pour une durée illimitée,
        sans préjudice de la faculté pour l’Utilisateur ou
        <strong>WisperHub</strong> de résilier unilatéralement, à tout moment,
        sans préavis, ni motif, ou indemnité. L’Utilisateur reconnaît, qu’en cas
        de violation des dispositions législatives et/ou des CGU,{" "}
        <strong>WisperHub</strong> peut bloquer et/ou résilier l’accès au Site,
        sans notification préalable, avec effet immédiat.
      </p>
      <br />
      <h3>2.4 Utilisation du site</h3>
      <p>
        L’utilisation du Site est réservée à un usage strictement personnel.
        L’Utilisateur s’interdit notamment, sans que cette liste soit limitative
        : d’utiliser le Site à des fins de commerce et d’une manière générale de
        proposer des produits et des services le rémunérant de manière directe
        ou indirecte de « revendre » ou de mettre à disposition d’un tiers et/ou
        des autres Utilisateurs, à titre onéreux et/ou gratuit, le contenu du
        Site d’utiliser le Site en vue d’adresser, sous quelque forme que ce
        soit, de la publicité ou des éléments à caractère promotionnel non
        sollicités de diriger les internautes indirectement ou directement,
        notamment par des liens hypertextes, vers d’autres sites Internet qui
        seraient susceptibles de ne pas respecter la législation française ou
        les stipulations des CGU. L’Utilisateur s’engage à accéder au Site en
        utilisant un matériel ne contenant pas de virus.{" "}
        <strong>WisperHub</strong> ne garantit pas que ses serveurs hébergeant
        le Site, sont exempts de virus et autres composants dangereux. Il
        appartient donc à l’Utilisateur de prendre toutes les mesures
        appropriées pour protéger ses propres données et/ou logiciels de la
        contamination par d’éventuels virus circulant sur le réseau Internet.
        L’Utilisateur accepte le fait que <strong>WisperHub</strong> ne pourra,
        en aucun cas, être tenue pour responsable des dommages fortuits,
        matériels et/ou immatériels, directs ou indirects qui pourraient
        résulter de l’accès ou de l’utilisation du Site, y compris
        l’inaccessibilité, les pertes de données, détériorations, destructions
        ou virus qui pourraient affecter l’équipement informatique de
        l’Utilisateur, et/ou de la présence de virus sur son Site. Par ailleurs,
        tout matériel téléchargé et/ou obtenu, de quelque manière que ce soit,
        lors de l’utilisation du Site, l’est aux risques et périls de
        l’Utilisateur. <strong>WisperHub</strong> n’est aucunement responsable
        des dommages et/ou pertes de données subis par son ordinateur. Les
        informations publiées par <strong>WisperHub</strong> et contenues sur le
        Site sont non-contractuelles et fournies à titre informatif, gratuit, et
        sans aucune obligation de la part de <strong>WisperHub</strong> qui peut
        les modifier sans préavis. <strong>WisperHub</strong> s’efforce de
        fournir sur le Site des informations aussi précises que possible.
        Toutefois, <strong>WisperHub</strong> ne pourra être tenue pour
        responsable des omissions, des inexactitudes et des carences dans la
        mise à jour, qu’elles soient de son fait ou du fait des tiers
        partenaires qui lui fournissent ces informations. L’Utilisateur est
        invité à vérifier toute information diffusée sur le Site auprès de
        sources officielles. Des espaces interactifs sont à la disposition des
        Utilisateurs. Toutefois, <strong>WisperHub</strong> se réserve le droit
        de supprimer, sans mise en demeure préalable, tout contenu déposé dans
        cet espace qui contreviendrait à la législation applicable en France, en
        particulier aux dispositions relatives à la protection des données. Le
        cas échéant, <strong>WisperHub</strong> se réserve également la
        possibilité de mettre en cause la responsabilité civile et/ou pénale de
        l’Utilisateur, notamment en cas de message à caractère raciste,
        injurieux, diffamant, ou pornographique, quel que soit le support
        utilisé (texte, photographie…).
      </p>
      <br />
      <h3>2.5 Disponibilité du site</h3>
      <p>
        Le Site est accessible 24 heures sur 24, 7 jours sur 7, sauf cas de
        force majeure ou d’événement hors du contrôle de{" "}
        <strong>WisperHub</strong>. <strong>WisperHub</strong>
        se réserve le droit de suspendre, d’interrompre ou de limiter, sans avis
        préalable, l’accès à tout ou partie du Site, notamment pour des
        opérations de maintenance et de mises à jour nécessaires au bon
        fonctionnement du Site et des matériels afférents, ou pour toute autre
        raison, notamment technique. <strong>WisperHub</strong> n’est tenue à
        aucune obligation de résultat concernant la disponibilité du Site et
        l’accessibilité technique au Site. <strong>WisperHub</strong> n’est en
        aucun cas responsable des interruptions et des conséquences qui peuvent
        en découler pour l’Utilisateur notamment lorsque les interruptions
        proviennent de celles de l’Hébergeur pour ses besoins de maintenance ou
        autres. L’Utilisateur est informé que <strong>WisperHub</strong> peut
        mettre fin ou modifier les caractéristiques du Site, à tout moment, sans
        préavis et sans que l’Utilisateur dispose d’un recours à l’encontre de{" "}
        <strong>WisperHub</strong>.
      </p>
      <br />
      <h3>2.6 Propriété intellectuelle</h3>
      <p>
        De manière générale, l’Utilisateur s’interdit de porter atteinte aux
        droits de propriété intellectuelle (droit d’auteur, droits voisins,
        droit sui generis du producteur de bases de données, droit des marques,
        noms de domaine…) de <strong>WisperHub</strong> ou de l’Hébergeur, ou de
        tout tiers. <strong>WisperHub</strong> est titulaire de tous les droits
        de propriété intellectuelle tant sur la structure que sur le contenu du
        Site (textes, logos, images, éléments sonores, logiciels, icônes, mise
        en page, base de données…) ou a acquis régulièrement les droits
        permettant l’exploitation de la structure et du contenu du Site, sans
        aucune limitation. <strong>WisperHub</strong> concède à l’Utilisateur,
        le droit d’utiliser le Site pour ses besoins strictement privés, à
        l’exclusion de toute utilisation lucrative. En cas d’utilisation
        professionnelle, l’Utilisateur devra obtenir l’autorisation expresse,
        préalable et écrite de <strong>WisperHub</strong>. Ainsi, il est
        interdit à l’Utilisateur notamment de copier, reproduire, représenter,
        modifier et/ou exploiter, transférer de quelque façon que ce soit et à
        quelque fin que ce soit, tout ou partie de la structure et du contenu du
        Site, sauf en cas d’autorisation expresse, préalable et écrite de{" "}
        <strong>WisperHub</strong>. Les marques et logos reproduits sur le Site
        sont déposés par les sociétés qui en sont titulaires. Toute reproduction
        des noms ou logos, par quelque moyen que ce soit, sans autorisation
        préalable du titulaire concerné est interdite. Le non-respect de ces
        interdictions peut notamment constituer un acte de contrefaçon et/ou de
        concurrence déloyale et parasitaire engageant la responsabilité civile
        et/ou pénale de l’Utilisateur.
      </p>
      <br />
      <h3>2.7 Liens hypertextes</h3>
      <p>
        A l’exception de sites diffusant notamment des informations et/ou
        contenus ayant un caractère illégal et/ou notamment à caractère
        politique, religieux, pornographique, un Utilisateur peut créer un lien
        hypertexte sur un site vers le Site. En cas d’utilisation de ces sites,
        l’Utilisateur est invité à se reporter aux Conditions Générales
        d’Utilisation du site concerné. Au titre de la présente autorisation,
        <strong>WisperHub</strong> se réserve toutefois un droit d’opposition et
        se dégage de toute responsabilité quant aux informations contenues dans
        ces sites qui pourraient être liés au sien par un lien hypertexte ou
        autre moyen. A contrario, des liens hypertextes contenus sur le Site
        peuvent renvoyer vers d’autres sites Internet par tout moyen. Dans la
        mesure où <strong>WisperHub</strong> ne peut contrôler ces sites et ces
        sources externes,
        <strong>WisperHub</strong> ne peut être tenue pour responsable de la
        mise à disposition de ces sites et sources externes, et ne peut
        supporter aucune responsabilité quant aux contenus, publicités,
        produits, services ou tout autre matériel, disponibles sur ou à partir
        de ces sites ou sources externes. De plus, <strong>WisperHub</strong> ne
        pourra être tenue pour responsable de tout dommage avéré ou allégué
        consécutif ou en relation avec l’utilisation ou avec le fait d’avoir
        fait confiance aux contenus, à des biens ou des services disponibles sur
        ces sites ou sources externes. Enfin, dans la limite autorisée par la
        loi,
        <strong>WisperHub</strong> ne saura être tenue pour responsable dans le
        cas où le contenu desdits autres sites contreviendrait aux dispositions
        légales et réglementaires en vigueur.
      </p>
      <br />
      <h3>2.8 Garanties et responsabilités</h3>
      <p>
        L’Utilisateur s’engage, lors de l’utilisation qu’il fait du Site, à ne
        pas contrevenir aux dispositions législatives et réglementaires en
        vigueur, aux bons usages d’Internet, et de la netiquette, et aux CGU.
        Enfin, dans la limite autorisée par la loi, <strong>WisperHub</strong>{" "}
        se dégage de toute responsabilité en cas d’utilisation non-conforme aux
        CGU et de ses services. L’Utilisateur est informé que toute violation
        des stipulations des CGU est susceptible d’entraîner des poursuites
        judiciaires et des sanctions à son encontre. L’Utilisateur s’engage à
        agir avec diligence pour répondre à toute réclamation. Enfin, dans la
        limite autorisée par la loi, <strong>WisperHub</strong> et/ou les tiers
        de tout préjudice matériel ou immatériel, direct et/ou indirect de
        quelque nature que ce soit causé par l’Utilisateur, et/ou ses préposés
        en cas d’utilisation non-conforme aux CGU. <strong>WisperHub</strong>{" "}
        s’engage à faire ses meilleurs efforts afin de mettre en œuvre des
        mesures techniques et d’organisation pour protéger les Informations
        circulant sur le Site. L’Utilisateur se déclare, néanmoins, parfaitement
        informé que les données ne sont pas protégées contre toute forme
        d’intrusion y compris par voie de piratage. L’Utilisateur reconnaît
        qu’il est impossible de garantir une sécurité totale aux données
        transmises. En conséquence,
        <strong>WisperHub</strong> ne pourra être tenue responsable des
        incidents qui pourraient découler de cette transmission. Il appartient à
        l’Utilisateur de mettre en œuvre tous moyens utiles aux fins de
        préserver la confidentialité des données transmises. Chaque Utilisateur
        du Site s’engage expressément : à ne pas utiliser de logiciels ou de
        procédés destiné à copier les Informations du Site sans l’autorisation
        expresse et préalable de <strong>WisperHub</strong> à renoncer
        expressément à utiliser des logiciels ou dispositifs susceptibles de
        perturber le bon fonctionnement du Site, ni à engager d’action de nature
        à imposer une charge disproportionnée pour les infrastructures de{" "}
        <strong>WisperHub</strong> à ne pas altérer ou modifier voire créer des
        œuvres dérivées à partir des Informations du Site sans le consentement
        exprès et préalable de <strong>WisperHub</strong> à ne procéder à de
        courtes citations, analyses et reproductions destinées à des revues de
        presse ou autres utilisations expressément autorisées par la loi que
        dans les limites et conditions fixées par ces dernières et sous réserve
        notamment de citer le nom des auteurs et la source à ne pas extraire ou
        réutiliser, y compris à des fins privées, sans autorisation écrite et
        préalable de
        <strong>WisperHub</strong>, une partie substantielle ou non du contenu
        des bases de données et archives constituées par le Site à ne pas
        collecter des informations sur des tiers, y compris les adresses
        électroniques, afin de les utiliser pour l’envoi de sollicitations
        commerciales ou équivalentes, ou de les intégrer au sein d’un service de
        référencement ou équivalent, gratuit ou payant, ou encore afin
        d’effectuer une veille concurrentielle à ne pas mettre en place des
        systèmes susceptibles ou de nature à pirater le Site en tout ou partie,
        ou de nature à violer les CGU à informer <strong>WisperHub</strong> dès
        la connaissance d’une atteinte quelle qu’elle soit (notamment aux droits
        de propriété intellectuelle de <strong>WisperHub</strong>) en
        particulier de toute utilisation illicite ou non contractuelle des
        Informations du Site et ce, quel que soit le mode de diffusion utilisé
        L’Utilisateur qui publie une Contribution sur le Site reconnaît être
        personnellement responsable, tant vis-à-vis des tiers que de{" "}
        <strong>WisperHub</strong>, en cas de violation des dispositions
        législatives ou réglementaires applicables et garantit, en conséquence,{" "}
        <strong>WisperHub</strong> contre tout trouble, revendication et
        éviction quelconque.
      </p>
      <br />
      <h3>2.9 Contact</h3>
      <p>
        Pour toute question concernant les CGU, pour pouvez envoyer un message
        sur <strong>WisperHub</strong> https://github.com/YohanGH/
        <strong>WisperHub</strong>/discussions/52
      </p>
      <br />
      <h3>2.10 Droit applicable : règlements et litiges</h3>
      <p>
        Les CGU sont soumises au droit français. En cas de différends relatifs à
        l’interprétation, la validité ou l’exécution des CGU, l’Utilisateur et{" "}
        <strong>WisperHub</strong> conviennent de déployer leurs meilleurs
        efforts afin de régler à l’amiable le litige. Dans le cas où un accord
        amiable ne serait pas trouvé, tout éventuel litige se rapportant à
        l’interprétation ou l’exécution des CGU sera soumis à la compétence du
        tribunal de commerce d’Annecy.
      </p>
      <h1>CONDITIONS GÉNÉRALES D’UTILISATION</h1>
      <br />
      <h2>Conditions Générales d’Utilisation</h2>
      <br />
      <p>
        <strong>Règlement (UE) 2016/679</strong> relatif à la protection des
        données à caractère personnel. Il est fortement recommandé de lire
        attentivement l’intégralité des présentes Conditions Générales
        d’Utilisation avant de consulter le site{" "}
        <strong>www.lyladoc.com</strong>.
      </p>
      <br />
      <p>
        Les présentes Conditions Générales d’Utilisation (ci-après les « CGU »)
        ont pour objet de déterminer les conditions d’accès et les règles
        d’utilisation dans lesquelles <strong>www.lyladoc.com</strong> offre
        l’accès à plusieurs services en ligne accessible par le lien suivant :
        <strong>www.lyladoc.com</strong>.(ci-après, “le Site”).
      </p>
      <br />
      <p>
        L’accès au site est subordonné au respect des CGU. Il est strictement
        réservé à l’utilisateur (ci-après, « l’Utilisateur ») tel que défini
        dans les CGU. <strong>WisperHub</strong> se réserve le droit de modifier
        ou de mettre à jour à tout moment, unilatéralement, les CGU au gré des
        changements ou additions effectués, afin notamment de se conformer à
        toutes évolutions légales, jurisprudentielles, éditoriales et/ou
        techniques ainsi qu’aux éventuelles modifications des conditions
        générales d’utilisation des services de l’Hébergeur. L’Utilisateur doit
        consulter régulièrement la dernière version des CGU disponible en
        permanence sur <strong>www.lyladoc.com</strong>.
      </p>
      <br />
      <h2>1. Objet du site</h2>
      <p>
        <strong>www.lyladoc.com</strong> a pour objet de mettre à la disposition
        des Utilisateurs une information et une aide concernant l’ensemble des
        activités liées à la pratique de la <strong>WisperHub</strong> Teams.
        Toute utilisation du site se fera dans le respect des CGU.
      </p>
      <br />
      <h2>
        2. Accès et utilisation de <strong>www.lyladoc.com</strong>
      </h2>
      <h3>
        2.1 Accès au site <strong>www.lyladoc.com</strong>
      </h3>
      <p>
        L’accès au Site est possible à partir d’un ordinateur, d’une tablette ou
        d’un smartphone connecté à un réseau de télécommunication selon les
        protocoles de communication utilisés sur le réseau Internet.{" "}
        <strong>WisperHub</strong>
        accorde à l’Utilisateur un droit de consultation, d’utilisation et
        d’accès aux Informations du site.
      </p>
      <br />
      <h3>2.2 Coût d’accès</h3>
      <p>
        L’accès à <strong>www.lyladoc.com</strong> est gratuit et ne fait pas
        l’objet d’un abonnement. Tous les logiciels et matériels nécessaires à
        l’utilisation ou au fonctionnement du site, l’accès à Internet ou les
        frais de communication sont à la charge exclusive de l’Utilisateur en
        dehors de son lieu de travail. Chaque Utilisateur est entièrement
        responsable de ses données de connexion le concernant. Sauf preuve
        contraire, toute connexion à <strong>www.lyladoc.com</strong>, ou
        transmission de données effectuées à partir des informations de
        connexion de l’Utilisateur, sera réputée avoir été effectuée par ce
        dernier.
      </p>
      <br />
      <h3>2.3 Durée d’accessibilité</h3>
      <p>
        L’accès de l’Utilisateur au Site est effectué pour une durée illimitée,
        sans préjudice de la faculté pour l’Utilisateur ou
        <strong>WisperHub</strong> de résilier unilatéralement, à tout moment,
        sans préavis, ni motif, ou indemnité. L’Utilisateur reconnaît, qu’en cas
        de violation des dispositions législatives et/ou des CGU,{" "}
        <strong>WisperHub</strong> peut bloquer et/ou résilier l’accès au Site,
        sans notification préalable, avec effet immédiat.
      </p>
      <br />
      <h3>2.4 Utilisation du site</h3>
      <p>
        L’utilisation du Site est réservée à un usage strictement personnel.
        L’Utilisateur s’interdit notamment, sans que cette liste soit limitative
        : d’utiliser le Site à des fins de commerce et d’une manière générale de
        proposer des produits et des services le rémunérant de manière directe
        ou indirecte de « revendre » ou de mettre à disposition d’un tiers et/ou
        des autres Utilisateurs, à titre onéreux et/ou gratuit, le contenu du
        Site d’utiliser le Site en vue d’adresser, sous quelque forme que ce
        soit, de la publicité ou des éléments à caractère promotionnel non
        sollicités de diriger les internautes indirectement ou directement,
        notamment par des liens hypertextes, vers d’autres sites Internet qui
        seraient susceptibles de ne pas respecter la législation française ou
        les stipulations des CGU. L’Utilisateur s’engage à accéder au Site en
        utilisant un matériel ne contenant pas de virus.{" "}
        <strong>WisperHub</strong> ne garantit pas que ses serveurs hébergeant
        le Site, sont exempts de virus et autres composants dangereux. Il
        appartient donc à l’Utilisateur de prendre toutes les mesures
        appropriées pour protéger ses propres données et/ou logiciels de la
        contamination par d’éventuels virus circulant sur le réseau Internet.
        L’Utilisateur accepte le fait que <strong>WisperHub</strong> ne pourra,
        en aucun cas, être tenue pour responsable des dommages fortuits,
        matériels et/ou immatériels, directs ou indirects qui pourraient
        résulter de l’accès ou de l’utilisation du Site, y compris
        l’inaccessibilité, les pertes de données, détériorations, destructions
        ou virus qui pourraient affecter l’équipement informatique de
        l’Utilisateur, et/ou de la présence de virus sur son Site. Par ailleurs,
        tout matériel téléchargé et/ou obtenu, de quelque manière que ce soit,
        lors de l’utilisation du Site, l’est aux risques et périls de
        l’Utilisateur. <strong>WisperHub</strong> n’est aucunement responsable
        des dommages et/ou pertes de données subis par son ordinateur. Les
        informations publiées par <strong>WisperHub</strong> et contenues sur le
        Site sont non-contractuelles et fournies à titre informatif, gratuit, et
        sans aucune obligation de la part de <strong>WisperHub</strong> qui peut
        les modifier sans préavis. <strong>WisperHub</strong> s’efforce de
        fournir sur le Site des informations aussi précises que possible.
        Toutefois, <strong>WisperHub</strong> ne pourra être tenue pour
        responsable des omissions, des inexactitudes et des carences dans la
        mise à jour, qu’elles soient de son fait ou du fait des tiers
        partenaires qui lui fournissent ces informations. L’Utilisateur est
        invité à vérifier toute information diffusée sur le Site auprès de
        sources officielles. Des espaces interactifs sont à la disposition des
        Utilisateurs. Toutefois, <strong>WisperHub</strong> se réserve le droit
        de supprimer, sans mise en demeure préalable, tout contenu déposé dans
        cet espace qui contreviendrait à la législation applicable en France, en
        particulier aux dispositions relatives à la protection des données. Le
        cas échéant, <strong>WisperHub</strong> se réserve également la
        possibilité de mettre en cause la responsabilité civile et/ou pénale de
        l’Utilisateur, notamment en cas de message à caractère raciste,
        injurieux, diffamant, ou pornographique, quel que soit le support
        utilisé (texte, photographie…).
      </p>
      <br />
      <h3>2.5 Disponibilité du site</h3>
      <p>
        Le Site est accessible 24 heures sur 24, 7 jours sur 7, sauf cas de
        force majeure ou d’événement hors du contrôle de{" "}
        <strong>WisperHub</strong>. <strong>WisperHub</strong>
        se réserve le droit de suspendre, d’interrompre ou de limiter, sans avis
        préalable, l’accès à tout ou partie du Site, notamment pour des
        opérations de maintenance et de mises à jour nécessaires au bon
        fonctionnement du Site et des matériels afférents, ou pour toute autre
        raison, notamment technique. <strong>WisperHub</strong> n’est tenue à
        aucune obligation de résultat concernant la disponibilité du Site et
        l’accessibilité technique au Site. <strong>WisperHub</strong> n’est en
        aucun cas responsable des interruptions et des conséquences qui peuvent
        en découler pour l’Utilisateur notamment lorsque les interruptions
        proviennent de celles de l’Hébergeur pour ses besoins de maintenance ou
        autres. L’Utilisateur est informé que <strong>WisperHub</strong> peut
        mettre fin ou modifier les caractéristiques du Site, à tout moment, sans
        préavis et sans que l’Utilisateur dispose d’un recours à l’encontre de{" "}
        <strong>WisperHub</strong>.
      </p>
      <br />
      <h3>2.6 Propriété intellectuelle</h3>
      <p>
        De manière générale, l’Utilisateur s’interdit de porter atteinte aux
        droits de propriété intellectuelle (droit d’auteur, droits voisins,
        droit sui generis du producteur de bases de données, droit des marques,
        noms de domaine…) de <strong>WisperHub</strong> ou de l’Hébergeur, ou de
        tout tiers. <strong>WisperHub</strong> est titulaire de tous les droits
        de propriété intellectuelle tant sur la structure que sur le contenu du
        Site (textes, logos, images, éléments sonores, logiciels, icônes, mise
        en page, base de données…) ou a acquis régulièrement les droits
        permettant l’exploitation de la structure et du contenu du Site, sans
        aucune limitation. <strong>WisperHub</strong> concède à l’Utilisateur,
        le droit d’utiliser le Site pour ses besoins strictement privés, à
        l’exclusion de toute utilisation lucrative. En cas d’utilisation
        professionnelle, l’Utilisateur devra obtenir l’autorisation expresse,
        préalable et écrite de <strong>WisperHub</strong>. Ainsi, il est
        interdit à l’Utilisateur notamment de copier, reproduire, représenter,
        modifier et/ou exploiter, transférer de quelque façon que ce soit et à
        quelque fin que ce soit, tout ou partie de la structure et du contenu du
        Site, sauf en cas d’autorisation expresse, préalable et écrite de{" "}
        <strong>WisperHub</strong>. Les marques et logos reproduits sur le Site
        sont déposés par les sociétés qui en sont titulaires. Toute reproduction
        des noms ou logos, par quelque moyen que ce soit, sans autorisation
        préalable du titulaire concerné est interdite. Le non-respect de ces
        interdictions peut notamment constituer un acte de contrefaçon et/ou de
        concurrence déloyale et parasitaire engageant la responsabilité civile
        et/ou pénale de l’Utilisateur.
      </p>
      <br />
      <h3>2.7 Liens hypertextes</h3>
      <p>
        A l’exception de sites diffusant notamment des informations et/ou
        contenus ayant un caractère illégal et/ou notamment à caractère
        politique, religieux, pornographique, un Utilisateur peut créer un lien
        hypertexte sur un site vers le Site. En cas d’utilisation de ces sites,
        l’Utilisateur est invité à se reporter aux Conditions Générales
        d’Utilisation du site concerné. Au titre de la présente autorisation,
        <strong>WisperHub</strong> se réserve toutefois un droit d’opposition et
        se dégage de toute responsabilité quant aux informations contenues dans
        ces sites qui pourraient être liés au sien par un lien hypertexte ou
        autre moyen. A contrario, des liens hypertextes contenus sur le Site
        peuvent renvoyer vers d’autres sites Internet par tout moyen. Dans la
        mesure où <strong>WisperHub</strong> ne peut contrôler ces sites et ces
        sources externes,
        <strong>WisperHub</strong> ne peut être tenue pour responsable de la
        mise à disposition de ces sites et sources externes, et ne peut
        supporter aucune responsabilité quant aux contenus, publicités,
        produits, services ou tout autre matériel, disponibles sur ou à partir
        de ces sites ou sources externes. De plus, <strong>WisperHub</strong> ne
        pourra être tenue pour responsable de tout dommage avéré ou allégué
        consécutif ou en relation avec l’utilisation ou avec le fait d’avoir
        fait confiance aux contenus, à des biens ou des services disponibles sur
        ces sites ou sources externes. Enfin, dans la limite autorisée par la
        loi,
        <strong>WisperHub</strong> ne saura être tenue pour responsable dans le
        cas où le contenu desdits autres sites contreviendrait aux dispositions
        légales et réglementaires en vigueur.
      </p>
      <br />
      <h3>2.8 Garanties et responsabilités</h3>
      <p>
        L’Utilisateur s’engage, lors de l’utilisation qu’il fait du Site, à ne
        pas contrevenir aux dispositions législatives et réglementaires en
        vigueur, aux bons usages d’Internet, et de la netiquette, et aux CGU.
        Enfin, dans la limite autorisée par la loi, <strong>WisperHub</strong>{" "}
        se dégage de toute responsabilité en cas d’utilisation non-conforme aux
        CGU et de ses services. L’Utilisateur est informé que toute violation
        des stipulations des CGU est susceptible d’entraîner des poursuites
        judiciaires et des sanctions à son encontre. L’Utilisateur s’engage à
        agir avec diligence pour répondre à toute réclamation. Enfin, dans la
        limite autorisée par la loi, <strong>WisperHub</strong> et/ou les tiers
        de tout préjudice matériel ou immatériel, direct et/ou indirect de
        quelque nature que ce soit causé par l’Utilisateur, et/ou ses préposés
        en cas d’utilisation non-conforme aux CGU. <strong>WisperHub</strong>{" "}
        s’engage à faire ses meilleurs efforts afin de mettre en œuvre des
        mesures techniques et d’organisation pour protéger les Informations
        circulant sur le Site. L’Utilisateur se déclare, néanmoins, parfaitement
        informé que les données ne sont pas protégées contre toute forme
        d’intrusion y compris par voie de piratage. L’Utilisateur reconnaît
        qu’il est impossible de garantir une sécurité totale aux données
        transmises. En conséquence,
        <strong>WisperHub</strong> ne pourra être tenue responsable des
        incidents qui pourraient découler de cette transmission. Il appartient à
        l’Utilisateur de mettre en œuvre tous moyens utiles aux fins de
        préserver la confidentialité des données transmises. Chaque Utilisateur
        du Site s’engage expressément : à ne pas utiliser de logiciels ou de
        procédés destiné à copier les Informations du Site sans l’autorisation
        expresse et préalable de <strong>WisperHub</strong> à renoncer
        expressément à utiliser des logiciels ou dispositifs susceptibles de
        perturber le bon fonctionnement du Site, ni à engager d’action de nature
        à imposer une charge disproportionnée pour les infrastructures de{" "}
        <strong>WisperHub</strong> à ne pas altérer ou modifier voire créer des
        œuvres dérivées à partir des Informations du Site sans le consentement
        exprès et préalable de <strong>WisperHub</strong> à ne procéder à de
        courtes citations, analyses et reproductions destinées à des revues de
        presse ou autres utilisations expressément autorisées par la loi que
        dans les limites et conditions fixées par ces dernières et sous réserve
        notamment de citer le nom des auteurs et la source à ne pas extraire ou
        réutiliser, y compris à des fins privées, sans autorisation écrite et
        préalable de
        <strong>WisperHub</strong>, une partie substantielle ou non du contenu
        des bases de données et archives constituées par le Site à ne pas
        collecter des informations sur des tiers, y compris les adresses
        électroniques, afin de les utiliser pour l’envoi de sollicitations
        commerciales ou équivalentes, ou de les intégrer au sein d’un service de
        référencement ou équivalent, gratuit ou payant, ou encore afin
        d’effectuer une veille concurrentielle à ne pas mettre en place des
        systèmes susceptibles ou de nature à pirater le Site en tout ou partie,
        ou de nature à violer les CGU à informer <strong>WisperHub</strong> dès
        la connaissance d’une atteinte quelle qu’elle soit (notamment aux droits
        de propriété intellectuelle de <strong>WisperHub</strong>) en
        particulier de toute utilisation illicite ou non contractuelle des
        Informations du Site et ce, quel que soit le mode de diffusion utilisé
        L’Utilisateur qui publie une Contribution sur le Site reconnaît être
        personnellement responsable, tant vis-à-vis des tiers que de{" "}
        <strong>WisperHub</strong>, en cas de violation des dispositions
        législatives ou réglementaires applicables et garantit, en conséquence,{" "}
        <strong>WisperHub</strong> contre tout trouble, revendication et
        éviction quelconque.
      </p>
      <br />
      <h3>2.9 Contact</h3>
      <p>
        Pour toute question concernant les CGU, pour pouvez envoyer un message
        sur <strong>WisperHub</strong>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/YohanGH/<strong>WisperHub</strong>/discussions/52"
        >
          https://github.com/YohanGH/<strong>WisperHub</strong>/discussions/52
        </a>
      </p>
      <br />
      <h3>2.10 Droit applicable : règlements et litiges</h3>
      <p>
        Les CGU sont soumises au droit français. En cas de différends relatifs à
        l’interprétation, la validité ou l’exécution des CGU, l’Utilisateur et{" "}
        <strong>WisperHub</strong> conviennent de déployer leurs meilleurs
        efforts afin de régler à l’amiable le litige. Dans le cas où un accord
        amiable ne serait pas trouvé, tout éventuel litige se rapportant à
        l’interprétation ou l’exécution des CGU sera soumis à la compétence du
        tribunal de commerce de Lyon.
      </p>
      <section>
        <fieldset>
          <legend>J'accepte les CGU</legend>

          <div>
            <input
              className="buttonCheckbox"
              type="radio"
              name="CGU"
              id="CGU-oui"
              value="oui"
              onClick={validateCGU(true)}
            />
            <label htmlFor="CGU-oui">Oui</label>

            <input
              className="buttonCheckbox"
              type="radio"
              name="CGU"
              id="CGU-non"
              value="non"
              onClick={validateCGU(false)}
            />
            <label htmlFor="CGU-non">Non</label>
          </div>
        </fieldset>
      </section>
    </div>
  );
}

CGU.prototype = {
  setCguAccepted: PropTypes.func.isRequired,
  cguAccepted: PropTypes.bool.isRequired,
};
