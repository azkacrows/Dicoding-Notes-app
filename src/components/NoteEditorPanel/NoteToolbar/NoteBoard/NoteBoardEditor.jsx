export default function NoteBoardEditor({ body }) {
    return (
        <div className="flex flex-col h-full fill-current">
            <textarea
                className="w-full h-full p-1 overflow-hidden overflow-y-auto border-none outline-none resize-none caret-white"
                placeholder="Write your note here..."
                value={body}
            ></textarea>
        </div>
    );
}
