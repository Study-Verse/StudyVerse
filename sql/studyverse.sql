-- MySQL dump 10.13  Distrib 8.0.31, for macos12.6 (arm64)
--
-- Host: localhost    Database: studyverse_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `answer_body` varchar(500) DEFAULT NULL,
  `correct_or_incorrect` bit(1) DEFAULT NULL,
  `question_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8frr4bcabmmeyyu60qt7iiblo` (`question_id`),
  CONSTRAINT `FK8frr4bcabmmeyyu60qt7iiblo` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7lyt2gd8862h9hhn5ne38l51i` (`user_id`),
  CONSTRAINT `FK7lyt2gd8862h9hhn5ne38l51i` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
INSERT INTO `calendar` VALUES (1,6);
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendar_events_list`
--

DROP TABLE IF EXISTS `calendar_events_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar_events_list` (
  `calendar_id` bigint NOT NULL,
  `events_list_id` bigint NOT NULL,
  UNIQUE KEY `UK_coop4820giykltsw8qf4pmi6c` (`events_list_id`),
  KEY `FKotgsb9s1e2k1g5r75sckrl2on` (`calendar_id`),
  CONSTRAINT `FK155u7th6f31ldsg5534r2kjeb` FOREIGN KEY (`events_list_id`) REFERENCES `events` (`id`),
  CONSTRAINT `FKotgsb9s1e2k1g5r75sckrl2on` FOREIGN KEY (`calendar_id`) REFERENCES `calendar` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar_events_list`
--

LOCK TABLES `calendar_events_list` WRITE;
/*!40000 ALTER TABLE `calendar_events_list` DISABLE KEYS */;
INSERT INTO `calendar_events_list` VALUES (1,1),(1,2),(1,3),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18);
/*!40000 ALTER TABLE `calendar_events_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_sets`
--

DROP TABLE IF EXISTS `card_sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_sets` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tag` varchar(80) NOT NULL,
  `title` varchar(100) NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn4qd01p97mglg8uyke4equ6nf` (`user_id`),
  CONSTRAINT `FKn4qd01p97mglg8uyke4equ6nf` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_sets`
--

LOCK TABLES `card_sets` WRITE;
/*!40000 ALTER TABLE `card_sets` DISABLE KEYS */;
INSERT INTO `card_sets` VALUES (1,'Testing','Test',1),(12,'Helloooo','Hello',1),(17,'Test','Testing',6),(29,'coding','Javascript',6),(35,'Test','Testing ',1),(38,'the set','We are creating a set',1),(39,'cards','Cards',9),(40,'css','Css',7),(41,'Marry Me','Ariana Grande',7),(45,'Web development','Web Dev Interview',6);
/*!40000 ALTER TABLE `card_sets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_sets_and_cards`
--

DROP TABLE IF EXISTS `card_sets_and_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_sets_and_cards` (
  `card_set_id` bigint NOT NULL,
  `card_id` bigint NOT NULL,
  KEY `FKglpmeq9xs86dxl3wo3776i9re` (`card_id`),
  KEY `FK7vt73hp4pv24llim2r3h8bb9t` (`card_set_id`),
  CONSTRAINT `FK7vt73hp4pv24llim2r3h8bb9t` FOREIGN KEY (`card_set_id`) REFERENCES `card_sets` (`id`),
  CONSTRAINT `FKglpmeq9xs86dxl3wo3776i9re` FOREIGN KEY (`card_id`) REFERENCES `cards` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_sets_and_cards`
--

LOCK TABLES `card_sets_and_cards` WRITE;
/*!40000 ALTER TABLE `card_sets_and_cards` DISABLE KEYS */;
INSERT INTO `card_sets_and_cards` VALUES (1,1),(17,27),(17,29),(17,30),(17,31),(29,32),(29,52),(45,34),(45,35),(45,42),(45,43),(45,53);
/*!40000 ALTER TABLE `card_sets_and_cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `back_face` varchar(500) DEFAULT NULL,
  `front_face` varchar(500) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcmanafgwbibfijy2o5isfk3d5` (`user_id`),
  CONSTRAINT `FKcmanafgwbibfijy2o5isfk3d5` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,'Test','Test',1),(2,'number id 7','This is a test it should have user naz',7),(5,'usER ','This should have a user id of 6',6),(9,'4','2+2',6),(12,'hello','hello',6),(13,'Hiiii','YOoooo',6),(14,'it works','it works',6),(15,'code','code',6),(16,'q','qw',6),(17,'dafsd','adfadsf',6),(18,'how to css','CSS',6),(19,'The test','I am testing',1),(20,'test','test',1),(21,'ff','fff',1),(22,'heloo','Creating a card',1),(23,'test','Test',9),(24,'{','body',7),(25,'n/a','Birthday',7),(26,'Ghost','Ghost',6),(27,'This is my testing card','Test',6),(29,'Test 2','This is test 2',6),(30,'This is test 3','Test 3',6),(31,'This is test 4','Test 4',6),(32,'bye','Hi',6),(34,'Abstraction Encapsulation Inheritance Polymorphism','What are the four pillars of Object-Oriented Programming',6),(35,'To abstract something away means to hide away the implementation details inside something – sometimes a prototype, sometimes a function. So when you call the function you don\'t have to understand exactly what it is doing.','What is Abstraction?',6),(36,'dfadsf','adfadsf',6),(42,'Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.','What is Inheritance?',6),(43,'Encapsulation is a way to restrict the direct access to some components of an object, so users cannot access state values for all of the variables of a particular object. Encapsulation can be used to hide both data members and data functions or methods associated with an instantiated class or object.','Encapsulation',6),(52,'dafs','dafds',6),(53,'The FizzBuzz problem is a classic test given in coding interviews. The task is simple: Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five.','What is FizzBuzz?',6);
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `calendar_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKs6asns5j6sklyokfw4b4m03i7` (`calendar_id`),
  KEY `FKat8p3s7yjcp57lny4udqvqncq` (`user_id`),
  CONSTRAINT `FKat8p3s7yjcp57lny4udqvqncq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKs6asns5j6sklyokfw4b4m03i7` FOREIGN KEY (`calendar_id`) REFERENCES `calendar` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'this is a event form david',1,6,NULL),(2,'This is a event from fernando',1,1,NULL),(3,'This is a 2nd post',1,6,NULL),(5,'',1,6,NULL),(6,'this is for david',1,6,NULL),(7,'',1,6,NULL),(8,'',1,6,NULL),(9,'',1,6,NULL),(10,'this is for the 18',1,6,NULL),(11,'',1,6,NULL),(12,'hi',1,6,NULL),(13,'test-david',1,6,NULL),(14,'',1,6,NULL),(15,'',1,1,NULL),(16,'',1,6,NULL),(17,'',1,6,NULL),(18,'',1,6,NULL);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `question_body` varchar(500) DEFAULT NULL,
  `quiz_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb0yh0c1qaxfwlcnwo9dms2txf` (`quiz_id`),
  CONSTRAINT `FKb0yh0c1qaxfwlcnwo9dms2txf` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoj71coq74ryc5c9c9o482p8mm` (`user_id`),
  CONSTRAINT `FKoj71coq74ryc5c9c9o482p8mm` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `username` varchar(80) NOT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'fernando@email.com','$2a$10$tDOyCE78Tiu/Xu973hlsD.umGxMwlGDAy6GFjUanKcbuhufdSqlDC','fernando',NULL),(6,'davidlara@email.com','$2a$10$wClN1pDXBmxLpvVDhsqJ2ere.maCwWp850S2cRoRvmYE3oPtZUknG','davidlara','https://cdn.filestackcontent.com/itvPyDLR2GB23C0ioKjB'),(7,'Nazareth@email.com','$2a$10$5KWcYeS.5FKax1NnhN5tr.gEccu7ARcLVE7yl1U5bxL1kj/56Oa2m','ItsNaz',NULL),(8,'valeria@email.com','$2a$10$bbD9ptcOASgHV.2dsVXXJODeyi3gLh6LLyP4RJueouou6XPX7vpYa','ValeriaC',NULL),(9,'javier@gmail.com','$2a$10$0XS8YUL7GE8Kfh9UV4XgbegWT2hrbChkbaUMIezuVj34g8f3dYqKS','Javier',NULL),(10,'fakemail@email.com','$2a$10$Fnu3g38eK9hWai2XiTl2n.EXepOCjEbh/k74DK.H7UpPxdVEOnz8y','simba',NULL),(11,'newUser@gmail.com','$2a$10$ZzzSstHXn.9.Eg1HZx.kFOMZLEOiM9AiOHKAK0eA0JDie36EOV2P.','newUser',NULL),(12,'','$2a$10$Vfi7Y.hj4GRJhcRZxTIx9OS7QuK1UvA8AW0yhte/bwNRLKrYJosV2','',NULL),(14,'newnewuser@email.com','$2a$10$EhW/jAidWwB2JXnH.5MB0O8Z6xpB.7EKJDLzZXMOnQDhFAsOh9nw.','newnewuser',NULL),(15,'hiImNaz@gmail.com','$2a$10$qndYuLTsEr8tI70s66rQtO0el6NM2QW0xRLgzoOxaftZ0EcEcOrpO','LilNaz',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_quiz_list`
--

DROP TABLE IF EXISTS `users_quiz_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_quiz_list` (
  `user_id` bigint NOT NULL,
  `quiz_list_id` bigint NOT NULL,
  UNIQUE KEY `UK_ky9wt9ubvu5xjm7n55s93lndu` (`quiz_list_id`),
  KEY `FKq40ei4sh7l4y5yt37i84f1bv9` (`user_id`),
  CONSTRAINT `FK3028ad4cr9bvnqx272wlfwgx8` FOREIGN KEY (`quiz_list_id`) REFERENCES `quiz` (`id`),
  CONSTRAINT `FKq40ei4sh7l4y5yt37i84f1bv9` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_quiz_list`
--

LOCK TABLES `users_quiz_list` WRITE;
/*!40000 ALTER TABLE `users_quiz_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_quiz_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-12  9:25:10
