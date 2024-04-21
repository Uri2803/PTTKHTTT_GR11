IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'ABC_DB')
BEGIN
    CREATE DATABASE ABC_DB;
END
GO

USE ABC_DB;
GO

CREATE TABLE [ACCOUNT] (
  [UserName] VARCHAR(20) PRIMARY KEY,
  [Password] VARCHAR(200),
  [EmployeeID] CHAR(5)
)
GO

CREATE TABLE [EMPLOYEE] (
  [EmployeeID] VARCHAR(5) PRIMARY KEY,
  [FullName] NVARCHAR(50),
  [Address] NVARCHAR(100),
  [PhoneNumber] CHAR(10),
  [Position] NVARCHAR(20)
)
GO

CREATE TABLE [ENTERPRISE] (
  [EnterpriseID] VARCHAR(5) PRIMARY KEY,
  [Name] NVARCHAR(100),
  [TaxCode] VARCHAR(10),
  [Email] VARCHAR(50),
  [Address] NVARCHAR(100),
  [Representative] NVARCHAR(50),
  [Censorship] NVARCHAR(10)
)
GO

CREATE TABLE [CANDIDATE] (
  [CandidateID] CHAR(5) PRIMARY KEY,
  [FullName] NVARCHAR(50),
  [Birthday] DATE,
  [PhoneNumber] CHAR(10),
  [Address] NVARCHAR(100)
)
GO

CREATE TABLE [APPLICATION] (
  [ApplicationID] VARCHAR(5) PRIMARY KEY,
  [CandidateID] CHAR(5),
  [ApprovalDate] DATE,
  [ApplicationStatus] NVARCHAR(15)
)
GO

CREATE TABLE [APPLICATION_REGISTRATION_FORM] (
  [RegistFormID] VARCHAR(5) PRIMARY KEY,
  [ApplicationID] VARCHAR(5),
  [Position] NVARCHAR(20),
  [RegistDate] DATE,
  [RegistFormStatus] NVARCHAR(15)
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
  [EnterpriseID] VARCHAR(5),
  [PostingTime] DATE,
  [PositionVacancies] NVARCHAR(15),
  [NumberRecruitment] INT,
  [RequiredCandidates] TEXT
)
GO

CREATE TABLE [POSTING_INFORMATION] (
  [PostingID] VARCHAR(5) PRIMARY KEY,
  [RegistFormID] VARCHAR(5),
  [JobDescription] TEXT,
  [Welfare] TEXT,
  [ExpectedSalary] INT
)
GO

CREATE TABLE [REGISTRATION_RENEWAL_FORM] (
  [RegistRenewalFormID] VARCHAR(5) PRIMARY KEY,
  [RegistFormID] VARCHAR(5),
  [ExtendedTime] NVARCHAR(20),
  [AmendmentDetails] TEXT,
  [IncentiveStrategy] TEXT
)
GO

CREATE TABLE [Receipts] (
  [ReceiptsID] VARCHAR(5) PRIMARY KEY,
  [RegistFormID] VARCHAR(5),
  [TotalMoney] INT,
  [ServiceDescription] TEXT
)
GO

CREATE TABLE [BILL] (
  [BillID] VARCHAR(5) PRIMARY KEY,
  [ReceiptsID] VARCHAR(5),
  [EnterpriseID] VARCHAR(5),
  [TotalMoney] INT,
  [ServiceDescription] TEXT
)
GO

ALTER TABLE [ACCOUNT] ADD FOREIGN KEY ([EmployeeID]) REFERENCES [EMPLOYEE] ([EmployeeID])
GO

ALTER TABLE [APPLICATION] ADD FOREIGN KEY ([ApplicationID]) REFERENCES [APPLICATION_REGISTRATION_FORM] ([ApplicationID])
GO

ALTER TABLE [APPLICATION] ADD FOREIGN KEY ([ApplicationID]) REFERENCES [DOCUMENT] ([ApplicationID])
GO

ALTER TABLE [APPLICATION] ADD FOREIGN KEY ([CandidateID]) REFERENCES [CANDIDATE] ([CandidateID])
GO

ALTER TABLE [RECRUITMENT_REGISTRATION_FORM] ADD FOREIGN KEY ([EnterpriseID]) REFERENCES [ENTERPRISE] ([EnterpriseID])
GO

ALTER TABLE [POSTING_INFORMATION] ADD FOREIGN KEY ([RegistFormID]) REFERENCES [RECRUITMENT_REGISTRATION_FORM] ([RegistFormID])
GO

ALTER TABLE [REGISTRATION_RENEWAL_FORM] ADD FOREIGN KEY ([RegistRenewalFormID]) REFERENCES [RECRUITMENT_REGISTRATION_FORM] ([RegistFormID])
GO

ALTER TABLE [Receipts] ADD FOREIGN KEY ([ReceiptsID]) REFERENCES [RECRUITMENT_REGISTRATION_FORM] ([RegistFormID])
GO

ALTER TABLE [BILL] ADD FOREIGN KEY ([ReceiptsID]) REFERENCES [Receipts] ([ReceiptsID])
GO

ALTER TABLE [BILL] ADD FOREIGN KEY ([EnterpriseID]) REFERENCES [ENTERPRISE] ([EnterpriseID])
GO
