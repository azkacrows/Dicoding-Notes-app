export default function NoteDateEditor({ date }) {
    const cardFullDate = new Date(date).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className="flex flex-row items-center mt-1 fill-current">
            <box-icon name="calendar"></box-icon>
            <p className="ml-4">Date</p>
            <span className="ml-[3.7rem] underline underline-offset-4 text-white">
                {cardFullDate}
            </span>
        </div>
    );
}
