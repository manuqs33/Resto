import opiniones from '../assets/opiniones.webp'
import { ReviewForm } from '../components/ReviewForm'

export function OpinionsPage() {

  return (
    <div className='OpinionsPage'>
      <img
        src={opiniones}
        alt="Full width"
        className="is-fullwidth"
      />
      <section className="section">
        <div className="container is-max-desktop content">
          <h1>Danos tu opinión</h1>
          <p>¿Qué te pareció?</p>
          <ReviewForm />
        </div>
      </section>
    </div>
  )
}