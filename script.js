// function untuk mendapatkan data form
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
    return { name, email, city, zipCode, status };
};

// function untuk mengecek jika string adalah number
function isNumber(str) {
    return !isNaN(str);
};

// function untuk memeriksa apakah checkbox dicentang
function checkboxIsChecked() {
    return handleGetFormData().status;
};

// function untuk melakukan validasi data form
function validateFormData(objek) {
    if (objek != null && isNumber(objek.zipCode) && checkboxIsChecked()) {
        return true;
    }
    return false;
};

// Function untuk menangani proses submit form
function submit() {
    const warning = document.getElementById("warning");
    const data = handleGetFormData();
    if (validateFormData(data) == false) {
        return warning.textContent = "Periksa form anda sekali lagi";
    } else {
        return warning.textContent = "";
    }
};

document.getElementById("submit-form").addEventListener("click", (event) => {
    event.preventDefault();
    submit();
});