import restaurant from '../images/react-restaurant.jpg';
import weather from '../images/weather.JPG';
import ticTac from '../images/tic.JPG';
import randoStory from '../images/Screenshot 2023-11-13 142500.png';
import mindRead from '../images/mind-reader.JPG';
import brewAPI from '../images/brewery-api.jpg';


function ProjectCard(props) {

    
    return (
        <div className="card col-2 mx-auto">
            <img src={props.imgsrc} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a target={'#'} href={props.liveDemo} className="btn btn-primary projButton mx-auto">Go to Live Version</a>
                    <a target={'#'} href={props.repoLink} className="btn btn-primary align-self-center projButton">Go to Code</a>
                </div>
        </div>
    ) 
}

function PortfolioPage( { state } ) {
console.log('success')
    if (state === 'portfolio') {
    return (
        <>
        <div className='row'>
            <ProjectCard title={'React Restaurant'} liveDemo={'https://react-restaurant-mu.vercel.app/'} repoLink={'https://github.com/McTimidation/react-restaurant/tree/main/app/src'} imgsrc={restaurant} text={'A Fake Restaurant page with menus populated from an API'} />
            <ProjectCard title={'Weather App'} liveDemo={'https://mctimidation.github.io/weatherapp/'} repoLink={'https://github.com/McTimidation/weatherapp/blob/main/js/main.js'} imgsrc={weather} text={'An app that pulls weather data for any zipcode'} />
            <ProjectCard title={'Tic Tac Toe'} liveDemo={'https://tic-tac-toe-hazel-gamma.vercel.app/'} repoLink={'https://github.com/McTimidation/tic-tac-toe/blob/main/script/sandbox.js'} imgsrc={ticTac} text={'A simple game of Tic Tac toe'} />
        </div>
        <div className='row'>
            <ProjectCard title={'To Do List'} liveDemo={'https://mctimidation.github.io/todo-list/'} repoLink={'https://github.com/McTimidation/todo-list'} imgsrc={randoStory} text={'A fun random story generator'} />
            <ProjectCard title={'Mind Reader'} liveDemo={'https://beer-api-flame.vercel.app/'} repoLink={'https://github.com/McTimidation/mind-reader'} imgsrc={mindRead} text={'An app that can read your mind!'} />
            <ProjectCard title={'Brewery Locator'} liveDemo={'https://mctimidation.github.io/mind-reader/'} repoLink={'https://github.com/McTimidation/beer-api'} imgsrc={brewAPI} text={'An app that will show you every brewery for any city'} />
        </div>
        </>
    ) }
}

export default PortfolioPage;
