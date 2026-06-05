-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: paynrent
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrator` (
  `emailid` varchar(100) NOT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `adminname` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `picture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES ('kk@gmail.com','7415782600','harry singh','12345','2.jpg'),('ss@gmail.com','7999812406','Peter Kumar','123','1.jpg');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookingdetails`
--

DROP TABLE IF EXISTS `bookingdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookingdetails` (
  `bookingid` int NOT NULL AUTO_INCREMENT,
  `bookingcity` varchar(45) DEFAULT NULL,
  `useremail` varchar(45) DEFAULT NULL,
  `userphone` varchar(45) DEFAULT NULL,
  `bookingdatetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bookingstarttime` varchar(100) DEFAULT NULL,
  `bookingendtime` varchar(100) DEFAULT NULL,
  `totalamount` int DEFAULT NULL,
  `advancepayment` int DEFAULT NULL,
  `paymentid` varchar(45) DEFAULT NULL,
  `bookingstatus` varchar(45) DEFAULT NULL,
  `vehicleregistrationnum` varchar(45) DEFAULT NULL,
  `vehicleid` int DEFAULT NULL,
  `paymentstatus` varchar(45) DEFAULT NULL,
  `deliverylocation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`bookingid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookingdetails`
--

LOCK TABLES `bookingdetails` WRITE;
/*!40000 ALTER TABLE `bookingdetails` DISABLE KEYS */;
INSERT INTO `bookingdetails` VALUES (1,'Gwalior','ss@gmail.com','7999812406','2023-01-15 12:44:22','2023-01-17T18:30:00.000Z','2023-01-19T18:30:00.000Z',3200,2000,'1234',' Completed','8',1,'Paid Full Amount','paynride gwalior'),(2,'Gwalior','ss@gmail.com','7999812406','2023-01-15 12:48:02','2023-01-17T18:30:00.000Z','2023-01-19T18:30:00.000Z',3200,2000,'pay_L4MrCsMF8TMlnr','pending','8',1,'Paid Full amount','paynride gwalior'),(3,'Gwalior','ss@gmail.com','7999812406','2023-01-15 14:55:26','2023-01-15T18:30:00.000Z','2023-01-18T18:30:00.000Z',9600,2000,'pay_L4P1nv53gs2Os4','Pending','8',1,' Not Paid Full Amount','paynride gwalior'),(5,'Gwalior','ss@gmail.com','7999812406','2023-01-15 20:47:22','2023-01-08T18:30:00.000Z','2023-01-17T18:30:00.000Z',24000,2000,'pay_L4V1YHoCbMQDzS','pending','8',1,'Not Fully Paid',NULL),(6,'Gwalior','ss@gmail.com','7999812406','2023-01-15 20:49:02','2023-01-08T18:30:00.000Z','2023-01-17T18:30:00.000Z',24000,2000,'pay_L4V3KKvJeKsgVf','pending','8',1,'Not Fully Paid','location'),(7,'Bhopal','ss@gmail.com','7999812406','2023-01-15 21:07:55','2023-01-16T18:30:00.000Z','2023-01-18T18:30:00.000Z',7200,2000,'pay_L4VNH0boCIk7ne','pending','8',1,'Not Fully Paid','location'),(8,'Gwalior','ss@gmail.com','7999812406','2023-01-21 22:01:30','2023-01-28T18:30:00.000Z','2023-01-29T18:30:00.000Z',4800,2000,'pay_L6tUUHLdGMHHlH','pending','8',1,'Not Fully Paid','location'),(9,'Gwalior','snappersharmaji@gmail.com','7049236515','2023-03-27 12:53:06','2023-03-26T18:30:00.000Z','2023-03-27T18:30:00.000Z',4880,2000,'pay_LWSs3ZQXfgR7w8','pending','9',1,'Not Fully Paid','location'),(10,'Gwalior','ss@gmail.com','7999812406','2023-03-27 12:56:11','2023-03-26T18:30:00.000Z','2023-03-27T18:30:00.000Z',4400,2000,'pay_LWSvKLTyjCFKLe','pending','8',1,'Not Fully Paid','location'),(11,'Indore','akhileshsharma0106@gmail.com','7999812406','2023-04-09 20:46:21','2023-04-10T00:30:00.000Z','2023-04-10T18:30:00.000Z',4700,2000,'pay_LbjsWwiVx0zRC1','pending','12',1,'Not Fully Paid','location'),(12,'Gwalior','akhileshsharma0106@gmail.com','7999812406','2023-09-26 13:02:49','2023-09-25T18:30:00.000Z','2023-09-27T18:30:00.000Z',7760,2000,'pay_MgsnLK9IY1garl','pending','9',1,'Not Fully Paid','location'),(13,'Indore','akhileshsharma0106@gmail.com','7999812406','2023-10-30 12:32:20','2023-10-29T18:30:00.000Z','2023-11-01T18:30:00.000Z',9200,2000,'pay_MuKREaVYUnjiSK','pending','8',1,'Not Fully Paid','location'),(14,'Bhopal','akhileshsharma0106@gmail.com','7999812406','2024-02-12 16:25:26','2024-02-11T18:30:00.000Z','2024-02-16T06:30:00.000Z',13200,2000,'pay_NZwV6T9Jt9q3dR','pending','8',1,'Not Fully Paid','location'),(15,'Indore','akhileshsharma0106@gmail.com','7999812406','2024-02-17 16:38:52','2024-02-20T02:07:00.000Z','2024-02-21T18:30:00.000Z',6000,2000,'pay_NbvOwXWd9eZNeT','pending','8',1,'Not Fully Paid','location'),(16,'Gwalior','akhileshsharma0106@gmail.com','7999812406','2024-03-26 14:44:12','2024-03-27T18:30:00.000Z','2024-03-28T18:30:00.000Z',4880,2000,'pay_NqvkMXVH1cwXQj','pending','9',1,'Not Fully Paid','location'),(17,'Gwalior','akhileshsharma0106@gmail.com','7999812406','2024-11-10 13:21:02','2024-11-10T18:30:00.000Z','2024-11-11T18:30:00.000Z',5600,2000,'pay_PJWekPJEsaRut7','pending','12',1,'Not Fully Paid','location');
/*!40000 ALTER TABLE `bookingdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(45) DEFAULT NULL,
  `icon` text,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (11,'Cars','e2f01097-b49c-4892-a01b-900d389d18ab.png'),(12,'Bikes','29c5956b-d802-4264-a435-fed16125b19b.jpg'),(13,'Buses','29c5956b-d802-4264-a435-fed16125b19b.jpg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `cityid` int NOT NULL,
  `cityname` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cityid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Gwalior','Top City'),(2,'Indore','Top City'),(3,'Bhopal','Top City'),(4,'Agra','Top City'),(5,'Lucknow','Top City'),(6,'Jablpur','Other City'),(7,'Kanpur','Other City'),(8,'Jhansi','Other City');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `companyid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int DEFAULT NULL,
  `companyname` varchar(45) DEFAULT NULL,
  `icon` text,
  PRIMARY KEY (`companyid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (7,11,15,'huyndai','aea1dbbc-faa7-4cbc-a523-3b92e0f6a56e.png'),(8,11,15,'Suzuki','aec2e5e6-8796-45a5-b362-6223965ace5a.png'),(10,13,17,'TATA','3792bf16-2b70-4ce7-9413-62fff90b64c7.png');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `featured`
--

DROP TABLE IF EXISTS `featured`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `featured` (
  `featuredid` int NOT NULL AUTO_INCREMENT,
  `image` varchar(45) DEFAULT NULL,
  `link` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`featuredid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `featured`
--

LOCK TABLES `featured` WRITE;
/*!40000 ALTER TABLE `featured` DISABLE KEYS */;
INSERT INTO `featured` VALUES (1,'cb6ea347-b68d-4307-b8e9-ea90890eb740.png','xxxx'),(2,'f6136883-2aef-4b0d-a1d7-bf8986805e15.png','xxxx'),(3,'c7fa7abc-16dd-44d2-ad17-a9679069503e.png','xxxx'),(4,'9776e0a4-427e-4b8e-bdf1-af5a03fcae53.jpg','xxxx'),(5,'bffbb21b-ca79-4442-99c4-747368818c2a.jpg','xxxx'),(6,'62ea5914-1a19-49bc-a1e7-6b83432cdcbc.jpg','xxxx'),(7,'50e30782-8cca-491a-b28c-e64a2fbce96d.jpg','xxxx');
/*!40000 ALTER TABLE `featured` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model`
--

DROP TABLE IF EXISTS `model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model` (
  `modelid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int DEFAULT NULL,
  `companyid` int DEFAULT NULL,
  `modelname` varchar(45) DEFAULT NULL,
  `modelyear` varchar(4) DEFAULT NULL,
  `icon` text,
  PRIMARY KEY (`modelid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model`
--

LOCK TABLES `model` WRITE;
/*!40000 ALTER TABLE `model` DISABLE KEYS */;
INSERT INTO `model` VALUES (2,11,15,7,'dwkjjkdnkj','2021','61543e80-0b12-4a5e-9c63-67a02bd4c957.png'),(4,11,15,5,'djk','2021','0b5cd5a6-68a9-4957-869b-2db7690de28a.png'),(5,12,14,1,'jjkjkj','2025','1c2e060d-4c85-4edc-8ffc-8f8bbf60e5da.png'),(6,11,15,7,'Grand i10','2015','3c223202-3a99-4e07-af29-1fdb4cb6ba66.png'),(7,11,15,7,'Creta','2019','a1002356-ff38-4a1c-bec2-233b8a111fa6.png'),(8,11,15,8,'Alto K10','2019','a64abd01-1be3-4fd3-8597-340da99c95fe.png'),(9,11,15,8,'Baleno','2019','c45d4c10-3435-4bf4-af3c-242efd17b44c.png'),(10,11,15,8,'Swift','2019','395d2cea-bf82-45fe-bab5-78c830275cb5.png'),(11,13,17,10,'tata 57 seater','2020','384f6174-42ba-4b8f-9b48-a4461cb7da54.png');
/*!40000 ALTER TABLE `model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `offerid` int NOT NULL AUTO_INCREMENT,
  `image` varchar(45) DEFAULT NULL,
  `tittle` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`offerid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,'58ac8dd1-8406-4cac-b686-dfc1e382b678.jpeg','Flat Offer 15%','Hurry Limited time offer'),(2,'f6a01f4b-5b72-4838-a4a9-bd9b0229f76b.jpeg','Flat Offer 15%','Hurry Limited time offer'),(3,'e9df15d4-53c3-4124-9f59-f36187e787e6.jpeg','Flat Offer 15%','Hurry Limited time offer'),(4,'e006e944-603e-43f0-9e89-776f7cd83152.jpeg','Flat Offer 14%','Hurry Limited time offer'),(5,'031d4f17-e259-4169-8779-90d2978235f5.jpeg','Flat Offer 14%','Hurry Limited time offer');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `subcategoryid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `subcategoryname` varchar(45) DEFAULT NULL,
  `priority` int DEFAULT NULL,
  `icon` text,
  PRIMARY KEY (`subcategoryid`),
  UNIQUE KEY `subcategoryid_UNIQUE` (`subcategoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (14,11,'mini',3,'9e7d25ee-18f2-4fe7-bb7e-4f11e325a719.jpg'),(15,11,'Small Cars',1,'9ca94452-84ef-4afd-b2e8-81e4c17b2da7.jpeg'),(16,11,'SUV',4,'a7896d98-bcf9-4e3e-816f-6efed5c53b85.jpg'),(17,13,'Big Buses',5,'a41c53eb-cbb2-495f-8134-baab76f5da98.png');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdetails`
--

DROP TABLE IF EXISTS `userdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userdetails` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `mobileno` varchar(45) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `fullname` varchar(45) DEFAULT NULL,
  `birthdate` varchar(45) DEFAULT NULL,
  `aadharno` varchar(45) DEFAULT NULL,
  `licenseno` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdetails`
--

LOCK TABLES `userdetails` WRITE;
/*!40000 ALTER TABLE `userdetails` DISABLE KEYS */;
INSERT INTO `userdetails` VALUES (11,'7999812405','snappershar@gmail.com','vhbjdhwijik','03/07/2002',NULL,'hbhjd45'),(12,'7999812407','akhileshsharma016@gmail.com','Vivek Khatri','01/01/5989',NULL,'88888888888'),(13,'7415752601','bwjnjnkw@gmail.com','hjnjnkd','03/05/2006',NULL,'4666ejfnk'),(14,'7999812406','akhileshsharma0106@gmail.com','Vibek sharma','03/07/2002',NULL,'whbuujhud3262'),(15,'7000192752','Bharat@gmail.com','Bharat',NULL,NULL,'Chdbd08559');
/*!40000 ALTER TABLE `userdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `vehicleid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `subcategoryid` int DEFAULT NULL,
  `companyid` int DEFAULT NULL,
  `modelid` int DEFAULT NULL,
  `vendorid` int DEFAULT NULL,
  `registrationnum` varchar(45) NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `fueltype` varchar(45) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `average` int DEFAULT NULL,
  `remark` text,
  `capacity` int DEFAULT NULL,
  `itemstatus` varchar(45) DEFAULT NULL,
  `feature` text,
  `icon` text,
  `rentperhour` int DEFAULT NULL,
  PRIMARY KEY (`vehicleid`,`registrationnum`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (8,11,15,7,6,1,'1','Red','PETROL',1,10,'1',4,'continue','1','22742610-1ff0-44cf-aed2-4ba226048b59.png',100),(9,11,15,7,7,1,'1','Silver','DISEL',1,10,'1',5,'continue','1','fa6e79da-1554-41e8-8cfe-3726480c6b5d.png',120),(10,11,15,8,8,1,'1','Silver','PETROL',1,10,'1',5,'continue','1','bbd293ed-0d2d-4e21-88ea-340a241f577d.png',130),(11,11,15,8,10,1,'1','Silver','PETROL',1,1,'1',5,'continue','1','dcef2ddd-5c25-44c9-b78c-05c1dd24ccf0.png',140),(12,11,15,8,9,1,'1','Silver','PETROL',1,1,'1',4,'continue','1','e727dd8e-f763-4e85-acd0-8f004f23680e.png',150);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `whypnp`
--

DROP TABLE IF EXISTS `whypnp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `whypnp` (
  `whypnpid` int NOT NULL AUTO_INCREMENT,
  `tittle` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`whypnpid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `whypnp`
--

LOCK TABLES `whypnp` WRITE;
/*!40000 ALTER TABLE `whypnp` DISABLE KEYS */;
INSERT INTO `whypnp` VALUES (1,'333','fdfdf','b5bd73fd-c155-499c-9b97-e00726c64293.jpeg'),(2,'333','fdfdf','cce856d4-86d2-49ce-b3e4-8a66f1a3047c.jpeg'),(3,'333','fdfdf','3db0bc71-f056-49b9-afd2-6bb984eabe2d.jpeg'),(4,'333','fdfdf','6b453ec8-723f-45b8-a9c9-fe203546b862.jpeg'),(5,'333','fdfdf','c3208729-fb6b-4545-bf51-af86d2d4e78d.jpeg'),(6,'333','fdfdf','74d95dac-3371-43d9-b2d8-417a730b1887.jpeg');
/*!40000 ALTER TABLE `whypnp` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-05 17:30:02
