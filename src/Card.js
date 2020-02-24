import React, { Component } from 'react'

class Card extends Component {
 constructor(props){
    super(props)
    this.state={
        Firstname : "",
        cardNumber : "",
       cardDate:""

    }
}

testcardNumber = x => {
    
    return (
      x.slice(0, 4) +
      " " +
      x.slice(4, 8) +
      " " +
      x.slice(8, 12) +
      " " +
      x.slice(12)
    );
  };

  testcardDate = y => {
    
    return (
      y.slice(0, 2) +
      "/" +
      y.slice(2,4)
    );
  };
    

  changeHandlerCardNumber = e => {
          let regExp = /^[0-9]*$/;
          if (regExp.test(e.target.value))
            this.setState({ 
                cardNumber: e.target.value 
            });
  };
    inputChange = (e) => {
        e.preventDefault()
        if (e.target.value.length<=20) {
    this.setState({
        Firstname : e.target.value  


    })}}
    changeHandlerCardDate = e => {
        let reguExp = /^[0-9]*$/;
        let months = e.target.value.slice(0,2);
        let month = e.target.value.slice(0,1);
        let year = e.target.value.slice(2,4);
        if ((reguExp.test(e.target.value))&&(months<=12)&&(month<=1)        )
        this.setState({
            cardDate : e.target.value
        });
    
    };
  
 

render(){
    let  {Firstname} = this.state
    let {cardNumber} = this.state
    let {cardDate} = this.state

 
       
  
        
    return (
        <form>
        <div className="container">
            <input  type="text" name="Firstname" onChange={this.inputChange} value={this.state.Firstname}></input>
            <input maxLength={16} type="text" name="cardNumber" onChange={this.changeHandlerCardNumber} value={this.state.cardNumber}></input>
            <input type="text" name="cardDate" maxLength={4} onChange={this.changeHandlerCardDate} value={this.state.cardDate}></input>
            
    <p className="text">The name is : {(Firstname.toUpperCase())}</p>
    <p className="text1">The number Card is : {this.testcardNumber(cardNumber)}</p>
    <p className="text1">The date Card is : {this.testcardDate(cardDate)}</p>
        </div>
        </form>
    )

}
}



 export default Card;

