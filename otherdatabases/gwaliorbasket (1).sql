-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: gwaliorbasket
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
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bannerpicture` text,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'3.jpg,4.jpg,5.jpg,6.jpg,7.jpg,8.jpg,b1.jpg,b2.jpg,b3.jpg,b4.jpg,','true');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `companyid` int DEFAULT NULL,
  `categoryname` varchar(64) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `icon` text,
  `createdat` varchar(45) DEFAULT NULL,
  `updatedat` varchar(45) DEFAULT NULL,
  `createdby` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (4,1,'Dairy Products','Fresh Products for Daily Use','dairy.jpg','2023/5/6 10:32:44',NULL,'ADMIN'),(5,1,'Grocery','Fresh','watermark.png','2023/5/7 13:49:2',NULL,'ADMIN'),(6,1,'Snacks','Good Fresh Products','lays.png','2023/5/7 13:49:29',NULL,'ADMIN'),(7,1,'Breakfast','Healthy Breakfast','breakfast.webp','2023/5/7 13:49:55',NULL,'ADMIN');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `companyid` int NOT NULL AUTO_INCREMENT,
  `companyname` varchar(64) DEFAULT NULL,
  `ownername` varchar(64) DEFAULT NULL,
  `emailaddress` varchar(64) DEFAULT NULL,
  `mobilenumber` varchar(20) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `logo` text,
  `password` varchar(64) DEFAULT NULL,
  `status` varchar(64) DEFAULT NULL,
  `createdat` varchar(45) DEFAULT NULL,
  `updateat` varchar(45) DEFAULT NULL,
  `createdby` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`companyid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Gwalior Basket','Bharat Sharma','1@gmail.com','7000192752','A-44','Madhya Pradesh','Gwalior','1.png','123456','Verified','Today','Today','Admin');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listproduct`
--

