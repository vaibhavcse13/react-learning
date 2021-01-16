import React from 'react';

class SearchBar extends React.Component {
   
    /***
     * Making the element controlled 
     * 
     * Controlled Elements : React will have control over it. 
     * 
     * 
     * Uncontroleed Elements: Not easy to know the current value of the element. 
     */
    state = { term : ''}

    /***
     * On submit event over the form 
     */
    onFormSubmit = (event) =>  {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
         <div className="ui segment">
        
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                           value={this.state.term} 
                           onChange={(event) =>  this.setState({term: event.target.value})}  />
                </div>
               
            </form>
        </div>);
    }
}

export default SearchBar