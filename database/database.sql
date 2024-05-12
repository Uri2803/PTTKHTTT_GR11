USE master
GO
IF EXISTS (SELECT * FROM sys.databases
           WHERE name = 'ABC_DB')
BEGIN
    DROP DATABASE ABC_DB;
END
GO

CREATE DATABASE ABC_DB;
GO

USE ABC_DB;
GO

CREATE TABLE [ROLE] (
  [RoleID] INT PRIMARY KEY IDENTITY(1,1) ,
  [RoleName] NVARCHAR(20),
  [RoleDicription] NVARCHAR(100)
)
GO

CREATE TABLE [ACCOUNT] (
  [UserName] VARCHAR(20) PRIMARY KEY,
  [Password] VARCHAR(300),
  [RoleID] INT
)
GO

CREATE TABLE [EMPLOYEE] (
  [EmployeeID] VARCHAR(5) PRIMARY KEY,
  [UserName] VARCHAR(20),
  [FullName] NVARCHAR(50),
  [Address] NVARCHAR(100),
  [PhoneNumber] CHAR(10),
  [Position] NVARCHAR(20)
)
GO

CREATE TABLE [COMPANY] (
  [CompanyID] VARCHAR(5) PRIMARY KEY,
  [Name] NVARCHAR(100),
  [TaxCode] VARCHAR(10),
  [Email] VARCHAR(50),
  [PhoneNumber] CHAR(10),
  [Address] NVARCHAR(100),
  [Representative] NVARCHAR(50),
  [CompanyDicription] NVARCHAR(300),
  [Censorship] NVARCHAR(10)
)
GO

CREATE TABLE [CANDIDATE] (
  [CandidateID] VARCHAR(5) PRIMARY KEY,
  [UserName] VARCHAR(20),
  [FullName] NVARCHAR(50),
  [Birthday] DATE,
  [PhoneNumber] CHAR(10),
  [Email] VARCHAR(50)
)
GO

CREATE TABLE [APPLICATION] (
  [ApplicationID] VARCHAR(5) PRIMARY KEY,
  [CandidateID] VARCHAR(5),
  [RegistFormID] VARCHAR(5),
  [ApprovalDate] DATE,
  [ApplicationStatus] NVARCHAR(15)
)
GO

CREATE TABLE [APPLICATION_REGISTRATION_FORM] (
  [RegistFormID] VARCHAR(5) PRIMARY KEY,
  [PostingID] VARCHAR(5),
  [RegistDate] DATE,
  [YearExperience] NVARCHAR(30),
  [Level] NVARCHAR(50),
  [Skill] NVARCHAR(100),
  [AboutYourself] NVARCHAR(300)
)
GO

CREATE TABLE [DOCUMENT] (
  [DocumentID] VARCHAR(5) PRIMARY KEY,
  [ApplicationID] VARCHAR(5),
  [DegreeType] NVARCHAR(20),
  [DateRange] DATE
)
GO

CREATE TABLE [RECRUITMENT_REGISTRATION_FORM] (
  [RegistFormID] VARCHAR(5) PRIMARY KEY,
  [CompanyID] VARCHAR(5),
  [AdStartDate] DATE,
  [AdEndDate] DATE,
  [PositionVacancies] NVARCHAR(100),
  [NumberRecruitment] INT,
  [JobDescription] NVARCHAR(500),
  [Experience] NVARCHAR(100), 
  [Level] NVARCHAR(100),
  [ExpectedSalary] INT,
  [JobType] NVARCHAR(100),
  [RequiredCandidates] NVARCHAR(500),
  [AdType] NVARCHAR(100),
  [Status] NVARCHAR(30)
)
GO

CREATE TABLE [POSTING_INFORMATION] (
  [PostingID] VARCHAR(5) PRIMARY KEY,
  [RegistFormID] VARCHAR(5),
  [JobDescription] NVARCHAR(500),
  [Position] NVARCHAR(100),
  [Experience] NVARCHAR(100), 
  [Level] NVARCHAR(100),
  [ExpectedSalary] INT,
  [JobType] NVARCHAR(100),
  [EmployeePerform] VARCHAR(5),
  [ContractType] NVARCHAR(100)
)
GO

