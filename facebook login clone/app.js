let pass = document.querySelector('#pass')
let btn = document.querySelector('#btn')
let eyeImg = document.querySelector("#eye")


// document.addEventListener('DOMContentLoaded', () => {

//     // Function to show/hide the eye icon based on input length
//     function toggleEyeIcon() {
//         if (pass.value.length > 0) {
//             eyeImg.style.display = 'inline'; // Show the eye icon
//         } else {
//             eyeImg.style.display = 'none'; // Hide the eye icon
//         }
//     }

//     // Event listener to check input length
//     pass.addEventListener('input', toggleEyeIcon);

//     // Event listener to toggle password visibility
//     eyeImg.addEventListener('click', () => {
//         if (pass.type === 'password') {
//             pass.type = 'text';
//             eyeImg.src = './img/eye.png'; // Change to open eye icon
//         } else {
//             pass.type = 'password';
//             eyeImg.src = './img/P5YOMZ2AvVl.png'; // Change to closed eye icon
//         }
//     });
// });

pass.addEventListener('input', (event) => {
    if (pass.value.length > 0) {
        eyeImg.style.display = "inline";

        console.log("hi");

        eyeImg.addEventListener('click', () => {
            if (pass.getAttribute('type') == "password") {
                pass.setAttribute("type", "text")
                eyeImg.setAttribute("src", "./img/eye.png")
            }



            else if (pass.getAttribute('type') == 'text') {
                pass.setAttribute('type', 'password')
                eyeImg.setAttribute("src", "./img/P5YOMZ2AvVl.png")
            }
        })

    } else { eyeImg.style.display = "none" }

});
