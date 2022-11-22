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
                    <a href={props.liveDemo} className="btn btn-primary">Go to Live Version</a>
                    <a href={props.repoLink} className="btn btn-primary">Go to Code</a>
                </div>
        </div>
    )
}

function PortfolioPage() {

    return (
        <div className='row'>
            <ProjectCard title={'React Restaurant'} liveDemo={'#'} repoLink={'https://github.com/McTimidation/react-restaurant/tree/main/app/src'} imgsrc={restaurant} text={'A Fake Restaurant page with menus populated from an API'} />
            <ProjectCard title={'Weather App'} liveDemo={'#'} repoLink={'https://github.com/McTimidation/weatherapp/blob/main/js/main.js'} imgsrc={weather} text={'An app that pulls weather data for any zipcode'} />
            <ProjectCard title={'Tic Tac Toe'} liveDemo={'#'} repoLink={'https://github.com/McTimidation/tic-tac-toe/blob/main/script/sandbox.js'} imgsrc={ticTac} text={'A simple game of Tic Tac toe'} />
            <ProjectCard title={'Randon Story Generator'} liveDemo={'#'} repoLink={'#'} imgsrc={randoStory} text={'A fun random story generator'} />
            <ProjectCard title={'Mind Reader'} liveDemo={'#'} repoLink={'#'} imgsrc={mindRead} text={'An app that can read your mind!'} />
            <ProjectCard title={'Brewery Locator'} liveDemo={'#'} repoLink={'#'} imgsrc={brewAPI} text={'An app that will show you every brewery for any city'} />
        </div>
    )
}

export default PortfolioPage;