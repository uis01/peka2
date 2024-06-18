-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db_peka
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `tb_artikel`
--

DROP TABLE IF EXISTS `tb_artikel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_artikel` (
  `id_artikel` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `content` varchar(30) NOT NULL,
  `date` date DEFAULT NULL,
  `sumber` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_artikel`
--

LOCK TABLES `tb_artikel` WRITE;
/*!40000 ALTER TABLE `tb_artikel` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_artikel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_balita`
--

DROP TABLE IF EXISTS `tb_balita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_balita` (
  `id_balita` int NOT NULL,
  `id_user` int NOT NULL,
  `nama` varchar(30) DEFAULT NULL,
  `nik` bigint NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `birth_location` varchar(30) NOT NULL,
  `blood_type` varchar(3) NOT NULL,
  PRIMARY KEY (`id_balita`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_balita`
--

LOCK TABLES `tb_balita` WRITE;
/*!40000 ALTER TABLE `tb_balita` DISABLE KEYS */;
INSERT INTO `tb_balita` VALUES (1,22,'randi',110713456765445,'laki-laki','2020-09-19','medan','A');
/*!40000 ALTER TABLE `tb_balita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_data_balita`
--

DROP TABLE IF EXISTS `tb_data_balita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_data_balita` (
  `id_balita` int NOT NULL,
  `check_date` date DEFAULT NULL,
  `height` int NOT NULL,
  `weight` int NOT NULL,
  `age` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_data_balita`
--

LOCK TABLES `tb_data_balita` WRITE;
/*!40000 ALTER TABLE `tb_data_balita` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_data_balita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_mkia`
--

DROP TABLE IF EXISTS `tb_mkia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_mkia` (
  `id_mkia` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `content` varchar(30) NOT NULL,
  `date` date DEFAULT NULL,
  `sumber` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_mkia`
--

LOCK TABLES `tb_mkia` WRITE;
/*!40000 ALTER TABLE `tb_mkia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_mkia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_mpasi`
--

DROP TABLE IF EXISTS `tb_mpasi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_mpasi` (
  `id_mpasi` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `content` varchar(30) NOT NULL,
  `date` date DEFAULT NULL,
  `sumber` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_mpasi`
--

LOCK TABLES `tb_mpasi` WRITE;
/*!40000 ALTER TABLE `tb_mpasi` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_mpasi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_user` (
  `id_user` int NOT NULL,
  `nama` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `nik` bigint NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `authority` varchar(30) NOT NULL,
  `foto_profile` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-18 20:20:17
