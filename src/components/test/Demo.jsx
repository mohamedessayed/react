import { Component } from "react";


export default class Demo extends Component {

    constructor(){
        super()

        this.state={
            user:"Mohamed"
        }
    }

    render(){
        return <>

        <h2>Hello, {this.state.user}</h2>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic enim accusamus nam consequatur. Voluptas, error commodi vero ipsam beatae ut fuga, quos, nemo suscipit laboriosam maiores culpa est animi possimus.</p>
        
        </>
    }
}