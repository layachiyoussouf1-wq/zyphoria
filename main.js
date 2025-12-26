// تسجيل الدخول
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (user === "" || pass === "") {
        msg.innerText = "من فضلك املأ جميع الخانات.";
        return;
    }

    msg.innerText = "";
    alert("تم تسجيل الدخول بنجاح! (نسخة تجريبية)");

    // تخزين حالة تسجيل الدخول
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", user);

    window.location.href = "dashboard.html";
}

// تسجيل الخروج
function logout() {
    alert("تم تسجيل الخروج بنجاح!");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

// إنشاء حساب
function register() {
    let user = document.getElementById("newUsername").value;
    let email = document.getElementById("newEmail").value;
    let pass = document.getElementById("newPassword").value;
    let msg = document.getElementById("msgRegister");

    if (user === "" || email === "" || pass === "") {
        msg.innerText = "من فضلك املأ جميع الخانات.";
        return;
    }

    msg.innerText = "";
    alert("تم إنشاء الحساب بنجاح! (نسخة تجريبية)");
    window.location.href = "login.html";
}

// إكمال مهمة
function completeTask(taskName, points) {
    alert(`${taskName} تم إكمالها! لقد ربحت ${points} نقاط.`);
    let balanceElem = document.getElementById("balance");
    if (balanceElem) {
        let currentPoints = parseInt(balanceElem.innerText) || 0;
        balanceElem.innerText = currentPoints + points + " نقاط";
    }
}

// طلب سحب
function withdraw() {
    let wallet = document.getElementById("wallet").value;
    let amount = document.getElementById("amount").value;
    let msg = document.getElementById("withdrawMsg");

    if (wallet === "" || amount === "") {
        msg.innerText = "من فضلك املأ جميع الخانات.";
        return;
    }

    msg.innerText = "";
    alert(`تم إرسال طلب سحب ${amount} USDT إلى المحفظة: ${wallet}`);
}

// نسخ رابط الدعوة
function copyReferral() {
    let referralInput = document.getElementById("referralLink");
    referralInput.select();
    referralInput.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(referralInput.value)
        .then(() => alert("تم نسخ رابط الدعوة!"))
        .catch(() => alert("فشل نسخ الرابط."));
}

// حماية الصفحات الحساسة
if (["dashboard.html","tasks.html","withdraw.html","referral.html","rules.html"].includes(location.pathname.split("/").pop())) {
    if (localStorage.getItem("loggedIn") !== "true") {
        alert("الرجاء تسجيل الدخول أولاً!");
        window.location.href = "login.html";
    }
}