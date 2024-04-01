import styles from './CreatePost.module.css';

import {useState, useEffect} from "react";
import { useNavigate  } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocuments';


const CreatePost = () => {


  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const {insertDocument, response} = useInsertDocument("posts")
  const {user} = useAuthValue()
  const navigate = useNavigate()




  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormError("")
    
    //validate image URL
    try{
      new URL(image)
    }catch(error){
      setFormError("A imagem precisa ser uma URL")
    }

    //criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    //checar todos os valores

    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos!")
    }

    if(formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect to homepage
    navigate("/")
  }

  

  return (
    <div className={styles.create_post}>
      <h2>Create Post</h2>
      <p>Escreva e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
            <span>Titulo:</span>
          <input 
              type="text"
              name="title"
              required
              placeholder="Escreva o titulo do seu post..." 
              onChange={(e) => setTitle(e.target.value)} 
              value={title} />
          </label>
          <label>
            <span>Url da imagem:</span>
              <input 
                type="text"
                name="image"
                required 
                placeholder="insira a imagem que representa seu post..." 
                onChange={(e) => setImage(e.target.value)} 
                value={image} />
          </label>
          <label>
            <span>Conteudo:</span>
            <textarea 
              name="body"
              required 
              placeholder="Digite o que gostaria de compartilhar ..." 
              onChange={(e) => setBody(e.target.value)} 
              value={body} />
          </label>
          <label>
            <span>Tags:</span>
          <input 
              type="text"
              name="tags"
              required 
              placeholder="insira as tags, separadas por virgula..." 
              onChange={(e) => setTags(e.target.value)} 
              value={tags} />
          </label>
        {!response.loading && <button type="submit" className="btn">Postar</button>}
        {response.loading && (<button className="btn" disabled>Aguarde...</button>)}
        {response.error && <p className="error">{response.error}</p>}
        {formError.error && <p className="error">{formError.error}</p>}

      </form>
    </div>
  )
}

export default CreatePost;
