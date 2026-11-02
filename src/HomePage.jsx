import { Link } from 'react-router-dom'
import { useState } from 'react'
import './HomePage.css'
import CULTsubdivLeads from './assets/EndeavorsImages/CULTsubdivLeads.jpg'
import UMSeboard from './assets/EndeavorsImages/UMS.jpeg'
import CURReboard from './assets/EndeavorsImages/CURR.jpg'
import FlappyBirdImage from './assets/ProjectsImages/FlappyBird.png'
import PanicAtThePigPenImage from './assets/ProjectsImages/PanicAtThePigPen.png'
import VideoPokerImage from './assets/ProjectsImages/VideoPoker.png'
import BakingImage from './assets/HobbiesImages/BakingImage.jpg'
import CelloImage from './assets/HobbiesImages/CelloImage.JPEG'
import GolfImage from './assets/HobbiesImages/GolfImage.jpg'
import KayakingImage from './assets/HobbiesImages/KayakingImage.jpg'
import RunningImage from './assets/HobbiesImages/RunningImage.jpg'
import SnowboardImage from './assets/HobbiesImages/SnowboardImage.jpg'

function HomePage() {
    const hobbiesImagesArray = [
        { src: BakingImage, alt: "Baking Image" },
        { src: CelloImage, alt: "Cello Image" },
        { src: GolfImage, alt: "Golf Image" },
        { src: KayakingImage, alt: "Kayaking Image" },
        { src: RunningImage, alt: "Running Image" },
        { src: SnowboardImage, alt: "Snowboarding Image" }
    ];
    
    // Create extended array for infinite loop effect
    const extendedImagesArray = [
        ...hobbiesImagesArray,
        ...hobbiesImagesArray,
        ...hobbiesImagesArray
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(hobbiesImagesArray.length);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
    };

    // Reset position when reaching boundaries for seamless loop
    const handleTransitionEnd = () => {
        if (currentImageIndex >= hobbiesImagesArray.length * 2) {
            setCurrentImageIndex(hobbiesImagesArray.length);
        } else if (currentImageIndex <= 0) {
            setCurrentImageIndex(hobbiesImagesArray.length);
        }
    };

    // Calculate transform for vertical scrolling
    const imageHeight = 306;
    const translateY = -currentImageIndex * imageHeight;

    return (
        <div className = "homePage">
            {/*the following seciton should be centered*/}
            <section className = "about">
                <h1> I'm Zoey Zhu </h1>
                <h3> CS-Math at Columbia</h3>
                <p> 
                    What's life without the novelty of learning?
                    Currently captivated by mathematives, statistics, and 
                    computer science. Also a lover of classics.
                    Semper disco!
                </p>

                <div className="socialButtons">
                    <a href="https://www.linkedin.com/in/zoey-zhu-797207323/" className="socialButton">
                        <span className="icon">in</span>
                        LinkedIn
                    </a> 
                    <a href="https://github.com/ZoeyZhu2" className="socialButton">
                        <span className="icon">⚙</span>
                        GitHub
                    </a>
                    <a href="mailto:zyz2000@columbia.edu" className="socialButton">
                        <span className="icon">✉</span>
                        Email
                    </a>
                </div>
            </section>
            
            <section className="endeavors">
                <h2 className="sectionHeading"> 
                    Current Endeavors
                </h2>

                <div className="endeavorBlock">
                    <div className="endeavorsText">
                        <h3 className="activityHeading">
                            Research Assistant
                        </h3>
                        <p className="activitySubheading">
                            Columbia Astronomy Department
                        </p>
                        <p className="activityBody">
                            I am working with Professor Frits Paerels on identifying x-ray counterparts to gravitational wave events.
                            I use Python to process hundreds of gravitational wave transient event FITS files, compute x-ray scattering and absorption optical depths, and determine
                            candidate search locations. I am gaining experience working with NumPy, Matplotlib, healpy, and astropy libraries.
                        </p>
                    </div>
                </div>

                <div className="endeavorBlock">
                    <div className="endeavorsText">
                        <h3 className="activityHeading">
                            Teaching Assistant
                        </h3>
                        <p className="activitySubheading">
                            Columbia Statistics Department
                        </p>
                        <p className="activityBody">
                            I am a teaching assistant for STAT1201UN Calc-based Intro 
                            to Statistics taught by Professor Cynthia Rush. I lead weekly
                            recitation sections.
                        </p>
                    </div>
                </div>

                <div className="endeavorBlock">
                    <div className="endeavorsText">
                        <h3 className="activityHeading">
                            Treasurer
                        </h3>
                        <p className="activitySubheading">
                            Columbia University Road Runners
                        </p>
                        <p className="activityBody">
                            I am responsible for financial tracking, completing budget requests, and coordinating race registration for the club. I will also be assisting in organizing club events and lead weekly runs. 
                        </p>
                    </div>
                    <div className="endeavorsImages">
                        <img src={CURReboard} alt="Columbia Road Runners Treasurer" />
                    </div>
                </div>

                <div className="endeavorBlock">
                    <div className="endeavorsText">
                        <h3 className="activityHeading">
                            Treasurer
                        </h3>
                        <p className="activitySubheading">
                            Columbia Undergraduate Math Society
                        </p>
                        <p className="activityBody">
                            I am responsible for budgeting, food catering, and other similar tasks for our weekly math talks. 
                        </p>
                    </div>
                    <div className="endeavorsImages">
                        <img src={UMSeboard} alt="Columbia Undergraduate Math Society Treasurer" />
                    </div>
                </div>
            </section>


            {/* the following section should be on one line horizontally */}
            <section className = "endeavors">
             {/* the following section should be on the left side */}
                <div className="endeavorsText">
                    <h2 className="sectionHeading"> 
                        Past Endeavors
                    </h2>
                    <h3 className="activityHeading">
                        Treasurer
                    </h3>
                    <p className="activitySubheading">
                        Columbia Locomotives Team
                    </p>
                    <p className="activityBody">
                        I work to secure funding to support international competition travel and obtain sponsorships
                        and parts by building relationships with companies and alumni. I also track equipment and parts
                        and club finances through a centralized financial tracking system I created. I work with the 
                        business team to prepare the Bill of Materials and business case for the IMechE Railway Challenge.
                    </p>
                </div>
                {/* the following section should be on the right side*/}
                <div className = "endeavorsImages">
                    <img src={CULTsubdivLeads} alt="Locomotives Team Subdivision Leads" />
                </div>
            </section>
            

            <section className="projects">
                <h2 className="sectionHeading"> 
                    Current Projects
                </h2>
                <div className="projectsGrid">
                    <Link to="/projects" className="projectCard">
                        <h3 className="activityHeading">
                            Poker Calculator
                        </h3>
                        <p className="activitySubheading">
                            Python, Git
                        </p>
                        <p className="activityBody">
                            I created a poker calculator that estimates player equity and ev
                    using monte-carlo simulations in different scenarios
                    including number of players (2-9), active hands, betting rounds (preflop through river), and table positions.
                    This can be used during live games by inputting game information as action progresses.
                    I am currently designing another mode where users can play against
                    bot opponents with configurable parameters such as assertiveness, looseness, and variability.
                     My next steps are to transition from a command-line interface to an interactive web interface.
                        </p>
                        <button type="button" className="projectButton" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://github.com/ZoeyZhu2/poker-calculator', '_blank'); }}>
                            See the code here!
                        </button>
                    </Link>
                    <Link to="/projects" className="projectCard">
                        <h3 className="activityHeading">
                            LionSwipe
                        </h3>
                        <p className="activitySubheading">
                            JavaScript, HTML, CSS, Git
                        </p>
                        <p className="activityBody">
                            LionSwipe is an all-in-one platform for meal swipe tracking and budgeting. 
                            It displays live on-campus dining hall menus and students can record 
                            meals eaten at a dining hall by clicking on it. Students can also log outside meals.
                            With this data, LionSwipe generates a comprehensive dashboard that displays past, present, and target weekly meal swipe usage and spending amounts. The charts provide clarity on a student’s dining habits and how they should allocate their swipes and spending money going forward—with the goal of minimizing waste. 
                            We have currently released a beta version to the public. In the future, 
                            we will release more functionality, such as a chatbot search feature that
                            provides places to eat off-campus that are customized to user preferences, 
                            including diet, distance, and budget, and a swipe market that connects students 
                            who want to buy and sell swipes, reducing the financial impact of wasted swipes.
                            In the process of developing LionSwipe, I personally conducted 30 customer
                            discovery interviews. I created this in collaboration with{' '}
                            <a href="mailto:evelyn.ding@columbia.edu">Evelyn Ding</a>.
                        </p>
                        <button type="button" className="projectButton" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://www.lionswipe.com/', '_blank'); }}>
                            Use LionSwipe here!
                        </button>
                    </Link>
                </div>
                <div className="viewAllProjectsButtonWrapper">
                    <Link to="/projects" className="viewAllProjectsButton">
                        See All Projects →
                    </Link>
                </div>
        </section>

            {/* the following section should be on one line horizontally*/}
            <section className = "hobbies">
                {/* the following section should be on the left side */}
                <div className="hobbiestext">
                    <h2 className="sectionHeading"> 
                        Current Hobbies
                    </h2>
                    <h3 className="activityHeading">
                        Golfing
                    </h3>
                    <p className="activitySubheading">
                        2015-present
                    </p>
                    <p className="activityBody">
                        I started playing golf for fun in 2015, joining my dad on the local driving range. 
                        In 2017, I competed in my first ever competition and continued competing at the local
                         and regional level through 2025. Now, I enjoy playing for fun with Columbia Club
                         Golf and I am always down for friendly competition!
                    </p>
                    <h3 className="activityHeading">
                        Running
                    </h3>
                    <p className="activitySubheading">
                        2025-present
                    </p>
                    <p className="activityBody">
                        I picked up running in January 2025, and ran on-and-off throughout the first part of the year. 
                        Upon arrival at Columbia, I joined the Columbia Road Runners and ran my first 5k with them in fall 2025!
                    </p>
                    <h3 className="activityHeading">
                        Music
                    </h3>
                    <p className="activitySubheading">
                        2011-present
                    </p>
                    <p className="activityBody">
                        I love listening to music and watching performances. I first played piano before 
                        switching to the cello in 2015, which I played until 2025. Now, I am always down 
                        to go to concerts, whether pop or classical, and watch Broadway shows and ballet!
                    </p>
                    <h3 className="activityHeading">
                        Trying New Things!
                    </h3>
                    <p className="activitySubheading">
                        2007-present
                    </p>
                    <p className="activityBody">
                        I love having new experiences! I would love to travel the world one day and experience 
                        many different cultures and see new places. I also enjoy dabbling in snowboarding, cooking, baking, art,
                         cubing, and puzzles! 
                    </p>
                </div>
                {/* the following section should be on the right side*/}
                <div className="hobbiesCarousel">
                    <div className="carouselWrapper">
                        <button className="carouselButton" onClick={prevImage}>▲</button>
                        
                        <div className="carouselContainer">
                            <div 
                                className="carouselTrack" 
                                style={{ 
                                    transform: `translateY(${translateY}px)`,
                                    transition: currentImageIndex === hobbiesImagesArray.length || 
                                               currentImageIndex === 0 ? 'none' : 'transform 0.5s ease-in-out'
                                }}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {extendedImagesArray.map((image, index) => (
                                    <div key={index} className="carouselImageWrapper">
                                        <img 
                                            src={image.src} 
                                            alt={image.alt} 
                                            className="carouselImage" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <button className="carouselButton" onClick={nextImage}>▼</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomePage