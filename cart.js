  class Cart{
    //What is the first part of every class? Type it below.
  constructor(il,iq){}
   this.itemList = il;
   this.quantity = iq;
  }


    //Type the instance functions below this comment.
    addItem(i,q){
      this.itemList.push(i);
      this.itemQuantity.push(q);
    }

    totalCart(){
    let total = 0;
    for(var i=0;i < quantity.length;i++){
      total += this.itemList[i] x this.itemQuantity[i]
    }
    return total;
  }


   subCart(days){
    let subArray =[]
    if (Item.shippingTime == day){
      subArray.push(Item.name);
    }
    return subArray;
  }
