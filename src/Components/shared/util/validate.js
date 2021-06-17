const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_IsSTRING= 'IsSTRING'

export const VALIDATOR_MINLEN=(val)=>({type:VALIDATOR_TYPE_MINLENGTH,value:val})
export const VALIDATOR_ISSTRING=(val)=>({type:VALIDATOR_TYPE_IsSTRING,value:val})
export const VALIDATOR_ISEMAIL=()=>({type:VALIDATOR_TYPE_EMAIL})
export const VALIDATOR_REQUIRE=()=>({type:VALIDATOR_TYPE_REQUIRE})
export const VALIDATOR_MAXLENGTH=(val)=>({type:VALIDATOR_TYPE_MAXLENGTH,value:val})

export const validate =(value,validators)=>{
    var isValid=true
    for(const validator of validators){
        if(validator.type===VALIDATOR_TYPE_REQUIRE){
            isValid=isValid && value.trim().length > 0
        }
        if(validator.type===VALIDATOR_TYPE_MAXLENGTH){
            isValid=isValid &&  value.length<=validator.value
        }
        if(validator.type===VALIDATOR_TYPE_MINLENGTH){
            isValid=isValid && value.length>=validator.value
        }
        if(validator.type===VALIDATOR_TYPE_IsSTRING){
            isValid=isValid && typeof(value)==='string'
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
          }

    }
    return isValid;


}