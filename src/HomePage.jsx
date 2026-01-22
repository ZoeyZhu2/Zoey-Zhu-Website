import { Link } from 'react-router-dom'
import { useState } from 'react'
import './HomePageV2.css'
import CULTsubdivLeads from './assets/EndeavorsImages/CULTsubdivLeads.jpg'
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
                <h3> Math-Stats at Columbia</h3>
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
            {/* the following section should be on one line horizontally */}
            <section className = "endeavors">
             {/* the following section should be on the left side */}
                <div className="endeavorsText">
                    <h2 className="sectionHeading"> 
                        Current Endeavors
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

            {/* the following section should be on one line horizontally*/}
            <section className="projects">
                <h2 className="sectionHeading"> 
                    Current Projects
                </h2>
                <div className="projectsGrid">
                    <Link to="/projects" className="projectCard">
                        <h3 className="activityHeading">
                            Flappy Bird+
                        </h3>
                        <p className="activitySubheading">
                            Unity, C#, Git
                        </p>
                        <p className="activityBody">
                            Flappy Bird is the first game I ever developed with Unity. After designing
                            original sprites and obstacles, I worked on randomized obstacle generation
                            and game mechanics. Then, I added a second game-mode with daily-seeded obstacle
                            configurations. I used Unity's new Input Actions to make my game cross-platform 
                            and add key-binds for pausing and restarting the game. I built a pause menu
                            with options to resume, return home, open settings, and restart, and a settings music 
                            to adjust volume for background music and my custom sound effects. I have high-score 
                            tracking and I recently implemented a Firebase backend for player authentication and persistent account data storage. 
                            My next steps are to add a leaderboard. Eventually, I will add even more features like character and background 
                            selection!
                        </p>
                        <button type="button" className="projectButton">
                            <a href="https://play.unity.com/en/games/4f9dbad4-cd66-4d68-ba56-ad9332567443/flappy-bird-web-v22">
                            Play Flappy Bird+ here!
                            </a>
                        </button>
                    </Link>

                    <Link to="/projects" className="projectCard">
                        <h3 className="activityHeading">
                            Panic at the Pig Pen
                        </h3>
                        <p className="activitySubheading">
                            Unity, C#, Git
                        </p>
                        <p className="activityBody">
                            Panic at the Pig Pen is the second game I developed with Unity and my first original game. The goal 
                            of the game is to catch green pigs with the net while avoiding the pink pigs. 
                            Points are earned from catching green pigs, lost by missing green pigs, and the game 
                            ends when a pink pig is caught. After designing custom sprites and obstacles, I worked on randomized obstacle generation
                            and game mechanics. Like in Flappy Bird, I used Unity's new Input Actions to make my game cross-platform 
                            and add key-binds, and I built a pause menu with options to resume, return home, open settings, and restart, and a settings music 
                            to adjust volume. My next steps are to integrate a backend database to store player data 
                            across sessions and deploy!
                        </p>
                    </Link>

                    <Link to="/projects" className="projectCard">
                        <h3 className="activityHeading">
                            Video Poker
                        </h3>
                        <p className="activitySubheading">
                            Java, Git
                        </p>
                        <p className="activityBody">
                            This is an extension of a class project I did! I developed an interactive 
                            Video Poker game in Java and a graphical user interface using Java Swing. 
                            I modeled a standard 52-card deck and implemented shuffle, draw, and discard mechanics. 
                            Hand-ranking algorithms evaluate hands and compute payouts. I created 
                            custom card faces to enhance user experience! My next steps are to continue 
                            improving the GUI and officially publish the game!
                        </p>
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