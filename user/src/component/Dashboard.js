// export default Dashboard;
import React,{useState,useEffect} from 'react';
import Searchbox from './Searchbox';
import axios from "axios"

const Dashboard = () => {

// useEffect ,dependency array should be empty
    //axios
    // store the data in state and than we will map it inside our react component
    let [data, setData] = useState([]);
    let [inputValue, setinputValue] = useState('')
    useEffect(() => {


        async function  fetchData() {
            let res = await axios.get('/bookstock');

            console.log(res.data);
            setData(res.data)
             // arryay of objects
        }

        fetchData()

    },[])
    console.log(data);
    let filterData = data.filter((ele) => ele.bookAuthor.toLowerCase() === inputValue.toLowerCase() ||ele.bookName.toLowerCase() === inputValue.toLowerCase());
    //inside map have either return or have ()
    //{data.length && data.map((ele) => (<div></div>))}
    return (
        <div>

            <Searchbox setinputValue={setinputValue} />

{filterData.length ? filterData.map((ele) => (
                <div>
                       <ul> <b>Book Name</b> {ele.bookName} <b>Book Author </b>  {ele.bookAuthor}  </ul>

                </div>
            ))
                :
                data.length && data.map((ele) => (
                    <div>
                        <ul> <b>Book Name</b> {ele.bookName} <b>Book Author </b>  {ele.bookAuthor}  </ul>

                        </div>

            ))
            }
        </div >
    );
}

export default Dashboard;

