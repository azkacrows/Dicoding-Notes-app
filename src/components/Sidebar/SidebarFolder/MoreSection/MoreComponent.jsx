import MoreButton from './MoreButton';

export default function MoreComponent({ groups }) {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mb-2 text-primary-content">
                <p>More</p>
            </div>
            <div className="lg:max-2xl:h-[7.5rem] h-[4.8rem] overflow-y-auto">
                <MoreButton title={groups[1].groupName} icon="star" />
                <MoreButton title={groups[2].groupName} icon="box" />
                <MoreButton title={groups[3].groupName} icon="trash" />
            </div>
        </div>
    );
}
