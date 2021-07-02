import React, { Component } from 'react';
import SkillStreet from '.././Images/SkillStreet.png';

export default class About extends Component {

    render() {

  	    return (
  	        <div className="home">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img
                                class="img-fluid rounded mb-4 mb-lg-0"
                                src={SkillStreet}
                                alt="Skill Street"
                            />
                        </div>

                        <div class="col-lg-5">
                            <h1 class="font-weight-light">About Us</h1>
                            <p>
                                The concept of Skill Street is designed by a group of people,
                                from different spheres of life, being experts in their industries.
                                The purpose is to help people spend some quality time in constructive
                                activities by developing their skills, involving learning and competing
                                with their counterparts from all over the world. Platform motivating a
                                teach and learn concept.
                            </p>
                        </div>
                    </div>
                    <div class="row align-items-center my-5">
                        <h1 class="font-weight-light">Downloads</h1>
                    </div>
                </div>
            </div>
  	    );
  	}
}
