
function DisplayList({user}){
    
    return (
        <li>
            {user.name} - {user.age}
        </li>
    );
}

export default DisplayList;