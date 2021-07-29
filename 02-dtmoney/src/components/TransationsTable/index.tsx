import { Container } from "./styles";

export function TransationTable(){
  return (
    <Container >
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Websites</td>
            <td className='deposit'>R$3.000</td>
            <td>Trabalho</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Viagem</td>
            <td className='withdraw'>-R$300</td>
            <td>Lazer</td>
            <td>24/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>-R$1.000</td>
            <td>Casa</td>
            <td>29/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}