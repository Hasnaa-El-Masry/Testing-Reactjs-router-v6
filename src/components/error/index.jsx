import { useRouteError } from "react-router-dom";
import styles from './styles.module.scss';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={styles.error} id="error-page">
            <div className="container">
                <h1>Oops!</h1>
                <h3>
                    <i>{error.statusText || error.message}</i>
                </h3>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>

        </div>
    );
}