//variables

    let myAge = 25
    const myName = 'Rocío'
    const mySurname = 'Alonso'
    let knowJS = true

    let a = 5
    let b = 8
    let c = 2.5

    //console.log(myName,myAge,knowJS)
    //alert(myName,myAge,knowJS)

    //console.log(a+b,b-a,a*b,b/a)
    //alert(a+b,b-a,a*b,b/a)

    //console.log(myName+' '+mySurname)
    //alert(myName+' '+mySurname)


//functions

    function sayHello(name){
        return 'Hello, '+name
    }

    //console.log(sayHello(myName))
    //alert(sayHello(myName))


    function sum(x,y){
        return x+y
    }

    //console.log(sum(22,55))
    //alert(sum(22,55))

    function oddOrEven(x){
        if(x%2 == 1){
            return x+' is an odd number'
        }else{
            return x+' is an even number'
        }
    }

    //console.log(oddOrEven(23))
    //alert(oddOrEven(23))


//objects

    let car = {
        color: 'silver',
        brand: 'honda',
        nOfDoors: 5,
        engine: {
            hybrid:false,
            output: 88
        }
    }

    function tellMeCarBrand(){
        return car.brand
    }

    function isItHybrid(){
        return car.engine.hybrid
    }

    function tellMeCarDoors(){
        return car.nOfDoors
    }

    //console.log(tellMeCarBrand(),tellMeCarDoors(),isItHybrid())
    //alert(tellMeCarBrand(),tellMeCarDoors(),isItHybrid())


//arrays

    let raffle = [55,12,13,9,85,41,33,10,74,99]

    function chosenNumbers(array){
        for(let i=0;i<array.length;i++){
            console.log(raffle[i])
        }
    }
    //chosenNumbers(raffle)

    function drawNumber(i,array){
        array.push(i)
    }
    //drawNumber(3,raffle)
    //chosenNumbers(raffle)

    function deleteEvenNumbers(array){
        for(let i=0;i<array.length;i++){
            if(array[i]%2==0){
                array.splice(i,1)
                i--
            }
        }
    }
    //deleteEvenNumbers(raffle)
    //chosenNumbers(raffle)

    function biggestNumber(array){
        let biggestNumber = array[0]
        for(let i=1;i<array.length;i++){
            if(biggestNumber<array[i]){
                biggestNumber=array[i]
            }
        }
        return biggestNumber
    }
    //console.log(biggestNumber(raffle))

    function smallestNumber(array){
        let smallestNumber = array[0]
        for(let i=1;i<array.length;i++){
            if(smallestNumber>array[i]){
                smallestNumber=array[i]
            }
        }
        return smallestNumber
    }
    //console.log(smallestNumber(raffle))

    function textToLowerCase(text){
        return text.toLowerCase()
    }
    //console.log(textToLowerCase("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))
    
    function textToUpperCase(text){
        return text.toUpperCase()
    }
    //console.log(textToUpperCase("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))

    let team5 = ['rocío','miriam','mireia','maite','raizza']
    function capitalize(array){
        for(let i=0;i<array.length;i++){
            let capitalized=array[i].charAt(0).toUpperCase()+array[i].slice(1)
            array[i]=capitalized
        }
        return array    
    }
    //console.log(capitalize(team5))

    