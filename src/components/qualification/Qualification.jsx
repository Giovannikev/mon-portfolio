import React,{ useState} from "react"
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return(
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="span section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Second year in Dev</h3>
                                <span className="qualification__subtitle">ESTI</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - 2025 in progress
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Computer troubleshooting</h3>
                                <span className="qualification__subtitle">Orange Digital Center</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Python training</h3>
                                <span className="qualification__subtitle">Kaggle</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Machine learning training</h3>
                                <span className="qualification__subtitle">Kaggle</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Portfolio in React</h3>
                                <span className="qualification__subtitle">Personal project</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Booking site</h3>
                                <span className="qualification__subtitle">work in frontend</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Python swimming pool</h3>
                                <span className="qualification__subtitle">ESTI</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Hackathon on devpost</h3>
                                <span className="qualification__subtitle">work on AI training</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification