export default function NoteBoardEditor() {
    return (
        <div className="flex flex-col h-full fill-current">
            <textarea
                className="w-full h-full p-1 overflow-hidden overflow-y-auto bg-white border-none outline-none resize-none caret-white"
                placeholder="Write your note here..."
            ></textarea>
        </div>
    );
}
