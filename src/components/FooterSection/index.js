import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center mx-auto fh5co-heading">
                <h2 className="main-font">Vous souhaitez nous faire un cadeau?</h2>
                <p className="info">
                  Votre présence nous suffit comme cadeau ! Mais pour les plus têtus d'entre vous, voici ci-dessous nos
                  compte bancaire, paypal et mobile money

                  <p className="row">
                  <div className="col-md-12  text-center">
                    <h4 className='main-font'>PayPal: hako8@yahoo.fr</h4>
                    </div>
                    <div className="col-md-12  text-center">
                    <h4 className='main-font'>IBAN: DE67100500001063985834</h4>
                    </div>
                    <div className="col-md-12  text-center">
                    <h4 className='main-font'>Orange Money: 697954487</h4>
                    </div>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">
                  made with <span style={{fontSize: 16, color: 'red'}}>&hearts;</span> by{' '}
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/armel-siewe-8770631a1/">
                    Armel Siewe
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
