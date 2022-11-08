import React, { useState } from "react";
import YouTube from 'react-youtube';
import {
  Accordion,
  AccordionItem,
  Tag,
  
} from "carbon-components-react";

export default function HomeComponent() {
  const [count, setCount] = useState(0);
  const [once, setOnce] = useState([]); 
  const [playerOnce, setPlayerOnce] = useState ()

  const setvalor = (index) => {
    setOnce([once].concat(index)) //
    if (!once[index]) {
      let newValue = count + 1;
      setCount(newValue);
  }
  };

  const values = [
    {
      title: "Click aqui para ver a minha lista",
      message: "Você quer saber qual é a minha lista? ",
      giphy: "https://giphy.com/embed/sTLjIdoFBaVMs"
    },
    {
      title: "Agora sim é a minha lista",
      message: " Mas, você tem certeza? ",
      giphy: "https://giphy.com/embed/3oFzmerJ9kykSR92jm"
    },
    {
      title: "Sem duvida nenhuma, AGORA é a minha lista",
      message: "WAZZZUUUUPPPP",
      giphy: "https://giphy.com/embed/nVqEn8X4skSs0"
    },
    {
      title: "Minha lista real e oficial com toda a certeza",
      message: "Você tem que ter um pouco de paciencia",
      giphy: "https://giphy.com/embed/xl5QdxfNonh3q"
    },
  ];

  const tags = [
    {
      color: "blue",
      message : "Poxa, nao foi dessa vez"
    },
    {
      color: "magenta",
      message : "Abra a proxima"
    }
  ]

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 0
    }
  };

  const onPlayerReady = (event) => {
    console.log("entrei")
    console.log(event)
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  return (
    <>
     <YouTube videoId="K-3HUtikJ7A" opts={videoOptions} onReady={onPlayerReady}  onEnd={onPlayerReady}  onPause={onPlayerReady} />
     
      <Accordion>
        {/* {count} */}
        {values.map((value, index) => {
          return (
            <>
              {(count === index || count > index) && (
                <AccordionItem
                  title={value.title}
                  disabled={count !== index || count > index}
                  key={value.title + index}
                  onClick={() => once ? setvalor(index) : "" }
                >
                  <p>
                    {value.message}
                    <div>
                      <iframe src={value.giphy} width="200" height="200" frameBorder="0" class="giphy-embed" />
                    </div>
                    <div>
                    {  tags.map((tag)=>{
                        return (
                          <>
                             <Tag
                                className="some-class"
                                type={tag.color}
                                size="sm"
                                title="Clear Filter"
                              >
                                {tag.message}
                              </Tag>
                          </>
                        )
                      })}
                    </div>
                  </p>
                </AccordionItem>
              )}
            </>
          );
        })}
      </Accordion>
    </>
  );
}
