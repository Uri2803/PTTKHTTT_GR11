USE [ABC_DB];
GO

INSERT INTO [ROLE] ([RoleName], [RoleDicription])
VALUES (N'Nhân viên', N'Tài khoản dành cho nhân viên công ty ABC')
GO
INSERT INTO [ROLE] ([RoleName], [RoleDicription])
VALUES (N'Ứng viên', N'Tài khoản dành cho ứng viên')
GO



------ Nhân viên công ty
EXEC ADD_EMPLOYEE N'Huỳnh Minh Quang', N'Tân Quy, Quận 7, HCM', '0382333045', N'Quản trị viên', 'hmquang', '123';
EXEC ADD_EMPLOYEE N'Mạch Vĩ Kiệt', N'Quận 5, HCM', '0382333045', N'Quản trị viên', 'mvkiet', '123';
EXEC ADD_EMPLOYEE N'Nguyễn Xuân Lộc', N', quận Gò Vấp, HCM', '0382333045', N'Quản trị viên', 'nxloc', '123';
EXEC ADD_EMPLOYEE N'Nguyễn Đức Vĩnh Hoà', N'Tân phú, HCM', '0382333045', N'Quản trị viên', 'ndvhoa', '123';
EXEC ADD_EMPLOYEE N'Đoàn Thị Yến Nhi', N'Tân Thuận, Quận 7, HCM', '0382333045', N'Quản trị viên', 'dtynhi', '123';
GO
------


EXEC ADD_CANDIDATE  N'Phạm Thị Hồng', '1993-09-20', '0367890123', 'hmq@gmail.com' ,'phamhong', 'hong123';
GO


---
INSERT INTO COMPANY (CompanyID, Name, TaxCode, Email, PhoneNumber, Address, Representative, CompanyDicription, Censorship) VALUES 
('CO001', 'ABC Company', '1234567890', 'abc@example.com', '1234567890', '123 Main Street, City, Country', 'John Doe', 'Description of ABC Company', 'Approved'),
('CO002', 'XYZ Corporation', '9876543210', 'xyz@example.com', '9876543210', '456 Oak Avenue, City, Country', 'Jane Smith', 'Description of XYZ Corporation', 'Approved'),
('CO003', 'EFG Ltd', '1357924680', 'efg@example.com', '9876543210', '789 Elm Street, City, Country', 'Alice Johnson', 'Description of EFG Ltd', 'Pending'),
('CO004', 'LMN Industries', '2468135790', 'lmn@example.com', '1234567890', '321 Maple Avenue, City, Country', 'Bob Brown', 'Description of LMN Industries', 'Rejected'),
('CO005', 'PQR Group', '3692581470', 'pqr@example.com', '9876543210', '654 Pine Street, City, Country', 'Sarah White', 'Description of PQR Group', 'Approved'),
('CO006', 'STU Enterprises', '1592638470', 'stu@example.com', '1234567890', '987 Cedar Street, City, Country', 'David Johnson', 'Description of STU Enterprises', 'Approved'),
('CO007', 'VWX Co.', '3579514628', 'vwx@example.com', '9876543210', '852 Elmwood Avenue, City, Country', 'Emily Davis', 'Description of VWX Co.', 'Pending'),
('CO008', 'GHI Limited', '1239876540', 'ghi@example.com', '1234567890', '456 Birch Street, City, Country', 'Michael Wilson', 'Description of GHI Limited', 'Rejected'),
('CO009', 'JKL Industries', '9876543210', 'jkl@example.com', '9876543210', '789 Walnut Street, City, Country', 'Karen Martinez', 'Description of JKL Industries', 'Approved'),
('CO010', 'MNO Group', '3219876540', 'mno@example.com', '1234567890', '321 Maplewood Avenue, City, Country', 'Daniel Thompson', 'Description of MNO Group', 'Approved'),
GO

