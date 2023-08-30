
type stringOrNum = string | number;
type objWithName = {name:string, uid:stringOrNum};

const logdetails = (uid:stringOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const Greet = (user: {name: string, uid: stringOrNum}) => {
    console.log(`${user.name} says hello`)

}