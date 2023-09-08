import PropTypes from 'prop-types';

import { Card } from '../Card/Card'

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
  data: PropTypes.array,
};
