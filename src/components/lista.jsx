/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Grid, Column, AspectRatio, Button } from "carbon-components-react";
import "./style.css";

function ListComponent() {
  return class extends Component {
    render() {
      return (
        <>
          <Grid>
            <Column sm={2} md={2} lg={4}>
              <AspectRatio ratio="1x1">
                <h4>Bolsinha</h4>
                <img
                  className="photos"
                  src="https://imgcentauro-a.akamaihd.net/900x900/97366302A4/bolsa-adidas-organizer-logo-adulto-img.jpg"
                />
                <div sm={2} md={2} lg={4}>
                  <Button
                    kind="tertiary"
                    className="btn-site "
                    target="_blank"
                    href="https://www.centauro.com.br/bolsa-adidas-organizer-logo-adulto-973663.html#cor=02"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <h4>Livretos</h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos"
                  src="https://m.media-amazon.com/images/I/715afDdgKfL.jpg"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site"
                    target="_blank"
                    href="https://www.amazon.com.br/Box-Trilogia-Senhor-dos-An%C3%A9is/dp/8595086354/ref=sr_1_1?keywords=senhor+dos+aneis+box&qid=1667995908&qu=eyJxc2MiOiIyLjk0IiwicXNhIjoiMi4yOSIsInFzcCI6IjEuMzkifQ%3D%3D&sprefix=senho%2Caps%2C212&sr=8-1"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
            {/* <Column sm={2} md={2} lg={4}>
              <h4>Canequeta da vitoria</h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos-3"
                  src="https://m.media-amazon.com/images/I/61dmjd0-7SL._AC_SL1500_.jpg"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site-3"
                    target="_blank"
                    href="https://www.amazon.com.br/Caneca-Presidente-X%C3%ADcara-Presente-Personalizado/dp/B08ZLK5P7W/ref=sr_1_57?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ME593SPINEAP&keywords=caneca&qid=1668000475&qu=eyJxc2MiOiI4LjIxIiwicXNhIjoiOC4yMSIsInFzcCI6IjcuMzUifQ%3D%3D&sprefix=caneca%2Caps%2C208&sr=8-57"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column> */}
            <Column sm={2} md={2} lg={4}>
              <h4>Moletão - M </h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos"
                  src="https://t-static.dafiti.com.br/Qs17Ex-_HSYU0MYj_z4jlPqVfFI=/fit-in/430x623/static.dafiti.com.br/p/underun-moletom-blusa-de-frio-canguru-capuz-e-bolsos-cinza-under-2228-11067011-1-zoom.jpg"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site"
                    target="_blank"
                    href="https://www.dafiti.com.br/Moletom-Blusa-de-Frio-Canguru-Capuz-e-Bolsos-Cinza-Under-11076011.html"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <h4>Caneca</h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos"
                  src="https://http2.mlstatic.com/D_NQ_NP_2X_645511-MLB48875416519_012022-F.webp"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site"
                    target="_blank"
                    href="https://www.amazon.com.br/Caneca-meme-boneco-palito-minuto/dp/B09QNHZL7F/?_encoding=UTF8&pd_rd_w=quCaM&content-id=amzn1.sym.a81c0dc3-9abd-4321-8366-58a8580704e0&pf_rd_p=a81c0dc3-9abd-4321-8366-58a8580704e0&pf_rd_r=NZ7JYRQS8QP0XG53MSQZ&pd_rd_wg=3SNYJ&pd_rd_r=bc0705e7-4775-4d72-8ce2-6f225a402150&ref_=pd_gw_ci_mcx_mi"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <h4>Mini Bolsinha</h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos"
                  src="https://static.zattini.com.br/produtos/mini-bag-lateral-alkary-bolsa-crossbody/66/76E-0476-266/76E-0476-266_zoom1.jpg?ts=1666954701&"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site"
                    target="_blank"
                    href="https://zattini.com.br/mini-bag-lateral-alkary-bolsa-crossbody-grafite-76E-0476-266"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <h4>Bermuda - M </h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos"
                  src="https://static.zattini.com.br/produtos/bermuda-nike-nsw-club-jsy-masculina/12/HZM-2616-012/HZM-2616-012_zoom1.jpg?ts=1630601492&"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site"
                    target="_blank"
                    href="https://www.zattini.com.br/bermuda-nike-nsw-club-jsy-masculina-marinho-HZM-2616-012"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <h4>Bermuda - M </h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos"
                  src="https://static.zattini.com.br/produtos/shorts-adidas-must-haves-bos-logo-masculino/36/NQQ-4658-036/NQQ-4658-036_zoom1.jpg?ts=1646746235&"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site"
                    target="_blank"
                    href="https://www.zattini.com.br/shorts-adidas-must-haves-bos-logo-masculino-marinho+branco-NQQ-4658-036"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
           
            <Column sm={2} md={2} lg={4}>
              <h4>Bermudas - M </h4>
              <AspectRatio ratio="1x1">
                <img
                  className="photos"
                  style={{   
                    width:"10px!important",
                    height:"10px!important"}}
                  src="https://t-static.dafiti.com.br/6a5I6h_LFJm7wUjcp19Kx0U6IPc=/fit-in/430x623/static.dafiti.com.br/p/benellys-kit-2-bermudas-masculinas-moletinho-shorts-moletom-benellys-%E2%80%93-preto-chumbo-0254-5114289-1-zoom.jpg"
                />
                <div>
                  <Button
                    kind="tertiary"
                    className="btn-site"
                    target="_blank"
                    href="https://www.dafiti.com.br/Kit-2-Bermudas-Masculinas-Moletinho-Shorts-Moletom-Benellys-%E2%80%93-Preto-Chumbo-9824115.html"
                  >
                    Ir ao site
                  </Button>
                </div>
              </AspectRatio>
            </Column>
          </Grid>
        </>
      );
    }
  };
}

export default ListComponent();
