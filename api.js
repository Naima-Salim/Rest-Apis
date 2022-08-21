fetch('http://localhost:5000/products')
.then(function (response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let myProducts = document.getElementById("products");
    data.forEach(element => {
        let someFruits = document.createElement("li")
        someFruits.innerText = `${element.name}`
        myProducts.appendChild(someFruits)
    });
})
.catch(function(error){
    console.log('error', error);
})

fetch('http://localhost:5000/products/fruits')
.then(function (response){
    return response.json();
})
.then(function (data){
    console.log(data);
    let myFruits = document.getElementById("fruList");
    data.forEach(fruits =>
        {
        let someFruit = document.createElement("li")
        someFruit.innerText = `${fruits.name}`
        myFruits.appendChild(someFruit)
    });
})
.catch(function(error){
    console.log('error', error);
})

fetch('http://localhost:5000/products/vegetables')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let myVegs = document.getElementById("vegList");
    data.forEach(vegs => 
        {
        let someVegs = document.createElement("li")
        someVegs.innerText = `${vegs.name}`
        myVegs.appendChild(someVegs)

    });
})
.catch(function(error){
    console.log('error', error);
})