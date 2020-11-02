//Find Intersection
//Given the following input containing two sequences of csv, output the intersecting numbers. If there are none return false
// ["1, 2, 5, 7, 13", "1, 4, 7, 13, 28"]
//console.log("test");
var numberSeq = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];//["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];//["1, 2, 5, 7, 13", "1, 4, 7, 13, 28"];


FindIntersectionForce(numberSeq);
FindIntersectionHash(numberSeq);
FindIntersectionMapsless(numberSeq);


//Brute Force
function FindIntersectionForce(strArr)
{
    let t1 = performance.now();
    const lists = strArr.map(str => str.split(", "));
    const listOne = lists[0];
    const listTwo = lists[1];
    let resultList = [];
    let listOneLength = listOne.length;
    let listTwoLength = listTwo.length;


    //time complexity O(n*m)
    for (let i = 0; i < listOneLength; i++) 
    {
        console.log(listOne[i]);
       for(let j=0; j<listTwoLength; j++)
       {
            let currentListOneItem = listOne[i];
            let currentListTwoItem = listTwo[j];

           // console.log('list one curr '+currentListOneItem);
           // console.log('list two curr '+currentListTwoItem);

            if(currentListOneItem === currentListTwoItem)
            {
                resultList.push(currentListOneItem);                
            }
       };
    };

    let t2 = performance.now();

    console.log('Intersections Found: '+resultList.toString());
    console.log('Runtime in milliseconds: '+ (t2 - t1));
}

//Hash Table O(2*n)
function FindIntersectionHash(strArr)
{
    const lists = strArr.map(str => str.split(", "));
    const firstList = lists[0];
    const secondList = lists[1];

    let matchMap = {};
    let resultArr =[];

    let t1 = performance.now();

    //
    firstList.forEach(num => matchMap[num] = true);

    secondList.forEach(num => {
        if(matchMap[num])
        {
            resultArr.push(num);
        }
    })

    let t2 = performance.now();

    if(resultArr.length > 0)
    {
        console.log('Intersections Found: '+resultArr.toString());
        console.log('Runtime in milliseconds: '+ (t2 - t1));
    }
    else
    {
        close.log('No intersection found');
    }
}

//no mapping O(2*n)
function FindIntersectionMapsless(strArr)
{
    const lists = strArr.map(str => str.split(", "));
    const firstList = lists[0].split(", ");
    const secondList = lists[1].split(", ");

    let matchMap = {};
    let resultArr =[];

    let t1 = performance.now();

    firstList.forEach(num => matchMap[num] = true);

    secondList.forEach(num => {
        if(matchMap[num])
        {
            resultArr.push(num);
        }
    })

    let t2 = performance.now();

    if(resultArr.length > 0)
    {
        console.log('Intersections Found: '+resultArr.toString());
        console.log('Runtime in milliseconds: '+ (t2 - t1));
    }
    else
    {
        close.log('No intersection found');
    }
}