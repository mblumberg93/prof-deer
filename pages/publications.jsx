import Layout from '../components/layout'
import { CurrentPubs, UpcomingPubs } from '../lib/pubs'
import { CloudDownload } from 'react-bootstrap-icons'
import { publicationString, publicationKey } from '../services/publicationService'

export default function Publications() {
    return (
        <Layout>
            <p>Below is a list of my current published work. Please feel free to reach out if you have any questions regarding the publications.</p>
            <div className="pubs-block">
                <div className="pubs-list">
                    { CurrentPubs.map((publication) => (
                        <p key={publicationKey(publication)}>
                            <span dangerouslySetInnerHTML={publicationString(publication)}></span>
                            { publication.pdf && 
                                <a href={"/pdfs/" + publication.pdf} target="_blank" className="publication-download"><CloudDownload /></a>
                            }
                        </p>
                    ))}
                </div>
            </div>
            <div className="pubs-block">
                <h3 className="pubs-header">Papers Under Review</h3>
                <div className="pubs-list">
                    { UpcomingPubs.map((publication) => (
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