import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Sabtu, 03 Oktober 2020" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {/* <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span> */}
              <h2 className="main-font main-font__wedding">Planning</h2>
              {/* <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Mairie"
                time="11:00"
                date="15 Decembre 2023"
                location={<a href='https://www.google.com/maps/search/?api=1&query=Maison+du+Parti+de+Bonadjo%2C+Douala%2C+Cameroon'>
                Maison du Parti de Bonadjo, Douala, Cameroon</a>}
                description="Devant les Hommes, nous scellerons notre amour dans un cadre intime et chaleureux. Rejoignez-nous alors que nous échangeons nos vœux, partageons des promesses sincères et nous engageons à cheminer ensemble dans la vie."
              />
              <WeddingInfoBox
                title="Vin d'honneur"
                time="12:00"
                date="15 Decembre 2023"
                location={<a href='https://www.google.com/maps/search/?api=1&query=Maison+du+Parti+de+Bonadjo%2C+Douala%2C+Cameroon'>
                Maison du Parti de Bonadjo, Douala, Cameroun</a>}
                description="Après avoir dit Oui à la mairie, rejoignez-nous pour un vin d'honneur qui promet d'être aussi pétillant que le champagne ! Des bulles, des bouchées délicieuses et une ambiance conviviale vous attendent."
              />
                <WeddingInfoBox
                title="Eglise"
                time="11:00"
                date="16 Decembre 2023"
                location={<a href='https://www.google.com/maps/search/?api=1&query=Cath%C3%A9drale+St+Pierre+et+Paul+de+Bonadibong%2C+Rue+Joss%2C+Douala%2C+Cameroon'>
                Cathédrale St Pierre et Paul de Bonadibong, Rue Joss, Douala, Cameroun</a>}
                description="Rejoignez-nous pour échanger nos vœux devant le Seigneur. Dans ce lieu sacré, nous scellerons notre amour éternel et partagerons des moments de foi, d'émotion et de bénédiction."
              />
                <WeddingInfoBox
                title="Soiré"
                time="19:00"
                date="16  Decembre 2023"
                location={<a href='https://www.google.com/maps/search/?api=1&query=H%C3%B4tel+La+Falaise+Bonanjo%2C+Bonanjo%2C+Douala%2C+Cameroon'>
                Hôtel La Falaise Bonanjo, Bonanjo, Douala, Cameroun</a>}
                description="Attachez vos ceintures et préparez-vous à une soirée de mariage délirante ! Avec de la musique qui fera vibrer vos pieds, de la nourriture délicieuse qui fera chanter vos papilles, et des surprises qui feront exploser de rire, cette soirée sera inoubliable"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
