import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/phanie.jpg';
import Groom from '@assets/images/simplice_1_1.jpg';

import { styWrapper } from './styles';

function HelloSection( ) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper} style={{display: 'flex'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center mx-auto fh5co-heading">
              <h2 className="main-font">Message du couple</h2>
              <p>Chers amis et chers invités,</p>
              <p className="info">
                Nous sommes ravis d'accueillir chacun d'entre vous sur le site de notre mariage ! Alors que nous
                entamons ce magnifique voyage d'amour et d'engagement, votre présence remplit nos cœurs de chaleur et de
                bonheur.
              </p>
              <p>
                Ce site a été conçu avec amour pour vous fournir tous les détails essentiels et de délicieux aperçus de
                notre histoire d'amour. Vous y trouverez un trésor d'informations sur nos journées spéciale, y compris
                la date, l'heure et le lieu. Laissez-nous vous guider à travers la tapisserie complexe de la célébration
                de notre mariage, en veillant à ce que vous ne manquiez pas un seul instant de la magie qui nous attend.
              </p>
            </div>
          </div>
          <div className="couple-wrap" style={{display: 'flex'}}>
            <div className="couple-half text-center">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Stephanie</h3>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            {/* <div className="and-love">
              <i>&</i>
            </div> */}
            <div className="couple-half text-center">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Simplice</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
