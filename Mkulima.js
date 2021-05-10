// var shamba=[]
// var product=[]
// var groceryVendors=[]

// class Mkulima{
//     constructor(name,Id){
//         this.name=name;
//         this.Id =Id;
//     }
// }
//     class farms extends Mkulima{
//       constructor(name,Id,farm_Name,farmer,nambari){
//         super(name,Id)

//         this.farm_Name=farm_Name;
//         this.farmer=farmer;
//         this.nambari=nambari;
//         this.address=address;
//       }
//     }
//       addFarms(shamba);{
//        let shamba1={name:this.name,Id:this.Id,farm_name:this.farm_Name,nambari:this.nambari,address:this.address}
//           this.shamba.push(shamba1);
//       }
      
//       removeFarms(Id);{
//           return Farm.unshift(shamba(Id))
//       }
      
//       getFarms(Id);{
//         return Farm(Id)
//       }
    

// var shamba1 = new Farm ("Grace",45,"Tea_Farm","0722600121","78");
// var shamba2 = new Farm("Veronica",78,"Namana_farm","0798675439","009");
// var shamba3 = new Farm("Yahusa",89,"Delamere","0114509901","120");

// shamba1.addFarms(shamba1)
// shamba2.addFarms(shamba2)
// shamba3.addFarms(shamba3)
// console.log(shamba)

// Farm.removeFarms(1)
// console.log(Farm)


// class Product extends Mkulima{
//     constructor(name,Id,priceFields){
//         super(name,Id)
//         this.priceFields=priceFields
//     }
//     }
//   addProduct(shamba);{
//     shamba={name:this.name,Id:this.Id,farm_name:this.farm_Name,nambari:this.nambari,address:this.address}
//     addProduct.push(shamba);
//     }
//     getProduct(Id);{
//         return Farm(Id)
//     }
//     removeProduct(Id)

    


// let product1 = new product("Geisha",9,45.00)
//  let product2 = new product ("Flamingo",10,69.00)
// let product3 = new product("Menengai",3,15.00)

// product1.addProduct(product1)
// product2.addProduct(product2)
// product3.addProduct(product3)
// console.log()

// Farm.removeProduct(1)
// console.log(Farm)

// class GroceryVendors extends Mkulima{
//     constructor(name,Id,StoreName,phoneNumber){
//         super(Id,name)
//         this.phoneNumber = phoneNumber;
//         this.StoreName = StoreName;

//     }
// }
class Mkulima{
    constructor(){  
        this.farms=[]
        this.vendors=[]
        this.products=[]
    }
    addFarm(name,id,farmName,phoneNumber,address)
    {
    let getFarm={
        name:name,
        id:id,
        farmName:farmName,
        phoneNumber:phoneNumber,
        address:address,
    }
        this.farms.push(getFarm)

return this.farms    

}
removeFarm(farmId){
    let newfarm = this.farms.find(newfarm=>newfarm.farmId==farmId)
    return  delete this.farms[newfarm]
}

updateFarm(farmId,farmer,phoneNumber,address){
    let update=this.farms.find(update=>update.farmer)
    update={
        farmId:farmId,
        farmer:farmer,
        phoneNumber:phoneNumber,
        address:address
    }
    return update
}
getFarm(farmId){
    let Getfarm = this.farms.finds(Getfarm =>Getfarm.farmId==farmId)
    return Getfarm
}
    addProduct(productId,name,priceFields){
        var y={
            productId:productId,
            name:name,
            priceFields:priceFields,

        }
        TouchList.products.push(y)
        return this.products
    }
    removeProductId(productId,name,priceFields){
        let update = this.products.find(update=>update.productId==productId)
        update ={
            productId:productId,
            name:name,
            price:price
        }
        return update
    }
    getProduct(productId){
        let newproduct = this.products.find(newproduct=>newproduct.productId==productId)
        return newproduct
    }
    printProduct(){
        for(let items of this.products){
            console.log(items.name +""+items.priceFields)
        }
    }
    calculateOrderCost(productId,quantity){
        let Cost = this.products.find (Cost=>Cost.productId==productId)
        return Cost.price*quantity
    }
}
let mkulima=Mkulima()
mkulima.addFarm("Grace",1,"Solia","0722600121",345)
mkulima.addFarm("Juliet",3,"Delamere","0798995643",897)
mkulima.addFarm("Margret",8,"nanasiFarm","0114532678",901)
mkulima.addFarm("Angella",9,"Maziwa Product","07234561",440)
mkulima.removeFarm(78789)
mkulima.updateFarm("76890","J&J","Grace","0722600131","Mwanga")
mkulima.getFarm(789231)
console.log(mkulima)

mkulima.addProduct(456,"Mangoes",100)
mkulima.addProduct(234,"pineapples",450)
mkulima.addProduct(123,"Avocado",50)
mkulima.removeProductId(564)
mkulima.getProduct(657)
console.log(mkulima)

console.log(mkulima.printProduct())
console.log(mkulima.calculateOrderCost(56,90))
