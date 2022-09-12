const allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*"
}
const chars =(uppers,lowers,number,symbols)=>{
    let res = `${(uppers===true? allowed.Uppers :"") + (lowers===true? allowed.Lowers:"") + (number === true? allowed.Numbers:"")+ (symbols=== true? allowed.Symbols:"")}`
    
    return res

}
export default function makeid(charactersCount,uppers,lowers,number,symbols ) {
    let result           = '';
    let characters       =  chars(uppers,lowers,number,symbols)
    let charactersLength = characters.length;
    for ( let i = 0; i < charactersCount; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}