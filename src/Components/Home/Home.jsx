import React, { useContext } from 'react'
import { Store } from '../Store/Mainstore'
import Clothseaction from '../Clothseaction/Clothseaction'
import Returnstatus from '../Returnstatus/Returnstatus'
import { useState } from 'react'
import Topmonthsellers from '../Topmonthsellers/Topmonthsellers'
import Women from '../Women/Women'
import Man from '../Man/Man'
import Kids from '../Kids/Kids'
import Openbox from '../Openbox/Openbox'
import Discounttimer from '../Discounttimer/Discounttimer'
export default function Home() {
  let [openclose ,  setopenclose] = useState()
    let [category, setCategory] = useState('Women');
    const targetDate = '2024-12-31T23:59:59';  
    const imageUrl = 'https://via.placeholder.com/300';  
  
    function findcatagary(name) {
        setCategory(name);
      }
        let [storedetail ,  setstoredetail] = useState({})


      function Opendetail(image , name ,type ,price ){
        setstoredetail({
          image : image,
          name : name,
          type : type,
          price : price
        })
        setopenclose(true)
      }
      function Closepopup(){
        setopenclose(false)
      }
  return (
    <>
     <Clothseaction/>
     <Returnstatus/>
      <Topmonthsellers category={category} findcatagary={findcatagary} />
        <Openbox  storedetail ={storedetail} Closepopup={Closepopup} openclose={openclose}/>
      {category === 'Women' && <Women  Opendetail ={Opendetail}/> }
        {category === 'Men' && <Man  Opendetail ={Opendetail}/>}
        {category === 'Kid' && <Kids  Opendetail ={Opendetail}/>}
        <Discounttimer targetDate={targetDate} imageUrl={imageUrl} />
    </>
  )
}
