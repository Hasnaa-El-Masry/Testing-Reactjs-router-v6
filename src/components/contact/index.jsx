import Favorite from '../UI/favorite';
import styles from './styles.module.scss'

const contact = {
  first: "Your",
  last: "Name",
  avatar: "https://placekitten.com/g/200/200",
  twitter: "your_handle",
  notes: "Some notes",
  favorite: true,
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__img}>

        <img src={contact.avatar || null} alt="contact image" />

      </div>

      <div className={styles.contact__info}>

        <h1>{contact.first || contact.last ? <> {contact.first} {contact.last} </> : <i>No Name</i>}{" "} <Favorite favorite={contact.favorite} /></h1>

        {contact.twitter && <p><a href={`https://twitter.com/${contact.twitter}`}>{contact.twitter}</a></p>}

        {contact.notes && <p>{contact.notes}</p>}

        <div className={styles.actions}>
          <button className='btn'>Edit</button>
          <button className='btn btn-primary'>Delete</button>
        </div>

      </div>
    </div>
  )
}

export default Contact