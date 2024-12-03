/* search bar that tracks a user's text input and sends it back up to the parent */
function SearchBar (props){

    function onChangeHandler(e){
        props.onChange(e.target.value);
    }

    return(
        <form role="search">
            <input 
                type="search" 
                value={props.search} 
                placeholder="search by contact name" 
                aria-label="search by contact name"
                onChange={onChangeHandler}>
            </input>
                
        </form>
    )
}

export default SearchBar;