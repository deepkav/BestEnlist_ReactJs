function curr_mask(num){
    return num.toLocaleString('en-IN',{style: 'currency', currency: 'INR'});
}

curr_mask(562890123756)
//Output
//"₹5,62,89,01,23,756.00"
