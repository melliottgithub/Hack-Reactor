function transform(arr) {
    let obj = {}
    obj[arr[0]] = arr[arr.length - 1]

    console.log(obj)
    return obj
}
var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let a = transform(input)