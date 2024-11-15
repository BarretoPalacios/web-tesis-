
import Layout from '../Componentes/Layout'
import Footer from '../secciones/Footer'
import Preguntas from '../secciones/Preguntas'
import Productos from '../secciones/Productos'
import Slider from '../secciones/slider'

function Inicio() {
  return (
    <Layout>
        <Slider />
        <Productos />
        <Preguntas />
    </Layout>

  )
}

export default Inicio

