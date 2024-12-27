import { forwardRef } from 'react';

const SearchButton = forwardRef(({ onClick }, ref) => (
    <button
        onClick={onClick}
        ref={ref}
        className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30"
        type="button"
    >
        <box-icon name="search"></box-icon>
    </button>
));

export default SearchButton;
