import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You've hit the void.
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;