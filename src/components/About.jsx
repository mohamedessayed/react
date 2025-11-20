import React, { Component } from 'react'
import AboutImageFile from './../assets/images/eflyer.jpg'

export default class About extends Component {
  render() {
    return <>
    <section className='container'>

        <div className="row align-items-center">

            <div className="col-md-6">
                <div>
                    <h2 className='text-capitalize'>about our website</h2>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos minima atque eaque corrupti illo, iste dolorum laboriosam debitis excepturi delectus vero. Ea autem libero dolorum blanditiis adipisci repellat neque?</p>
                    <button className='btn btn-primary text-capitalize'>read more</button>`
                </div>
            </div>


            <div className="col-md-6">
                <div>
                    <img src={AboutImageFile} className='w-100 rounded-3' alt="text iamge" />
                </div>
            </div>

        </div>

    </section>
    </>
  }
}
