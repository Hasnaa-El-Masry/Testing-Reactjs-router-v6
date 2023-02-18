import React from 'react'
import Container from '../UI/container';
import MainNavigation from '../layout/main-navigation';
import styles from './styles.module.scss';

const Root = ({ children }) => {

    return (
        <div className={styles.root}>
            <MainNavigation />

            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    )
}

export default Root