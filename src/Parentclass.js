import React, { Component } from 'react'

export class Parentclass extends Component {
  constructor(){
    super();
    this.state={ mobiles:
      [{
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
      isPurchased : "true"}
    ]
    

    }
  }

   lowTohigh =()=>{
    const sortlowprice= this.state.mobiles.sort((a,b)=>a.price-b.price);
    this.setState(sortlowprice);
  }
   highTolow =()=>{
    const sortlowprice=this.state.mobiles.sort((a,b)=>a.price-b.price);
    this.setState(sortlowprice.reverse());
    
  }
   filtereddata=()=>{
    this.setState({mobiles:this.state.mobiles.filter((ele)=>
      ele.isPurchased==="true")});
    }

     sortNamebyasc=()=>{
      const ascitem= this.state.mobiles.sort((item1,item2)=>{
        if (item1.name <item2.name){
          return -1;
        } 

        return 0;
      });
      this.setState(ascitem);
    console.log(ascitem);
      
    }

       sortNamebydes =()=>{
        const desitem = this.state.mobiles.sort((item1, item2)=>{

          if(item1.name > item2.name){
            return -1;
            
          }
     
          return 0;
         });
        this.setState(desitem);
        console.log(desitem)
      }

  render() {
    return (
      <div> 
        <h1>Mobile Details</h1> {this.state.mobiles.map((data,i)=><ul key={i}><li>{data.id}{" "}{data.name}{" "}{data.price}{" "}{data.isPurchased}{" "}</li></ul>)}
        <button onClick={()=>this.filtereddata()}>Filter</button> {" "}
        <button onClick={()=>this.lowTohigh()}>Price-LTH-btn</button>{" "}
        <button onClick={()=>this.highTolow()}>Price-HTL-btn</button>{" "} 
        <button onClick={()=>this.sortNamebyasc()}>Name-asc-btn</button>{" "}
        <button onClick={()=>this.sortNamebydes()}>Name-des-btn</button>{" "}
        </div>
    )
  }
}

export default Parentclass