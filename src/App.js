import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Card from "./Components/Card";
import dummyText from "./DummyText";
import aboutText from "./About";
import { NavLink, Switch, Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import {
    UserCard,
    ProductCard,
    TaggedContentCard,
    FlippingCard,
    FlippingCardFront,
    FlippingCardBack,
    RecipeCard,
    NewsHeaderCard,
    CryptoCard,
    PaymentCard,
    JobListingCard
} from "react-ui-cards"
import './App.css';
const Main = () => (
    <div>
        <div className='home' >
            <div className="parallax">
                <div className="caption">
                    <div className="parallax2"></div>
             </div>
            </div>
        </div>

    </div>
);
const About = () => (
    <div className="about">
        <p> <b> 5th Year Computer Science </b> student at the University of Sheffield and recognized leader of the <a href="https://www.sela-sheffield.org"> Sheffield Engineering Leadership Academy </a> <br/> Active speaker, writer and maker of random software projects. Work with Javascript, Python, C++ <b> (and even z/OS and PLX!) </b> <br />
        </p>
        <h3> Programming Languages: </h3>
        <p> <b>|</b> Javascript <b>|</b> Python <b>|</b> C++ <b>|</b> Java <b>|</b> z/OS <b>|</b> PLX <b>|</b> 
        </p>
        <h3> Actual Languages </h3>
        <p> English:  Fluent (Second Language) <br />
            Polish:   Fluent 
        </p>

        <h3> Recognition & Awards </h3>
        <p> IBM Recognized Speaker/ Presenter
        <br/> Graduate of the Sheffield Engineering Leadership Academy
        <br/>  IBM Recognized Educator
        <br /> Interskill - Mainframe Specialist - z/OS UNIX System Services 
        <br /> IBM University Business Challenge Finalist 2017 
        <br /> Denise Coates Scholarship 2017-2019
         <br /> <a href="https://www.linkedin.com/in/bemben">See More </a></p>
        </div>
)

const Portfolio = () => (
    <div className="portfolio">
        <h2> Software Projects </h2>
        <div className="card-container">
            <TaggedContentCard
                href='https://github.com/dambem/diss-quad-gait'
                thumbnail='https://raw.githubusercontent.com/dambem/diss-quad-gait/master/graphs/3dgraph.png'
                title='Dissertation'
                description='Comparison of simulated quadruped locomotion to the Dynamic Similarity Hypothesis'
                tags={[
                    'Research',
                    'Python',
                    'Robotics'
                ]}
            />
            <TaggedContentCard
                href='https://github.com/dambem/ClimateMonitorV2'
                thumbnail='mapofsensors.PNG'
                title='SheffSense (Invisible Pollution)'
                description='A funded project for the Festival of The Mind 2020'
                tags={[
                    'Javascript',
                    'IoT',
                    'NodeJS'
                ]}
            />
            <TaggedContentCard
                href='https://github.com/dambem/Particle_Photography'
                thumbnail='particlephotography.PNG'
                title='Particle Photography'
                description='A small hobby project aimed towards converting images to particles'
                tags={[
                    'Javascript',
                    'Python',
                    'Image Processing'
                ]}
            />
        </div>
        <h2> Talks and Blogs </h2>

        <div className="card-container">
            <TaggedContentCard
                href='https://www.youtube.com/watch?v=vpitbpPLkko'
                thumbnail='sela.png'
                title='Explaining the Urban Flows Observatory to the public'
                description='Talking about leading a project to increase outreach activities and get the general public engaged with the urban flows observatory'
                tags={[
             
                    'Communication',
                    'Teamwork'
                ]}
            />
            <TaggedContentCard
                href='https://compsciblog.group.shef.ac.uk/lessons-from-my-placement/'
                thumbnail='compsciblog.PNG'
                title='Lessons From My Placement (Or working 9 till 5, what a way to learn Computing)'
                description='A blog post on dealing with securing placements without experience, and how to effectively work in that environment'
                tags={[
                    'Writing',
                    'Work'
                ]}
            />
            <TaggedContentCard
                href='https://www.bbc.co.uk/news/uk-england-lincolnshire-39948303'
                thumbnail='bbc_news_logo.png'
                title='Election 2017: Living in Boston - the UKs most anti-EU town'
                description='Interviewed by the BBC to talk about being a migrant in an anti-EU town'
                tags={[
                    'Politics',
                ]}
            />
        </div>
    </div>
    )
const Contact = () => (
    <div className="contact">
        <p> The following are my contact details, for any business/professional enquiries email <b> dbemben1@sheffield.ac.uk </b> <br/>Talk to me about anything involving programming (Python, Javascript, C), public speaking, or how to set up projects at university!</p>
        <div id='contact-bar'>
            <a href="https://www.linkedin.com/in/bemben"><img class="img-fluid contact-img" src="linkedinicon.png" /></a>
            <a href="https://github.com/dambem"><img class="img-fluid contact-img" src="githubicon.png" /> </a>
            <a href="mailto:dbemben1@sheffield.ac.uk"><img class="img-fluid contact-img" src="emailicon.png" /> </a>
            <a href="https://www.instagram.com/damianbemben/"><img class="img-fluid contact-img" src="instagramicon.png" /> </a>
        </div>
     </div>
    )
class App extends Component { 
    render() {
        return (
            <div className="App">
                <Navbar />
                <Main />

                <Section
                    title="About"
                    dark={true}
                    id="about"
                />
                <About/>
                <Section
                    title="Portfolio"
                    dark={true}
                    id="portfolio"
                />
                <Portfolio/>
                <Section
                    title="Contact"
                    dark={true}
                    id="contact"
                />
                <Contact/>

            </div>

            )
    }
};




export default App;
