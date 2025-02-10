import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         textValue:'',
         skillValue:''
      }
    }
    changeValue=(e)=>{
        this.setState({
            textValue:e.target.value
        })
    }
    changeSkillValue=(e)=>{
        this.setState({
            skillValue:e.target.value
        })
       
    }
    submitted=(e)=>{
        e.preventDefault()

        alert("Form is submitted" + ${this.state.textValue} ${this.state.skillValue})
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
            <label>Username:</label>
            <input type='text' value={this.state.textValue} onChange={this.changeValue}/>
            <label>Skill</label>
            <select onChange={this.changeSkillValue} value={this.state.skillValue}>
                <option>React</option>
                <option>Angular</option>
                <option>Springboot</option>

            </select>
            <button type='submit'>Submit</button>
        
        </form>
      </div>
    )
  }
}

export default Form