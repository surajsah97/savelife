import React from 'react'
import { Route,Routes,useLocation} from 'react-router-dom';
import Drawers from '../../component/Drawers';
import Navbar from '../../component/Navbar';
import Editdataform03 from '../records/Editdataform03';
import Editdataform04 from '../records/Editdataform04';
import Editdataform05 from '../records/Editdataform05';
import EditForm01 from '../records/EditForm01';
import EditForm02 from '../records/EditForm02';
import EditForm03 from '../records/EditForm03';
import EditForm04 from '../records/EditForm04';
import EditForm05 from '../records/EditForm05';
// import EditRecord from '../records/EditRecord';
import EditRecordWithsubs from '../records/EditRecordWithsubs';
import NewRecord from '../records/NewRecord';
import Records from '../records/Records';
const Dashboard = () => {
  let location = useLocation().pathname.split("/")
  console.log({location});
  return (
<>
<div className='grid_container'>
      <header className='col-lg-12 col-md-12 col-sm-12' >
      <a class="logo" href="https://savelifefoundation.org"><img src="https://savelifefoundation.org/wp-content/themes/slf/images/slf-logo.svg" className="pull-left" width="140"/></a>
      </header>
      
      <main className='row'>
        <div className='col-lg-2 col-md-2 col-sm-2' style={{border:"1px whitesmoke solid",height:"100vh"}}>
          <Drawers/>
        </div>
        <div className='col-lg-10 col-md-10 col-sm-10' style={{height:"100vh"}}>
          <div>
            <h2>jhfdjhs</h2>
          </div>
          <div className='loc'>{location.slice(1,location.length).join(" / ")}</div>
          <Routes>
  {/* <Route path='/' element={<Login/>}/>
  <Route path='/Register' element={<Register/>}/> */}
  <Route path="Dashboard/edit-records/:id" element={<EditRecordWithsubs/>}/>
  <Route path='Dashboard' exact element={<Records/>}/>
  <Route path='Dashboard/cases' exact element={<Records/>}/>
  <Route path='Dashboard/new-records' element={<NewRecord/>}/>
  <Route path="Dashboard/editform01/:id" element={<EditForm01/>}/>
  <Route path="Dashboard/editform02/:id" element={<EditForm02/>}/>
  <Route path="Dashboard/editform03/:id" element={<EditForm03/>}/>
  <Route path="Dashboard/editform04/:id" element={<EditForm04/>}/>
  <Route path="Dashboard/editform05/:id" element={<EditForm05/>}/>
  <Route path="Dashboard/edit-records/edit-data/:id/:id" element={<Editdataform03/>}/>
  <Route path="Dashboard/edit-records-4/edit-data/:id/:id" element={<Editdataform04/>}/>
  <Route path="Dashboard/edit-records-5/edit-data/:id/:id" element={<Editdataform05/>}/>
  
  </Routes>
        </div>



      </main>
      

        
    </div>

    
</>
  )
}

export default Dashboard
