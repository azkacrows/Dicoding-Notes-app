export default function SearchButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30"
            type="button"
        >
            <box-icon name="search"></box-icon>
        </button>
    );
}
