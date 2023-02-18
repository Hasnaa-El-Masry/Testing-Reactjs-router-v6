import styles from './styles.module.scss';
import { GoSearch } from 'react-icons/go';
import { IoIosContacts } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (

        <aside className={styles.nav}>

            <div className={styles.search}>

                <div className={styles.search__wrapper}>

                    <GoSearch />
                    <input type="text" placeholder='Search' />

                </div>

                <button>New</button>

            </div>

            <nav>
                <ul>
                    {Array.from(Array(100)).map((item,indx) => (

                        <li key={indx}><Link to={`/contacts/${indx}`}>Your Name</Link></li>
                    
                    ))}
                </ul>
            </nav>

            <footer>

                <IoIosContacts />
                <h1>React Router Contacts</h1>

            </footer>
        </aside>
    )
}

export default MainNavigation