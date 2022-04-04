// $(document).ready(addEventListener() {
//     $('submit').on('click', function(event){
//         let submit = $("#submit");
//     submit.on("click",function(event){
//         valid = true;
//         let name = $("#name");
//         let email = $("#email");
//         let phone = $("#phone");
//         let message = $("#message");
//         let required = [name,email,phone];
//         for (i = 0; i < required.length; i++) {
//         if (required[i].val() == "") {
//         message.html("Please Fill Out Required Fields");
//         message.addClass("warning");
//         } else {
//             (required[i].val() != "")
//         remove.addClass;
//         };
// })
$(function() {
    let submit = $("#submit");
    submit.on("click",function(event){
        valid = true;
        let name = $("#name");
        let email = $("#email");
        let phone = $("#phone");
        let message = $("#message-area");
        let required = [name,email,phone];
        for (i = 0; i < required.length; i++) {
        if (required[i].val() == "") {
        required[i].prev().addClass("warning");
        message.html("Please Fill Out Required Fields");
        message.addClass("warning");
        } else {
        require[i].prev().removeClass("warning");
        message.removeClass("warning");
        } 
    } 
    if (!$("label").hasClass("warning")) {
        $("#form").remove();
        $("h2").html("Thanks for your feedback!");
    }
})
})
