import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import './styles.css';

const tabs = ['Home', 'Ver', 'Agregar', 'Docs'];

export default class MenuExampleColoredInverted extends Component {
  state = { activeA: tabs[0] };

  handleAClick = (e, { name }) => this.setState({ activeA: name });

  render() {
    const { activeA } = this.state;

    return (
      <div>
        <Menu inverted>
          {tabs.map((c) => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              color={'teal'}
              onClick={this.handleAClick}
            />
          ))}
        </Menu>
      </div>
    );
  }
}
