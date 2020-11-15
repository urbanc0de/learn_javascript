//------------Logical Operators-----------
//      ||       &&

//&& - mindkét állításnak(condition) true nak kell lennie (and)
//|| - valamelyik állításnak kell true-nak lennie (or)



const password = 'pass;@asd';

                    //ha ez és ez egyszerre true (x && y)
if(password.length >= 12 && password.includes('@')){
    console.log('that password is strong');
}else if(password.length >= 8 || password.includes(';') && password.length > 5){ 
    console.log('that password is long enough!');
}else{
 console.log('the password is not long enough!');
}
