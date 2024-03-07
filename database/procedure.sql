USE [ABC_DB];


-- Add thông tin nhân viên và tạo tài khoản cho nhân viên
CREATE OR ALTER PROCEDURE ADD_STAFF
    @fullname NVARCHAR(50),
    @phonenumber CHAR(10),
    @address NVARCHAR(50),
    @username VARCHAR(30),
    @password VARCHAR(300)
AS
BEGIN
    DECLARE @NextID INT;
    DECLARE @StaffID CHAR(5);
    SELECT @NextID = COUNT([StaffID]) +1  FROM [STAFF] 
    SET @StaffID = 'ST' + RIGHT('0000' + CAST(@NextID AS VARCHAR(5)), 3);
    INSERT INTO [ACCOUNT]
    VALUES (@username, @password, 'RL1'); 
    INSERT INTO [STAFF]
    VALUES (@StaffID,  @username, @fullname, @phonenumber, @address);
END;

-- Lấy account dựa từ username
CREATE OR ALTER PROCEDURE FIND_USER
    @UserName VARCHAR(30)
AS
BEGIN
    SELECT [ACCOUNT].*, [ROLE].RoleName, [ROLE].Role_Description
    FROM [ACCOUNT]
    JOIN [ROLE] ON [ROLE].RoleID = [ACCOUNT].[RoleID]  
    WHERE [ACCOUNT].[UserName] = @UserName;
END;

--EXEC FIND_USER 'minhquang2803';

--Tìm thông tin ưng svieen và nhân viên thông qua username
CREATE OR ALTER PROCEDURE FIND_INFOR
    @UserName VARCHAR(30)
AS
BEGIN
    DECLARE @roleID CHAR(3);
    SELECT @roleID = [ACCOUNT].RoleID FROM [ACCOUNT] WHERE [UserName] = @UserName;

    IF @roleID = 'RL1'
    BEGIN
        SELECT *
        FROM [STAFF]
        WHERE [UserName] = @UserName; 
    END
    IF @roleID = 'RL2'
    BEGIN
        SELECT *
        FROM [CANDIDATE]
        WHERE [UserName] = @UserName;
    END
END;

--EXEC FIND_INFOR 'minhquang2803';

