let members = [];

members.push({name:"hong", point:80});
members.push({name:"hwang", point:100});
members.push({name:"park", point:95});
members.push({name:"choi", point:50});
members.push({name:"ryu", point:30});

$(members).each((idx,val)=>{
    // console.log(idx,val);
})

let grepMem = $.grep(members, (obj, idx)=> {
    // console.log(obj, idx);
    return (obj.point > 50)? obj : null;
})

// console.log(grepMem);

let sum = $(grepMem).map((idx,val) => {
    return val.point;
}).get();
console.log("전체 point값: " + sum);
