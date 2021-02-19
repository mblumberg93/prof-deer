import Layout from '../components/layout'
import { CloudDownload } from 'react-bootstrap-icons'
import { publicationString, publicationKey } from '../services/publicationService'
import styles from '../style/publications.module.scss'

export default function Publications({ currentPubs, upcomingPubs }) {
    return (
        <Layout>
            <p>Below is a list of my current published work. Please feel free to reach out if you have any questions regarding the publications.</p>
            <div className={styles.pubsBlock}>
                <div className={styles.pubsList}>
                    { currentPubs.map((publication) => (
                        <p key={publicationKey(publication)}>
                            <span dangerouslySetInnerHTML={publicationString(publication)}></span>
                            { publication.pdf_filename && 
                                <a href={"/pdfs/" + publication.pdf_filename} target="_blank" className="publication-download"><CloudDownload /></a>
                            }
                        </p>
                    ))}
                </div>
            </div>
            <div className={styles.pubsBlock}>
                <h3 className={styles.pubsHeader}>Papers Under Review</h3>
                <div className={styles.pubsList}>
                    { upcomingPubs.map((publication) => (
                        <p key={publicationKey(publication)} >
                            <span dangerouslySetInnerHTML={publicationString(publication)}></span>
                            { publication.pdf && 
                                <a href={"/pdfs/" + publication.pdf} target="_blank" className="publication-download"><CloudDownload /></a>
                            }
                        </p>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const allPubs = await fetch('https://marcs-strapi.herokuapp.com/publications', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())

    const currentPubs = allPubs.filter(pub => { return pub.current }).sort((a, b) => b.year - a.year)
    const upcomingPubs = allPubs.filter(pub => { return pub.current != true }).sort((a, b) => b.year - a.year)

    return { props: { currentPubs, upcomingPubs } }
}