import React from 'react'
import { useLocation } from 'react-router-dom';
import EditRecord from './EditRecord';
import Subs from './Subs';
// import Records from './Records';

const EditRecordWithsubs = () => {
  const id= useLocation().pathname.split("/") 
 
  console.log({id});
  return (
    <div className='row'>
        <div className='col-lg-7'>
            <EditRecord id={id} />
        </div>
        <div className='col-lg-5'>
<Subs id={id}/>
        </div>
    </div>
  )
}
export default EditRecordWithsubs;