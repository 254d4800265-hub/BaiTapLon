let totalExpense = 0;

// MSSV cuối lẻ = true
// MSSV cuối chẵn = false
let isOddStudentId = true;

document.getElementById("expenseForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    let row = `
        <tr>
            <td>${name}</td>
            <td>${Number(amount).toLocaleString()} VNĐ</td>
            <td>${category}</td>
            <td>${date}</td>
        </tr>
    `;

    let table = document.getElementById("expenseTable");

    if(isOddStudentId){
        table.innerHTML = row + table.innerHTML;
    }
    else{
        table.innerHTML += row;
    }

    totalExpense += Number(amount);

    if(totalExpense > 1500000){

        document.getElementById("warning")
        .classList.remove("d-none");
    }

    document.getElementById("expenseForm").reset();
});

function showGreeting() {

    let hour = new Date().getHours();

    let greeting =
        document.getElementById("23010001_txt_msg");

    if(hour < 12){

        greeting.innerText = "Chào buổi sáng!";

    }
    else if(hour < 18){

        greeting.innerText = "Chào buổi chiều!";

    }
    else{

        greeting.innerText = "Chào buổi tối!";
    }
}
