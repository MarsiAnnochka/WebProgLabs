module.exports.task1 = function exercise_7(str1, str2){
    let arr1 = str1.split(',')
    let arr2 = str2.split(',')
    let result = arr1.concat(arr2);
    for (let i=0; i<result.length-1; i++)
        for (let j=i+1; j<result.length; j++) {
            if (result[i] === result[j])
                result.splice(j, 1);
        }
    return result;
}

module.exports.task2 = function exercise_17(obj){
    return typeof(obj)==="object"?"Объект":"Не объект";
}

module.exports.task3 = function exercise_4(str){
    let new_str = str[0].toLowerCase() + str.slice(1);
    return new_str;
}


