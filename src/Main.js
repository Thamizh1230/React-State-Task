import React, {useState} from 'react'

const Main = () => {
     
    const [mobiles, setValue] = useState([{
      id:"001",
      name :"Oneplus11",
      price : 56999,
      isPurchased: "true"},
      {
      id:"002",
      name : "ViviY100",
      price : 24999,
      isPurchased: "false"},
      {
      id:"003",
      name : "Redmi10",
      price : 56999,
      isPurchased : "true"},
      {
      id:"004",
      name : "Iphone13",
      price : 62990,
      isPurchased : "false"},
      {
      id:"005",
      name : "Nokia",
      price : 12000,
      isPurchased : "true"},
      {
      id:"006",
      name : "PocoM4",
      price : 13999,
      isPurchased : "true"}])

      const lowTohigh =()=>{
       const sortlowprice= [...mobiles].sort((a,b)=>a.price-b.price);
       setValue(sortlowprice);
        // console.log(sortValue);
      }
      const highTolow =()=>{
        const sortlowprice=[...mobiles].sort((a,b)=>a.price-b.price);
        setValue(sortlowprice.reverse());
        // console.log(sortlowprice);
      }
      const filtereddata=()=>{
          const filteritem=mobiles.filter((ele)=>ele.isPurchased === "true");
          setValue(filteritem);}
   
      // const sortNamebyasc =()=>{
      //   const sortbyasc=[...mobiles].sort();
      //   setValue(sortbyasc) }

      // const sortNamebydes =()=>{
      //   const sortbydes=[...mobiles].sort();
      //   setValue(sortbydes.reverse());}

     const sortNamebyasc=()=>{
      const ascitem= [...mobiles].sort((item1,item2)=>{
        if (item1.name <item2.name){
          return -1;
        } 

        return 0;
      });
      setValue(ascitem);
    console.log(ascitem);
      
    }

      const sortNamebydes =()=>{
        const desitem = [...mobiles].sort((item1, item2)=>{

          if(item1.name > item2.name){
            return -1;
            
          }
     
          return 0;
         });
        setValue(desitem);
        console.log(desitem)
      }
        
        
  return (
    <div> 
        <h1>Mobile Details</h1> {mobiles.map((data,i)=><ul key={i}><li>{data.id}{" "}{data.name}{" "}{data.price}{" "}{data.isPurchased}{" "}</li></ul>)}
        <button onClick={()=>filtereddata()}>Filter</button> {" "}
        <button onClick={()=>lowTohigh()}>Price-LTH-btn</button>{" "}
        <button onClick={()=>highTolow()}>Price-HTL-btn</button>{" "} 
        <button onClick={()=>sortNamebyasc()}>Name-asc-btn</button>{" "}
        <button onClick={()=>sortNamebydes()}>Name-des-btn</button>{" "}
        </div>
  )
}

export default Main