import React from "react";
import Button from './buttons';
import './ButtonBoard.css'; 

class ButtonBoard extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            buttons: Array(16).fill(null),
            redIsNext: true,
        };
    }

    //handling the onclick of each button and tracking which user is in play
    handleClick(i){
        const buttons = this.state.buttons.slice();
        //making sure game ends when there is a winner
        if(trackWinner(buttons)){
            return;
        }
        buttons[i] = this.state.redIsNext ? 'Red' : 'Yellow';
        this.setState(
            {
                buttons: buttons,
                redIsNext: !this.state.redIsNext,
            }
        );   
    }

    //rendering buttons
    renderButton(i){
        return (<Button
        disable={this.state.buttons[i]}
        value={this.state.buttons[i]} 
        onClick = {() => this.handleClick(i)}/>);
    }

    //redering grid like buttons
    render(){
        const winner = trackWinner(this.state.buttons);
        const gameOver = isGameOver(this.state.buttons);
        let status;

        //checking to see if there is a winner and if so it will print which player is the winner
        if(winner){
            status = "Winner: " + winner;
        }
        //if there is no winner and all buttons are clickled, it will print out "Game Over!"
        else if(gameOver){
            status = "Game Over!";
        }
        //if there is no winner or the game is not over it will print out which player is next to play
        else {
            status = "Next Player: " + (this.state.redIsNext?'Red':'Yellow');
        }

        return(
            <div>
                <div className="Status">
                    <h1>{status}</h1>
                </div>
                <div className = "ButtonRow">
                    {this.renderButton(0)}
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                </div>
                <div className = "ButtonRow">
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton(7)}
                </div>
                <div className = "ButtonRow">
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton(10)}
                    {this.renderButton(11)}
                </div>
                <div className = "ButtonRow">
                    {this.renderButton(12)}
                    {this.renderButton(13)}
                    {this.renderButton(14)}
                    {this.renderButton(15)}
                </div>
            </div>
        )
    }
}

//function to track if game is over
function isGameOver(buttons){
    var count = 0;
    //for loop to go through the array of buttons and checking if the button has either the value of red or yellow and if so
    //the count will increase by 1
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i] === 'Red' || buttons[i] === 'Yellow'){
            count += 1;
        }
    }

    //if count is 16 this means that all buttons were clicked and will return true but if not then it will return false.
    if(count === 16){
        return true;
    }
    return false;
    
}

//function to track the winner
function trackWinner(buttons){
    //storing the combinations of win vertically and horizontally.
    const win = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
    ];

    //for loop to go through the array of win and checking if buttons at a, b, c, d have the same value and same type. 
    //If true it will return button[a] since all buttons at a, b, c, d have the same time so it doesn't matter which button I return
    //by returning the button[a] it will return a value of red or yellow
    for (let i = 0; i < win.length; i++){
        const [a,b,c,d] = win[i];
        if(buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c] && buttons[a] === buttons[d]){
            return buttons[a];
        }
    }
    //returning null if the above expression doesn't result to true
    return null;
}

export default ButtonBoard;