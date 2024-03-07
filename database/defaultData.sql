
USE [ABC_DB];

INSERT INTO [ROLE]
VALUES
    ('RL1', N'Nhân viên', N'Tài khoản nhân viêN'),
    ('RL2', N'Ứng viên', N'Tài khoản ứng viên');

EXEC ADD_STAFF N'Huỳnh Minh Quang', '0382333045', 'Tân Quy, Quận 7, HCM', 'minhquang2803', 'minhquangabcnv';
EXEC ADD_STAFF N'Mạch Vĩ kiệt', '0382333045', 'Tân Quy, Quận 7, HCM', 'vikiet', 'vikietabcnv';
EXEC ADD_STAFF N'Nguyễn Xuân Lộc', '0382333045', 'Tân Quy, Quận 7, HCM', 'xuanloc', 'xuanlocabcnv';
EXEC ADD_STAFF N'Đoàn Thị Yến Nhi', '0382333045', 'Tân Quy, Quận 7, HCM', 'yennhi', 'yennhiabcnv';
EXEC ADD_STAFF N'Nguyễn Đức Vĩnh Hoà', '0382333045', 'Tân Quy, Quận 7, HCM', 'vinhhoa', 'vinhhoaabcnv';



