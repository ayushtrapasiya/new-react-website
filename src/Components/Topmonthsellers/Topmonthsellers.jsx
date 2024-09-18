import './Topmonthsellers.css'; 
export default function TopmonthSellers({ category,  findcatagary}) {

  return (
    <>
      <h1 className='text-center mt-5'>Top month Sellers</h1>
      <ul>
        <li onClick={() => findcatagary("Women")} className={category === "Women" && "underline"}>
          Women
        </li>
        <li onClick={() => findcatagary("Men")} className={category === "Men" && "underline"}>
          men
        </li>
        <li onClick={() => findcatagary("Kid")} className={category === "Kid" && "underline"}>
          kid
        </li>
      </ul>


    </>
  )
}
