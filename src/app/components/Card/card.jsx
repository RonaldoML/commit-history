import PropTypes from 'prop-types';
import Image from 'next/image';

import { CONSTANTS } from '../helpers/constants';

import styles from './card.module.css';

export const Card = ({ commit }) => {
  const { author, message, url } = commit;
  const { avatar, date, name, email } = author;

  const { AVATAR_ALT, COMMENT } = CONSTANTS;

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <div className={styles.title_container}>
          <Image src={avatar} alt={AVATAR_ALT} width={30} height={30} />
          <h3><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h3>
        </div>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.email}>{email}</p>
      <div className={styles.comment_container}>
        <p className={styles.comment_title}>{COMMENT}</p>
        <p className={styles.comment_message}>{message}</p>
      </div>
    </article>
  )
};

Card.propTypes = {
  commit: {
    author: {
      avatar: PropTypes.string,
      date: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
    },
    message: PropTypes.string,
    url: PropTypes.string
  }
};
