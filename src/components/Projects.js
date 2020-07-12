import React, { Component } from 'react';
import Brewquery from "../components/images/gif-lash.jpg";
import CodeQuiz from "../components/images/foodTruck.jpg";
import CodeRefactor from "../components/images/project-1.jpg";
import Egl from "../components/images/shiftrescue.jpg";
import PasswordGenerator from "../components/images/password-generator.jpg";
import WorkDayScheduler from "../components/images/Work-Scheduler.jpg";
import WeatherDashboard from "../components/images/weather.jpg";



export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${Brewquery})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/TheFarrier/Gif-Lash">Gif-Lash</a></h3>                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${CodeQuiz})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://everett93.github.io/foodTruckLocate/">FoodTruck</a></h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{ backgroundImage: `url(${CodeRefactor})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="">Code Refactor</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{ backgroundImage: `url(${Egl})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="">Shift Rescue</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${PasswordGenerator})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="">Password Generator</a></h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${WeatherDashboard})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="">Weather Dashboard</a></h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${WorkDayScheduler})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://everett93.github.io/workSchedule/">Work Day Scheduler</a></h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                   
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="" className="btn btn-primary btn-lg btn-load-more">See More <i className="icon-reload" /></a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}