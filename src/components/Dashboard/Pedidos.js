import React, { useState, useEffect } from 'react';
import { List, Segment, Grid } from 'semantic-ui-react';
import { db } from '../../firebase';

import './styles.css';

export default function Pedidos() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const querySnapshot = await db.collection('ensambles').get();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setOrders(docs);
  };

  useEffect(() => {
    getOrders();
    //console.log(orders);
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <Segment padded>
          <h5>ID :{order.id}</h5>

          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <List>
                  <List.Item>
                    <List.Header>Cliente</List.Header>
                    {order.shippingInfo.name}
                  </List.Item>
                  <List.Item>
                    <List.Header>Correo</List.Header>
                    {order.customerDetails.email}
                  </List.Item>
                  <List.Item>
                    <List.Header>Total</List.Header>${order.amountTotal / 100}
                  </List.Item>
                </List>
              </Grid.Column>
              <List>
                <List.Item>
                  <List.Header>Ciudad</List.Header>
                  {order.shippingInfo.address.city}
                </List.Item>
                <List.Item>
                  <List.Header>Direccion</List.Header>
                  {order.shippingInfo.address.line1}
                </List.Item>
                <List.Item>
                  <List.Header>Codigo postal</List.Header>
                  {order.shippingInfo.address.postal_code}
                </List.Item>
              </List>
            </Grid.Row>
          </Grid>
        </Segment>
      ))}
    </div>
  );
}
