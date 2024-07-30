import React, { ChangeEvent } from 'react';
import { MdSearch } from 'react-icons/md';

interface SearchProps {
    handleSearchNote: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearchNote }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleSearchNote(event.target.value);
    };

    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input
                onChange={handleChange}
                type='text'
                placeholder='Search...'
            />
        </div>
    );
};

export default Search;
