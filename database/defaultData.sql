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


EXEC ADD_CANDIDATE  N'Phạm Thị Hồng', '1993-09-20', '0367890123', N'Hải Phòng', 'hmq@gmail.com' ,'phamhong', 'hong123';
GO


---
INSERT INTO COMPANY (CompanyID, Name, TaxCode, Email, PhoneNumber, Address, Representative, CompanyDicription, Censorship) 
VALUES 
('CO001', 'ABC Company', '1234567890', 'abc@example.com', '1234567890', '123 Main Street, City, Country', 'John Doe', 'Description of ABC Company', 'Approved'),
('CO002', 'XYZ Corporation', '9876543210', 'xyz@example.com', '9876543210', '456 Oak Avenue, City, Country', 'Jane Smith', 'Description of XYZ Corporation', 'Approved'),
('CO003', 'EFG Ltd', '1357924680', 'efg@example.com', '9876543210', '789 Elm Street, City, Country', 'Alice Johnson', 'Description of EFG Ltd', 'Pending'),
('CO004', 'LMN Industries', '2468135790', 'lmn@example.com', '1234567890', '321 Maple Avenue, City, Country', 'Bob Brown', 'Description of LMN Industries', 'Rejected'),
('CO005', 'PQR Group', '3692581470', 'pqr@example.com', '9876543210', '654 Pine Street, City, Country', 'Sarah White', 'Description of PQR Group', 'Approved'),
('CO006', 'STU Enterprises', '1592638470', 'stu@example.com', '1234567890', '987 Cedar Street, City, Country', 'David Johnson', 'Description of STU Enterprises', 'Approved'),
('CO007', 'VWX Co.', '3579514628', 'vwx@example.com', '9876543210', '852 Elmwood Avenue, City, Country', 'Emily Davis', 'Description of VWX Co.', 'Pending'),
('CO008', 'GHI Limited', '1239876540', 'ghi@example.com', '1234567890', '456 Birch Street, City, Country', 'Michael Wilson', 'Description of GHI Limited', 'Rejected'),
('CO009', 'JKL Industries', '9876543210', 'jkl@example.com', '9876543210', '789 Walnut Street, City, Country', 'Karen Martinez', 'Description of JKL Industries', 'Approved'),
('CO010', 'MNO Group', '3219876540', 'mno@example.com', '1234567890', '321 Maplewood Avenue, City, Country', 'Daniel Thompson', 'Description of MNO Group', 'Approved');
GO


INSERT INTO RECRUITMENT_REGISTRATION_FORM (RegistFormID, CompanyID, PostingTime, AdStartDate, AdEndDate, PositionVacancies, NumberRecruitment, RequiredCandidates, AdType) 
VALUES 
('RF001', 'CO001', '2024-04-30', '2024-05-05', '2024-06-05', 'Software Developer', 5, 'Bachelor’s degree in Computer Science or related field; 2+ years of experience in software development; Proficient in Java, Python, SQL, etc.', 'Online Job Portal'),
('RF002', 'CO002', '2024-04-30', '2024-05-10', '2024-06-10', 'Marketing Manager', 2, 'Bachelor’s degree in Marketing or related field; 5+ years of experience in marketing; Strong leadership and communication skills', 'Newspaper Advertisement'),
('RF003', 'CO003', '2024-04-30', '2024-05-15', '2024-06-15', 'Data Analyst', 3, 'Bachelor’s degree in Statistics, Mathematics, Computer Science or related field; Experience with data analysis tools like Python, R, SQL', 'Company Website'),
('RF004', 'CO004', '2024-04-30', '2024-05-20', '2024-06-20', 'HR Coordinator', 1, 'Bachelor’s degree in Human Resources or related field; 2+ years of experience in HR administration; Knowledge of labor laws and regulations', 'Online Job Portal'),
('RF005', 'CO005', '2024-04-30', '2024-05-25', '2024-06-25', 'Financial Analyst', 2, 'Bachelor’s degree in Finance, Accounting, Economics or related field; Strong analytical and problem-solving skills; Proficient in Excel and financial software', 'Company Website'),
('RF006', 'CO006', '2024-04-30', '2024-05-30', '2024-06-30', 'Graphic Designer', 2, 'Bachelor’s degree in Graphic Design or related field; Proficient in Adobe Creative Suite; Strong portfolio of design work', 'Social Media Advertisement'),
('RF007', 'CO007', '2024-04-30', '2024-06-05', '2024-07-05', 'Customer Service Representative', 3, 'High school diploma or equivalent; Strong communication and problem-solving skills; Previous customer service experience preferred', 'Online Job Portal'),
('RF008', 'CO008', '2024-04-30', '2024-06-10', '2024-07-10', 'Accountant', 1, 'Bachelor’s degree in Accounting or related field; CPA certification preferred; Proficient in accounting software', 'Newspaper Advertisement'),
('RF009', 'CO009', '2024-04-30', '2024-06-15', '2024-07-15', 'Sales Manager', 2, 'Bachelor’s degree in Business Administration or related field; 5+ years of experience in sales; Strong leadership and negotiation skills', 'Company Website'),
('RF010', 'CO010', '2024-04-30', '2024-06-20', '2024-07-20', 'Operations Manager', 1, 'Bachelor’s degree in Business Management or related field; 3+ years of experience in operations management; Excellent organizational and leadership skills', 'Online Job Portal');
GO

