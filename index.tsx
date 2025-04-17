// src/components/PostComments/index.tsx
import { useState } from 'react'

const PostComment = () => {
  const [comentarios, setComentarios] = useState<string[]>([])
  const [novoComentario, setNovoComentario] = useState('')

  const adicionarComentario = () => {
    if (novoComentario.trim() !== '') {
      setComentarios([...comentarios, novoComentario])
      setNovoComentario('')
    }
  }

  return (
    <div>
      <input
        data-testid="campo-comentario"
        value={novoComentario}
        onChange={(e) => setNovoComentario(e.target.value)}
        placeholder="Digite um comentário"
      />
      <button
        data-testid="botao-enviar"
        onClick={adicionarComentario}
      >
        Enviar
      </button>

      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index} data-testid="comentario">
            {comentario}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostComment
