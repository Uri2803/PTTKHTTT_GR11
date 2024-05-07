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
    IF EXISTS (Select * FROM [ACCOUNT] WHERE [UserName] = @username)
    BEGIN
        RAISERROR ('Tài khoản đã tồn tại', 16, 1);
    END
    ELSE
    BEGIN
        DECLARE @NextID INT;
        DECLARE @EmployeeID CHAR(5);
        DECLARE @hashpassword VARCHAR(300);
        DECLARE @roleid INT;
        SELECT @NextID = COUNT([EmployeeID]) +1  FROM [EMPLOYEE] 
        SET @EmployeeID = 'NV' + RIGHT('0000' + CAST(@NextID AS VARCHAR(5)), 3);
        SET @roleid = (SELECT [RoleID] FROM [ROLE] WHERE [RoleName] = N'Nhân viên');
        SET @hashpassword = dbo.HashPassword(@password);  
        INSERT INTO [ACCOUNT]
        VALUES (@username, @hashpassword, @roleid); 
        INSERT INTO [EMPLOYEE]
        VALUES (@EmployeeID, @username, @fullname, @address, @phonenumber, @position);  
    END
END;
GO

-- Add thông tin nhân viên và tạo tài khoản cho ứng viên
CREATE OR ALTER PROCEDURE ADD_CANDIDATE
    @fullname NVARCHAR(50),
    @birthday DATE,
    @phonenumber CHAR(10),
    @address NVARCHAR(50),
    @username VARCHAR(30),
    @password VARCHAR(300)
AS
BEGIN
    IF EXISTS (Select * FROM [ACCOUNT] WHERE [UserName] = @username)
    BEGIN
        RAISERROR ('Tài khoản đã tồn tại', 16, 1);
    END
    ELSE
    BEGIN
        DECLARE @NextID INT;
        DECLARE @CandidateID CHAR(5);
        DECLARE @hashpassword VARCHAR(300);
        DECLARE @roleid INT;
        SELECT @NextID = COUNT([CandidateID]) +1  FROM [CANDIDATE] 
        SET @CandidateID = 'CD' + RIGHT('0000' + CAST(@NextID AS VARCHAR(5)), 3);
        SET @roleid = (SELECT [RoleID] FROM [ROLE] WHERE [RoleName] = N'Ứng viên');
        SET @hashpassword = dbo.HashPassword(@password);  
        INSERT INTO [ACCOUNT]
        VALUES (@username, @hashpassword, @roleid); 
        INSERT INTO [CANDIDATE]
        VALUES (@CandidateID, @username, @fullname, @birthday, @phonenumber, @address);  
    END
END;
GO



CREATE OR ALTER PROCEDURE LOGIN 
    @username NVARCHAR (20),
    @password VARCHAR(100)
AS
BEGIN
    DECLARE @hashpassword VARCHAR(300);
    SET @hashpassword = dbo.HashPassword(@password);
    IF EXISTS (SELECT 1 FROM [ACCOUNT] WHERE [ACCOUNT].UserName = @username AND [ACCOUNT].[Password] = @hashpassword)
    BEGIN
       IF (SELECT RL.RoleName FROM [ACCOUNT] AC  JOIN [ROLE] RL ON RL.RoleID = AC.RoleID WHERE AC.UserName = @username) =N'Nhân viên'
       BEGIN
            SELECT E.EmployeeID AS ID, RL.RoleName 
            FROM [ACCOUNT] AC
            JOIN [ROLE] RL ON RL.RoleID = AC.RoleID
            JOIN [EMPLOYEE] E ON E.UserName = [AC].UserName
            WHERE AC.UserName =@username;
       END
       IF (SELECT RL.RoleName FROM [ACCOUNT] AC  JOIN [ROLE] RL ON RL.RoleID = AC.RoleID WHERE AC.UserName = @username) =N'Ứng viên'
       BEGIN
            SELECT C.CandidateID AS ID, RL.RoleName 
            FROM [ACCOUNT] AC
            JOIN [ROLE] RL ON [RL].RoleID = [AC].RoleID
            JOIN [CANDIDATE] C ON C.UserName = [AC].UserName
            WHERE AC.UserName =@username;
       END
    END
    ELSE
    BEGIN
        RAISERROR ('Tài khoản hoặc mật Khẩu không đúng', 16, 1);
    END
END;
GO


-- Tạo company
CREATE OR ALTER PROCEDURE CREATE_COMPANY
    @companyname NVARCHAR(100),
    @email VARCHAR(50),
    @phonenumber CHAR(10),
    @taxcode VARCHAR(10),
    @address NVARCHAR(100),
    @companyrepresentative NVARCHAR(50),
    @companydescription NVARCHAR(500)
AS
BEGIN
    DECLARE @NextID INT;
    DECLARE @companyID CHAR(5);
    SELECT @NextID = COUNT([CompanyID]) +1  FROM [COMPANY] 
    SET @companyID = 'CO' + RIGHT('0000' + CAST(@NextID AS VARCHAR(5)), 3);
    INSERT INTO [COMPANY] 
    VALUES (@companyID, @companyname, @taxcode, @email, @phonenumber, @address, @companyrepresentative, @companydescription, N'Đã duyệt');
END;
GO



--EXEC FIND_USER 'minhquang2803';
--Tìm thông tin ưng svieen và nhân viên thông qua username
CREATE OR ALTER PROCEDURE FIND_INFOR
    @UserName VARCHAR(30)
AS
BEGIN
    DECLARE @roleID CHAR(3);
    SELECT @roleID = [ACCOUNT].RoleID FROM [ACCOUNT] WHERE [UserName] = @UserName;

    IF @roleID = '1'
    BEGIN
        SELECT *
        FROM [EMPLOYEE]
        WHERE [UserName] = @UserName; 
    END
    IF @roleID = '2'
    BEGIN
        SELECT *
        FROM [CANDIDATE]
        WHERE [UserName] = @UserName;
    END
END;
GO

--EXEC FIND_INFOR 'minhquang2803';

-- Lấy thông tin công ty 

CREATE OR ALTER PROCEDURE GET_COMPANY_INFOR
    @postingid VARCHAR(5)
AS
BEGIN
    IF NOT EXISTS (SELECT * FROM [POSTING_INFORMATION] WHERE [PostingID] = @postingid)
    BEGIN
        RAISERROR ('Không tìm thấy công ty', 16, 1);
    END
    ELSE
    BEGIN
        SELECT CO.*
        FROM [COMPANY] CO
        JOIN [RECRUITMENT_REGISTRATION_FORM] RRF ON RRF.CompanyID = CO.CompanyID
        JOIN [POSTING_INFORMATION] PI ON PI.RegistFormID = RRF.RegistFormID  
        WHERE PI.PostingID = @postingid;
    END
END;
GO

--EXEC GET_COMPANY_INFOR 'CO001';

CREATE OR ALTER PROCEDURE GET_ALL_POSTING
AS
BEGIN
    SELECT PI.PostingID, CO.CompanyID, PI.[Level], PI.[Position], PI.ExpectedSalary, PI.Eperience, PI.JobType, CO.Name, CO.Address
    FROM [POSTING_INFORMATION] PI 
    JOIN [RECRUITMENT_REGISTRATION_FORM] RRF ON PI.RegistFormID = RRF.RegistFormID
    JOIN [COMPANY] CO ON CO.CompanyID = RRF.CompanyID;
END;
GO

--EXEC GET_ALL_POSTING ;

CREATE OR ALTER PROCEDURE GET_JOB_DETAIL
    @postingid VARCHAR(5)
AS
BEGIN
    SELECT PI.PostingID, PI.[Position], PI.[Level], PI.JobType, PI.ExpectedSalary, PI.JobDescription, PI.Eperience, PI.ContractType
    FROM [POSTING_INFORMATION] PI
    WHERE pi.PostingID = @postingid;
END;
GO
EXEC GET_JOB_DETAIL 'PI001';
GO
