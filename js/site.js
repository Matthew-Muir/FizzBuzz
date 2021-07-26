
function GenTableRows(numArr) {
    let rowsToGen = Math.ceil(numArr.length / 5);
    let tableData = "";
    let rowTemplate = "<tr>?????</tr>"

    //Add required number of table rows for data range.
    //Creating a table data template
    for (let index = 0; index < rowsToGen; index++) {
        tableData += rowTemplate;  
    }

    //Add each value into tableData template
    numArr.forEach(element => {
        if (element % 3 == 0 && element % 5 == 0) {
            tableData = tableData.replace("?", `<td style="color:Red">FizzBuzz</td>`);
        }
        else if (element % 5 == 0) {
            tableData = tableData.replace("?", `<td style="color:Blue">Buzz</td>`);
        }
        else if (element % 3 == 0) {
            tableData = tableData.replace("?",  `<td style="color:RebeccaPurple">Fizz</td>`)
        }
        else {
            tableData = tableData.replace("?", `<td>${element}</td>`);
        }
    });

    //Clean-up remaining template spots
    for (let index = 0; index < 5; index++) {
        tableData = tableData.replace("?","");
        
    }
    return tableData;
}




function PopulateTable() {
    let startNum = Number.parseInt(document.getElementById("startNum").value);
    let endNum = Number.parseInt(document.getElementById("endNum").value);

    let numRange = [];
    for (let index = startNum; index <= endNum; index++) {
        numRange.push(index);
    }
    
    document.getElementById("results").innerHTML = GenTableRows(numRange);   
}