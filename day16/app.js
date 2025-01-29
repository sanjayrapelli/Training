let arr =[
    {
    empId:"1",
    empName:"Sanjay",
    empCompany:"Google",
    empSalary:50000,
    empAddress:{
        empCity:"Siddipet",
        empArea:"Khamman"
    }
    },
    {
    empId:"2",
    empName:"Ram",
    empCompany:"Microsoft",
    empSalary:80000,
    empAddress:{
        empCity:"Ayodhya",
        empArea:"Ram Mandir"
    }
    },
    {
    empId:"3",
    empName:"Krishna",
    empCompany:"Meta",
    empSalary:90000,
    empAddress:{
        empCity:"Hyderabad",
        empArea:"Jubliee hills"
    },
    }
];


[...arr].map((users)=>{
    let store  = document.getElementById("store");
    store.innerHTML += `
    <tr>
        <td>${users.empId}</td>
        <td>${users.empName}</td>
        <td>${users.empSalary}</td>
        <td>${users.empCompany}</td>
        <td>${users.empAddress.empCity}</td>
        <td>${users.empAddress.empArea}</td>
    </tr>
    `
})