import React, { useState } from "react";
import YouTube from "react-youtube";
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionItem, Tag, Button,Modal } from "carbon-components-react";

export default function HomeComponent() {
  const [count, setCount] = useState(0);
  const [once, setOnce] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const setvalor = (index) => {
    setOnce([once].concat(index)); //
    if (!once[index]) {
      let newValue = count + 1;
      setCount(newValue);
    }
  };

  const values = [
    {
      title: "Click aqui para ver a minha lista",
      message: "Você quer saber qual é a minha lista? ",
      giphy: "https://giphy.com/embed/sTLjIdoFBaVMs",
    },
    {
      title: "Agora sim é a minha lista",
      message: " Mas, você tem certeza? ",
      giphy: "https://giphy.com/embed/3oFzmerJ9kykSR92jm",
    },
    {
      title: "Sem duvida nenhuma, AGORA é a minha lista",
      message: "WAZZZUUUUPPPP",
      giphy: "https://giphy.com/embed/nVqEn8X4skSs0",
    },
    {
      title: "Minha lista real e oficial com toda a certeza",
      message: "Você tem que ter um pouco de paciencia",
      giphy: "https://giphy.com/embed/xl5QdxfNonh3q",
    },
    {
      title: "Agora com toda a certeza do mundo sera a minha lista ",
      message: "🐯",
    },
  ];

  const tags = [
    {
      color: "blue",
      message: "Poxa, nao foi dessa vez",
    },
    {
      color: "magenta",
      message: "Abra a proxima",
    },
  ];

  const videoOptions = {
    height: 400,
    width: 350,
    playerVars: {
      autoplay: 1,
      controls: 0,
      autohide: 1,
      playsInline: 1,
      wmode: "opaque",
      loop: 1,
    },
  };

  const onPlayerReady = async (event) => {
    console.log("dentro do ready ", event);
    event.target.playVideo();
  };

  return (
    <>
      <Accordion>
        {values.map((value, index) => {
          return (
            <>
              {(count === index || count > index) && (
                <AccordionItem
                  title={value.title}
                  disabled={count !== index || count > index}
                  key={value.title + index}
                  onClick={() => (once ? setvalor(index) : "")}
                >
                  <p>
                    {value.message}
                    {value.giphy && (
                      <div>
                        <iframe
                          src={value.giphy}
                          width="200"
                          height="200"
                          frameBorder="0"
                          class="giphy-embed"
                        />
                      </div>
                    )}
                    <div>
                      {tags.map((tag) => {
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
                        );
                      })}
                    </div>
                  </p>
                  {index == values.length - 1 && (
                    <div>
                      <YouTube
                        videoId="K-3HUtikJ7A"
                        loading="lazy"
                        opts={videoOptions}
                        onReady={onPlayerReady}
                        onEnd={onPlayerReady}
                        onPause={onPlayerReady}
                        />

                      <Button kind="tertiary" onClick={()=> setOpenModal(true)}>
                        Ir para a lista 😔
                      </Button>

                     { openModal && <Modal
                          open
                          onRequestSubmit={() => navigate('/lista')}
                          onSecondarySubmit={() => setOpenModal(false)}
                          modalHeading="Voce tem certeza que quer ir pra lista?"
                          modalLabel="Fique mais um pouco!"
                          primaryButtonText="Ir para a porcaria da lista"
                          secondaryButtonText="Quero ficar ouvindo a Ines"
                        />}
                    </div>

                  )}
                </AccordionItem>
              )}
            </>
          );
        })}
      </Accordion>
    </>
  );
}
