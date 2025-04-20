import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o botão "Comentar"', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  it('Deve permitir adicionar um comentário', async () => {
    render(<PostComment />)

    const input = screen.getByPlaceholderText(/digite seu comentário/i)
    const button = screen.getByRole('button', { name: /comentar/i })

    await userEvent.type(input, 'Comentário de teste')
    await userEvent.click(button)

    expect(screen.getByText('Comentário de teste')).toBeInTheDocument()
  })
})
