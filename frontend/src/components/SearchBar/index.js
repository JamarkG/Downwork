import './SearchBar.css'
// const db = require("../db/models");
// const router = express.Router();
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;



function SearchBar() {

    return (
        <div className='SearchBarDiv'>
            <form action="/search" method="get">
                <input
                    className='SearchBar'
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="s"
                />
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    )

};

export default SearchBar;
