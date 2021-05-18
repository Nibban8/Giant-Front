import React, { Component } from 'react';
import { Parts } from '.././Parts/Parts';
import { Header, Grid, Button, Icon } from 'semantic-ui-react';

export default class Quote extends Component {
  render() {
    return (
      <div>
        <div id='pasos-compra'>
          <div class='ui steps'>
            <div class=' completed step'>
              <i class='cart icon'></i>
              <div class='content'>
                <div class='title'>Comprando</div>
                <div class='description'>Elige tus componentes</div>
              </div>
            </div>
            <div class='active step'>
              <i class='thumbs up outline icon'></i>
              <div class='content'>
                <div class='title'>Confirma</div>
                <div class='description'>Confirma tu orden</div>
              </div>
            </div>
            <div class='disabled step'>
              <i class='yen sign icon'></i>
              <div class='content'>
                <div class='title'>Listo para pagar</div>
              </div>
            </div>
          </div>
        </div>
        <div id='placeholder'>
          <div class='ui placeholder segment'>
            <div class='ui icon header'>
              <i class='pdf file outline icon'></i>
              el pedeefe va aki
            </div>
            <div class='ui primary button'>Add Document</div>
          </div>
        </div>
      </div>
    );
  }
}
