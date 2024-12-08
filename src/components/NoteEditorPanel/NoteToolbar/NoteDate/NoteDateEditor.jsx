export default function NoteDateEditor() {
    return (
        <div className="flex flex-row items-center mt-1 fill-current">
            <box-icon name="calendar"></box-icon>
            <p className="ml-4">Date</p>
            <span className="ml-[3.7rem] underline underline-offset-2 text-white">
                {new Date().toLocaleDateString('id-ID')}
            </span>
        </div>
    );
}
