
function SearchBar (props){

    return(
        <form role="search">
            <fieldset role="group">
                <input type="search" placeholder="search by name" aria-label="search by name"></input>
                <button aria-label="submit"> 
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i> 
                </button>
            </fieldset>
        </form>
    )
}

export default SearchBar;