import React, { Component } from 'react'

class VideoInclude extends Component {
    constructor(props) {
        super(props)
        this.state= {
            search:''
        }
    }
     onChange = (e)=>{
        this.setState({search:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault()
        this.props.onSearchTermChange(this.state.search);
    }
    render() {
        return (
            <form className="side-search-bar row" onSubmit={this.onSubmit}>
                <input value={this.state.search} onChange={this.onChange} placeholder="Add videos in queue" className="col-8"/>
                <button className="col-4" type="submit">Add</button>
            </form>
        )
    }
}
export default VideoInclude;