const emp={
    ename:"Rahul",
    eage:"30",
    eaddress:"Ghaziabad",
    planguage:[{
        lang1:"java",
        lang2:"python"
    },
    {
    database1:"oracle",
    database2:"Mysql"
    },
    {
      framework1:"Hibernate",
      framework2:"Spring"  
    }
]

}
//for finding specific value in array
//console.log(emp.planguage[0].lang2);
// emp.company="Infosys";//insertion
// console.log(emp);
// emp.planguage[1].database1="Mongodb";//updation
// console.log(emp);
delete emp.ename;//delete
