import { useParams ,useLocation } from "react-router-dom";

function Product(){
    const {id , section} = useParams();
    const location = useLocation();
    const {name,category} = location.state;
    return(
        <div>
            <h2>{id}</h2>
            <h3>{section}</h3>
            <h4>{name}</h4>
            <h5>{category}</h5>
        </div>
    );
}

export default Product;