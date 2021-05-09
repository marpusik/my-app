import './Search.css';


function Search(props) {
    return (
        <input className='search' type="text" placeholder={props.placeholder}/>
    );
}

export default Search;