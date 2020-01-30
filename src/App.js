import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
    state = {
        data: ""
    }
    constructor(props) {
        super(props);
        this.setfunc = this.setfunc.bind(this)
    }
    async setfunc(e){
        e.preventDefault();
        axios.get('5000/').then((response) => {
         console.log(response.data.data);
         this.setState({data: response.data})
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.setfunc}>Click</button>
            </div>
        )
    }
}

export default App;
