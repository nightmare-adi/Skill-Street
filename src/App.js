import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import Contact from './Components/Contact';
import Events from './Components/Events';
import Home from './Components/Home';
import Team from './Components/Team';
import Winners from './Components/Winners';
import {
  Menu
} from 'semantic-ui-react'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: "home"
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
    const { activeItem } = this.state

  	    return (
  	        <div>
                <Menu>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    >Home</Menu.Item>

                    <Menu.Item
                        name='events'
                        active={activeItem === 'events'}
                        onClick={this.handleItemClick}
                    >Events</Menu.Item>

                    <Menu.Item
                        name='winners'
                        active={activeItem === 'winners'}
                        onClick={this.handleItemClick}
                    >Wall Of Fame</Menu.Item>

                    <Menu.Item
                        name='team'
                        active={activeItem === 'team'}
                        onClick={this.handleItemClick}
                    >The Team</Menu.Item>

                    <Menu.Item
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    >Contact Us</Menu.Item>
                </Menu>

                <div>
                    {activeItem === 'home' && <Home />}
                    {activeItem === 'events' && <Events />}
                    {activeItem === 'winners' && <Winners />}
                    {activeItem === 'team' && <Team />}
                    {activeItem === 'contact' && <Contact />}
                </div>
            </div>
  	    );
  	}
}
