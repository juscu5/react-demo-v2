import React, { useEffect, useState } from "react";
import './PageOneComponent.scss';
import PageListComponent from "../page-two/PageListComponent";


const listNgMgaPogiData = [
    {
        pictureUrl : "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/217931653_4056661604456160_8163986898150298532_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=9v0VWtmmIfQAX_5fl1Q&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT8B2RUGqC5zzcrgAV9AU-ZQEBSv5-OZGWEN8W80TAMqhg&oe=61E09487",
        fullname : "Jm Obias"
    },
    {
        pictureUrl : "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/260017053_10216023943031410_1510242512606452170_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uaoTRBr35WoAX-XF3qQ&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT_upk8iDwpIVu6yg9skdXcNcpkFUVS7JTAn2DWUfIlPaA&oe=61E21F1D",
        fullname : "Darrel Vincent Francis Ho"
    },
    {
        pictureUrl : "https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.6435-1/c0.67.320.320a/p320x320/89551320_3315361765160247_901968622790901760_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=VRN9TPgUCHsAX-tAdjy&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8nLELqLez-mX3mDGJKdOTD0PAG51q3fpfFN239LurRzg&oe=6202A502",
        fullname : "Junel S Cunanan"
    },
    {
        pictureUrl : "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-1/s320x320/263472286_5376382202376747_482969205725364069_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=IBIRgICKRQoAX9ZMof9&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT9XmqNbBuX-4JLfHaOt5ZKay64RZsTvKfFFDrz5LGvoFg&oe=61E1AFEF",
        fullname : "Raymark Moncada"
    }, 
    {
        pictureUrl : "data:image/jpeg;base64,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",
        fullname : "Manny Pacquiao"
    }, 
    {
        pictureUrl : "https://tnt.abante.com.ph/wp-content/uploads/2022/01/mang-boy.jpg",
        fullname : "Mang Boy"
    }
];


const PageTwoComponent = () => {

    const [pogiState, setPogiState] = useState([]);
    const [inputState, setInputState] = useState({
        input1:"",
        input2:""
    });

    useEffect(() => {
        setPogiState(listNgMgaPogiData); 
    },[]);

    const inputOnChangeOne = (event) => {  
        setInputState({ ...inputState ,input1 : event.target.value});
    }
    
    const inputOnChangeTwo = (event) => {  
        setInputState({ ...inputState ,input2 : event.target.value});
    }

    return (<React.Fragment>
        <div className="PageTwoComponent">
            <h3 className="is-title is-3">Page 2 of the page</h3>
            <hr />
            <input className="input" placeholder="input1" onChange={inputOnChangeOne} value={inputState.input1}/>
            <input className="input" placeholder="input2" onChange={inputOnChangeTwo} value={inputState.input2}/>
            <PageListComponent pogiDataState={pogiState}/>
        </div>
    </React.Fragment>);
}

export default PageTwoComponent;