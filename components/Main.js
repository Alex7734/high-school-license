import React from 'react';
import Size from './Size';
import Header from './Header';
import Pathfind from './Pathfind';

function repeat(){
    window.location.reload()
}

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 0
        }
    }

    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    render(){
        const {data} = this.state;
        console.log(data)
        let path;
        if (data>4 && data<31){
            path = <Pathfind cols={data}/>
        } else {
            path = <h1 style={{font:10}}>Introdu numarul de coloane</h1>
        }
        console.log(data)
        return(
            <div>
                <Header/>
                <Size parentCallback = {this.handleCallback}/>
                {path}
            </div>
        )
    }
}

export default Main;