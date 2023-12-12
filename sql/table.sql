DROP TABLE IF EXISTS People;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Promotion;
DROP TABLE IF EXISTS Place;

CREATE TABLE People (
    ID int(14) NOT NULL,
    Year_Birth smallint NOT NULL,
    Education varchar(10) NOT NULL,
    Maritial_Status varchar(8) NOT NULL,
    Income int(20) NOT NULL,
    Kidhome int(3) NOT NULL,
    Teenhome int (3) NOT NULL,
    Dt_Customer date NOT NULL,
    Recency int(7) NOT NULL,
    Complain int(2) NOT NULL,

    PRIMARY KEY (ID),
    UNIQUE (ID)
);

CREATE TABLE Products (
    MntWines int(11) NOT NULL,
    MntFruits int(8) NOT NULL,
    MntMeatProducts int(11) NOT NULL,
    MntFishProducts int(10) NOT NULL,
    MntSweetProducts int(10) NOT NULL,
    MntGoldProds int(10) NOT NULL,

    ID int(14) NOT NULL,

    FOREIGN KEY (ID) REFERENCES People(ID),
    UNIQUE (ID)
);

CREATE TABLE Promotion (
    NumDealsPurchases int(5) NOT NULL,
    AcceptedCmp1 int(2) NOT NULL,
    AcceptedCmp2 int(2) NOT NULL,
    AcceptedCmp3 int(2) NOT NULL,
    AcceptedCmp4 int(2) NOT NULL,
    AcceptedCmp5 int(2) NOT NULL,
    Response int(2) NOT NULL,

    ID int(14) NOT NULL,

    FOREIGN KEY (ID) REFERENCES People(ID),
    UNIQUE (ID)
);

CREATE TABLE Place (
    NumWebPurchases int(5) NOT NULL,
    NumCatalogPurchases int(5) NOT NULL,
    NumStorePurchases int(3) NOT NULL,
    NumWebVisitsMonth int(5) NOT NULL,

    ID int(14) NOT NULL,

    FOREIGN KEY (ID) REFERENCES People(ID),
    UNIQUE (ID)
);