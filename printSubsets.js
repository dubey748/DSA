const subset=(ip,op)=>{
    if(ip.length==0){
        console.log(op)
        return
    }
 const   op1=op
  const op2 = op + ip[0];
    subset(ip.slice(1),op1)
    subset(ip.slice(1),op2)
    return
}
subset('abc','')