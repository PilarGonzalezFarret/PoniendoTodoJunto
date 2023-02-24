import {Component}from "react";


class PersonalCard extends Component {
    constructor (props){
        super (props)
        this.state = {
            age : this.props.age
        }
    }

    cambiandoEstado = () => {
        console.log("cambiandoEstado");
        this.setState(
            {
                age: this.state.age + 1
            }
        )
    }

    render () {
        const lastName = this.props.lastName
        const firstName = this.props.firstName
        //const age = this.props.age
        const hairColor = this.props.hairColor

        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p> age {this.state.age}</p>
                <p> {hairColor}</p>
                <button onClick={this.cambiandoEstado}> Birthday for { lastName }{ firstName } </button>
            </div>
        )
    }
}




export default PersonalCard