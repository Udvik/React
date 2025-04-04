import products from '../data/products'
import {useNavigate} from "react-router-dom"

function Home(){
    const navigate = useNavigate();
    const handleClick = (id,product,section) => {
        navigate(`/products/${id}/${section}`,{
            state:{
                name:product.name,
                category:product.category,
            }
        }
            
        )
    }
    return (
        <div>
            <button onClick={()=>{navigate('/about')}}>About</button>
            <button onClick={()=>{navigate('/dashboard')}}>Dashboard</button>
            {products.map(product => {
                return (
                    <div key={product.id}>
                    <h2>{product.name}</h2>
                    <h3>{product.category}</h3>
                    <button onClick={() => handleClick(product.id, product, "details")}>Details</button>
                    <button onClick={() => handleClick(product.id, product, "reviews")}>Reviews</button>
                    <button onClick={() => handleClick(product.id, product, "specs")}>Specs</button>
                </div>
                )
            })}
        </div>
    )
}

export default Home;