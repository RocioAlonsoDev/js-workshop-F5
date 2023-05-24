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

    
//dom handling

window.onload = function () {
    let cont = document.getElementById('cont');
    cont.innerHTML= '<button id="clickableButton">Click on me</button>';
    let clickableButton = document.getElementById('clickableButton');
    let attendanceList = ["Rocío", "Mireia", "Maite","Miriam","Raissa","Amaia","Andreina","Lucía","María","Jimena"]
    let number = [11,22,33,44,55,66,77,88,99];

    clickableButton.addEventListener("click", function(){
        alert("Welcome to my first steps on Javascript");
        clickableButton.style.display='none'
        let title = document.createElement('h2')
        title.append("Attendance List")
        cont.append(title)
        takeAttendance()
        countNumbers(number)
    });

    clickableButton.addEventListener("mouseover",function(){
        clickableButton.innerHTML ="Nono WAIT- don't click on me"
    });

    clickableButton.addEventListener("mouseout",function(){
        clickableButton.innerHTML ="Click on me"
    });

    function takeAttendance(){
        for(let i=0;i<attendanceList.length;i++){
            let student = document.createElement('p')
            student.append(attendanceList[i])
            cont.append(student)
        }
    }

    function countNumbers(array){
        let numberCount = 0;
        for(let i=0;i<array.length;i++){
            if(typeof array[i] == 'number'){
                numberCount++
            }
        }
        alert("Number Count: "+numberCount)
    }
    
    //form
    let form = document.createElement('form')

    let firstInputLabel = document.createElement('label')
    let firstInput = document.createElement('input')
    let secondInputLabel = document.createElement('label')
    let secondInput = document.createElement('input')
    let submitButton = document.createElement('button')

    firstInputLabel.textContent = 'User '
    firstInput.type = 'text';
    secondInputLabel.textContent = 'Password'
    secondInput.type = 'password'
    submitButton.type = 'submit'
    submitButton.textContent='Submit'

    cont.appendChild(form)
    form.appendChild(firstInputLabel)
    form.appendChild(firstInput)
    form.appendChild(secondInputLabel)
    form.appendChild(secondInput)
    form.appendChild(submitButton)


    //table
    let table = document.createElement('table')
    

    let genshinCharacters = [
        eula = {
            id: 001,
            name: 'Eula',
            status: 'alive',
            species: 'human',
            type: 'cryo',
            gender: 'female'
        },
        zhongli = {
            id: 002,
            name: 'Zhongli',
            status: 'alive',
            species: 'god',
            type: 'geo',
            gender: 'male'
        },
        xiangling = {
            id: 003,
            name: 'Xiangling',
            status: 'alive',
            species: 'human',
            type: 'pyro',
            gender: 'female'
        },
        kokomi = {
            id: 4,
            name: 'Kokomi',
            status: 'alive',
            species: 'human',
            type: 'hydro',
            gender: 'female'
        },
        beidou = {
            id: 5,
            name: 'Beidou',
            status: 'alive',
            species: 'human',
            type: 'electro',
            gender: 'female'
        },
        jean = {
            id: 6,
            name: 'Jean',
            status: 'alive',
            species: 'human',
            type: 'anemo',
            gender: 'female'
        },
        wanderer = {
            id: 7,
            name: 'Wanderer',
            status: 'alive',
            species: 'puppet',
            type: 'anemo',
            gender: 'male'
        },
        alhaitham = {
            id: 8,
            name: 'Alhaitham',
            status: 'alive',
            species: 'human',
            type: 'dendro',
            gender: 'male'
        },
        venti = {
            id: 9,
            name: 'Venti',
            status: 'alive',
            species: 'god',
            type: 'anemo',
            gender: 'male'
        },
        raiden = {
            id: 10,
            name: 'Shogun Raiden',
            status: 'alive',
            species: 'god',
            type: 'electro',
            gender: 'female'
        },





        ]


    function createTable(){
        let tableTitle = document.createElement('h2');
        tableTitle.textContent='Genshin Character Table'
        cont.appendChild(tableTitle)
        cont.appendChild(table)
        for(let y=-1;y<genshinCharacters.length;y++){
            
            let row = document.createElement('tr');
            table.append(row);
            table.style.border = '1px solid';
            for(let x=0;x<6;x++){
                if(y==-1){
                    let tableHead = document.createElement('th');
                    switch(x){
                    case 0: tableHead.textContent='id'; break;
                    case 1: tableHead.textContent='name';break;
                    case 2: tableHead.textContent='status';break;
                    case 3: tableHead.textContent='species';break;
                    case 4: tableHead.textContent='type';break;
                    case 5: tableHead.textContent='gender';break;
                    }
                    row.appendChild(tableHead);
                }else{
                    let column = document.createElement('td');
                    row.appendChild(column)
                    switch(x){
                        case 0: column.textContent=genshinCharacters[y].id; break;
                        case 1: column.textContent=genshinCharacters[y].name; break;
                        case 2: column.textContent=genshinCharacters[y].status;break;
                        case 3: column.textContent=genshinCharacters[y].species;break;
                        case 4: column.textContent=genshinCharacters[y].type;break;
                        case 5: column.textContent=genshinCharacters[y].gender;break;
                    }
                }

            }
        }
        
    }
    createTable()



    
}
   


