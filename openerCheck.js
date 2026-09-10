console.log("connected opener check");

var openerElement;
window.customElements.whenDefined('my-opener').then(function () {
    openerElement = document.getElementById("opener");

    if (sessionStorage.getItem("visitorName") == null)
        openerElement.style.display = `block`
    else
        openerElement.style.display = 'none'

    document.getElementById("visitorForm").addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch(event.target.action, {
        method: event.target.method,
        body: formData
    }).then(
        registerVisitor(false),
        openerElement.style.display = 'none'
    )
})

    // document.getElementById("submitVisitor").addEventListener('click', function (event) {
    //     event.preventDefault();
    //     registerVisitor(false);
    //     openerElement.style.display = "none";
    // })

    document.getElementById("submitAnon").addEventListener('click', function (event) {
        event.preventDefault();
        registerVisitor(true);
        openerElement.style.display = "none";
    })
})




function registerVisitor(anonCheck) {
    if (!anonCheck) {
        sessionStorage.setItem("vistorName", document.getElementById("visitorName").value);
        sessionStorage.setItem("vistorCompany", document.getElementById("visitorCompany").value);

    } else {
        sessionStorage.setItem("visitorName", "anonymous")
        sessionStorage.setItem("visitorCompany", "anonymous")
    }

}

