import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/GamesListContainer.css'

function GamesListContainer() {


    return (
        <>
            <div className = 'games-list-container'>
            <Header />
            <div > 
            <ul id="games-list">

                <li className="games-list-item" id="game-1">
                    <img className="games-list-image" src="/snakey.png" alt="snake logo"></img>
                    <div >
                        <a href="http://localhost:3000/games/snake" className="game-list-overlay">Play Snake</a>
                    </div>
                </li>


                <li className="games-list-item" id="game-2">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div >
                        <a href="http://localhost:3000/games/PRS" className="game-list-overlay">Play PRS</a>
                    </div>
                </li>
                <li className="games-list-item" id="game-3">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="game-list-overlay">
                        <div className="text">Play Breakout</div>
                    </div>
                </li>
                <li className="games-list-item" id="game-4">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="game-list-overlay">
                        <div className="text">Play PRS</div>
                    </div>
                </li>
                <li className="games-list-item" id="game-5">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="game-list-overlay">
                        <div className="text">Play Frogger</div>
                    </div>
                </li>
                <li className="games-list-item" id="game-6">
                    <img className="games-list-image" src="https://placebear.com/300/300" alt="bear boi"></img>
                    <div className="game-list-overlay">
                        <div className="text">Play Clicker</div>
                    </div>
                </li>

            </ul>
            </div>
            <Footer />
            </div>
        </>
    );
}


export default GamesListContainer;