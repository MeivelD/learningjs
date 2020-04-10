function validateForm() {
    var name = document.forms["registerform"]["name"].value;
    /*  if (x == "") {
         return false;
     } */
    var psNo = document.forms["registerform"]["ps_no"].value;
    var dob = document.forms["registerform"]["dob"].value;
    var email = document.forms["registerform"]["email"].value;
    var dateOfFilling = document.forms["registerform"]["date"].value;

    function myFunction() {
        /* var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date; */
        alert(1);
        document.getElementById("myDate").defaultValue = "2014-02-09";
    }

    var gender = document.forms["registerform"]["gender"].value;
    var designation = document.forms["registerform"]["designation"].value;
    var experience = document.forms["registerform"]["experience"].value;
}