interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let persona:MyPersona = {
    first_name : 'Jorge',
    last_name : 'Cano',
    twitter_account : '@jorgeucano'
}

console.log(persona);