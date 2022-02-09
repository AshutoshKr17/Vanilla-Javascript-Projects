let obj = {
    a:1,
    b:2,
    //console.log(obj.typeof(a))
    getA: function(){
        console.log(this)
    }
}

obj.getA();