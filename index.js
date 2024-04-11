const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("#lastName");
const CLIENT_AMOUNT = document.querySelector("#amount");
const CLIENT_RESULT = document.querySelector(".Result");



function calculatebtn(){

    const litre = 630;
    let LITRE = (CLIENT_AMOUNT.value) / (litre);

    LITRE = LITRE.toFixed(1);

    if (FIRST_NAME.value=="" || LAST_NAME.value=="" || CLIENT_AMOUNT.value==""){
        setTimeout(() => {
            CLIENT_RESULT.innerHTML = "Please fill all fields correctly, make use of your brain"
            CLIENT_RESULT.style.color = "red";
            CLIENT_RESULT.style.fontstyle = "italic";
            setTimeout(() => {
                CLIENT_RESULT.textContent ="";
            }, 1500);
        }, 100);
    }else{
        CLIENT_RESULT.innerHTML = ` ${FIRST_NAME.value} ${LAST_NAME.value}, You purchased ${LITRE}litres of fuel for N${CLIENT_AMOUNT.value}. Thank you for using Michael's LITRES Calculator`;
        CLIENT_RESULT.style.color = "green";
        CLIENT_RESULT.style.fontstyle = "normal";
        CLIENT_RESULT.style.fontweight = "bold";
        CLIENT_RESULT.style.maxWidth = "500px";
        Init()
    }
};

function Init () {
    FIRST_NAME.value="";
    LAST_NAME.value="";
    CLIENT_AMOUNT.value="";
};