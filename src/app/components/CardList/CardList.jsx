import PropTypes from 'prop-types';

import { Card } from '../Card/card'

export const CardList = ({ data }) => {
  return (
    <section>
      {
        data.map((commit) => (
          <Card key={commit.id} commit={commit} />
        ))
      }
    </section>
  )
};

CardList.propTypes = {
  data: PropTypes.object,
};
