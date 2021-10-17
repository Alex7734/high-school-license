import React from 'react';
import Size from './Size';
import Header from './Header';
import Pathfind from './Pathfind';
import Choice from './Choice';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 0,
            choice: 0
        }
    }

    handleCallbackCols = (childData) =>{ 
        this.setState({data: childData})
    }

    handleCallbackChoice = (childData) =>{
        this.setState({choice: childData})
    }

    render(){
        const {data} = this.state;
        let path;
        if (data>4 && data<31){
            path = <Pathfind cols={data} choice={this.state.choice}/>
        } else {
            path = undefined
        }
        return(
            <div>
                <Header/>
                <Choice parentCallback={this.handleCallbackChoice}/>
                <Size parentCallback = {this.handleCallbackCols}/>
                {path}
            </div>
        )
    }
}

export default Main;