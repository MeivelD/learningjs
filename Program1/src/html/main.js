function validateForm() {
    var name = document.forms["registerform"]["name"].value;
    var psNo = document.forms["registerform"]["ps_no"].value;
    var dob = document.forms["registerform"]["dob"].value;
    var email = document.forms["registerform"]["email"].value;
    var dateOfFilling = document.forms["registerform"]["date"].value;
    var gender = document.forms["registerform"]["gender"].value;
    var designation = document.forms["registerform"]["designation"].value;
    var experience = document.forms["registerform"]["experience"].value;
}

function setDefaultValues() {
    var today = new Date();
    var month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var date = today.getFullYear() + '-' + month + '-' + today.getDate();
    //alert(date);

    document.getElementById("myDate").defaultValue = date;

}

//Just For Reeference
/* function resetFields() {
    document.forms["registerform"]["name"].value = "";
    document.forms["registerform"]["ps_no"].value = "";
    document.forms["registerform"]["dob"].value = "";
    document.forms["registerform"]["email"].value = "";
    document.forms["registerform"]["date"].value = "";
    document.forms["registerform"]["gender"].value = "";
    document.forms["registerform"]["designation"].value = "";
    document.forms["registerform"]["experience"].value = "";
} */