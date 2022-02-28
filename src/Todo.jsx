import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'
import "./Todo.css";

export default function Todo() {

    const [text, settext] = useState("");
    const [list, setlist] = useState([]);
    const [buttontoggle, setbuttontoggle] = useState("true");
    const [id, setid] = useState(0);
    const addtodo = () => {
        if (text === "") {
            alert("enter something");
            return;
        }
        setlist((olddata) => {
            return [...list, text];
        });
        settext("");
        console.log(list)
    };

    const deltelist = (event) => {
        //const key_value=event.target.key;
        const todo_id = parseInt(event.target.id);

        setlist((prev) => {

            return (prev.filter((array, index) => { return index != todo_id; }));
        });

    }

    const update_data_info = (event) => {
        let id =parseInt(event.target.id);
        setid(id);

console.log(id)
        let data_value = list[id];
        console.log(data_value)
        settext(data_value);
        setbuttontoggle("false");

    }
    const Final_Update = (event) => {
    let Final_data=  event.target.value;
    console.log(Final_data)
    setlist((prev)=>{
prev[id]=text;
return [...prev];
    });
    settext("");
setbuttontoggle("true");
    }
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-12 mt-2" style={{ textAlign: "center" }}>
                        <h1>Welcome in Todo List</h1>

                    </div>
                </div>
                <hr />
                <div className="row my-5 FirstRow ">
                    <div className="row  ">

                        <div className="col-12 my-4">

                            <h1 className='heading1'>To Do List</h1>
                        </div>
                    </div>
                    <div className="row  my-4 ">

                        <div className="col-10" style={{ textAlign: "center" }}>

                            <input type="email" className="form-control" id="data" placeholder="Write Your Word" onChange={(e) => settext(e.target.value)} value={text} />

                        </div>
                        <div className="col-2" style={{ textAlign: "left" }}>
                            {buttontoggle === "true" ? <button type="button" className="btn btn-outline-primary button1" onClick={addtodo}>Add</button> : <button type="button" className="btn btn-outline-success button1" onClick={Final_Update}>Update</button>}
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-12 '>
                            <ol>
                                {list.map((ele, key1) => {
                                    return (<>
                                        <li key={key1} > <button type="button" className="btn btn-danger button1 " id={key1} onClick={deltelist}   ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash delete" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>  Delete</button>    <button className="btn btn-success button1" id={key1} onClick={update_data_info} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                        </svg> Upadate</button>   {ele} </li>
                                        <hr />
                                    </>);
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

