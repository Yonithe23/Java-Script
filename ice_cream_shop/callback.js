/*
Callback function is calling a funtion inside another function. or simple 
term connection between functions.like  f(g(x)).
 

*/
let or = (call_and_term) => {
   setTimeout(() => {
       console.log('hello')
       call_and_term();
   }, 2000);
  
};
let and = () => {
    setTimeout(() => {
        console.log('then');
        setTimeout(() => {
            console.log('chopped ') ;
            setTimeout(() => {
                console.log('add');
                setTimeout(() => {console.log('hhhh');
                setTimeout(() => {
                    console.log('ee');
                    setTimeout(() => {})
                }, 1000)
                },2000)
            },3000)     
        },2000);
    },000);
};

or(and);


setTimeout(() => {})