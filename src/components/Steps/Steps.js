import React, { Component } from 'react'
import { Icon, Step } from 'semantic-ui-react'

export default class Steps extends Component {
    render() {
        return (
          <Step.Group widths={3}>
          <Step active id='stepQuote'>
            <Icon name='computer' />
            <Step.Content>
              <Step.Title>Cotizar</Step.Title>
            </Step.Content>
          </Step>
          <Step id='stepPDF'>
            <Icon name='file pdf' />
            <Step.Content>
              <Step.Title>Resumen de pedido</Step.Title>
            </Step.Content>
          </Step>
          <Step id='stepPay'>
            <Icon name='info' />
            <Step.Content>
              <Step.Title>Opciones de pago</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        )
    }
}
