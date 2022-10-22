import { getByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
     }

    render() {
        return (
            <div>
                <span className={this.getClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        );
    }
    
    formatCount() {
        const { count } = this.state;
        return (count === 0) ? "Zero" : count;
    }

    getClasses() {
        let Classes = "badge m-2 badge-";
        Classes += (this.state.count === 0) ? "warning" : "primary";
        return Classes;
    }
}
 
export default Counter;