import { timer } from "./somejs";
var t: timer = require('./somejs');

t.duration(3000);
t.execute(() => { console.log('DT'); });