INSERT INTO POSTING_INFORMATION (PostingID, RegistFormID, JobDescription, Position, Eperience, Level, ExpectedSalary, JobType, EmployeePerform, ContractType) 
VALUES 
('PI001', 'RF001', 'Design, develop, and maintain software applications; Collaborate with team members to produce high-quality code; Test and debug software applications', 'Software Developer', '2+ years', 'Senior', 50000, 'Full-time', 'NV001', 'Permanent'),
('PI002', 'RF002', 'Develop and implement marketing strategies to meet company objectives; Oversee marketing campaigns and evaluate their effectiveness; Manage and mentor marketing team members', 'Marketing Manager', '5+ years', 'Senior', 70000, 'Full-time', 'NV002', 'Permanent'),
('PI003', 'RF003', 'Collect and analyze data to identify trends and patterns; Prepare reports and presentations to communicate findings; Collaborate with stakeholders to understand business needs', 'Data Analyst', '3+ years', 'Senior', 60000, 'Full-time', 'NV003', 'Permanent'),
('PI004', 'RF004', 'Assist with recruitment and onboarding processes; Maintain employee records and HR databases; Handle employee inquiries and issues regarding HR policies and procedures', 'HR Coordinator', '2+ years', 'Intermediate', 55000, 'Full-time', 'NV001', 'Permanent'),
('PI005', 'RF005', 'Conduct financial analysis to support decision-making processes; Prepare financial reports and forecasts; Assist in budgeting and financial planning activities', 'Financial Analyst', '3+ years', 'Senior', 65000, 'Full-time', 'NV001', 'Permanent'),
('PI006', 'RF006', 'Create visually appealing designs for various marketing materials; Collaborate with marketing team to develop creative concepts; Use design software to produce high-quality graphics', 'Graphic Designer', '2+ years', 'Intermediate', 55000, 'Full-time', 'NV002', 'Permanent'),
('PI007', 'RF007', 'Provide excellent customer service to resolve inquiries and issues; Process orders and handle customer complaints; Maintain accurate records of customer interactions', 'Customer Service Representative', '1+ years', 'Entry-level', 40000, 'Full-time', 'NV003', 'Permanent'),
('PI008', 'RF008', 'Manage financial records and transactions; Prepare financial statements and reports; Ensure compliance with accounting standards and regulations', 'Accountant', '3+ years', 'Senior', 70000, 'Full-time', 'NV002', 'Permanent'),
('PI009', 'RF009', 'Lead sales team to achieve sales targets; Develop and implement sales strategies; Build and maintain relationships with key clients', 'Sales Manager', '5+ years', 'Senior', 80000, 'Full-time', 'NV005', 'Permanent'),
('PI010', 'RF010', 'Oversee day-to-day operations to ensure efficiency and productivity; Develop and implement operational policies and procedures; Manage and mentor operational staff', 'Operations Manager', '3+ years', 'Senior', 75000, 'Full-time', 'NV003', 'Permanent');
