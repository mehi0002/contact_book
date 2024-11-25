
function SearchBar (props){

    function onChangeHandler(e){
        props.onChange(e.target.value);
    }

    return(
        <form role="search">
            <input 
                type="search" 
                value={props.search} 
                placeholder="search by name" 
                aria-label="search by name"
                onChange={onChangeHandler}>
            </input>
                
        </form>
    )
}

export default SearchBar;