import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Team from './Components/Team';
import Winners from './Components/Winners';
import {
  Menu,
  Button,
  Icon,
  TransitionablePortal,
  Segment,
  Header
} from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: "home",
            phonePopup: false,
            emailPopup: false
        }
    }

    handlePhoneOpen = () => this.setState({ phonePopup: true });
    handleEmailOpen = () => this.setState({ phonePopup: true });

    handlePhoneClose = () => this.setState({ emailPopup: false });
    handleEmailClose = () => this.setState({ emailPopup: false });

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
    const { activeItem } = this.state

  	    return (
  	        <div>
  	            <div className="navigation">
                    <nav class="navbar navbar-expand navbar-dark bg-dark">
                        <div class="container">
                            <div class="navbar-brand">
                                Skill Street
                            </div>
                            <div>
                                <Menu secondary inverted>
                                    <Menu.Item
                                        name='home'
                                        active={activeItem === 'home'}
                                        onClick={this.handleItemClick}
                                    >Home</Menu.Item>

                                    <Menu.Item
                                        name='about'
                                        active={activeItem === 'about'}
                                        onClick={this.handleItemClick}
                                    >About</Menu.Item>

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
                                </Menu>
                            </div>
                        </div>
                    </nav>
                </div>


                <div>
                    {activeItem === 'home' && <Home />}
                    {activeItem === 'about' && <About />}
                    {activeItem === 'winners' && <Winners />}
                    {activeItem === 'team' && <Team />}
                </div>

                <div className="footer">
                    <footer class="py-4 bg-dark fixed-bottom">
                        <div class="container">
                            <div class="text-center text-white pb-4">
                                Contact Us
                            </div>
                            <div class="m-0 text-center text-white">
                                <Button color='facebook'
                                        onClick={() => window.open('https://www.facebook.com/theskillstreetofficial', '_blank')}>
                                    <Icon name='facebook' /> Facebook
                                </Button>

                                <Button color='instagram'
                                        onClick={() => window.open('https://www.instagram.com/skill_street', '_blank')}>
                                    <Icon name='instagram' /> Instagram
                                </Button>

                                <TransitionablePortal
                                    closeOnTriggerClick
                                    onOpen={this.handlePhoneOpen}
                                    onClose={this.handlePhoneClose}
                                    openOnTriggerClick
                                    trigger={
                                        <Button color='green'>
                                            <Icon name='whatsapp' /> Phone
                                        </Button>
                                    }
                                >
                                    <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
                                        <Header>Our Contact Information</Header>
                                        <p>Amita Garg - 9356200139</p>
                                        <p>Aditya Garg - 9023300022</p>
                                    </Segment>
                                </TransitionablePortal>

                                <TransitionablePortal
                                    closeOnTriggerClick
                                    onOpen={this.handleEmailOpen}
                                    onClose={this.handleEmailClose}
                                    openOnTriggerClick
                                    trigger={
                                        <Button color='red'>
                                            <Icon name='mail outline' /> Email
                                        </Button>
                                    }
                                >
                                    <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
                                        <Header>Our Email Id</Header>
                                        <p>theskillstreetofficial@gmail.com</p>
                                    </Segment>
                                </TransitionablePortal>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
  	    );
  	}
}
