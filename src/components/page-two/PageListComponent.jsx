import React from "react";
import './PageListComponent.scss';

const PageListComponent = (props) => {
    return(<React.Fragment>
        <div className="PageListComponent">
            <h4 className="input">Listahan ng mga Pogi</h4>
            <ul className="listNgMgaPogi"> 
                {
                    props?.pogiDataState?.map((rw) => <li>
                        <img src={rw?.pictureUrl} alt="Photo" />
                        <label htmlFor="">{rw?.fullname}</label>
                    </li>)
                }
            </ul>
        </div>
    </React.Fragment>)
}

export default PageListComponent;