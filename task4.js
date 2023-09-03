//javascript :functions

//a. print odd numbers in an array
//anonymous function:
let arrayNumber =[5,11,12,32,15,17,57,33]
let resultArray =(function (arrayNumber){
    return (arrayNumber.filter((item) =>{
        return item %2 !==0
    }))
})(arrayNumber);
console.log("all odd numbers in an array:"+resultArray)
//2. convert all the strings to  title caps in a string array
let stringArray =["welcome","to","guvi"]
let resultstringArray = (function(stringArray){
    return (stringArray.map((item)=>{
        return item. toUpperCase()
    }))
})(stringArray)
console.log("all upper case string in a array:"+resultstringArray)
//3. sum of all nubers in an array
let resultSumArray = (function(arrayNumber){
    return (arrayNumber.reduce((currentTotal,item)=>{
        return currentTotal + item
    },0))
})(arrayNumber)
console.log("sum of numbers in an array:"+resultSumArray)
//4. return all the prime numbers in an array
let resultprimearray =(function(arrayNumber){
    return (arrayNumber.filter((item)=>{
        for(i=2;i<item;i++){
            if (item%1 ===0)
            return false
        }
        return true

    }))
})(arrayNumber)
console.log("prime numbers in an array:"+resultprimearray)
//5. return all the palindromes in an array
let resultpalindrmearray =(function(arrayNumber){
    return (arrayNumber.filter((item)=>{
        let temp = item + ""
        if ((temp.split('').reverse().join(''))=== item + "")
        return true
    return false
    }))
})(arrayNumber)
console.log("pallindrome numbers in an array:"+ resultpalindrmearray)
//6. return median of two sorted array of same size
let arr1=[1,2,3,4,5,8,10]
let arr2=[8,9,10,12,16]
let resultmedian =function(arr1,arr2){
    let result=[]
        if (arr1.length % 2==0){
            console.log("median of array 1:"+ arr1[arr1.length/2])
        }else{
            console.log("median of array 1:"+arr1[(arr1.length+1)/2])
        }
        if (arr2.length %2==0){
            console.log("median of array 2:"+arr2[arr2.length/2])
        }else{
            console.log("median of array 2:"+arr2[(arr2.length+1)/2])
        }
        return
    
}(arr1,arr2)


//7. remove duplicates from an array
let arraywithdup =[22,22,11,10,11,56,10,1,2,6,7,56,3,9]
let resultarraywodup=((arraywithdup,index)=>{
    return[ (arraywithdup)]
})(arraywithdup)
console.log("array without duplicates"+resultarraywodup)

//8. rotate an array by k times and return the rotated array
let arrforrotation =[0,1,5,6,7,9]
let resultarrayshifted =((array,k)=>{
    for (let i=0;i<k;i++){
        let temp = array.shift()
        array.push(temp)
    }
    return array
})(arrforrotation,3)
console.log("array rotated k times:"+resultarrayshifted)


//2. (a)print odd numbers in an array
let numberarray =[1,2,3,4,5,6,98,101,465]
console.log("odd numbers in number array are:"+numberarray.filter((item)=>{
    return item % 2 !== 0
}))

//(b)convert all the strings to title caps in a string array
let stringarray =["welcome","to","guvi"]
stringarray = stringarray.map((item)=>{
    return item.toUpperCase()
})
console.log("converted string array is:"+stringarray)

//(c)sum of all numbers in an array 
let sum =numberarray.reduce((currentTotal , item)=>{
    return currentTotal+item
},0)

console.log("sum of elements in number array:"+ sum)

//(d)return all the prime numbers in an array
console.log("prime number is array are :"+numberarray.filter((item)=>{
    for (let i =2 ; i<item;i++){
        if (item % i ===0)
        return false
    }
    return true

}))


//(e)return all the palindromes in an array
let arraypalindrome = [111,102,505,323,612,776,707,121]
console.log("palindrome numbers in array are:"+ arraypalindrome.filter((item)=>{
    let temp = item + ""
    if (temp.split('').reverse().join('')=== item + "")
    return true
return false
}))






