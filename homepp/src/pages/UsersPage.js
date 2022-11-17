import React, {useState} from 'react';
import UserUsers from "../components/UserUsers/UserUsers";
import UsersUsers from "../components/UsersUsers/UsersUsers";
import ActivityUsers from "../components/ActivityUsers/ActivityUsers";

const UsersPage = () => {

    let user = {
        name: 'Ivan',
        surname: 'Smirnov',
        sex: 'male',
        age: 42,
        role: 'admin',
        email: 'smirnov@demo.com',
        permissions: {
            lights: 1,
            sound: 2,
            climate: 4,
            tv: 3,
            security: 1,
        },
        actions: [
            {
                time: '14:38:15',
                action: 'Left house',
            },
            {
                time: '14:12:48',
                action: 'Turn off Bedroom lights',
            },
            {
                time: '12:02:11',
                action: 'Locked Garage',
            },
        ]
    }


    // 1 - user, 2 - users, 3 - activity
    let [components, setComponents] = useState(1)

    return (
        <div className="pt-40px px-60px">
            <div className="bg-main_gray py-11px px-58px rounded-25px mb-33px">
                <button onClick={() => setComponents(1)} className={`text-light_gray text-18px mr-60px ${components === 1 ? 'opacity-100' : 'opacity-50'}`}>{user.surname + ' ' + user.name[0] + '.'}</button>
                <button onClick={() => setComponents(2)} className={`text-light_gray text-18px mr-60px ${components === 2 ? 'opacity-100' : 'opacity-50'}`}>Users</button>
                <button onClick={() => setComponents(3)} className={`text-light_gray text-18px ${components === 3 ? 'opacity-100' : 'opacity-50'}`}>Activity</button>
            </div>
            {
                {
                    1: <UserUsers user={user}/>,
                    2: <UsersUsers />,
                    3: <ActivityUsers />
                }[components]
            }
        </div>
    );
};

export default UsersPage;