CREATE TABLE [REGISTRATION_RENEWAL_FORM] (
  [RegistRenewalFormID] VARCHAR(5) PRIMARY KEY,
  [RegistFormID] VARCHAR(5),
  [ExtendedTime] NVARCHAR(20),
  [AmendmentDetails] TEXT,
  [IncentiveStrategy] TEXT,
  [EmployeePerform] VARCHAR(5)
)
GO

CREATE TABLE [RECEIPTS] (
  [ReceiptsID] VARCHAR(5) PRIMARY KEY,
  [RegistFormID] VARCHAR(5),
  [TotalMoney] INT,
  [ServiceDescription] TEXT,
  [EmployeePerform] VARCHAR(5)
)
GO

CREATE TABLE [BILL] (
  [BillID] VARCHAR(5) PRIMARY KEY,
  [ReceiptsID] VARCHAR(5),
  [CompanyID] VARCHAR(5),
  [TotalMoney] INT,
  [ServiceDescription] TEXT,
  [EmployeePerform] VARCHAR(5)
)
GO

ALTER TABLE [ACCOUNT] ADD FOREIGN KEY ([RoleID]) REFERENCES [ROLE] ([RoleID])
GO
ALTER TABLE [EMPLOYEE] ADD FOREIGN KEY ([UserName]) REFERENCES [ACCOUNT] ([UserName])
GO
ALTER TABLE  [CANDIDATE] ADD FOREIGN KEY ([UserName]) REFERENCES [ACCOUNT] ([UserName])
GO

ALTER TABLE [APPLICATION] ADD FOREIGN KEY ([CandidateID]) REFERENCES [CANDIDATE] ([CandidateID])
GO

ALTER TABLE [RECRUITMENT_REGISTRATION_FORM] ADD FOREIGN KEY ([CompanyID]) REFERENCES [COMPANY] ([CompanyID])
GO

ALTER TABLE [POSTING_INFORMATION] ADD FOREIGN KEY ([RegistFormID]) REFERENCES [RECRUITMENT_REGISTRATION_FORM] ([RegistFormID])
GO

ALTER TABLE [POSTING_INFORMATION] ADD FOREIGN KEY ([EmployeePerform]) REFERENCES [EMPLOYEE] ([EmployeeID])
GO

ALTER TABLE [REGISTRATION_RENEWAL_FORM] ADD FOREIGN KEY ([RegistFormID]) REFERENCES [RECRUITMENT_REGISTRATION_FORM] ([RegistFormID])
GO

ALTER TABLE [REGISTRATION_RENEWAL_FORM] ADD FOREIGN KEY ([EmployeePerform]) REFERENCES [EMPLOYEE] ([EmployeeID])
GO

ALTER TABLE [RECEIPTS] ADD FOREIGN KEY ([ReceiptsID]) REFERENCES [RECRUITMENT_REGISTRATION_FORM] ([RegistFormID])
GO
ALTER TABLE [RECEIPTS] ADD FOREIGN KEY ([EmployeePerform]) REFERENCES [EMPLOYEE] ([EmployeeID])
GO

ALTER TABLE [BILL] ADD FOREIGN KEY ([ReceiptsID]) REFERENCES [RECEIPTS] ([ReceiptsID])
GO

ALTER TABLE [BILL] ADD FOREIGN KEY ([CompanyID]) REFERENCES [COMPANY] ([CompanyID])
GO

ALTER TABLE [BILL] ADD FOREIGN KEY ([EmployeePerform]) REFERENCES [EMPLOYEE] ([EmployeeID])
GO

ALTER TABLE [DOCUMENT] ADD FOREIGN KEY ([ApplicationID]) REFERENCES [APPLICATION] ([ApplicationID])
GO

ALTER TABLE [APPLICATION] ADD FOREIGN KEY ([RegistFormID]) REFERENCES [APPLICATION_REGISTRATION_FORM] ([RegistFormID])
GO

ALTER TABLE [APPLICATION_REGISTRATION_FORM] ADD FOREIGN KEY ([PostingID]) REFERENCES [POSTING_INFORMATION] ([PostingID])
GO