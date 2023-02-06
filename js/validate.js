// check if document is ready
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        pageInit();
        clearInterval(stateCheck);
    }
}, 100);

//add submit event listener to form 
function pageInit(){
    document.querySelector('#frmRegistration').addEventListener('submit', validateForm);
}

function validateForm(e) {
    // prevent normal form submission
    e.preventDefault();
    // remove previous validation messages if any
    document.querySelectorAll('.msg').forEach((msg) => {
          msg.parentNode.removeChild(msg);     
    });
    //initialize valid variable as true
    let valid = true;
    //grap fields to validate
    let fields = document.querySelectorAll('input[required], select[required], input[pattern]');
    //look around fields to validate
    fields.forEach((field) => {
        if (!field.checkValidity()) {
            //assign valid variable width false
            valid = false;
            //add invalid class if field is valid and remove placeholder
            field.className = 'invalid';
            field.placeholder = '';
            console.log(field)
            let message = field.title + ' cannot be empty';

            if(field.type == 'email'){
                message = 'Looks like this is not a email'
            }
            // add validation message in the Dom
            field.insertAdjacentHTML('afterend',`<sapn class='msg'>${message}</span>`)
           
        }
        else {
            field.className = 'valid';
        }
    });
    let validitionsMsg = document.getElementsByClassName("msg");
        for(var i = 0; i < validitionsMsg.length; i++)
        {
            validitionsMsg[i].classList.remove("hiden");
        }
        if(valid){
            e.target.submit();
        }

}