import React from 'react';
const style ={
  background: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    opacity: '0.5',
    background:'black',
    }
};

function ComposedColorBackground(props) {
  return <div style={style.background} />;
}

export default ComposedColorBackground;