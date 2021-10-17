import React from 'react';
import './Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.parentCallback(this.state.value)
        if (this.state.value == 0){
          alert('Ati selectat algoritmul A*!')
        } else{
          alert('Ati selectat algoritmul Dijkstra!')
        }
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit} style={{margin:5}}>
            <label>
              Astar(0) sau Dijkstra(1): <input type="number" min="0" max="1" style={{margin:5}} value={this.state.value} onChange={this.handleChange} />
            </label>  <input type="submit" value="Submit" className="button-2" /> 
          </form>
        );
      }
}

export default Choice;