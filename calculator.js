module.exports = {

     sum: (a,b) => a+b,
     sub: (a,b) => a-b,
     multi: (a,b) => a*b,
     div: (a,b) => a/b,

    hello: () => "Hello World!",

    date2000: function(){
        var start = new Date("2000-01-01T00:00:00");
        return (Date.now() - start) / 1000; // nombre de seconde depuis le 01/01/2000
    }
}
