import { useState, useEffect } from 'react';

function Content() {
    const [groupId, setGroupId] = useState(1);

    const chatGroups = [
        {
            id: 1,
            name: 'Nhóm 1',
        },
        {
            id: 2,
            name: 'Nhóm 2',
        },
        {
            id: 3,
            name: 'Nhóm 3',
        },
    ];

    const handleComment = (e) => console.log(e.detail);

    useEffect(() => {
        window.addEventListener(`group-${groupId}`, handleComment);

        return () => {
            window.removeEventListener(`group-${groupId}`, handleComment);
        };
    }, [groupId]);

    return (
        <div>
            {chatGroups.map((chatGroup) => (
                <button
                    key={chatGroup.id}
                    style={
                        groupId === chatGroup.id
                            ? {
                                  marginLeft: 10,
                                  backgroundColor: '#000',
                                  color: '#fff',
                              }
                            : {
                                  marginLeft: 10,
                              }
                    }
                    onClick={() => setGroupId(chatGroup.id)}
                >
                    {chatGroup.name}
                </button>
            ))}
        </div>
    );
}

export default Content;
