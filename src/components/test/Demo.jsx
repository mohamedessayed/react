import { Component } from "react";
import Swal from "sweetalert2";
import $ from 'jquery';



export default class Demo extends Component {

    constructor() {
        super()

        this.state = {
            user: "Mohamed",
            counter: 0,
            userData: null
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(apiData => {
                this.setState({ userData: apiData })
            })

    }

    componentDidUpdate() {
        

    }

    componentWillUnmount() {
        console.log('Component removed')
    }

    updateCounter = () => {
        const newCounter = this.state.counter + 1;

        

        this.setState({ counter: newCounter })

        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Counter is updated"
        });

    }

    render() {
        return <>
            <h3>{this.state.counter}</h3>

            <button className="btn btn-primary" onClick={this.updateCounter}>Click me</button>

            <h2 className="hover:text-red-950 transition-all text-green-700 w-50/100 dark:text-green-200">Hello, {this.state.user}</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic enim accusamus nam consequatur. Voluptas, error commodi vero ipsam beatae ut fuga, quos, nemo suscipit laboriosam maiores culpa est animi possimus.</p>


            {this.state.userData && this.state.userData.map((user, index) => <p key={index}>{user.name} - {user.email} - {user.address.city} </p>)}

        </>
    }
}