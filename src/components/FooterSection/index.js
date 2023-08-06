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
                  mobile money

                  <p className="row">
                  <div className="col-md-6  text-center">
                    Orange: xxxxxxxxxxxxxxx
                    </div>
                    <div className="col-md-6  text-center">
                    MTN: xxxxxxxxxxxxxxx
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
