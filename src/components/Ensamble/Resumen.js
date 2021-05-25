import React from 'react';

export default function Resumen({ ensamble }) {
  return (
    <div>
      <div>{ensamble.cpu}</div>
      <div>{ensamble.mb}</div>
      <div>{ensamble.ram}</div>
      <div>{ensamble.gpu}</div>
      <div>{ensamble.hdd}</div>
      <div>{ensamble.ssd}</div>
    </div>
  );
}
