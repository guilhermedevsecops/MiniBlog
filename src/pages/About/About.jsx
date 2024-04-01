import styles from "./About.module.css"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>O projeto tem o intuito de demonstrar o aprendizado em: ReactJS Front-End | Firebase Back-End</p>
            
          <Link to="/post/create" className="btn">Criar Post</Link>
    </div>
  )
}

export default About
