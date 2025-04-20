import { useState } from 'react'
import styles from './PostComments.module.css'

const PostComments = () => {
    
  const [comentario, setComentario] = useState('')
  const [comentarios, setComentarios] = useState<string[]>([])

  const adicionarComentario = () => {
    if (comentario.trim() === '') return
    setComentarios([...comentarios, comentario])
    setComentario('')
  }

  return (
    <div className={styles['post-comments']}>
      {comentarios.map((c, index) => (
        <div key={index} data-testid="comment-item" className={styles['post-comment']}>
          <p className={styles['post-comment-content']}>{c}</p>
        </div>
      ))}

      <div className={styles['post-comments-form']}>
        <textarea
          data-testid="comment-textarea"
          className={styles['post-comments-form-textarea']}
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button
          data-testid="submit-button"
          className={styles['post-comments-form-button']}
          onClick={adicionarComentario}
        >
          Comentar
        </button>
      </div>
    </div>
  )
}

export default PostComments
