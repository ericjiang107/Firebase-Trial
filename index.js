// Adding the login function:

// Testing the login onclick:
// function login() {
//     window.alert("Working Test!");
// }


// Following syntax from firebase under "Manage Users":
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in:
        document.getElementById("user_div").style.display = "block"; //visible
        document.getElementById("login_div").style.display = "none"; // not visible
    } else {
        // No user is signed in:
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});


function login() {
    var userEmail = document.getElementById("emailField").value;
    var userPassword = document.getElementById("passwordField").value;

    // window.alert(userEmail + " " + userPassword)
}