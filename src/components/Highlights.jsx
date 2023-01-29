import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './ui/Highlight'

function Highlights() {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span></h2>
                    <div className="highlight__wrapper">
                        <Highlight title={"Easy and quick"}
                        icon={<FontAwesomeIcon icon="bolt" />}
                        para={"Get access to the books you purchased online instantly."}
                        />
                        <Highlight title={"10,000+ Books"}
                        icon={<FontAwesomeIcon icon="book-open" />}
                        para={"Library has books in all your favourite genres."}
                        />
                        <Highlight title={"Affordable"}
                        icon={<FontAwesomeIcon icon="tags" />}
                        para={"Get your hands on popular books for as little as $10."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights