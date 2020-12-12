function PRS() {


    let canvasCSS = {
        background: "#eee",
        display: "block",
        margin: "0 auto"
    }

    return(
        <>
            <h1>This is the PRS component</h1>
            <canvas id="myCanvas" style={ canvasCSS } width={480} height={320}></canvas>
            <p id="play-button">
                <button onclick="playGame()">Play PRS</button>
            </p>




        </>
    )
};

export default PRS;