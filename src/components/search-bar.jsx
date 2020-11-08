import React from "react";


const Search = (props) => {
    const [search, setSearch] = React.useState("");
    const handleChange = async e => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(search);
    }

    return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Search<input type="text" value={search} onChange={handleChange} placeholder="search for your next fix" /></label>
                    <button className="primary" onClick={handleSubmit}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search;