DROP TABLE IF EXISTS `listproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listproduct` (
  `companyid` int NOT NULL,
  `categoryid` int DEFAULT NULL,
  `productid` int NOT NULL,
  `weight` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `offerprice` int DEFAULT NULL,
  `description` varchar(164) DEFAULT NULL,
  `images` text,
  `createdat` varchar(45) DEFAULT NULL,
  `updatedat` varchar(45) DEFAULT NULL,
  `createdby` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listproduct`
--

LOCK TABLES `listproduct` WRITE;
/*!40000 ALTER TABLE `listproduct` DISABLE KEYS */;
INSERT INTO `listproduct` VALUES (1,4,3,1,70,62,'Milk for dairy Use','dairy.jpg,','2023/5/6 10:39:35','2023/5/6 10:39:35','ADMIN'),(1,5,4,10,350,312,'Flour','wheat.webp,','2023/5/7 13:57:14','2023/5/7 13:57:14','ADMIN'),(1,6,5,1,249,199,'Haldiram Aloo Bhujia','h1.webp,','2023/5/7 13:58:37','2023/5/7 13:58:37','ADMIN'),(1,5,6,20,500,449,'Flour','wheat.webp,Ashirvad.png,','2023/5/7 13:57:38','2023/5/7 13:57:38','ADMIN'),(1,6,7,1,249,199,'Made from Fresh Fruits','kissan.webp,','2023/5/7 14:0:34','2023/5/7 14:0:34','ADMIN'),(1,7,8,1,249,229,'Tomato Ketchup','breakfast.webp,','2023/5/7 14:4:5','2023/5/7 14:4:5','ADMIN'),(1,6,9,1,95,79,'Cold Drink','colddrink.webp,','2023/5/7 14:1:0','2023/5/7 14:1:0','ADMIN'),(1,7,10,1,399,389,'Tea','redlabel.webp,','2023/5/7 14:4:33','2023/5/7 14:4:33','ADMIN'),(1,5,11,1,199,179,'Healthy Oil','wheat.webp,Ashirvad.png,fortune.png,','2023/5/7 13:58:6','2023/5/7 13:58:6','ADMIN'),(1,6,12,0,20,18,'Chips','lays.webp,','2023/5/7 14:1:34','2023/5/7 14:1:34','ADMIN'),(1,6,13,0,25,20,'Maggi','maggi.webp,','2023/5/7 14:2:58','2023/5/7 14:2:58','ADMIN'),(1,6,14,0,99,69,'Munchies','munchies.webp,','2023/5/7 14:3:16','2023/5/7 14:3:16','ADMIN');
/*!40000 ALTER TABLE `listproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricetyp`
--

DROP TABLE IF EXISTS `pricetyp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pricetyp` (
  `pricetypid` int NOT NULL AUTO_INCREMENT,
  `prtype` varchar(45) NOT NULL,
  PRIMARY KEY (`pricetypid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricetyp`
--

LOCK TABLES `pricetyp` WRITE;
/*!40000 ALTER TABLE `pricetyp` DISABLE KEYS */;
INSERT INTO `pricetyp` VALUES (1,'Kg'),(2,'Ltr'),(3,'Pieces');
/*!40000 ALTER TABLE `pricetyp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productid` int NOT NULL AUTO_INCREMENT,
  `companyid` int DEFAULT NULL,
  `categoryid` int DEFAULT NULL,
  `productname` varchar(45) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `pricetype` varchar(45) DEFAULT NULL,
  `trending` varchar(45) DEFAULT NULL,
  `deals` varchar(45) DEFAULT NULL,
  `image` text,
  `status` varchar(45) DEFAULT NULL,
  `createdat` varchar(45) DEFAULT NULL,
  `updatedat` varchar(45) DEFAULT NULL,
  `createdby` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,1,4,'Amul Milk','Fresh Milk','Kg','yes','yes','dairy.jpg','Available','2023/5/6 10:39:3',NULL,'ADMIN'),(4,1,5,'Wheat Flour','Made from Original Wheat','Kg','yes','no','wheat.webp','Available','2023/5/7 13:50:38',NULL,'ADMIN'),(5,1,6,'Namkeen','Aloo Bhujia','Kg','yes','yes','h1.webp','Available','2023/5/7 13:51:8',NULL,'ADMIN'),(6,1,5,'Wheat Flour','Aashirvad Wheat Flour','Kg','yes','yes','Ashirvad.webp','Available','2023/5/7 13:51:41',NULL,'ADMIN'),(7,1,6,'Fruit Jem','Made from fresh Fruits','Kg','yes','yes','kissan.png','Available','2023/5/7 13:52:17',NULL,'ADMIN'),(8,1,7,'Sauce','Tomato Ketchup','Kg','no','no','breakfast.webp','Available','2023/5/7 13:52:41',NULL,'ADMIN'),(9,1,6,'Sprite','Cold Drink','Ltr','yes','yes','colddrink.webp','Available','2023/5/7 13:53:3',NULL,'ADMIN'),(10,1,7,'Tea','Fresh Garden Tea from Assam','Kg','yes','yes','coffee.webp','Available','2023/5/7 13:53:35',NULL,'ADMIN'),(11,1,5,'Refined Oil','Fortune Oil','Ltr','yes','no','fortuneoil.webp','Available','2023/5/7 13:54:2',NULL,'ADMIN'),(12,1,6,'Lays','Potato Chips with Different Flavours','Pieces','yes','yes','lays.png','Available','2023/5/7 13:54:58',NULL,'ADMIN'),(13,1,6,'Maggie','Nestle Maggi','Pieces','yes','yes','maggi.webp','Available','2023/5/7 13:55:22',NULL,'ADMIN'),(14,1,6,'Munchies','Breakfast Item','Pieces','yes','yes','munchies.webp','Available','2023/5/7 13:55:42',NULL,'ADMIN');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraddress`
--

DROP TABLE IF EXISTS `useraddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useraddress` (
  `userid` int NOT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `fullname` varchar(64) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useraddress`
--

LOCK TABLES `useraddress` WRITE;
/*!40000 ALTER TABLE `useraddress` DISABLE KEYS */;
INSERT INTO `useraddress` VALUES (1,'7000192752','Bharat Sharma','Madhya Pradesh','Gwalior','474005','A-44 Samarth Nagar, Gola ka Mandir'),(2,'6263859982','Madhusudan Sharma','MP','Gwalior','474005','A-50 Adarshpuram Colony, Old Railway Line'),(3,'7998124065','Vivek Sharma','Madhya Pradesh','Gwalior','474005','Pinto Park');
/*!40000 ALTER TABLE `useraddress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersdata`
--

DROP TABLE IF EXISTS `usersdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mobileno` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersdata`
--

LOCK TABLES `usersdata` WRITE;
/*!40000 ALTER TABLE `usersdata` DISABLE KEYS */;
INSERT INTO `usersdata` VALUES (1,'7000192752'),(2,'6263859982'),(3,'7998124065');
/*!40000 ALTER TABLE `usersdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-05 17:39:35
