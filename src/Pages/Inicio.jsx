import React from 'react'
import Layout from '../Componentes/Layout'
import SeccionMultiImage from '../Componentes/secciones/SeccionMultiImage'

function Inicio() {
  return (
    <Layout>
        <SeccionMultiImage
          isFull={false}
          direccion={"derecha"}
          hrefImage={"/public/imagen1.png"}
          texto={
            "Un abrigo, gabán, tapado, sobretodo o paltò es una prenda de vestir que termina por debajo de la cadera, se abrocha al frente con botones y a veces también con cinturón. Se lleva además de las otras prendas de vestir para asegurarse de las inclemencias del tiempo"
          }
          titulo={"Abrigos"}
          btnValue={"Verr Mas"}
          linkBtn={"/tienda"}
        />
        <SeccionMultiImage
          isFull={false}
          direccion={"izquierda"}
          hrefImage={"/public/imagen1.png"}
          texto={
            "Un abrigo, gabán, tapado, sobretodo o paltò es una prenda de vestir que termina por debajo de la cadera, se abrocha al frente con botones y a veces también con cinturón. Se lleva además de las otras prendas de vestir para asegurarse de las inclemencias del tiempo"
          }
          titulo={"Polos"}
          btnValue={"Verr Mas"}
          linkBtn={"/categorias/polos"}
        />
        <SeccionMultiImage
          isFull
          direccion={"derecha"}
          hrefImage={"https://hips.hearstapps.com/hmg-prod/images/nude-project-1672746912.jpg"}
          texto={
            "Según el Diccionario de peruanismos de la Academia Peruana de la Lengua (2016), este sustantivo femenino denomina una “prenda ceñida al cuerpo con cuello alto y mangas largas que cubre hasta la cintura o cadera”. El origen del término está en la marca comercial de origen chileno Caffarena, la cual popularizó la prenda."
          }
          titulo={"Cafarenas y Camisas"}
          btnValue={"Ir "}
          linkBtn={"/"}
        />
         <SeccionMultiImage
          isFull
          direccion={"izquierda"}
          hrefImage={"https://hips.hearstapps.com/hmg-prod/images/nude-project-1672746912.jpg"}
          texto={
            "Según el Diccionario de peruanismos de la Academia Peruana de la Lengua (2016), este sustantivo femenino denomina una “prenda ceñida al cuerpo con cuello alto y mangas largas que cubre hasta la cintura o cadera”. El origen del término está en la marca comercial de origen chileno Caffarena, la cual popularizó la prenda."
          }
          titulo={"Cafarenas y Camisas"}
          btnValue={"Ir "}
          linkBtn={"/"}
        />
    </Layout>

  )
}

export default Inicio