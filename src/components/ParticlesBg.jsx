
import Particles from "react-tsparticles";

function ParticlesBg() {

  return (

    <Particles

      options={{

        fullScreen:{
          enable:true,
          zIndex:-1
        },

        background:{
          color:"transparent"
        },

        particles:{

          number:{
            value:120
          },

          color:{
            value:[
              "#8b5cf6",
              "#06b6d4",
              "#ec4899"
            ]
          },

          shape:{
            type:"circle"
          },

          opacity:{
            value:0.7
          },

          size:{
            value:{min:2,max:5}
          },

          links:{
            enable:true,

            distance:140,

            color:"#8b5cf6",

            opacity:0.35,

            width:1
          },

          move:{
            enable:true,

            speed:1.5,

            direction:"none",

            random:false,

            straight:false,

            outModes:{
              default:"bounce"
            }
          }

        }

      }}

    />

  );
}

export default ParticlesBg;

