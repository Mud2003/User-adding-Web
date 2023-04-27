import moment from "moment/moment";
import './namelistitem.css'

function NameListItem(props) {
    return (
        <div className="itm">
            <div className="img">
                <img src={props.avatar}/>
            </div>
            <div className="pset">
                <p className="name">Name:- {props.name}</p>
                <p className="city">City:- {props.city}</p>
                <p className="email">Email:- {props.email}</p>
                <p className="bday">BirthDay:- {moment(props.birthday).format("MMM Do YYYY")}</p>
            </div>
        </div>
    )
}

export default NameListItem;