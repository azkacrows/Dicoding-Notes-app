import MoreButton from './MoreButton';

export default function MoreComponent({ selectedGroupId, handleSelectGroupClick, groups }) {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mb-2 text-primary-content">
                <p>More</p>
            </div>
            <div className="lg:max-2xl:h-[7.5rem] h-[4.8rem] overflow-y-auto">
                {groups[1] && (
                    <MoreButton
                        handleSelectGroupClick={handleSelectGroupClick}
                        groupId={groups[1].groupId} // Pass the groupId
                        title={groups[1].groupName}
                        icon="star"
                        activeMore={selectedGroupId === groups[1].groupId} // Apply activeMore condition
                    />
                )}
                {groups[2] && (
                    <MoreButton
                        handleSelectGroupClick={handleSelectGroupClick}
                        groupId={groups[2].groupId} // Pass the groupId
                        title={groups[2].groupName}
                        icon="box"
                        activeMore={selectedGroupId === groups[2].groupId} // Apply activeMore condition
                    />
                )}
                {groups[3] && (
                    <MoreButton
                        handleSelectGroupClick={handleSelectGroupClick}
                        groupId={groups[3].groupId} // Pass the groupId
                        title={groups[3].groupName}
                        icon="trash"
                        activeMore={selectedGroupId === groups[3].groupId} // Apply activeMore condition
                    />
                )}
            </div>
        </div>
    );
}
