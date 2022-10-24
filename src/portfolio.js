import restaurant from './images/react-restaurant.jpg';
import weather from './images/weather.JPG';
import ticTac from './images/tic.JPG';
import randoStory from './images/random-story-generator.jpg';
import mindRead from './images/mind-reader.JPG';
import brewAPI from './images/brewery-api.jpg';


function ProjectCard(props) {

    return (
        <div className="card col">
            <img src={props.imgsrc} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Go to Live Version</a>
                    <a href="#" className="btn btn-primary">Go to Code</a>
                </div>
        </div>
    )
}

function PortfolioPage() {

    return (
        <div className='row'>
            <ProjectCard title={'React Restaurant'} imgsrc={restaurant} text={'A Fake Restaurant page with menus populated from an API'} />
            <ProjectCard title={'Weather App'} imgsrc={weather} text={'An app that pulls weather data for any zipcode'} />
            <ProjectCard title={'Tic Tac Toe'} imgsrc={ticTac} text={'A simple game of Tic Tac toe'} />
            <ProjectCard title={'Randon Story Generator'} imgsrc={randoStory} text={'A fun random story generator'} />
            <ProjectCard title={'Mind Reader'} imgsrc={mindRead} text={'An app that can read your mind!'} />
            <ProjectCard title={'Brewery Locator'} imgsrc={brewAPI} text={'An app that will show you every brewery for any city'} />
        </div>
    )
}

export default PortfolioPage;