import styles from './EditPost.module.css';

import {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditPost = () => {

  const {id} = useParams()

  const{document : post} = useFetchDocument('posts' ,id);
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  

  useEffect(() => {
    if(post){
      console.log('=== ' + post)
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)
      
      const textTags = post.tagsArray.join(", ")
      setTags(textTags)
    }
  },[post])
  
  const {user} = useAuthValue()
  const {updateDocument, response} = useUpdateDocument("posts")
  
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

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data)

    //redirect to homepage
    navigate("/dashboard")
  }

  

  return (
    <div className={styles.edit_post}>
      {post && (<><h2>Editar Post: {post && post.title}</h2>
      <p>Altere os dados do Post como desejar</p>
      <form onSubmit={handleSubmit}>
        <label>
            <span>Titulo do Post: {post.title}</span>
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
          <div>
            <p className={styles.preview_title}>Preview da imagem</p>
            <img className={styles.image_preview} src={post.image} alt={post.title}></img>
          </div>
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
        {!response.loading && <button type="submit" className="btn">Editar</button>}
        {response.loading && (<button className="btn" disabled>Aguarde...</button>)}
        {response.error && <p className="error">{response.error}</p>}
        {formError.error && <p className="error">{formError.error}</p>}

      </form></>)}
    </div>
  )
}

export default EditPost
