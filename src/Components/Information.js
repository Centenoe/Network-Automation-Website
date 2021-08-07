import React from 'react';

class Information extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <import type="text" value = {this.props.testt}/>
            </div>
        )
    }
}

export default Information;
