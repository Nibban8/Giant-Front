import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu,Image,Header } from 'semantic-ui-react';
import './styles.css';
import Logo from './../../imgs/Logo.jpg'
const tabs = ['Inicio', 'Cotizar', 'Contacto'];

export default class MenuExampleColoredInverted extends Component {
  state = { activeA: tabs[0] };

  handleAClick = (e, { name }) => this.setState({ activeA: name });

  render() {
    const { activeA } = this.state;

    return (
      <div>
        <Menu style={{paddingTop:'5vh', paddingBottom:'5vh'}} secondary inverted  widths={4} size='large'>
          <Menu.Item>
            <Image as={Link} to={'/inicio'} src={Logo} size='tiny'/><Header inverted>GIANT ENSAMBLES</Header>
          </Menu.Item>
          <Menu.Item
            as={Link}
            position="right"
            key={"Inicio"}
            name={"Inicio"}
            active={activeA === "Inicio"}
            color={'teal'}
            onClick={this.handleAClick}
            to={"/inicio"}
           />
           <Menu.Item
            as={Link}
            key={"Cotizar"}
            name={"Cotizar"}
            active={activeA === "Cotizar"}
            color={'teal'}
            onClick={this.handleAClick}
            to={"/cotizar"}
          />
            <Menu.Item
              as={Link}
              key={"Contacto"}
              name={"Contacto"}
              active={activeA === "Contacto"}
              color={'teal'}
              onClick={this.handleAClick}
              to={"/contacto"}
            />
        </Menu>
      </div>
    );
  }
}
