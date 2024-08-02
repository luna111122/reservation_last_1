
var bttn = document.querySelector(".buttonsss");

bttn.addEventListener("click", function() {
    var result = confirm("예약을 확인했습니다.");
    if (result) {
                // 확인을 누르면 이동할 URL 시간표 페이지로
                    window.location.href = "http://example.com"; 
            }
            // 취소를 누르면 아무 일도 일어나지 않음
        });