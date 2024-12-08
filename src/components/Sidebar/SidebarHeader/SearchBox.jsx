export default function SearchBox({ onChange }) {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };
    return (
        <input
            className="w-full h-8 max-w-xs input input-bordered"
            placeholder="Type Something..."
            onChange={handleInputChange}
            type="text"
        />
    );
}
