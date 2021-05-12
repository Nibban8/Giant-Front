import React from "react";
const image='https://cdn.discordapp.com/attachments/692469681851727962/839301286415695912/qq.png';
const style ={
    background: {
     position:'absolute',
     height: '100%',
     width: '100%',
     backgroundSize:'cover',
     backgroundPosition:'center',
     background:`url(${image})`,
     zIndex:-1,
   },
 };
 
 function BackgroundImage() {
    return <div style={style.background} />;
  }
  
  export default BackgroundImage;
  