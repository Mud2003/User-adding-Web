import { useEffect, useState } from "react";
import './namelist.css';
import NameListItem from "./NameListItem";

function NameList() {

    const [loadData, setLoadData] = useState(new Date());

    const [nameList, setNameList] = useState(
        [
            {
                id: 1,
                name: {
                    first: "Jennie",
                    last: "Nichols"
                },
                location: {
                    city: "Billings"
                },
                email: "jennie.nichols@example.com",
                dob: {
                    date: "1992-03-08T15:13:16.688Z"
                },
                picture: {
                    medium: "https://randomuser.me/api/portraits/med/men/75.jpg"
                }
            }
        ]
    );

    useEffect(() => {
        fetch("https://randomuser.me/api")
            .then((response) => {
                return response.json();
            })
            .then(responseData => {
                setNameList((nameList) => [...nameList, responseData.results[0]]);
            })
    }, [loadData]);

    const nameListComponent = () => {
        if (nameList.length > 0) {
            return nameList.map((aName) => {
                return(
                    <NameListItem
                        key={aName.id}
                        name={`${aName.name.first} ${aName.name.last}`}
                        city={aName.location.city}
                        email={aName.email}
                        birthday={aName.dob.date}
                        avatar={aName.picture.medium}
                    />
                )
            })
        } else {
            return <li>Loading...</li>
        }
    }

    const addUser = () => {
        setLoadData(new Date());
    }

    return (
        <div className="p">
            <hr />
            <button className="btn" onClick={addUser}>Add user</button>
            <ul>
                {nameListComponent()}
            </ul>
        </div>
    )
}

export default NameList;