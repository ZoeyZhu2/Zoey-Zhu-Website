// // import { Link } from 'react-router-dom'

// // function ContactPage() {
// //     return (
// //         <>
// //          <div>
// //             <h2>
// //                 Contact Me
// //             </h2>
// //             <p>
// //                 Email: 
// //                 <a href="linkto:zyz2000@columbia.edu">
// //                     zyz2000@columbia.edu
// //                 </a>
// //             </p>
// //             <p>
// //                 LinkedIn:
// //                 <a href="https://www.linkedin.com/in/zoey-zhu-797207323/">
// //                         https://www.linkedin.com/in/zoey-zhu-797207323/
// //                 </a> 
// //             </p>
// //          </div>
// //         </>
// //     )
// // }

// // export default ContactPage


// import { Link } from 'react-router-dom'
// import './ContactPage.css'

// function ContactPage() {
//     return (
//         <div className="contactPage">
//             <div className="contactContainer">
//                 <section className="contactHeader">
//                     <h1>Let's Connect</h1>
//                     <p className="contactSubtitle">
//                         I'm always excited to collaborate on new projects, discuss ideas, 
//                         or just chat about math, stats, computer science, or classics!
//                     </p>
//                 </section>

//                 <section className="contactMethods">
//                     <div className="contactCard">
//                         <div className="contactIcon">✉</div>
//                         <h3>Email</h3>
//                         <p className="contactDescription">
//                             Best way to reach me for opportunities and inquiries
//                         </p>
//                         <a href="mailto:zyz2000@columbia.edu" className="contactLink">
//                             zyz2000@columbia.edu
//                         </a>
//                     </div>

//                     <div className="contactCard">
//                         <div className="contactIcon">in</div>
//                         <h3>LinkedIn</h3>
//                         <p className="contactDescription">
//                             Connect with me professionally
//                         </p>
//                         <a 
//                             href="https://www.linkedin.com/in/zoey-zhu-797207323/" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="contactLink"
//                         >
//                             View Profile →
//                         </a>
//                     </div>

//                     <div className="contactCard">
//                         <div className="contactIcon">⚙</div>
//                         <h3>GitHub</h3>
//                         <p className="contactDescription">
//                             Check out my projects and code
//                         </p>
//                         <a 
//                             href="https://github.com/ZoeyZhu2" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="contactLink"
//                         >
//                             View GitHub →
//                         </a>
//                     </div>
//                 </section>

//                 <section className="quickLinks">
//                     <h2>Explore More</h2>
//                     <div className="quickLinksGrid">
//                         <Link to="/" className="quickLinkCard">
//                             <span className="quickLinkIcon">🏠</span>
//                             <h4>Home</h4>
//                             <p>Learn more about me</p>
//                         </Link>
                        
//                         <Link to="/projects" className="quickLinkCard">
//                             <span className="quickLinkIcon">💻</span>
//                             <h4>Projects</h4>
//                             <p>View my work</p>
//                         </Link>
//                     </div>
//                 </section>

//                 <section className="additionalInfo">
//                     <h2>What I'm Looking For</h2>
//                     <div className="interestsGrid">
//                         <div className="interestItem">
//                             <span className="interestIcon">🎯</span>
//                             <h4>Internship Opportunities</h4>
//                             <p>Software engineering, data science, or quantitative roles</p>
//                         </div>
//                         <div className="interestItem">
//                             <span className="interestIcon">🤝</span>
//                             <h4>Collaboration</h4>
//                             <p>Open-source projects, hackathons, or creative initiatives</p>
//                         </div>
//                         <div className="interestItem">
//                             <span className="interestIcon">💡</span>
//                             <h4>Learning</h4>
//                             <p>New technologies, mathematical concepts, and challenging problems</p>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="responseTime">
//                     <div className="responseCard">
//                         <h3>Response Time</h3>
//                         <p>I typically respond to emails within 24-48 hours. If your message is time-sensitive, 
//                         please mention it in the subject line!</p>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     )
// }

// export default ContactPage

import { Link } from 'react-router-dom'
import './ContactPageV2.css'

function ContactPage() {
    return (
        <div className="contactPage">
            <div className="contactContainer">
                <section className="contactHeader">
                    <h1>Let's Connect</h1>
                    <p className="contactSubtitle">
                        I'm always excited to collaborate on new projects, discuss ideas, 
                        or just chat about math, stats, computer science, or classics!
                    </p>
                </section>

                <section className="contactMethods">
                    <div className="contactCard">
                        <div className="contactIcon">✉</div>
                        <h3>Email</h3>
                        <p className="contactDescription">
                            Best way to reach me
                        </p>
                        <a href="mailto:zyz2000@columbia.edu" className="contactLink">
                            zyz2000@columbia.edu
                        </a>
                    </div>

                    <div className="contactCard">
                        <div className="contactIcon">in</div>
                        <h3>LinkedIn</h3>
                        <p className="contactDescription">
                            Connect with me professionally
                        </p>
                        <a 
                            href="https://www.linkedin.com/in/zoey-zhu-797207323/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contactLink"
                        >
                            View Profile →
                        </a>
                    </div>

                    <div className="contactCard">
                        <div className="contactIcon">⚙</div>
                        <h3>GitHub</h3>
                        <p className="contactDescription">
                            Check out my projects and code
                        </p>
                        <a 
                            href="https://github.com/ZoeyZhu2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contactLink"
                        >
                            View GitHub →
                        </a>
                    </div>
                </section>

                <section className="quickLinks">
                    <h2>Explore More</h2>
                    <div className="quickLinksGrid">
                        <Link to="/" className="quickLinkCard">
                            <span className="quickLinkIcon">🏠</span>
                            <h4>Home</h4>
                            <p>Learn more about me</p>
                        </Link>
                        
                        <Link to="/projects" className="quickLinkCard">
                            <span className="quickLinkIcon">💻</span>
                            <h4>Projects</h4>
                            <p>View my work</p>
                        </Link>

                        <Link to="/fun" className="quickLinkCard funCard">
                            <span className="quickLinkIcon">🎉</span>
                            <h4>Fun</h4>
                            <p>Have fun here!</p>
                        </Link>
                    </div>
                </section>

                {/* <section className="additionalInfo">
                    <h2>What I'm Looking For</h2>
                    <div className="interestsGrid">
                        <div className="interestItem">
                            <span className="interestIcon">🎯</span>
                            <h4>Internship Opportunities</h4>
                            <p>Software engineering, data science, or quantitative roles</p>
                        </div>
                        <div className="interestItem">
                            <span className="interestIcon">🤝</span>
                            <h4>Collaboration</h4>
                            <p>Open-source projects, hackathons, or creative initiatives</p>
                        </div>
                        <div className="interestItem">
                            <span className="interestIcon">💡</span>
                            <h4>Learning</h4>
                            <p>New technologies, mathematical concepts, and challenging problems</p>
                        </div>
                    </div>
                </section> */}

                {/* <section className="responseTime">
                    <div className="responseCard">
                        <h3>Response Time</h3>
                        <p>I typically respond to emails within 24-48 hours. If your message is time-sensitive, 
                        please mention it in the subject line!</p>
                    </div>
                </section> */}
            </div>
        </div>
    )
}

export default ContactPage