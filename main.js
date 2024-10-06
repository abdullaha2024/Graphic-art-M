// دالة التنقل بين الصفحات
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

// تهيئة تسجيل الدخول باستخدام حساب جوجل
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();

    // إضافة الحدث لفتح القائمة الجانبية
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // إضافة الحدث لإغلاق القائمة الجانبية
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
    });
}
