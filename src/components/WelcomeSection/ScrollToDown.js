import React from 'react';

import { styScrollWrapper } from './styles';
import { bool, func } from 'prop-types';

function ClickToSeeDetail({ loading, onClick }) {
  return (
    <div css={styScrollWrapper} onClick={onClick}>
      <section id="scroll" className="scroll__icon">
        <div className="button">
          <span></span>
        </div>
        <span className="text">{loading ? 'Chargement...' : "Cliquez pour afficher les détails de l'événement"}</span>
      </section>
    </div>
  );
}

ClickToSeeDetail.propTypes = {
  loading: bool.isRequired,
  onClick: func.isRequired,
};

export default ClickToSeeDetail;
