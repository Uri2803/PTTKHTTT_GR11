USE [ABC_DB];
GO

-----////////------ 
--Hash password
CREATE OR ALTER FUNCTION dbo.HashPassword
(
    @Password VARCHAR(300)
)
RETURNS VARCHAR(300)
AS
BEGIN
    DECLARE @HashedPassword VARCHAR(64);
    -- Hash password using SHA-256 algorithm
    SET @HashedPassword = CONVERT(VARCHAR(64), HASHBYTES('SHA2_256', @Password), 2);
    RETURN @HashedPassword;
END;
GO


-----//////-------

-- Add thông tin nhân viên và tạo tài khoản cho nhân viên
CREATE OR ALTER PROCEDURE ADD_EMPLOYEE
    @fullname NVARCHAR(50),
    @address NVARCHAR(50),
    @phonenumber CHAR(10),
    @position NVARCHAR(20),
    @username VARCHAR(30),
    @password VARCHAR(300)
AS
BEGIN
    DECLARE @NextID INT;
    DECLARE @EmployeeID CHAR(5);
    DECLARE @hashpassword VARCHAR(300);
    SELECT @NextID = COUNT([EmployeeID]) +1  FROM [EMPLOYEE] 
    SET @EmployeeID = 'NV' + RIGHT('0000' + CAST(@NextID AS VARCHAR(5)), 3);
    INSERT INTO [EMPLOYEE]
    VALUES (@EmployeeID, @fullname, @address, @phonenumber, @position);
    SET @hashpassword = dbo.HashPassword(@password);
    INSERT INTO [ACCOUNT]
    VALUES (@username, @hashpassword, @EmployeeID); 
END;
GO


---Login

CREATE OR ALTER FUNCTION dbo.Login 
(
    @username VARCHAR(30),
    @password VARCHAR(300)
)
RETURNS VARCHAR(5)
AS
BEGIN
    DECLARE @hashpassword VARCHAR(300);
    DECLARE @employeeid VARCHAR(5);

    SET @hashpassword = dbo.HashPassword(@password);
    
    -- Check if the username and hashed password exist in the database
    IF EXISTS (SELECT 1 FROM [ACCOUNT] WHERE [ACCOUNT].UserName = @username AND [ACCOUNT].[Password] = @hashpassword)
    BEGIN
        -- Get the employee ID
        SET @employeeid = (SELECT EmployeeID FROM [ACCOUNT] WHERE [ACCOUNT].UserName = @username AND [ACCOUNT].[Password] = @hashpassword);
        RETURN @employeeid;
    END
    ELSE 
    BEGIN
        -- Return '00000' if login fails
        RETURN '00000';
    END; 
    RETURN '00000';
END;
GO

-- Tạo company
CREATE OR ALTER PROCEDURE CREATE_COMPANY
    @companyname NVARCHAR(100),
    @email
    @phonenumber
    @taxcode 
    @address
    @companyrepresentative
    @companydescription

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
go

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
go

--EXEC FIND_INFOR 'minhquang2803';

