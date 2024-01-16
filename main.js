function reservation(){
    var FirstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var Address = document.getElementById("Address");
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone");   
    var number = document.getElementById("lodging");
    var summary = document.getElementById("summary").value;
    

    const checkIn = new Date(document.getElementById("inHouse").value);
    const checkOut = new Date(document.getElementById("out").value);
    const differenceInMilliseconds = Math.abs(checkOut - checkIn);
    const differerenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You will be staying for ${differerenceInDays} nights.`;

    document.getElementById("lodgers").textContent = "";
    document.getElementById("firstNameText").textContent = "";
    document.getElementById("lastNameText").textContent = "";
    document.getElementById("address").textContent = "";
    document.getElementById("emailText").textContent = "";
    document.getElementById("phoneNumber").textContent = "";
    document.getElementById("inRoom").textContent = "";
    document.getElementById("outRoom").textContent = "";
    document.getElementById("summarize").textContent = "";
    document.getElementById("lodgers").textContent = "";
    


    if(FirstName.value.length < 5){
        let firstNameText = document.getElementById("firstNameText");
        firstNameText.textContent = "Enter First Name"
        FirstName.style.border = "1px solid red"   
    }
    if(lastName.value.length < 5){
        let lastNameText = document.getElementById("lastNameText");
        lastNameText.textContent = "Input Last Name"
        lastName.style.border = "1px solid red"
    }
    if(email == ""){
        let email = document.getElementById("email");
        emailText.textContent = "Input Email"
        email.style.border = "1px solid red"
    }
    if(Address.value.length < 7){
        let address = document.getElementById("address");
        address.textContent = "Address Error"
        Address.style.border = "1px solid red"
    }
    if(phone.value.length < 11){
        let phoneNumber = document.getElementById("phoneNumber");
        phoneNumber.textContent = "Input Phone Number"
        phone.style.border = "1px solid red"
    }
    if(number.value.length < 1){
        let lodgers = document.getElementById("lodgers");
        lodgers.textContent = "Input Field Is Empty"
        number.style.border = "1px solid red"
    }
    if(summary = reservation){
        let summarize = document.getElementById("summarize");
        summarize.textContent = ("Summary of bookings : " + "Name : " + (FirstName.value + "\n") + (lastName.value + "\n") + "Address : " + (Address.value + "\n") + "Mobile number : " + (phone.value + "\n") + "Day of lodge : " + (inHouse.value + "." + "\n") + "Day of depature : " + (out.value + "." + "\n") + "Room of preference : " + (roomType.value + "." + "\n")); 
    }
}