// required	Bắt buộc input element				
// remote	Request một resource để check element				
// minlength	Define độ dài min của một element				
// maxlength	Define độ dài max của một element				
// rangelength	Define khoảng độ dài cho một element				
// min	Define giá trị min cho một element				
// max	Define giá trị max cho một element				
// range	Define khoảng giá trị cho moọt element				
// step	Define số bước nhất định cho một element				
// email	Validate format cho email				
// url	Validate format cho url				
// date	Validate format cho date				
// number	Validate format cho decimal number				
// digits	Validate cho một element là số nguyên dương hoặc số 0				
// equalTo	Yêu cầu một element bằng với gái trị của một element khác				
$().ready(function() {
	$("#formSinhVien").validate({
		
		rules: {
			// "user": {
			// 	required: true,
			// 	maxlength: 50,
				
			// },
			// "password": {
			// 	require:true
			// },
			// "re-password": {
			// 	equalTo: "#password",
			// 	minlength: 8
			// }
			"hoTen":{
				required:true,
				maxlength: 10
			},
			"maSV": {
				required:true,
				minlength:8
			},
			"ngaySinh": {
				required:true,
				minlength: 8
			},
            "lop": {
				required:true,
				minlength:8
			}
        },
		messages: {
			"hoTen": {
				required: "Bắt buộc nhập họ tên",
				maxlength: "Hãy nhập tối đa 15 ký tự"
			},
			"maSV": {
				required: "Bắt buộc nhập mã sinh viên",
				minlength: "Hãy nhập ít nhất 8 ký tự"
			},
			"ngaySinh": {
                required: "Bắt buộc chọn ngày sinh",
				minlength: "Hãy nhập ít nhất 8 ký tự"
			},
            "lop": {
                required: "Bắt buộc nhập lớp",
				minlength: "Hãy nhập ít nhất 8 ký tự"
			}
		}
		
        
	});
});
