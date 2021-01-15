import React from 'react';

import ReactDom from  'react-dom';
import SessonDisply from './SeasonDisplay'
import Loader from './Loader';


class App extends React.Component { 
    
    /* Initiliaze the state when the component is created 
       Called every time when the component is created. It pass the props the 
       automatically. 
    **/
    state = {lat : null , errorMessage: ''};
   
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude }), 
            err =>  this.setState({errorMessage: err.message})
            
        );
    }


    componentDidUpdate() {
        console.log('My component was just updated - it rerendered ')
    }
    // To define the render() funciton is mandatory 
    render() {
        
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error  : {this.state.errorMessage} </div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return  <SessonDisply lat={this.state.lat} />
        }
        return <div> <Loader message={`Please allow me to read the location`}/></div>
        
    }
}
ReactDom.render( <App /> , document.querySelector('#root'));