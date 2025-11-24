import { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CardWidget from "./components/sharedComponents/CardWidget";




export default class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [
        {
          title: "demo",
          counter: '01',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo eaque alias doloremque fugiat doloribus adipisci eveniet numquam facere? Iusto aliquam aspernatur quos illum officiis assumenda laborum soluta similique beatae!"
        },

        {
          title: "travel",
          counter: '02',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo eaque alias doloremque fugiat doloribus adipisci eveniet numquam facere? Iusto aliquam aspernatur quos illum officiis assumenda laborum soluta similique beatae!"
        },

        {
          title: "demo",
          counter: '03',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo eaque alias doloremque fugiat doloribus adipisci eveniet numquam facere? Iusto aliquam aspernatur quos illum officiis assumenda laborum soluta similique beatae!"
        },

      ]
    }
  }



  render() {
    return <>

      <Navbar />

      {this.state.data&&this.state.data.map((dataElament, index) => <CardWidget key={index} {...dataElament} />)}


      <Footer />

    </>
  }

}