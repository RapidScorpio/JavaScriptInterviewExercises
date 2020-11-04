console.log('ok starting dictionary js');
/*

bring back an arr of the v
getbykey()


given info:
[{FirstName:'John', Lastname:'Doe', Age:30},{FirstName:'John', Lastname:'Allen', Age:65}, {FirstName:'Tina', Lastname:'Doe', Age:30}, ]

return a arr based on the given key, e.g. if a user gives key as firstname return all the john values


permutations:
use firstname as key, use lastname as key, user arr position

function getUserDetails (arr, getByKey


my solution was to break up the given arr into a map and use the key provided for the input function 
as the the key for the map. 
if the key did not exist it would add the key and the arr
if the key did exist then get the current arr from the map and pop the next value to the arr,
store that arr in the map
*/


const user = [{FirstName:'John', Lastname:'Doe', Age:30},{FirstName:'John', Lastname:'Allen', Age:65}, {FirstName:'Tina', Lastname:'Doe', Age:30} ];


getArrByKey(user, user.FirstName);

function getArrByKey(arr, getByKey)
{
    //get the key to use
    let key = getByKey;

    console.log(key);

    //make a map and populate it based on the key


}