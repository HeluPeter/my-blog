const endDate = new Date("2025-05-10T00:00:00"); // Ngày hết hạn
const countdownElement = document.getElementById("countdown");

function startCountdown() {
    const timerInterval = setInterval(() => {
        const now = new Date();
        const distance = endDate - now; // Tính khoảng cách thời gian còn lại

        if (distance <= 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "<div class='time-block'><div>0</div><div class='time-label'>days</div></div><div class='time-block'><div>0</div><div class='time-label'>hours</div></div><div class='time-block'><div>0</div><div class='time-label'>minutes</div></div><div class='time-block'><div>0</div><div class='time-label'>seconds</div></div>"; // Hiển thị đã hết hạn
        } else {
            // Tính toán ngày, giờ, phút và giây còn lại
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Cập nhật nội dung cho countdown
            countdownElement.innerHTML = `
                <div class='time-block'>
                    <div>${days}</div>
                    <div class='time-label'>days</div>
                </div>
                <div class='time-block'>
                    <div>${hours}</div>
                    <div class='time-label'>hours</div>
                </div>
                <div class='time-block'>
                    <div>${minutes}</div>
                    <div class='time-label'>minutes</div>
                </div>
                <div class='time-block'>
                    <div>${seconds}</div>
                    <div class='time-label'>seconds</div>
                </div>`;
        }
    }, 1000);
}

// Bắt đầu đếm ngược
startCountdown();