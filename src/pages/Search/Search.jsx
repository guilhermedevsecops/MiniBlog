import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import PostDetails from '../../components/PostDetails';
import { Link} from 'react-router-dom'
import styles from './Search.module.css';
import CreatePost from '../CreatePost/CreatePost';

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)
    
    console.log(posts)
    console.log(search)
  
    return (


    <div className= {styles.search_container}>
      <h2>Search</h2>
      
       <div>
        {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts a partir da sua busca</p>
              <div className={styles.noposts}>
                <Link to ="/" className="btn btn-dark">Voltar</Link>
              </div>
            </div>
        )}
        {posts && posts.map((post) =>(
            <PostDetails key={post.id} post={post} />

        ))}
        {posts && posts.length > 0 && (
            <Link to ="/" className="btn btn-dark">Voltar</Link>
        )}
              

      </div>
    </div>
  )
}

export default Search
