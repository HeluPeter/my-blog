
// Dữ liệu câu hỏi
const questions = [
  {
    question: "Phụng vụ là gì?",
    options: [
      "A. Là các việc đạo đức riêng lẻ của tín hữu",
      "B. Là nghi thức rửa tội và thêm sức",
      "C. Là việc Hội Thánh chính thức cử hành mầu nhiệm Đức Kitô",
      "D. Là các buổi học giáo lý"
    ],
    correctAnswer: "C",
    explanation: "1. H. Phụng vụ là gì? - T. Phụng vụ là việc Hội Thánh chính thức cử hành mầu nhiệm Đức Kitô, để thờ phượng Thiên Chúa và thánh hóa con người."
  },
  {
    question: "Mục đích của phụng vụ là gì?",
    options: [
      "A. Giải trí và giáo dục tín hữu",
      "B. Đọc Kinh Thánh hằng ngày",
      "C. Thờ phượng Thiên Chúa và thánh hóa con người",
      "D. Cử hành các nghi thức dân gian"
    ],
    correctAnswer: "C",
    explanation: "1. H. Phụng vụ là gì? - T. Phụng vụ là việc Hội Thánh chính thức cử hành mầu nhiệm Đức Kitô, để thờ phượng Thiên Chúa và thánh hóa con người."
  },
  {
    question: "Phụng vụ có vị trí nào trong Hội Thánh?",
    options: [
      "A. Là một hoạt động phụ trợ của Hội Thánh",
      "B. Là chóp đỉnh và là nguồn mạch các hoạt động của Hội Thánh",
      "C. Là một nghi thức cổ truyền không còn thực hành",
      "D. Là cách Hội Thánh quy tụ các linh mục"
    ],
    correctAnswer: "B",
    explanation: "2. H. Phụng vụ có vị trí nào trong Hội Thánh? - T. Phụng vụ là chóp đỉnh và là nguồn mạch các hoạt động của Hội Thánh, qua đó Đức Kitô tiếp tục công trình cứu độ của Ngài."
  },
  {
    question: "Qua phụng vụ, Đức Kitô thực hiện điều gì?",
    options: [
      "A. Dạy giáo lý cho các tín hữu",
      "B. Giảng dạy Kinh Thánh",
      "C. Tiếp tục công trình cứu độ của Ngài",
      "D. Quy tụ cộng đoàn dân Chúa"
    ],
    correctAnswer: "C",
    explanation: "2. H. Phụng vụ có vị trí nào trong Hội Thánh? - T. Phụng vụ là chóp đỉnh và là nguồn mạch các hoạt động của Hội Thánh, qua đó Đức Kitô tiếp tục công trình cứu độ của Ngài."
  },
  {
    question: "Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua đâu?",
    options: [
      "A. Qua việc đọc Kinh Thánh",
      "B. Qua các nghi thức truyền thống",
      "C. Qua các bí tích",
      "D. Qua lời giảng của các thánh tông đồ"
    ],
    correctAnswer: "C",
    explanation: "3. H. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh thế nào? - T. Đức Kitô tiếp tục công trình cứu độ của Ngài trong Hội Thánh qua các bí tích được gọi là nhiệm cục bí tích."
  },
  {
    question: "Nhiệm cục bí tích là gì?",
    options: [
      "A. Là quy định về phụng vụ trong Giáo Hội",
      "B. Là hệ thống luật lệ bí tích",
      "C. Là việc truyền đạt ơn cứu độ qua bí tích",
      "D. Là việc ghi chép các nghi thức phụng vụ"
    ],
    correctAnswer: "C",
    explanation: "4. H. Nhiệm cục bí tích là gì? - T. Nhiệm cục bí tích là sự chuyển thông ơn cứu độ của Chúa qua việc Hội Thánh cử hành các bí tích, nhất là bí tích Thánh Thể."
  },
  {
    question: "Ai hành động trong phụng vụ?",
    options: [
      "A. Linh mục và giáo dân",
      "B. Hội Thánh trên trần gian",
      "C. Đức Kitô và toàn thể Hội Thánh",
      "D. Các thừa tác viên và ca đoàn"
    ],
    correctAnswer: "C",
    explanation: "5. H. Ai hành động trong phụng vụ? - T. Chính “Đức Kitô toàn thể”, nghĩa là Đức Kitô cùng với Thân Thể của Ngài là Hội Thánh trên trời và Hội Thánh ở trần gian hành động trong phụng vụ."
  },
  {
    question: "“Đức Kitô toàn thể” gồm ai?",
    options: [
      "A. Đức Kitô và các thánh tử đạo",
      "B. Đức Kitô và Giáo Hoàng",
      "C. Đức Kitô và Hội Thánh trên trời và dưới đất",
      "D. Đức Kitô và các linh mục"
    ],
    correctAnswer: "C",
    explanation: "5. H. Ai hành động trong phụng vụ? - T. Chính “Đức Kitô toàn thể”, nghĩa là Đức Kitô cùng với Thân Thể của Ngài là Hội Thánh trên trời và Hội Thánh ở trần gian hành động trong phụng vụ."
  },
  {
    question: "Cử hành phụng vụ gồm những yếu tố nào?",
    options: [
      "A. Cầu nguyện chung và suy niệm cá nhân",
      "B. Dấu chỉ, biểu tượng, lời nói và hành động",
      "C. Suy gẫm và học hỏi Thánh Kinh",
      "D. Ca hát và rước lễ"
    ],
    correctAnswer: "B",
    explanation: "6. H. Cử hành phụng vụ gồm những yếu tố nào? - T. Cử hành phụng vụ gồm hai yếu tố: các dấu chỉ và biểu tượng, và lời nói và hành động."
  },
  {
    question: "Các dấu chỉ và biểu tượng trong phụng vụ nhằm mục đích gì?",
    options: [
      "A. Trang trí nhà thờ",
      "B. Gợi cảm xúc tôn giáo",
      "C. Diễn tả và thực hiện hành động cứu độ",
      "D. Gợi nhớ truyền thống văn hóa"
    ],
    correctAnswer: "C",
    explanation: "6. H. Cử hành phụng vụ gồm những yếu tố nào? - T. Một là các dấu chỉ và biểu tượng, để diễn tả và thực hiện hành động cứu độ của Đức Kitô."
  },
  {
    "question": "Ngày Chúa Nhật quan trọng thế nào trong Năm Phụng Vụ?",
    "options": [
      "A. Là ngày nghỉ ngơi và sinh hoạt gia đình",
      "B. Là ngày đầu tuần trong lịch phụng vụ",
      "C. Là nền tảng và trung tâm của Năm Phụng Vụ",
      "D. Là ngày tổ chức tiệc mừng trong giáo xứ"
    ],
    "correctAnswer": "C",
    "explanation": "Giải thích: 7. H. Ngày Chúa Nhật quan trọng thế nào trong Năm phụng vụ? - T. Ngày Chúa Nhật rất quan trọng vì là “Ngày của Chúa”, ngày Chúa Phục Sinh. Vì thế, ngày Chúa Nhật là nền tảng và trung tâm của cả Năm Phụng vụ."
  },
  {
    "question": "Tại sao Chúa Nhật là ngày quan trọng?",
    "options": [
      "A. Vì là ngày lễ lớn nhất trong năm",
      "B. Vì là ngày Chúa Phục Sinh",
      "C. Vì là ngày cầu nguyện riêng của mỗi người",
      "D. Vì là ngày dành cho giới trẻ"
    ],
    "correctAnswer": "B",
    "explanation": "Giải thích: 7. H. Ngày Chúa Nhật quan trọng thế nào trong Năm phụng vụ? - T. Ngày Chúa Nhật rất quan trọng vì là “Ngày của Chúa”, ngày Chúa Phục Sinh."
  },
  {
    "question": "Năm Phụng Vụ là gì?",
    "options": [
      "A. Là lịch tổ chức các lễ hội trong năm",
      "B. Là thời gian Giáo Hội cử hành các mầu nhiệm Đức Kitô",
      "C. Là kế hoạch sinh hoạt giáo xứ",
      "D. Là chu kỳ phụng vụ kéo dài 3 năm"
    ],
    "correctAnswer": "B",
    "explanation": "Giải thích: 8. H. Năm phụng vụ là gì? - T. Năm Phụng vụ là thời gian Hội Thánh cử hành các mầu nhiệm Đức Kitô, để giúp chúng ta sống những mầu nhiệm ấy, hầu chuẩn bị đón Ngài lại đến trong vinh quang."
  },
  {
    "question": "Năm Phụng Vụ giúp ta làm gì?",
    "options": [
      "A. Nhớ đến các thánh lễ đặc biệt",
      "B. Hiểu rõ hơn về Kinh Thánh",
      "C. Sống các mầu nhiệm Đức Kitô và chuẩn bị đón Ngài",
      "D. Ghi nhớ các sinh hoạt trong giáo xứ"
    ],
    "correctAnswer": "C",
    "explanation": "Giải thích: 8. H. Năm phụng vụ là gì? - T. Năm Phụng vụ là thời gian Hội Thánh cử hành các mầu nhiệm Đức Kitô, để giúp chúng ta sống những mầu nhiệm ấy, hầu chuẩn bị đón Ngài lại đến trong vinh quang."
  },
  {
    "question": "Phụng vụ Các Giờ Kinh là gì?",
    "options": [
      "A. Là việc suy niệm cá nhân trong ngày",
      "B. Là lời cầu nguyện do các linh mục đọc trong Thánh lễ",
      "C. Là lời cầu nguyện của Đức Kitô cùng với Hội Thánh",
      "D. Là giờ đọc kinh riêng của các tu sĩ"
    ],
    "correctAnswer": "C",
    "explanation": "Giải thích: 9. H. Phụng vụ Các Giờ Kinh là gì? - T. Phụng vụ Các Giờ Kinh là lời cầu nguyện của Đức Kitô cùng với Hội Thánh, để giúp các tín hữu thánh hóa thời gian trong ngày."
  },
  {
    "question": "Mục đích của Phụng vụ Các Giờ Kinh là gì?",
    "options": [
      "A. Giúp các tu sĩ chuyên cần hơn",
      "B. Thánh hóa thời gian trong ngày",
      "C. Tăng lòng sốt sắng trong Thánh lễ",
      "D. Giúp người tín hữu học hỏi Kinh Thánh"
    ],
    "correctAnswer": "B",
    "explanation": "Giải thích: 9. H. Phụng vụ Các Giờ Kinh là gì? - T. Phụng vụ Các Giờ Kinh là lời cầu nguyện của Đức Kitô cùng với Hội Thánh, để giúp các tín hữu thánh hóa thời gian trong ngày."
  },
  {
    "question": "Bí tích là gì?",
    "options": [
      "A. Là nghi thức phụng vụ do linh mục thực hiện",
      "B. Là dấu chỉ bên ngoài do Chúa Giê-su lập để ban ân sủng",
      "C. Là hành động thờ phượng cá nhân của tín hữu",
      "D. Là việc giảng dạy giáo lý trong Hội Thánh"
    ],
    "correctAnswer": "B",
    "explanation": "Giải thích: 10. H. Bí tích là gì? - T. Bí tích là dấu chỉ bên ngoài Chúa Giê-su đã lập và truyền lại cho Hội Thánh cử hành, để diễn tả và thông ban cho chúng ta ân sủng bên trong là sự sống thần linh."
  },
  {
    "question": "Ân sủng bên trong được thông ban qua bí tích là gì?",
    "options": [
      "A. Sự hiểu biết Lời Chúa",
      "B. Sự sống thần linh",
      "C. Sự tha thứ tội lỗi",
      "D. Sự tham gia vào Hội Thánh"
    ],
    "correctAnswer": "B",
    "explanation": "Giải thích: 10. H. Bí tích là gì? - T. Bí tích là dấu chỉ bên ngoài Chúa Giê-su đã lập và truyền lại cho Hội Thánh cử hành, để diễn tả và thông ban cho chúng ta ân sủng bên trong là sự sống thần linh."
  },
  {
    "question": "Hội Thánh có bao nhiêu bí tích?",
    "options": [
      "A. Năm",
      "B. Bảy",
      "C. Tám",
      "D. Mười"
    ],
    "correctAnswer": "B",
    "explanation": "Giải thích: 11. H. Có mấy bí tích? - T. Có 7 bí tích: Rửa Tội, Thêm Sức, Thánh Thể, Thống Hối, Xức Dầu Bệnh Nhân, Truyền Chức Thánh và Hôn Phối."
  },
  {
    "question": "Bí tích nào sau đây không nằm trong 7 bí tích?",
    "options": [
      "A. Bí tích Hôn Phối",
      "B. Bí tích Rửa Tội",
      "C. Bí tích Cầu Nguyện",
      "D. Bí tích Thống Hối"
    ],
    "correctAnswer": "C",
    "explanation": "Giải thích: 11. H. Có mấy bí tích? - T. Có 7 bí tích: Rửa Tội, Thêm Sức, Thánh Thể, Thống Hối, Xức Dầu Bệnh Nhân, Truyền Chức Thánh và Hôn Phối."
  },
  {
    "question": "Các bí tích của Hội Thánh được chia làm mấy loại?",
    "options": ["A. Hai loại","B. Ba loại","C. Bốn loại","D. Sáu loại"],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 12. H. Các bí tích của Hội Thánh được phân loại thế nào? - T. Các bí tích của Hội Thánh được phân thành ba loại: bí tích khai tâm Kitô giáo, bí tích chữa lành và bí tích phục vụ.)"
  },
  {
    "question": "Các bí tích chữa lành thuộc nhóm nào?",
    "options": ["A. Bí tích khai tâm","B. Bí tích phục vụ","C. Bí tích chữa lành","D. Bí tích tuyên hứa"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 12. H. Các bí tích của Hội Thánh được phân loại thế nào? - T. Các bí tích của Hội Thánh được phân thành ba loại: bí tích khai tâm Kitô giáo, bí tích chữa lành và bí tích phục vụ.)"
  },
  {
    "question": "Các bí tích khai tâm Kitô giáo gồm những bí tích nào?",
    "options": ["A. Rửa Tội, Thêm Sức và Thánh Thể","B. Thánh Thể, Hòa Giải và Hôn Phối","C. Rửa Tội, Xức Dầu và Thánh Thể","D. Truyền Chức, Rửa Tội và Hôn Phối"],
    "correctAnswer": "A",
    "explanation": "(Giải thích: 13. H. Các bí tích khai tâm Kitô Giáo gồm những bí tích nào? - T. Các bí tích khai tâm Kitô giáo gồm Bí tích Rửa Tội, Thêm Sức và Thánh Thể.)"
  },
  {
    "question": "Mục đích của các bí tích khai tâm là gì?",
    "options": ["A. Thống hối và tha tội","B. Củng cố đức tin và truyền giáo","C. Tái sinh, củng cố và nuôi dưỡng đời sống mới","D. Chuẩn bị cho chức thánh"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 13. H. Các bí tích khai tâm Kitô Giáo gồm những bí tích nào? - T. Các bí tích này tái sinh, củng cố và nuôi dưỡng các tín hữu trong đời sống mới.)"
  },
  {
    "question": "Các bí tích chữa lành gồm những bí tích nào?",
    "options": ["A. Hòa Giải và Thêm Sức","B. Xức Dầu và Rửa Tội","C. Thống Hối và Xức Dầu Bệnh Nhân","D. Truyền Chức và Thánh Thể"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 14. H. Các bí tích chữa lành gồm những bí tích nào? - T. Các bí tích chữa lành gồm Bí tích Thống Hối và Xức Dầu Bệnh Nhân.)"
  },
  {
    "question": "Tác dụng của các bí tích chữa lành là gì?",
    "options": ["A. Ban ơn gọi mới","B. Phục hồi và củng cố đời sống mới","C. Khơi dậy lòng mộ đạo","D. Giúp lãnh nhận các bí tích khác"],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 14. H. Các bí tích chữa lành gồm những bí tích nào? - T. Các bí tích này phục hồi và củng cố đời sống mới của các tín hữu đã bị suy yếu hoặc mất đi do tội lỗi.)"
  },
  {
    "question": "Các bí tích phục vụ gồm những bí tích nào?",
    "options": ["A. Hôn Phối và Truyền Chức Thánh","B. Rửa Tội và Thánh Thể","C. Thống Hối và Thêm Sức","D. Truyền Chức Thánh và Xức Dầu"],
    "correctAnswer": "A",
    "explanation": "(Giải thích: 15. H. Các bí tích phục vụ gồm những bí tích nào? - T. Các bí tích phục vụ gồm Bí tích Truyền Chức Thánh và Hôn Phối.)"
  },
  {
    "question": "Mục đích của các bí tích phục vụ là gì?",
    "options": ["A. Tha thứ tội lỗi","B. Nuôi dưỡng đức tin","C. Xây dựng Dân Thiên Chúa","D. Thánh hóa thời gian"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 15. H. Các bí tích phục vụ gồm những bí tích nào? - T. Hai bí tích này đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh, để xây dựng Dân Thiên Chúa.)"
  },
  {
    "question": "Ấn tín bí tích là gì?",
    "options": ["A. Một lời tuyên hứa của người lãnh bí tích","B. Dấu ấn thiêng liêng Thiên Chúa in vào lòng người lãnh nhận","C. Một giấy chứng nhận đã nhận bí tích","D. Hành động công khai trước cộng đoàn"],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 16. H. Ấn tín bí tích là gì? - T. Ấn tín bí tích là dấu ấn thiêng liêng, Thiên Chúa in vào lòng những người lãnh Bí tích Rửa Tội, Thêm Sức, Truyền Chức Thánh.)"
  },
  {
    "question": "Vì sao một số bí tích chỉ được lãnh một lần?",
    "options": ["A. Vì không cần lặp lại","B. Vì chúng không thay đổi","C. Vì ấn tín không thể xóa được","D. Vì Hội Thánh quy định như vậy"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 16. H. Ấn tín bí tích là gì? - T. Vì ấn tín không thể xóa được, nên các bí tích này chỉ được lãnh một lần mà thôi.)"
  },
  {
    "question": "Vì sao gọi là bí tích đức tin?",
    "options": [
      "A. Vì chỉ ai học giáo lý mới được lãnh nhận",
      "B. Vì cần đức tin khi lãnh nhận và đức tin được củng cố qua bí tích",
      "C. Vì đó là những bí tích dành riêng cho các tín hữu đạo đức",
      "D. Vì giúp người lãnh nhận ghi nhớ Lời Chúa"
    ],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 17. H. Vì sao gọi là bí tích đức tin? - T. Vì khi lãnh nhận bí tích, chúng ta phải có đức tin, đồng thời nhờ các bí tích, đức tin của chúng ta thêm mạnh mẽ vững vàng.)"
  },
  {
    "question": "Khi lãnh nhận bí tích, người tín hữu cần có điều gì?",
    "options": [
      "A. Kiến thức giáo lý đầy đủ",
      "B. Tâm trạng vui tươi",
      "C. Đức tin",
      "D. Ước muốn lãnh chức thánh"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 17. H. Vì sao gọi là bí tích đức tin? - T. Vì khi lãnh nhận bí tích, chúng ta phải có đức tin.)"
  },
  {
    "question": "Ai là Đấng ban ân sủng trong các bí tích?",
    "options": [
      "A. Linh mục chủ sự",
      "B. Hội Thánh",
      "C. Đức Kitô",
      "D. Cộng đoàn phụng vụ"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 18. H. Ai ban ân sủng trong các bí tích? - T. Chính Đức Kitô hoạt động và thông ban ân sủng trong các bí tích.)"
  },
  {
    "question": "Hiệu quả của bí tích tùy thuộc vào điều gì?",
    "options": [
      "A. Số lần lãnh nhận",
      "B. Tình trạng sức khỏe người lãnh nhận",
      "C. Sự chuẩn bị nội tâm của người lãnh nhận",
      "D. Cộng đoàn tham dự đông đủ"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 18. H. Ai ban ân sủng trong các bí tích? - T. Ân sủng này có mang lại lợi ích hay không thì còn tùy thuộc vào sự chuẩn bị nội tâm của người lãnh nhận.)"
  },
  {
    "question": "Vì sao các bí tích cần thiết cho ơn cứu độ?",
    "options": [
      "A. Vì giúp người tín hữu giữ luật Chúa",
      "B. Vì ban ân sủng của Chúa Thánh Thần để chữa lành và biến đổi",
      "C. Vì là truyền thống của Hội Thánh",
      "D. Vì chứng minh lòng trung thành"
    ],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 19. H. Vì sao các bí tích cần thiết cho ơn cứu độ? - T. Vì các bí tích trao ban ân sủng của Chúa Thánh Thần, để Ngài chữa lành và biến đổi chúng ta.)"
  },
  {
    "question": "Chức năng chính của các bí tích là gì?",
    "options": [
      "A. Hướng dẫn đức tin",
      "B. Ban ơn gọi",
      "C. Trao ban ân sủng để chữa lành và biến đổi",
      "D. Thống nhất Hội Thánh"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 19. H. Vì sao các bí tích cần thiết cho ơn cứu độ? - T. Vì các bí tích trao ban ân sủng của Chúa Thánh Thần, để Ngài chữa lành và biến đổi chúng ta.)"
  },
  {
    "question": "Các bí tích giúp chúng ta sống đời sống vĩnh cửu bằng cách nào?",
    "options": [
      "A. Làm cho chúng ta trở nên thánh thiện hoàn toàn",
      "B. Giúp chúng ta sống sung túc hơn",
      "C. Cho chúng ta tham dự trước vào đời sống vĩnh cửu trong khi chờ Đức Kitô đến",
      "D. Ban cho chúng ta nhiều phép lạ trong cuộc sống"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 20. H. Các bí tích giúp chúng ta sống đời sống vĩnh cửu thế nào? - T. Các bí tích cho chúng ta tham dự trước vào đời sống vĩnh cửu, đang khi mong chờ ngày Đức Kitô ngự đến trong vinh quang.)"
  },
  {
    "question": "Bí Tích Rửa Tội là gì?",
    "options": [
      "A. Là nghi lễ gia nhập cộng đoàn giáo xứ",
      "B. Là bí tích Chúa Giê su lập, để sinh lại trong đời sống mới bởi nước và Thánh Thần",
      "C. Là nghi thức xức dầu và đặt tay",
      "D. Là bí tích xóa mọi tội lỗi và cho lên thiên đàng ngay"
    ],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 21. H. Bí Tích Rửa Tội là gì? - T. Là bí tích Chúa Giê su đã lập, để làm cho chúng ta được sinh lại trong đời sống mới bởi nước và Thánh Thần.)"
  },
  {
    "question": "Nghi thức chính yếu của Bí Tích Rửa Tội là gì?",
    "options": [
      "A. Đọc kinh Lạy Cha ba lần",
      "B. Xức dầu thánh trên trán",
      "C. Dìm xuống nước hay đổ nước trên đầu và đọc lời “Tôi rửa anh...”",
      "D. Đặt tay và cầu nguyện trong thinh lặng"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 22. H. Nghi thức chính yếu của Bí Tích Rửa Tội là gì? - T. Nghi thức chính yếu của Bí Tích Rửa Tội là dìm xuống nước hay đổ nước trên đầu người lãnh bí tích và nói: “Tôi rửa anh, nhân danh Cha và Con và Thánh Thần”.)"
  },
  {
    "question": "Bí Tích Rửa Tội có cần thiết cho ơn cứu độ không?",
    "options": [
      "A. Không cần thiết vì ai cũng được cứu nếu làm việc lành",
      "B. Chỉ cần thiết cho các linh mục",
      "C. Không cần nếu đã rửa tội lúc nhỏ",
      "D. Cần thiết cho những ai đã nghe Tin Mừng và có khả năng lãnh nhận"
    ],
    "correctAnswer": "D",
    "explanation": "(Giải thích: 23. H. Bí Tích Rửa Tội có cần thiết cho ơn cứu độ không? - T. Bí Tích Rửa Tội cần thiết cho ơn cứu độ, đối với những ai đã nghe rao giảng Tin Mừng và có khả năng xin lãnh nhận bí tích này.)"
  },
  {
    "question": "Trường hợp nào dưới đây không thuộc ba trường hợp được cứu độ khi chưa lãnh Bí Tích Rửa Tội?",
    "options": [
      "A. Chết vì đức tin",
      "B. Có lòng ước ao lãnh nhận",
      "C. Từ chối đức tin và Hội Thánh",
      "D. Sống ngay lành theo tiếng lương tâm"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 24. H. Người không lãnh nhận Bí Tích Rửa Tội có được cứu độ không? - T. Người không lãnh Bí Tích Rửa Tội có thể được cứu độ trong ba trường hợp: một là chết vì đức tin; hai là có lòng ước ao nhưng chưa có điều kiện lãnh nhận; ba là chưa được biết Chúa Kitô và Hội Thánh, nhưng đã theo tiếng lương tâm mà sống ngay lành.)"
  },
  {
    "question": "Bí Tích Rửa Tội không ban cho chúng ta ơn nào sau đây?",
    "options": [
      "A. Tha tội tổ tông và tội riêng",
      "B. Trở thành con cái Thiên Chúa",
      "C. Được nhận chức linh mục",
      "D. Được ghi dấu ấn thiêng liêng không thể xóa"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 25. H. Bí Tích Rửa Tội ban cho chúng ta những ơn nào? - T. Một là được tha tội tổ tông và các tội riêng đã phạm; hai là được làm con cái Thiên Chúa; ba là được tháp nhập vào Đức Kitô và Hội Thánh; bốn là được ghi vào linh hồn dấu ấn thiêng liêng không bao giờ xóa được.)"
  },
  {
    "question": "Bí Tích Thêm Sức là gì?",
    "options": [
      "A. Là bí tích giúp rửa sạch mọi tội lỗi",
      "B. Là bí tích ban tràn đầy Chúa Thánh Thần để sống ơn Rửa Tội mạnh mẽ hơn",
      "C. Là bí tích giúp người lớn gia nhập đạo",
      "D. Là bí tích giúp lãnh nhận Mình Thánh Chúa"
    ],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 26. H. Bí Tích Thêm Sức là gì? - T. Là bí tích Chúa Giê su đã lập, để ban tràn đầy Chúa Thánh Thần, hầu giúp chúng ta sống ơn Bí Tích Rửa Tội cách mạnh mẽ và tốt đẹp hơn.)"
  },
  {
    "question": "Nghi thức chính yếu của Bí Tích Thêm Sức bao gồm điều nào sau đây?",
    "options": [
      "A. Đọc kinh Ăn Năn Tội",
      "B. Dâng của lễ",
      "C. Xức dầu thánh trên trán, đặt tay và đọc: “Hãy lãnh nhận ấn tín ơn Chúa Thánh Thần”",
      "D. Dìm xuống nước và đọc lời rửa tội"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 27. H. Nghi thức chính yếu của Bí Tích Thêm Sức là gì? - T. Là việc xức dầu thánh trên trán người đã lãnh Bí Tích Rửa Tội, cùng với việc đặt tay trên đầu người ấy và đọc rằng “Hãy lãnh nhận ấn tín ơn Chúa Thánh Thần”.)"
  },
  {
    "question": "Hiệu quả của Bí Tích Thêm Sức là gì?",
    "options": [
      "A. Tha hết tội lỗi",
      "B. Được nhận vào chức linh mục",
      "C. Ghi ấn tín không thể tẩy xóa và gia tăng ân sủng Rửa Tội",
      "D. Được lãnh ơn chữa lành"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 28. H. Hiệu quả của Bí Tích Thêm Sức là gì? - T. Là việc đổ tràn Chúa Thánh Thần trên người lãnh bí tích, nhờ đó họ được ghi ấn tín không thể tẩy xóa và gia tăng ân sủng Bí Tích Rửa Tội.)"
  },
  {
    "question": "Người muốn lãnh nhận Bí Tích Thêm Sức cần phải làm điều nào sau đây?",
    "options": [
      "A. Học thuộc lòng toàn bộ Kinh Thánh",
      "B. Sống đời tu trì",
      "C. Sạch tội trọng, học giáo lý và cầu nguyện sốt sắng",
      "D. Trở thành người có ảnh hưởng trong giáo xứ"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 29. H. Người muốn lãnh nhận Bí Tích Thêm Sức cần phải làm gì? - T. Một là phải sạch tội trọng; hai là phải học giáo lý, nhất là về Bí Tích Thêm Sức; ba là phải cầu nguyện sốt sắng và thật lòng ước ao lãnh nhận Chúa Thánh Thần.)"
  },
  {
    "question": "Người lãnh Bí Tích Thêm Sức cần tích cực thực hiện điều nào sau đây?",
    "options": [
      "A. Tránh tiếp xúc với người ngoại đạo",
      "B. Chỉ tham dự Thánh lễ Chúa Nhật",
      "C. Giới thiệu Chúa cho mọi người qua đời sống hằng ngày",
      "D. Chỉ đọc Kinh Thánh cá nhân"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: H. Người lãnh Bí Tích Thêm Sức có những bổn phận nào? – T. Người lãnh Bí Tích Thêm Sức có những bổn phận này: Một là nỗ lực thi hành Lời Chúa trong đời sống thường ngày; Hai là góp phần xây dựng xã hội theo tinh thần Tin Mừng; Ba là tích cực giới thiệu Chúa cho mọi người.)"
  },
  {
    "question": "Bí Tích Thánh Thể được thiết lập để làm gì?",
    "options": [
      "A. Làm dấu chỉ hiệp nhất giữa các tôn giáo",
      "B. Ghi nhớ bữa tiệc ly của Chúa",
      "C. Tiếp tục hy tế Thánh Giá và nuôi dưỡng linh hồn chúng ta bằng Mình Máu Chúa",
      "D. Tưởng niệm cái chết của các Thánh Tử Đạo"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: H. Bí Tích Thánh Thể là gì? – T. Là bí tích Chúa Giê su đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta.)"
  },
  {
    "question": "Câu nào sau đây là lời Chúa Giê-su khi thiết lập Bí Tích Thánh Thể?",
    "options": [
      "A. “Thầy là đường, là sự thật và là sự sống”",
      "B. “Tất cả các con hãy nhận lấy mà ăn: vì này là mình Thầy”",
      "C. “Phúc cho ai có lòng thương xót”",
      "D. “Ai muốn theo Thầy, phải vác thập giá mình”"
    ],
    "correctAnswer": "B",
    "explanation": "(Giải thích: H. Chúa Giê su đã lập Bí Tích Thánh Thể thế nào? – T. Khi tự nguyện nộp mình chịu khổ hình, Chúa Giê su cầm lấy bánh, tạ ơn, bẻ ra và trao cho các môn đệ mà nói: “Tất cả các con hãy nhận lấy mà ăn: vì này là mình Thầy, sẽ bị nộp vì các con”. Cùng một thể thức ấy, sau bữa ăn tối, Người cầm lấy chén rượu, cũng tạ ơn, trao cho các môn đệ mà nói: “Tất cả các con hãy nhận lấy mà uống: vì này là chén máu Thầy, máu Giao ước mới và vĩnh cửu, sẽ đổ ra cho các con và nhiều người được tha tội: Các con hãy làm việc này mà nhớ đến Thầy.”)"
  },
  {
    "question": "Tại sao Bí Tích Thánh Thể được gọi là “nguồn mạch và tột đỉnh” đời sống Kitô giáo?",
    "options": [
      "A. Vì được cử hành hàng ngày",
      "B. Vì là lúc cộng đoàn gặp gỡ nhau",
      "C. Vì chứa đựng chính Đức Kitô, Chiên Vượt Qua",
      "D. Vì đây là điều kiện để được cứu độ"
    ],
    "correctAnswer": "C",
    "explanation": "(Giải thích: H. Bí Tích Thánh Thể có ý nghĩa gì trong đời sống Kitô giáo? – T. Bí Tích Thánh Thể là nguồn mạch và tột đỉnh của toàn bộ đời sống Kitô giáo, chứa đựng tất cả kho tàng thiêng liêng của Hội Thánh là chính Đức Kitô, Chiên Vượt Qua của chúng ta.)"
  },
  {
    "question": "Thánh lễ có hai phần chính là gì?",
    "options": [
      "A. Phụng vụ Lời Chúa và chầu Thánh Thể",
      "B. Phụng vụ Lời Chúa và Phụng vụ Thánh Thể",
      "C. Thánh Ca và Rước lễ",
      "D. Lời nguyện chung và Tiệc Agape"
    ],
    "correctAnswer": "B",
    "explanation": "(Giải thích: H. Hội Thánh cử hành Bí Tích Thánh Thể thế nào? – T. Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ, gồm hai phần chính: Một là Phụng vụ Lời Chúa, khởi đi từ lời nguyện nhập lễ cho đến hết lời nguyện chung; Hai là Phụng vụ Thánh Thể, khởi đi từ việc chuẩn bị lễ vật cho đến hết lời nguyện hiệp lễ.)"
  },
  {
    "question": "Hội Thánh buộc rước lễ ít là bao nhiêu lần trong năm?",
    "options": [
      "A. Một lần trong mùa Phục Sinh",
      "B. Ba lần trong Mùa Chay",
      "C. Mỗi tháng một lần",
      "D. Mỗi Chúa Nhật"
    ],
    "correctAnswer": "A",
    "explanation": "(Giải thích: H. Hội Thánh dạy thế nào về việc rước lễ? – T. Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh lễ, và buộc rước lễ một năm ít là một lần trong mùa Phục Sinh.)"
  },
  {
    "question": "Một trong những điều kiện để rước lễ là gì?",
    "options": ["A. Có tấm lòng quảng đại","B. Biết hát Thánh Ca","C. Giữ chay theo quy định của Hội Thánh","D. Đọc hết 150 Thánh Vịnh"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: H. Phải có điều kiện nào để được rước lễ? – T. Phải có những điều kiện này: Một là hoàn toàn thuộc về Hội Thánh Công Giáo; Hai là ý thức mình không có tội trọng; Ba là phải giữ chay theo quy định của Hội Thánh; Bốn là có thái độ tôn kính Đức Kitô.)"
  },
  {
    "question": "Việc rước lễ giúp người tín hữu điều gì sau đây?",
    "options": ["A. Trở nên thông minh hơn","B. Được tẩy xóa tội tổ tông","C. Được kết hợp mật thiết với Đức Kitô và Hội Thánh","D. Thăng tiến trong công việc"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: H. Việc rước lễ đem lại cho chúng ta những ơn ích nào? – T. Việc rước lễ làm cho chúng ta được kết hợp mật thiết với Đức Kitô và Hội Thánh, được tẩy xóa các tội nhẹ, gia tăng ân sủng và lòng yêu mến tha nhân.)"
  },
  {
    "question": "Bí Tích Thống Hối được Chúa Giê-su lập vào thời điểm nào?",
    "options": ["A. Khi chịu Phép Rửa ở sông Giođan","B. Trong bữa tiệc ly","C. Khi hiện ra với các Tông đồ chiều ngày Phục Sinh","D. Khi giảng dạy trên núi"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: H. Chúa Giê su đã lập Bí Tích Thống Hối khi nào? – T. Chúa Giê su đã lập Bí Tích Thống Hối khi Ngài hiện ra với các Tông đồ vào chiều ngày Phục Sinh và nói rằng: “Anh em hãy nhận lấy Thánh Thần; anh em tha tội cho ai, thì tội người ấy được tha; anh em cầm giữ ai, thì tội người ấy bị cầm giữ.”)"
  },
  {
    "question": "Muốn xưng tội đúng cách, tín hữu cần làm gì trước tiên?",
    "options": ["A. Học giáo lý thêm","B. Dự lễ sớm","C. Xét mình","D. Gặp linh mục quen"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: H. Muốn lãnh nhận Bí Tích Thống Hối chúng ta phải làm gì? – T. Muốn lãnh Bí Tích Thống Hối chúng ta phải làm bốn việc này: Một là xét mình; Hai là ăn năn và dốc lòng chừa; Ba là xưng tội; Bốn là đền tội.)"
  },
  {
    "question": "Khi nào các tín hữu buộc phải xưng các tội trọng?",
    "options": ["A. Trước khi cầu nguyện riêng với Chúa","B. Trước khi lãnh Bí Tích Thêm Sức","C. Khi đã đến tuổi khôn, ít nhất một lần mỗi năm","D. Khi chuẩn bị đi hành hương"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 42. H. Khi nào các tín hữu buộc phải xưng các tội trọng? – T. Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ.)"
  },
  {
    "question": "Tín hữu phải xưng các tội trọng trước khi làm gì?",
    "options": ["A. Đọc kinh Mân Côi","B. Tham dự Thánh lễ","C. Rước lễ","D. Xét mình"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 42. H. Khi nào các tín hữu buộc phải xưng các tội trọng? – T. Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ.)"
  },
  {
    "question": "Một trong những hiệu quả của Bí Tích Thống Hối là gì?",
    "options": ["A. Cho tín hữu quyền giảng dạy giáo lý","B. Tha tội để giao hòa với Thiên Chúa và Hội Thánh","C. Thêm sức mạnh để làm phép lạ","D. Giúp hiểu rõ hơn Kinh Thánh"],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 43. H. Bí Tích Thống Hối có những hiệu quả nào? – T. Bí Tích Thống Hối có những hiệu quả này: Một là tha tội để giao hòa chúng ta với Thiên Chúa và Hội Thánh.)"
  },
  {
    "question": "Bí Tích Thống Hối mang lại điều gì cho cuộc chiến thiêng liêng của người Kitô hữu?",
    "options": ["A. Tấm khiên chống lại ma quỷ","B. Lời cầu nguyện mạnh mẽ hơn","C. Sự bình an và sức mạnh","D. Sự sáng suốt hơn trong quyết định"],
    "correctAnswer": "C",
    "explanation": "(Giải thích: 43. H. Bí Tích Thống Hối có những hiệu quả nào? – T. Bí Tích Thống Hối có những hiệu quả này: Ba là ban sự bình an và gia tăng sức mạnh cho cuộc chiến đấu thiêng liêng của người Kitô hữu.)"
  },
  {
    "question": "Ân xá là gì?",
    "options": ["A. Việc tha thứ hoàn toàn các tội trọng","B. Việc tha thứ các hình phạt tạm đáng chịu vì các tội đã được tha","C. Việc miễn trừ các hình phạt do luật Hội Thánh","D. Một hình thức của xưng tội"],
    "correctAnswer": "B",
    "explanation": "(Giải thích: 44. H. Ân xá là gì? – T. Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ.)"
  },
  {
    "question": "Bí Tích nào được Chúa Giê-su lập để ban Mình và Máu Ngài làm của ăn nuôi sống chúng ta?",
    "options": ["A. Bí Tích Rửa Tội","B. Bí Tích Thêm Sức","C. Bí Tích Truyền Chức Thánh","D. Bí Tích Thánh Thể"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 31. H. Bí Tích Thánh Thể là gì? - T. Là bí tích Chúa Giê-su đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta."
  },
  {
    "question": "Những hành vi nào của người sám hối là điều kiện cần để lãnh nhận Bí Tích Thống Hối?",
    "options": ["A. Đọc kinh ăn năn tội và tham dự Thánh lễ","B. Cầu nguyện và làm việc lành","C. Sám hối và rước lễ","D. Xét mình, ăn năn, xưng tội, đền tội"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 41. H. Muốn lãnh nhận Bí Tích Thống Hối chúng ta phải làm gì? - T. Phải làm bốn việc: xét mình, ăn năn và dốc lòng chừa, xưng tội, đền tội."
  },
  {
    "question": "Bí Tích nào giúp giao hòa chúng ta với Thiên Chúa và Hội Thánh sau khi phạm tội trọng?",
    "options": ["A. Bí Tích Rửa Tội","B. Bí Tích Thêm Sức","C. Bí Tích Xức Dầu Bệnh Nhân","D. Bí Tích Thống Hối"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 38. H. Bí Tích Thống Hối là gì? - T. Là bí tích Chúa Giê-su đã lập, để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí Tích Rửa Tội về sau, cùng giao hòa chúng ta với Thiên Chúa và Hội Thánh."
  },
  {
    "question": "Điều kiện nào sau đây không cần thiết để được rước lễ xứng đáng?",
    "options": ["A. Hoàn toàn thuộc về Hội Thánh Công Giáo","B. Không có tội trọng","C. Giữ chay theo quy định","D. Đã từng lãnh Bí Tích Thêm Sức"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 36. H. Phải có điều kiện nào để được rước lễ? - T. Gồm: thuộc Hội Thánh Công Giáo, không có tội trọng, giữ chay, và có thái độ tôn kính Đức Kitô. Không có yêu cầu về Bí Tích Thêm Sức."
  },
  {
    "question": "Bí Tích nào có hai yếu tố chính là hành vi của người sám hối và lời xá giải của linh mục?",
    "options": ["A. Bí Tích Rửa Tội","B. Bí Tích Thêm Sức","C. Bí Tích Xức Dầu Bệnh Nhân","D. Bí Tích Thống Hối"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 40. H. Bí Tích Thống Hối có những yếu tố chính yếu nào? - T. Một là hành vi của người sám hối; hai là lời xá giải của linh mục."
  },
  {
    "question": "Các tín hữu buộc phải xưng tội trọng trong những trường hợp nào sau đây?",
    "options": ["A. Trước khi đi hành hương","B. Khi cảm thấy hối hận","C. Khi tham gia lớp giáo lý","D. Ít nhất một năm một lần và trước khi rước lễ"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 42. H. Khi nào các tín hữu buộc phải xưng các tội trọng? - T. Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ."
  },
  {
    "question": "Hiệu quả nào không thuộc về Bí Tích Thống Hối?",
    "options": ["A. Tha tội và giao hòa với Thiên Chúa","B. Tha hình phạt muôn đời do tội trọng","C. Ban sự bình an và sức mạnh thiêng liêng","D. Thánh hóa Mình và Máu Đức Kitô"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 43. H. Bí Tích Thống Hối có những hiệu quả nào? - T. Tha tội, tha hình phạt, giao hòa, ban sự bình an và sức mạnh thiêng liêng. Không liên quan đến việc thánh hóa Mình và Máu Đức Kitô."
  },
  {
    "question": "Ân xá là việc gì trong Giáo Hội Công Giáo?",
    "options": ["A. Tha tội trọng khi không xưng tội","B. Ban thêm ơn đặc biệt của Chúa Thánh Thần","C. Thêm quyền năng cho người lãnh Bí Tích Truyền Chức","D. Tha hình phạt tạm đáng chịu vì tội đã được tha"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 44. H. Ân xá là gì? - T. Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ."
  },
  {
    "question": "Bí Tích Thánh Thể được cử hành qua hai phần chính nào trong Thánh lễ?",
    "options": ["A. Rước sách Tin Mừng và rước lễ","B. Dâng của lễ và chúc lành cuối lễ","C. Cầu nguyện đầu lễ và rước lễ","D. Phụng vụ Lời Chúa và Phụng vụ Thánh Thể"],
    "correctAnswer": "D",
    "explanation": "Giải thích: 34. H. Hội Thánh cử hành Bí Tích Thánh Thể thế nào? - T. Trong Thánh lễ, gồm hai phần chính: Phụng vụ Lời Chúa và Phụng vụ Thánh Thể."
  },
  {
    "question": "Hiệu quả của việc rước lễ không bao gồm điều nào sau đây?",
    "options": ["A. Kết hợp mật thiết với Đức Kitô và Hội Thánh","B. Tẩy xóa các tội nhẹ","C. Tha các tội trọng chưa xưng","D. Gia tăng ân sủng và lòng yêu mến tha nhân"],
    "correctAnswer": "C",
    "explanation": "Giải thích: 37. H. Việc rước lễ đem lại cho chúng ta những ơn ích nào? - T. Được kết hợp mật thiết với Đức Kitô và Hội Thánh, được tẩy xóa các tội nhẹ, gia tăng ân sủng và lòng yêu mến tha nhân. Không tha các tội trọng chưa xưng."
  },
  {
    "question": "Bí Tích Thánh Thể là bí tích chỉ được lập ra để tưởng niệm Bữa Tiệc Ly.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "B",
    "explanation": "Giải thích: 31. H. Bí Tích Thánh Thể là gì? – T. Là bí tích Chúa Giê-su đã lập, để tiếp tục lễ hy sinh trên Thánh giá và để ban Mình Máu Ngài, làm của ăn nuôi sống chúng ta. Không chỉ để tưởng niệm Bữa Tiệc Ly."
  },
  {
    "question": "Để rước lễ cách xứng đáng, người tín hữu phải không có tội trọng và giữ chay.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "A",
    "explanation": "Giải thích: 36. H. Phải có điều kiện nào để được rước lễ? – T. Gồm: thuộc Hội Thánh Công Giáo, không có tội trọng, giữ chay, và có thái độ tôn kính Đức Kitô."
  },
  {
    "question": "Bí Tích Thống Hối có thể được lãnh nhận chỉ bằng việc ăn năn trong lòng.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "B",
    "explanation": "Giải thích: 40. H. Bí Tích Thống Hối có những yếu tố chính yếu nào? – T. Một là hành vi của người sám hối; hai là lời xá giải của linh mục. Ăn năn trong lòng là chưa đủ, cần xưng tội và nhận lời xá giải."
  },
  {
    "question": "Ân xá là việc tha thứ các tội trọng nếu ta không thể đi xưng tội.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "B",
    "explanation": "Giải thích: 44. H. Ân xá là gì? – T. Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội đã được tha rồi. Không phải để tha tội trọng."
  },
  {
    "question": "Mọi tín hữu đến tuổi khôn buộc phải xưng các tội trọng ít nhất mỗi năm một lần.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "A",
    "explanation": "Giải thích: 42. H. Khi nào các tín hữu buộc phải xưng các tội trọng? – T. Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ."
  },
  {
    "question": "Bí Tích Thánh Thể được cử hành đầy đủ trong Thánh lễ qua hai phần: Phụng vụ Lời Chúa và Phụng vụ Thánh Thể.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "A",
    "explanation": "Giải thích: 34. H. Hội Thánh cử hành Bí Tích Thánh Thể thế nào? – T. Hội Thánh cử hành Bí Tích Thánh Thể trong Thánh lễ, gồm hai phần chính: Phụng vụ Lời Chúa và Phụng vụ Thánh Thể."
  },
  {
    "question": "Bí Tích Thống Hối chỉ dành cho những người phạm tội trọng.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "B",
    "explanation": "Giải thích: 38. H. Bí Tích Thống Hối là gì? – T. Là bí tích Chúa Giê-su đã lập, để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí Tích Rửa Tội về sau. Bí tích này giúp tha cả tội nhẹ lẫn tội trọng."
  },
  {
    "question": "Khi rước lễ, chúng ta được kết hợp mật thiết hơn với Đức Kitô và Hội Thánh.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "A",
    "explanation": "Giải thích: 37. H. Việc rước lễ đem lại cho chúng ta những ơn ích nào? – T. Được kết hợp mật thiết với Đức Kitô và Hội Thánh, được tẩy xóa các tội nhẹ, gia tăng ân sủng và lòng yêu mến tha nhân."
  },
  {
    "question": "Người tín hữu chỉ cần xét mình và ăn năn là đủ để lãnh nhận Bí Tích Thống Hối.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "B",
    "explanation": "Giải thích: 41. H. Muốn lãnh nhận Bí Tích Thống Hối chúng ta phải làm gì? – T. Phải làm bốn việc: xét mình, ăn năn và dốc lòng chừa, xưng tội, đền tội. Như vậy chỉ xét mình và ăn năn là chưa đủ."
  },
  {
    "question": "Bí Tích Thống Hối giúp ban sự bình an và gia tăng sức mạnh cho cuộc chiến đấu thiêng liêng.",
    "options": ["A. Đúng","B. Sai"],
    "correctAnswer": "A",
    "explanation": "Giải thích: 43. H. Bí Tích Thống Hối có những hiệu quả nào? – T. Một là tha tội để giao hòa với Thiên Chúa và Hội Thánh; hai là tha hình phạt muôn đời do các tội trọng; ba là ban sự bình an và gia tăng sức mạnh cho cuộc chiến đấu thiêng liêng."
  },
  {
    "question": "Bí Tích Thống Hối không đem lại hiệu quả nào sau đây?",
    "options": ["A. Tha các tội trọng đã xưng thật lòng","B. Giao hòa với Thiên Chúa và Hội Thánh","C. Tha mọi hình phạt tạm do tội","D. Ban sự bình an và sức mạnh thiêng liêng"],
    "correctAnswer": "C",
    "explanation": "Giải thích: 43. H. Bí Tích Thống Hối có những hiệu quả nào? – T. Tha các tội trọng, giao hòa với Thiên Chúa và Hội Thánh, tha một phần các hình phạt tạm, ban sự bình an và sức mạnh thiêng liêng. Không tha mọi hình phạt tạm."
  },
  {
    "question": "Điều nào sau đây không phải là điều kiện để rước lễ cách xứng đáng?",
    "options": ["A. Đã rửa tội","B. Có đức tin Công giáo","C. Đang trong tình trạng tội trọng","D. Giữ chay theo luật Hội Thánh"],
    "correctAnswer": "C",
    "explanation": "Giải thích: 36. H. Phải có điều kiện nào để được rước lễ? – T. Không có tội trọng, đã rửa tội, có đức tin Công giáo, giữ chay theo luật Hội Thánh. Người đang trong tình trạng tội trọng thì không được rước lễ."
  },
  {
    "question": "Những yếu tố chính yếu của Bí Tích Thống Hối bao gồm những điều sau, trừ:",
    "options": ["A. Hành vi sám hối của người lãnh nhận","B. Việc đọc Kinh Lạy Cha","C. Lời xá giải của linh mục","D. Lòng ăn năn tội và đền tội"],
    "correctAnswer": "B",
    "explanation": "Giải thích: 40. H. Bí Tích Thống Hối có những yếu tố chính yếu nào? – T. Gồm hành vi của người sám hối và lời xá giải của linh mục. Không bắt buộc việc đọc Kinh Lạy Cha."
  },
  {
    "question": "Người tín hữu buộc phải xưng tội trong trường hợp nào sau đây?",
    "options": ["A. Mỗi lần chuẩn bị lãnh Bí Tích Rửa Tội","B. Trước khi rước lễ nếu có tội trọng","C. Sau khi rước lễ lần đầu","D. Khi lãnh Bí Tích Thêm Sức"],
    "correctAnswer": "B",
    "explanation": "Giải thích: 42. H. Khi nào các tín hữu buộc phải xưng các tội trọng? – T. Khi đến tuổi khôn, buộc xưng ít nhất mỗi năm một lần và phải xưng các tội trọng trước khi rước lễ."
  },
  {
    "question": "Bí Tích Thống Hối có thể ban thêm điều nào sau đây cho người Kitô hữu?",
    "options": ["A. Sự hiểu biết về giáo lý","B. Ơn khôn ngoan để học hành","C. Sức mạnh cho cuộc chiến đấu thiêng liêng","D. Ơn gọi tu trì"],
    "correctAnswer": "C",
    "explanation": "Giải thích: 43. H. Bí Tích Thống Hối có những hiệu quả nào? – T. Một trong các hiệu quả là ban sự bình an và gia tăng sức mạnh cho cuộc chiến đấu thiêng liêng."
  },
  {
    "question": "Việc rước lễ có tác dụng nào sau đây?",
    "options": ["A. Gia tăng lòng yêu mến tha nhân","B. Miễn trừ hoàn toàn mọi hình phạt đời sau","C. Tha mọi tội trọng","D. Ban quyền lãnh đạo trong Hội Thánh"],
    "correctAnswer": "A",
    "explanation": "Giải thích: 37. H. Việc rước lễ đem lại cho chúng ta những ơn ích nào? – T. Một trong những hiệu quả là gia tăng ân sủng và lòng yêu mến tha nhân."
  },
  {
    "question": "Thành phần nào không nằm trong Thánh lễ, nơi Hội Thánh cử hành Bí Tích Thánh Thể?",
    "options": ["A. Phụng vụ Lời Chúa","B. Phụng vụ Thánh Thể","C. Nghi thức phong chức","D. Hiệp lễ"],
    "correctAnswer": "C",
    "explanation": "Giải thích: 34. H. Hội Thánh cử hành Bí Tích Thánh Thể thế nào? – T. Trong Thánh lễ gồm hai phần chính: Phụng vụ Lời Chúa và Phụng vụ Thánh Thể. Nghi thức phong chức không thuộc Thánh lễ thông thường."
  },
  {
    "question": "Yếu tố nào sau đây không thuộc về hành vi sám hối của người lãnh Bí Tích Thống Hối?",
    "options": ["A. Xưng tội","B. Lòng ăn năn","C. Lời xá giải","D. Việc đền tội"],
    "correctAnswer": "C",
    "explanation": "Giải thích: 41. H. Hành vi sám hối gồm những gì? – T. Gồm lòng ăn năn, xưng tội và việc đền tội. Lời xá giải là phần thuộc về linh mục."
  },
  {
    "question": "Điều kiện nào sau đây là cần thiết để được rước lễ?",
    "options": [
      "A. Phải thuộc về Hội Thánh Chính Thống",
      "B. Phải có tội trọng để được tha tội",
      "C. Phải giữ chay theo quy định của Hội Thánh",
      "D. Chỉ cần có lòng yêu mến Chúa là đủ"
    ],
    "correctAnswer": "C",
    "explanation": "36. H. Phải có điều kiện nào để được rước lễ? - T. Phải có những điều kiện này: hoàn toàn thuộc về Hội Thánh Công Giáo; ý thức mình không có tội trọng; phải giữ chay theo quy định của Hội Thánh; có thái độ tôn kính Đức Kitô."
  },
  {
    "question": "Hội Thánh khuyên các tín hữu rước lễ vào lúc nào?",
    "options": [
      "A. Khi sắp chết",
      "B. Mỗi khi tham dự Thánh lễ",
      "C. Khi có dịp lễ trọng",
      "D. Một lần trong tháng"
    ],
    "correctAnswer": "B",
    "explanation": "35. H. Hội Thánh dạy thế nào về việc rước lễ? - T. Hội Thánh khuyên các tín hữu rước lễ mỗi khi tham dự Thánh lễ, và buộc rước lễ một năm ít là một lần trong mùa Phục Sinh."
  },
  {
    "question": "Hành vi của người sám hối là một yếu tố chính yếu của bí tích nào?",
    "options": [
      "A. Bí Tích Thêm Sức",
      "B. Bí Tích Thống Hối",
      "C. Bí Tích Thánh Tẩy",
      "D. Bí Tích Hôn Phối"
    ],
    "correctAnswer": "B",
    "explanation": "40. H. Bí Tích Thống Hối có những yếu tố chính yếu nào? - T. Một là hành vi của người sám hối; hai là lời xá giải của linh mục."
  },
  {
    "question": "Yếu tố nào dưới đây không phải là điều kiện để được rước lễ?",
    "options": [
      "A. Ý thức mình không có tội trọng",
      "B. Có thái độ tôn kính Đức Kitô",
      "C. Đã lập gia đình",
      "D. Giữ chay theo quy định của Hội Thánh"
    ],
    "correctAnswer": "C",
    "explanation": "36. H. Phải có điều kiện nào để được rước lễ? - T. Những điều kiện là: hoàn toàn thuộc về Hội Thánh Công Giáo; ý thức không có tội trọng; giữ chay theo quy định; có thái độ tôn kính Đức Kitô."
  },
  {
    "question": "Người lãnh Bí Tích Thêm Sức không có bổn phận nào sau đây?",
    "options": [
      "A. Thi hành Lời Chúa trong đời sống",
      "B. Góp phần xây dựng xã hội theo tinh thần Tin Mừng",
      "C. Tìm hiểu các tôn giáo khác",
      "D. Giới thiệu Chúa cho mọi người"
    ],
    "correctAnswer": "C",
    "explanation": "30. H. Người lãnh Bí Tích Thêm Sức có những bổn phận nào? - T. Thi hành Lời Chúa, góp phần xây dựng xã hội theo tinh thần Tin Mừng, và giới thiệu Chúa cho mọi người."
  },
  {
    "question": "Bí Tích Thống Hối có thể tha điều gì?",
    "options": [
      "A. Những tội chưa phạm",
      "B. Những tội sau khi chịu Bí Tích Rửa Tội",
      "C. Những hình phạt vĩnh viễn chưa gây ra",
      "D. Những tội tổ tông"
    ],
    "correctAnswer": "B",
    "explanation": "38. H. Bí Tích Thống Hối là gì? - T. Là bí tích Chúa Giê su đã lập, để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí Tích Rửa Tội về sau."
  },
  {
    "question": "Bí Tích Thống Hối là bí tích Chúa Giê-su đã lập để tha các tội riêng chúng ta đã phạm từ khi lãnh nhận ______.",
    "options": [
      "A. Bí Tích Thêm Sức và tiếp tục sống đời Kitô hữu",
      "B. Bí Tích Rửa Tội về sau",
      "C. Bí Tích Thánh Thể lần đầu",
      "D. Bí Tích Hôn Phối hoặc Truyền Chức"
    ],
    "correctAnswer": "B",
    "explanation": "38. H. Bí Tích Thống Hối là gì? – T. Là bí tích Chúa Giê-su đã lập để tha các tội riêng chúng ta đã phạm từ khi lãnh Bí Tích Rửa Tội về sau."
  },
  {
    "question": "Trong Bí Tích Thống Hối, yếu tố đầu tiên là hành vi của người sám hối, gồm việc xét mình, ăn năn, dốc lòng chừa và ______.",
    "options": [
      "A. Lời khấn hứa sống tốt",
      "B. Thực hiện việc đền tội",
      "C. Sự cảm xúc nội tâm",
      "D. Sự hiện diện trước bàn thờ"
    ],
    "correctAnswer": "B",
    "explanation": "41. H. Người sám hối cần phải làm gì? – T. Phải xét mình, ăn năn tội, dốc lòng chừa và xưng ra các tội, rồi làm việc đền tội."
  },
  {
    "question": "Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất ______ và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ.",
    "options": [
      "A. Hai lần trong mùa Chay và mùa Vọng",
      "B. Trước mỗi lần rước lễ trọng thể",
      "C. Một năm một lần",
      "D. Sau khi lãnh nhận Bí Tích Thêm Sức"
    ],
    "correctAnswer": "C",
    "explanation": "42. H. Khi nào các tín hữu buộc phải xưng các tội trọng? – T. Khi đến tuổi khôn, mọi tín hữu buộc phải xưng các tội trọng của mình ít nhất một năm một lần và trong mọi trường hợp, phải xưng các tội trọng trước khi rước lễ."
  },
  {
    "question": "Hiệu quả đầu tiên của Bí Tích Thống Hối là tha tội để ______ với Thiên Chúa và Hội Thánh.",
    "options": [
      "A. Được nên công chính và đón nhận Bí Tích Thánh Thể",
      "B. Trở lại tình trạng ân sủng như trước",
      "C. Giao hòa chúng ta",
      "D. Cảm nhận sự bình an trong tâm hồn"
    ],
    "correctAnswer": "C",
    "explanation": "43. H. Bí Tích Thống Hối có những hiệu quả nào? – T. Một là tha tội để giao hòa chúng ta với Thiên Chúa và Hội Thánh..."
  },
  {
    "question": "Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội đã phạm, ______.",
    "options": [
      "A. Trong khi linh mục đang ban phép lành",
      "B. Dù những tội này đã được tha thứ",
      "C. Sau khi đã được lãnh nhận Bí Tích Rửa Tội",
      "D. Khi người sám hối sống đời mới"
    ],
    "correctAnswer": "B",
    "explanation": "44. H. Ân xá là gì? – T. Ân xá là việc tha thứ những hình phạt tạm đáng chịu vì những tội chúng ta đã phạm, dù những tội này đã được tha thứ."
  }

]


let currentQuestionIndex;
let timer;
let timeLeft = 10;
let answeredQuestions = [];
let isChecking = false;
let score = 0;
let selectedOption = null;

// Hiển thị tổng số câu hỏi
document.getElementById('totalQuestions').textContent = `/${questions.length}`;

// Bắt đầu bài kiểm tra
document.getElementById('startBtn').addEventListener('click',startQuiz);

function startQuiz() {
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('quizContainer').classList.remove('hidden');
  document.getElementById('timer').classList.remove('hidden');
  document.getElementById('scoreCircle').classList.remove('hidden');
  document.getElementById('checkBtn').style.display = 'inline-block';

  // Lưu thời gian bắt đầu
  startTime = new Date();

  // Reset điểm số
  score = 0;
  document.getElementById('currentScore').textContent = "0";
  answeredQuestions = [];

  // Chọn câu hỏi ngẫu nhiên chưa được trả lời
  selectRandomQuestion();
}

// Chọn câu hỏi ngẫu nhiên
function selectRandomQuestion() {
  isChecking = false;
  timeLeft = 10;
  updateTimer();
  selectedOption = null;

  // Ẩn kết quả câu trước
  document.getElementById('result').style.display = 'none';
  document.getElementById('explanationLink').style.display = 'none';

  // Lọc ra các câu chưa được trả lời
  const unansweredQuestions = questions.filter((_,index) => !answeredQuestions.includes(index));

  if (unansweredQuestions.length === 0) {
    showSummary();
    document.getElementById('optionsContainer').innerHTML = "";
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    return;
  }

  // Chọn ngẫu nhiên 1 câu hỏi
  currentQuestionIndex = questions.indexOf(
    unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)]
  );

  // Hiển thị câu hỏi
  displayQuestion(currentQuestionIndex);

  // Bắt đầu đếm ngược
  clearInterval(timer);
  timer = setInterval(updateTimer,1000);
}

// Hiển thị câu hỏi
function displayQuestion(index) {
  const question = questions[index];
  document.getElementById('questionText').textContent = question.question;

  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = "";

  question.options.forEach((option,i) => {
    const optionBox = document.createElement('div');
    optionBox.className = 'option-box';
    optionBox.textContent = option;
    optionBox.dataset.value = option.charAt(0); // Lấy ký tự đầu (A/B/C/D)

    optionBox.addEventListener('click',function () {
      if (isChecking) return;

      // Bỏ chọn tất cả các option khác
      const allOptions = document.querySelectorAll('.option-box');
      allOptions.forEach(opt => opt.classList.remove('selected'));

      // Chọn option này
      this.classList.add('selected');
      selectedOption = this.dataset.value;
    });

    optionsContainer.appendChild(optionBox);
  });

  // Ẩn nút next
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('endBtn').style.display = 'none';
  // Hiển thị nút check
  document.getElementById('checkBtn').style.display = 'inline-block';
}

// Cập nhật đồng hồ
function updateTimer() {
  document.getElementById('time-display').textContent = `${timeLeft} giây`;

  if (timeLeft <= 5) {
    document.getElementById('timer').style.backgroundColor = '#d32f2f';
  } else {
    document.getElementById('timer').style.backgroundColor = '#2196F3';
  }

  if (timeLeft <= 0 && !isChecking) {
    clearInterval(timer);
    document.getElementById('time-display').innerHTML = '<span class="time-up">Hết giờ!</span>';
    checkAnswer();
  } else if (!isChecking) {
    timeLeft--;
  }
}

// Kiểm tra đáp án
document.getElementById('checkBtn').addEventListener('click',checkAnswer);

function checkAnswer() {
  isChecking = true;
  clearInterval(timer);

  const resultDiv = document.getElementById('result');
  const explanationLink = document.getElementById('explanationLink');

  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const allOptions = document.querySelectorAll('.option-box');

  resultDiv.style.display = 'block';
  explanationLink.style.display = 'inline';

  // Hiển thị giải thích khi click
  explanationLink.onclick = function () {
    document.getElementById('explanationText').textContent =
      questions[currentQuestionIndex].explanation;
    document.getElementById('explanationPopup').style.display = 'flex';
  };

  if (selectedOption) {
    if (selectedOption === correctAnswer) {
      // Nếu đúng
      resultDiv.className = 'correct';
      resultDiv.textContent = '✓ Đúng rồi đấy người đẹp!';
      score++;
      document.getElementById('currentScore').textContent = score;

      // Tô xanh đáp án đã chọn (đúng)
      allOptions.forEach(option => {
        if (option.dataset.value === selectedOption) {
          option.classList.add('correct-answer');
        }
      });
    } else {
      // Nếu sai
      resultDiv.className = 'incorrect';
      resultDiv.textContent = `✗ Sai rồi hehe. Phải là ${correctAnswer} nhé!`;

      // Tô đỏ đáp án sai và xanh đáp án đúng
      allOptions.forEach(option => {
        if (option.dataset.value === selectedOption) {
          option.classList.add('wrong-answer'); // Đáp án đã chọn (sai)
        }
        if (option.dataset.value === correctAnswer) {
          option.classList.add('correct-answer'); // Đáp án đúng
        }
      });
    }
  } else {
    // Nếu không chọn đáp án
    resultDiv.className = 'incorrect';
    resultDiv.textContent = `✗ Khó quá à? Đáp án đúng là ${correctAnswer} nha.`;

    // Chỉ hiển thị đáp án đúng
    allOptions.forEach(option => {
      if (option.dataset.value === correctAnswer) {
        option.classList.add('correct-answer');
      }
    });
  }

  if (!answeredQuestions.includes(currentQuestionIndex)) {
    answeredQuestions.push(currentQuestionIndex);
  }

  // Hiển thị nút next
  document.getElementById('checkBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-block';
  document.getElementById('endBtn').style.display = 'inline-block';
}

// Câu hỏi tiếp theo
document.getElementById('nextBtn').addEventListener('click',selectRandomQuestion);

// Kết thúc tạm thời
document.getElementById('endBtn').addEventListener('click',clickEndBtn);

function clickEndBtn() {
  showSummary();
  document.getElementById('optionsContainer').innerHTML = "";
  document.getElementById('checkBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('timer').style.display = 'none';
  return;
}

// Đóng popup giải thích
document.querySelector('.close-popup').addEventListener('click',function () {
  document.getElementById('explanationPopup').style.display = 'none';
});

// Đóng popup khi click bên ngoài
window.addEventListener('click',function (event) {
  if (event.target === document.getElementById('explanationPopup')) {
    document.getElementById('explanationPopup').style.display = 'none';
  }
});

function showSummary() {
  // Tính tổng thời gian
  const endTime = new Date();
  totalTime = (endTime - startTime) / 1000; // Thời gian tính bằng giây

  // Chuyển đổi giây thành phút và giây
  const minutes = Math.floor(totalTime / 60);
  const seconds = Math.floor(totalTime % 60);

  document.getElementById('scoreCircle').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('summaryContainer').style.display = 'block';

  const correctCount = score;
  const incorrectCount = questions.length - score;

  document.getElementById('correctCount').textContent = correctCount;
  document.getElementById('incorrectCount').textContent = incorrectCount;
  document.getElementById('totalCount').textContent = score;
  document.getElementById('totalTime').textContent = `${minutes} phút ${seconds} giây`;;
}
