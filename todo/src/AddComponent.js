import  React,{Component} from 'react'
class AddComponent extends Component
{
    state={
        content:null
    }
    sub=(e)=>{
        e.preventDefault()
        this.props.addIt(this.state)
    }
    changer=(e)=>{

        this.setState({
            content :e.target.value
        })
    }
    render(){
        return(
            <div className="addc">
            <form onSubmit={this.sub}>
            <label htmlFor="autocomplete-input" >
                <b>Enter Your Todos </b>      
            </label>
            <input id="autocomplete-input" className="autocomplete" type="text" placeholder="Enter Your todos" onChange={this.changer}>
            </input>         
            <input type="submit"/>   
            </form>
            </div>
        )
    }
}
export default AddComponent