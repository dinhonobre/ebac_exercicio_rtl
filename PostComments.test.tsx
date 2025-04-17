import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from './index'  // Aponte para o componente correto

describe('Teste para o componente PostComment', () => {
  it('Deve adicionar dois comentários na tela', () => {
    render(<PostComment />)

    // Obtenha os elementos pelo data-testid
    const input = screen.getByTestId('campo-comentario')
    const botao = screen.getByTestId('botao-enviar')

    // Adicione o primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(botao)

    // Adicione o segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } })
    fireEvent.click(botao)

    // Verifique se os dois comentários aparecem na tela
    const comentarios = screen.getAllByTestId('comentario')

    // Espera-se que existam 2 comentários
    expect(comentarios).toHaveLength(2)
    expect(comentarios[0]).toHaveTextContent('Primeiro comentário')
    expect(comentarios[1]).toHaveTextContent('Segundo comentário')
  })
})
