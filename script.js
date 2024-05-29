document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.product .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('تم إضافة المنتج إلى سلة الشراء!');
        });
    });
});
