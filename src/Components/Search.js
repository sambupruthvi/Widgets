import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Programming');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500)

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);
    
    useEffect(() => {
        const wikiSearch = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action : 'query',
                    list : 'search',
                    origin: '*',
                    format : 'json',
                    srsearch : debouncedSearchTerm
                }
            })
            setResults(data.query.search);
        }
        wikiSearch();
    }, [debouncedSearchTerm]);

    const renderedResults = results.map(result => {
        return (
            <div className = 'item' key = {result.pageid}>
                <div className = 'right floated content'>
                    <a href = {`https://en.wikipedia.org?curid=${result.pageid}`} className = 'ui button'>GO</a>
                </div>
                <div className = 'content' >
                    <div className = 'header' >
                        {result.title}
                    </div>
                    <div className = 'content'>
                        <span dangerouslySetInnerHTML = {{ __html: result.snippet}}></span>
                        {/* {result.snippet} */}
                    </div>
                </div>
            </div>
        )
        
    })
    
    return (
        <div className = 'ui form'>
            <div className = 'field'>
                <label>Enter Search Term: </label>
                <input type = 'text' value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)} placeholder= 'Search Term' />
            </div>
            <div className = 'ui celled list'>
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;