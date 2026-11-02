document.addEventListener('DOMContentLoaded', () => {
    initLoanCalculator();
});

function initLoanCalculator() {
    // 1. ดึง Element ตาม ID ในหน้า HTML
    const loanRange = document.getElementById('loanRange');
    const termRange = document.getElementById('termRange');
    const loanAmountDisplay = document.getElementById('loanAmountDisplay');
    const loanTermDisplay = document.getElementById('loanTermDisplay');
    const monthlyPaymentDisplay = document.getElementById('monthlyPaymentDisplay');
    const summaryPrincipal = document.getElementById('summaryPrincipal');

    // ตรวจสอบว่าพบ Element ครบถ้วนหรือไม่
    if (!loanRange || !termRange || !monthlyPaymentDisplay) {
        console.error('ไม่พบ Element สำหรับคำนวณค่างวด');
        return;
    }

    // 2. ฟังก์ชันคำนวณค่างวดผ่อนชำระ
    function calculateLoan() {
        const principal = parseFloat(loanRange.value);
        const months = parseInt(termRange.value);
        
        // กำหนดอัตราดอกเบี้ยอ้างอิง (เช่น 18% ต่อปี หรือ 1.5% ต่อเดือน)
        const annualRate = 0.28; // 28% ต่อปี
        const monthlyRate = annualRate / 12;

        // คำนวณค่างวดรายเดือนแบบลดต้นลดดอก (Amortization)
        // สูตร: PMT = P * [r(1+r)^n] / [(1+r)^n - 1]
        let monthlyPayment = 0;
        if (monthlyRate > 0) {
            monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        } else {
            monthlyPayment = principal / months;
        }

        // 3. แสดงผลตัวเลขแบบมีคอมม่า (Format Currency)
        const formattedPrincipal = new Intl.NumberFormat('lo-LA').format(principal);
        const formattedPayment = new Intl.NumberFormat('lo-LA').format(Math.round(monthlyPayment));

        if (loanAmountDisplay) loanAmountDisplay.textContent = `${formattedPrincipal} ກີບ`;
        if (loanTermDisplay) loanTermDisplay.textContent = `${months} ເດືອນ`;
        if (summaryPrincipal) summaryPrincipal.textContent = `${formattedPrincipal} ກີບ`;
        
        monthlyPaymentDisplay.textContent = formattedPayment;
    }

    // 4. ผูก Event Listener เมื่อมีการเลื่อน Slider
    loanRange.addEventListener('input', calculateLoan);
    termRange.addEventListener('input', calculateLoan);

    // 5. สั่งคำนวณครั้งแรกทันทีเมื่อโหลดหน้าเว็บ
    calculateLoan();
}