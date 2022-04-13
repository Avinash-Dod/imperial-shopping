import Data from '../regUser.json'
import { useState } from "react";
const SearchBar = () => {

    const [search, setSearch] = useState('')

    return (
        <>
            <div>
                <form action="#">
                    <input type="text" placeholder="What do yo u need?" onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit" class="site-btn"><i class="fa fa-search" aria-hidden="true"></i> </button>
                </form>
                {
                    Data.filter((post) => {
                        if (search === '') {
                            return post;
                        } else if (post.username.toLowerCase().includes(search.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                       <div class="dropdown" key={index}>
                        <span><i class="fa fa-angle-down" aria-hidden="true"></i> </span>
                        <div class="dropdown-content">
                        <ul>
                                <li>{post.username}</li>
                                <li>{post.email}</li>
                                <li>{post.phone}</li>
                                
                            </ul>
                        </div>
                      </div>
                      

                    ))
                }
            </div>
        </>
    )



}
export default SearchBar