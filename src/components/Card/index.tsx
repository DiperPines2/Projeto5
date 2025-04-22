import ImagemMao from '../../Imgs/1724018715139.jpg'
import { Bio, CardContainer, Imagem } from './styles'

const Card = () => {
  return (
    <>
      <CardContainer>
        <Imagem src={ImagemMao} alt="" />
        <Bio>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          iure ducimus suscipit dolorem corrupti et fugit nostrum repellat fuga?
          Odio delectus voluptatibus iste? Natus ut assumenda vitae, expedita
          esse atque.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Deleniti iure ducimus suscipit dolorem corrupti et fugit nostrum
          repellat fuga? Odio delectus voluptatibus iste? Natus ut assumenda
          vitae, expedita esse atque.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Deleniti iure ducimus suscipit dolorem corrupti et
          fugit nostrum repellat fuga? Odio delectus voluptatibus iste? Natus ut
          assumenda vitae, expedita esse atque.
        </Bio>
      </CardContainer>
    </>
  )
}

export default Card
