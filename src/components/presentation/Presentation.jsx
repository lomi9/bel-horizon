import dunes from "../../assets/dunes.webp"

export default function Presentation () {

    return (
        <section className="presentation">
            <div className="presentation__section">
                <div className="presentation__section-top-title">
                    <h2 className="presentation__section-top-title">Votre séjour au Grau-du-Roi</h2>
                </div>
                <div className="presentation__section-content">
                    <div className="presentation__section-content-image">
                        <img src={dunes}  className="presentation__section-content-image-img" alt="Chemin menant à la plage depuis le logement, au Grau du Roi"/>

                    </div>
                    <div className="presentation__section-content-text">
                        <p className="presentation__section-content-text-p">Situé à 100m de la mer, sur la rive droite au sein du quartier prisé “Le Boucanet”, l’appartement de vacances “Bel Horizon” offre tous les services à proximité du logement.</p>
                        <p className="presentation__section-content-text-p">D’un coté du logement, vous pourrez observer la plage, les dunes de sables et leurs paillotes. La plage est accessible par un petit sentier pittoresque depuis la résidence, à environ 100m.</p>
                        <p className="presentation__section-content-text-p">De l’autre côté du logement, vous profiterez de la pinède, espace protégé du litoral.</p>
                        <p className="presentation__section-content-text-p">Le centre ville animé vous attends à seulement 950m de l’appartement, vous offrant une multitude de boutiques et d’activités. </p>
                        <p className="presentation__section-content-text-p">Tous les commerces de proximité dont vous pourriez avoir besoin, tels que restaurants, pharmacie, épicerie, tabac/presse et boulangerie, sont à seulement 200 mètres.</p>
                        <p className="presentation__section-content-text-p">Et pour une expérience authentique, ne manquez pas le marché local qui se tient tous les deux jours, à seulement 100 mètres de votre lieu de séjour.</p>

                    </div>
                </div>

            </div>

        </section>
    )
}