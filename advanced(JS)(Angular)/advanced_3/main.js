function coffeMake(){}
function drip(){}
function carob(){}
function gayz(){}
coffeMake.prototype.on = () => console.log('coffe machine is working');
coffeMake.prototype.off = () => console.log('coffe machine stops working');
drip.prototype = coffeMake.prototype;
carob.prototype = coffeMake.prototype;
gayz.prototype = coffeMake.prototype;
drip.prototype.dripping = () => console.log('drip coffe machine is working now');
carob.prototype.carobing = () => console.log('carob coffe machine is working now');
gayz.prototype.gayzering = () => console.log('gayzor coffe machine is working now');
let d = new drip();
d.dripping();
d.on();
let c = new carob();
c.off();
c.carobing();
let g = new gayz();
g.gayzering();
g.on();