EXEC CREATE_RECRUITMENT_REGISTRATION 'CO001', '2024-05-13', '2024-06-12', 'Software Engineer', 5, 'Responsible for developing software applications', '3 years', 'Senior', 80000, 'Full-time', 'Bachelor degree in Computer Science', 'Advertising Banners'; 
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO002', '2024-05-15', '2024-06-15', 'Marketing Manager', 3, 'Develop and implement marketing strategies', '5 years', 'Managerial', 100000, 'Full-time', 'Bachelor degree in Marketing', 'Advertising Banners'; 
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO003', '2024-05-18', '2024-06-18', 'Accountant', 2, 'Responsible for financial record keeping', '2 years', 'Intermediate', 60000, 'Part-time', 'Bachelor degree in Accounting', 'Posting On Websites';
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO004', '2024-05-20', '2024-06-20', 'Sales Representative', 4, 'Promote and sell company products', '3 years', 'Intermediate', 70000, 'Full-time', 'Experience in sales field', 'Newspapers';
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO005', '2024-05-22', '2024-06-22', 'Graphic Designer', 2, 'Design visual concepts for various projects', '2 years', 'Intermediate', 60000, 'Remote', 'Portfolio of previous works required', 'Advertising Banners';
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO006', '2024-05-25', '2024-06-25', 'Human Resources Specialist', 3, 'Manage HR-related tasks and processes', '4 years', 'Senior', 90000, 'Full-time', 'Bachelor degree in HR Management', 'Posting On Websites';
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO007', '2024-05-28', '2024-06-28', 'Customer Service Representative', 4, 'Provide assistance and support to customers', '2 years', 'Intermediate', 65000, 'Part-time', 'Experience in customer service', 'Newspapers';
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO008', '2024-05-30', '2024-06-30', 'Quality Assurance Analyst', 2, 'Test software applications for quality assurance', '3 years', 'Intermediate', 70000, 'Full-time', 'Bachelor degree in Computer Science', 'Advertising Banners'; 
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO009', '2024-06-02', '2024-07-02', 'Project Manager', 3, 'Oversee and coordinate project activities', '5 years', 'Managerial', 110000, 'Full-time', 'Project management certification preferred', 'Posting On Websites';
EXEC CREATE_RECRUITMENT_REGISTRATION 'CO010', '2024-06-08', '2024-07-08', 'Financial Analyst', 3, 'Analyze financial data and provide recommendations', '3 years', 'Senior', 85000, 'Full-time', 'Bachelor degree in Finance or related field', 'Advertising Banners';


INSERT INTO POSTING_INFORMATION (PostingID, RegistFormID, JobDescription, Position, Experience, Level, ExpectedSalary, JobType, EmployeePerform, ContractType) 
VALUES 
('PI001', 'RF001', 'Responsible for developing software applications', 'Software Engineer', '3 years', 'Senior', 80000, 'Full-time', 'NV001', 'Advertising Banners'), 
('PI002', 'RF002', 'Develop and implement marketing strategies', 'Marketing Manager', '5 years', 'Managerial', 100000, 'Full-time', 'NV001', 'Advertising Banners'), 
('PI003', 'RF003', 'Responsible for financial record keeping', 'Accountant', '2 years', 'Intermediate', 60000, 'Part-time', 'NV001', 'Posting On Websites'), 
('PI004', 'RF004', 'Promote and sell company products', 'Sales Representative', '3 years', 'Intermediate', 70000, 'Full-time', 'NV001', 'Newspapers'), 
('PI005', 'RF005', 'Design visual concepts for various projects', 'Graphic Designer', '2 years', 'Intermediate', 60000, 'Remote', 'NV001', 'Advertising Banners'), 
('PI006', 'RF006', 'Manage HR-related tasks and processes', 'Human Resources Specialist', '4 years', 'Senior', 90000, 'Full-time', 'NV001', 'Posting On Websites'), 
('PI007', 'RF007', 'Provide assistance and support to customers', 'Customer Service Representative', '2 years', 'Intermediate', 65000, 'Part-time', 'NV001', 'Newspapers'), 
('PI008', 'RF008', 'Test software applications for quality assurance', 'Quality Assurance Analyst', '3 years', 'Intermediate', 70000, 'Full-time', 'NV001', 'Advertising Banners'), 
('PI009', 'RF009', 'Oversee and coordinate project activities', 'Project Manager', '5 years', 'Managerial', 110000, 'Full-time', 'NV001', 'Posting On Websites'), 
('PI010', 'RF010', 'Analyze financial data and provide recommendations', 'Financial Analyst', '3 years', 'Senior', 85000, 'Full-time', 'NV001', 'Advertising Banners'), 


DECLARE @RegistFormID VARCHAR(5) = 'RF001';

WHILE @RegistFormID <= 'RF019'
BEGIN
    EXEC UPDATE_STATUS_POSTING @RegistFormID;
    SET @RegistFormID = (SELECT TOP 1 RegistFormID FROM RECRUITMENT_REGISTRATION_FORM WHERE RegistFormID > @RegistFormID ORDER BY RegistFormID);
END;
