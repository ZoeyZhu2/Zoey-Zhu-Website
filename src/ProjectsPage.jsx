import { Link } from 'react-router-dom'
import './ProjectsPage.css'

function ProjectsPage(){
    return(
        <div className = "projectsPage">
            <section className = "about">
                <h1> All Projects </h1>
                <p> (This website is one too!)</p>

                <div className="socialButtons">
                    <button> GitHub </button>
                </div>
            </section>

            <section className = "projects">
                <div className = "projectsImages">
                    images here
                </div>
                <div>
                    <button type="button">
                        <a href="https://play.unity.com/en/games/4f9dbad4-cd66-4d68-ba56-ad9332567443/flappy-bird-web-v22">
                        Play Flappy Bird+ here!
                        </a>
                    </button>
                </div>
                <div>
                    <button type="button">
                        <a href="https://github.com/ZoeyZhu2/Flappy-Bird">
                        Flappy Bird+ on Github
                        </a>
                    </button>
                </div>
                <div className="projectsText">
        
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
                        tracking, but my next steps are to integrate a backend database to store player data 
                        across sessions. Eventually, I will add even more features like character and background 
                        selection!
                    </p>
                </div>
            </section>

            <section className = "projects">
                <div className = "projectsImages">
                    images here
                </div>
                <div>
                    <button type="button">
                        <a href="https://play.unity.com/en/games/e3e1bf96-c2df-4d6d-bd29-1439f45b7d47/panic-at-the-pig-pen-v11">
                        Play Panic at the Pig Pen here!
                        </a>
                    </button>
                </div>
                <div>
                    <button type="button">
                        <a href="https://github.com/ZoeyZhu2/Panic-at-the-Pig-Pen">
                        Panic at the Pig Pen on Github
                        </a>
                    </button>
                </div>
                <div className="projectsText">
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
                </div>
            </section>

            <section className = "projects">
                <div className = "projectsImages">
                    images here
                </div>
                {/* <div>
                    <button type="button">
                        <a href="https://play.unity.com/en/games/e3e1bf96-c2df-4d6d-bd29-1439f45b7d47/panic-at-the-pig-pen-v11">
                        Play Video Poker here!
                        </a>
                    </button>
                </div> */}
                <div>
                    <button type="button">
                        <a href="https://github.com/ZoeyZhu2/Video-Poker">
                        Video Poker on Github
                        </a>
                    </button>
                </div>
                <div className="projectsText">
                    <h3 className="activityHeading">
                        Video Poker
                    </h3>
                    <p className="activitySubheading">
                       Java
                    </p>
                    <p className="activityBody">
                        This is an extension of a class project I did! I developed an interactive 
                        Video Poker game in Java and a graphical user interface using Java Swing. 
                        I modeled a standard 52-card deck and implemented shuffle, draw, and discard mechanics. 
                        Hand-ranking algorithms evaluate hands and compute payouts. I created 
                        custom card faces to enhance user experience! My next steps are to continue 
                        improving the GUI and officially publish the game!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProjectsPage