import { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/About";



export default class App extends Component {

  constructor(){
    super()
  }

  render() {
    return <>

    <Navbar />

    <About />

    <Footer />

    </>
  }

}