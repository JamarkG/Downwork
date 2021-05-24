import './SearchBar.css'
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { getSearchedClasses } from '../../store/classes';


function SearchBar() {
    const dispatch = useDispatch();
    const [searchQ, setSearchQ] = useState('');
    let history = useHistory();

    const changeSearchQ = (e) => setSearchQ(e.target.value)

    const handleSubmit = () => {
        // e.preventDefault();

        // const searchQuery = {
        //   searchQ
        // };

        dispatch(getSearchedClasses(searchQ));

        history.push(`/classes/${searchQ}`);
        //   hideForm();


        setSearchQ('');
    };


    return (
        <div className='SearchBarDiv'>
            <form onSubmit={handleSubmit}>
                <input
                    className='SearchBar'
                    type="text"
                    value={searchQ}
                    onChange={changeSearchQ}
                    id="header-search"
                    placeholder="Search"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )

};

export default SearchBar;
