import { Link } from 'react-router-dom'

function ContactPage() {
    return (
        <>
         <div>
            <h2>
                Contact Me
            </h2>
            <p>
                Email: 
                <a href="linkto:zyz2000@columbia.edu">
                    zyz2000@columbia.edu
                </a>
            </p>
            <p>
                LinkedIn:
                <a href="https://www.linkedin.com/in/zoey-zhu-797207323/">
                        https://www.linkedin.com/in/zoey-zhu-797207323/
                </a> 
            </p>
         </div>
        </>
    )
}

export default ContactPage