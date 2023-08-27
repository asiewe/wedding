import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/dinda-indra.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://i.ibb.co/pJzdQqz/phanie-Simplice.jpg`;
const META_DESCRIPTION = `Mariage de Stephanie & Simplice- Save the Date: 15 Decembre 2023`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Stephanie ❤️ Simplice</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="Stephanie ❤️ Simplice" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:url" content="https://stephanie-simplice.com/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
