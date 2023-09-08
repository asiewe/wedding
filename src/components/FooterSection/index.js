import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import paypalLogo from '@assets/images/paypal.svg';
import orangeMoneyLogo from '@assets/images/orange-money.png';
import ibanLogo from '@assets/images/iban.svg';

const reservationBtn = css`
  font-size: 15px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 0;
`;

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
                  <p className="row" style={{alignItems: 'center'}}>
                    <div className="col-4"><img src={paypalLogo} width={80} height={80} alt='paypal logo'/></div>
                    <div className="col-8"><h6><a href='https://paypal.me/hako8'>https://paypal.me/hako8</a></h6></div>
                  </p>
                  <p className="row" style={{alignItems: 'center'}}>
                    <div className="col-4">
                      <h5>IBAN</h5>
                    </div>
                    <div className="col-8">
                      <h6>DE67100500001063985834<br/>Nom: Jacques Hako</h6>
                    </div>
                  </p>
                  <p className="row" style={{alignItems: 'center'}}>
                    <div className="col-4"><img src={orangeMoneyLogo} width={55} height={55} alt='orange money logo'/></div>
                    <div className="col-8">
                      <h6>697954487<br/>Nom: Jacques Hako</h6>
                      <h6></h6>
                    </div>
                  </p>
                  <p className="col-12  text-center">
                    <Link
                      to={`https://docs.google.com/forms/d/e/1FAIpQLSeeJvmYKkn5IOPWw99F4WJ7OoQ3fBBrQYFcH_wMoWAjHowKbA/viewform?usp=sf_link`}
                      target="_blank "
                    >
                      <button className="btn btn-secondary" css={reservationBtn}>
                        Confirmez votre presence
                      </button>
                    </Link>
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
                  made with <span style={{ fontSize: 16, color: 'red' }}>&hearts;</span> by{' '}
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
