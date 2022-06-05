import {useEffect,useState} from 'react';
import style from './search.module.css'
function Search(props){
    const[searchText,setSearchText]=useState("");
 const searchhandle=(e)=>{
   setSearchText(e.target.value);
 }
 useEffect(()=>{
  props.onSearchhandle(searchText);
 },[searchText])


 return <div className={style.inputdivStyle}>
     <input type="search" placeholder='search any country....' value={searchText}
     onChange={searchhandle}/>
 </div>
}
export default Search;