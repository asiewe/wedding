import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
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
                notre histoire d'amour. Vous y trouverez un trésor d'informations sur notre journée spéciale, y compris
                la date, l'heure et le lieu. Laissez-nous vous guider à travers la tapisserie complexe de la célébration
                de notre mariage, en veillant à ce que vous ne manquiez pas un seul instant de la magie qui nous attend.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Stephanie Anoupiague</h3>
                {/* <p className="parent-name parent-name__top">
                  Putri Bapak Totok Somo Dipoyono <br />& Ibu Setyo Listiani
                </p> */}
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Simplice Mustername</h3>
                {/* <p className="parent-name">
                  Putra Bapak Bunari <br />& Ibu Suratun
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {!isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Seputar Covid-19</h2>
                <p className="info">
                  Berkaitan dengan kondisi pandemik saat ini, keberlangsungan acara kami mengacu pada pedoman
                  Kementerian Kesehatan, yaitu memberlakukan pembatasan jarak dan pembatasan jumlah tamu undangan.
                </p>
                <p className="info">
                  Maka dari itu, dengan segala kerendahan hati, kami mohon maaf jika belum bisa mengundang saudara/i
                  dihari bahagia kami. Sekiranya do'a dari saudara/i sudah lebih dari cukup bagi kami. Semoga kita semua
                  selalu dalam lindungan Allah SWT. Aamiin ya rabbal allamiin..
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null} */}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
