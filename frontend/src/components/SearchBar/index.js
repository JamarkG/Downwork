import './SearchBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { getSearchedClasses } from '../../store/classes';


function SearchBar() {
    const dispatch = useDispatch();
    const [searchQ, setSearchQ] = useState('');
    let history = useHistory();

    const userId = useSelector((state) => state?.session?.user?.id);

    const changeSearchQ = (e) => setSearchQ(e.target.value)

    const handleSubmit = () => {
        // e.preventDefault();

        // const searchQuery = {
        //   searchQ
        // };

        if (!userId){
            history.push('/login')
            return
        }

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
                    placeholder="Search classes"
                />
                {/* <button type="submit" id='searchSubmit'>Go</button> */}
            </form>
        </div>
    )

};

export default SearchBar;
