USE [ABC_DB];
GO

INSERT INTO [ROLE] ([RoleName], [RoleDicription])
VALUES (N'Nhân viên', N'Tài khoản dành cho nhân viên công ty ABC')
GO
INSERT INTO [ROLE] ([RoleName], [RoleDicription])
VALUES (N'Ứng viên', N'Tài khoản dành cho ứng viên')
GO



------ Nhân viên công ty
EXEC ADD_EMPLOYEE N'Huỳnh Minh Quang', N'Tân Quy, Quận 7, HCM', '0382333045', N'Quản trị viên', 'minhquang2803', 'minhquangabcnv';
EXEC ADD_EMPLOYEE N'Mạch Vĩ Kiệt', N'Quận 5, HCM', '0382333045', N'Quản trị viên', 'mvkiet', 'vikietmach';
EXEC ADD_EMPLOYEE N'Nguyễn Xuân Lộc', N', quận Gò Vấp, HCM', '0382333045', N'Quản trị viên', 'xlocnguyen', 'nxl1212003';
EXEC ADD_EMPLOYEE N'Nguyễn Đức Vĩnh Hoà', N'Tân phú, HCM', '0382333045', N'Quản trị viên', 'ndvh', 'vinhhoa003';
EXEC ADD_EMPLOYEE N'Đoàn Thị Yến Nhi', N'Tân Thuận, Quận 7, HCM', '0382333045', N'Quản trị viên', 'dtynhi', 'yennhidoanthi';
EXEC ADD_EMPLOYEE N'Nguyễn Thị Hồng', N'Tân Bình, TP.HCM', '0987654321', N'Tư vấn tuyển dụng', 'nguyenthihong', 'password123';
EXEC ADD_EMPLOYEE N'Trần Văn Bình', N'Quận 1, TP.HCM', '0909090909', N'Chuyên viên phát triển kinh doanh', 'tranvanbinh', '123456abc';
EXEC ADD_EMPLOYEE N'Lê Thị Lan', N'Quận 5, TP.HCM', '0912345678', N'Kế toán viên', 'lethilan', 'abc123def';
EXEC ADD_EMPLOYEE N'Phạm Văn Quân', N'Quận 3, TP.HCM', '0987654321', N'Chuyên viên hỗ trợ khách hàng', 'phamvanquan', 'password456';
EXEC ADD_EMPLOYEE N'Huỳnh Minh Tuấn', N'Quận 10, TP.HCM', '0901234567', N'Tiếp viên hỗ trợ khách hàng', 'huynhminhtuan', 'tuan123abc';
EXEC ADD_EMPLOYEE N'Nguyễn Thị Kim', N'Quận 7, TP.HCM', '0976543210', N'Tư vấn nghề nghiệp', 'nguyenthikim', 'kim123456';
EXEC ADD_EMPLOYEE N'Đặng Văn Hùng', N'Quận 2, TP.HCM', '0912121212', N'Trưởng nhóm kỹ thuật', 'dangvanhung', 'hung789123';
EXEC ADD_EMPLOYEE N'Hoàng Thị Phương', N'Quận Bình Thạnh, TP.HCM', '0987654321', N'Chuyên viên quản lý dự án', 'hoangthiphuong', 'phuong987xyz';
EXEC ADD_EMPLOYEE N'Lý Văn Sơn', N'Quận Gò Vấp, TP.HCM', '0909090909', N'Chuyên viên marketing', 'lyvanson', 'son123456';
EXEC ADD_EMPLOYEE N'Vũ Thị Hà', N'Quận Phú Nhuận, TP.HCM', '0912345678', N'Quản lý nhân sự', 'vuthiha', 'ha456abc';
EXEC ADD_EMPLOYEE N'Trần Văn Hoàng', N'Quận Thủ Đức, TP.HCM', '0987654321', N'Trưởng phòng tuyển dụng', 'tranvanhoang', '123abc456';
EXEC ADD_EMPLOYEE N'Lê Thị Ngọc', N'Quận Tân Phú, TP.HCM', '0901234567', N'Tổ trưởng kinh doanh', 'lethingoc', 'ngoc987654';
EXEC ADD_EMPLOYEE N'Phan Văn Dũng', N'Quận Bình Tân, TP.HCM', '0976543210', N'Trưởng phòng kinh doanh', 'phanvandung', 'dung123abc';
EXEC ADD_EMPLOYEE N'Nguyễn Thị Thu', N'Quận 6, TP.HCM', '0912121212', N'Chuyên viên phát triển sản phẩm', 'nguyenthithu', 'thu456def';
EXEC ADD_EMPLOYEE N'Trương Văn Thành', N'Quận 8, TP.HCM', '0987654321', N'Nhân viên hỗ trợ kỹ thuật', 'truongvanthanh', 'thanh789abc';
GO
------


EXEC ADD_CANDIDATE  N'Phạm Thị Hồng', '1993-09-20', '0367890123', N'Hải Phòng', 'phamhong', 'hong123';
GO
