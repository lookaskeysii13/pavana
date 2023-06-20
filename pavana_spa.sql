-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 08, 2023 at 05:33 AM
-- Server version: 8.0.28
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pavana_spa`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteFaq` (IN `IDParam` VARCHAR(10))   BEGIN
    UPDATE frequently_asked_question_tbl
    SET deleted_at = now(),
    	updated_at = now()
    WHERE FaqID = IDParam;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAdmin` ()   BEGIN

	SELECT
		ID,
		AES_DECRYPT(UNHEX(Name), 'YourPassphrase') AS Name,
		AES_DECRYPT(UNHEX(Username), 'YourPassphrase') AS Username,
		AES_DECRYPT(UNHEX(Password), 'YourPassphrase') AS Password
	FROM admin;
    
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetBooking` ()   BEGIN

	SELECT
    	BCT.BookingID,
        BCT.ServiceID,
        BCT.Name,
        BCT.NumberOfPerson,
        DATE_FORMAT(BCT.BookingDate, '%M %d, %Y') as BookingDate,
        BCT.BookingTime,
        BCT.ContactNumber,
        BCT.EmailAddress,
        BCT.Message,
        BCT.StatusID,
   		BST.StatusName
    FROM booking_schedule_tbl as BCT
    INNER JOIN booking_status_tbl as BST
    ON BCT.StatusID = BST.StatusID
    WHERE BCT.deleted_at IS NULL
    ORDER BY BCT.BookingDate ASC;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertBooking` (IN `BookingIDParam` VARCHAR(15), IN `ServiceIDParam` VARCHAR(10), IN `NameParam` VARCHAR(255), IN `NumberOfPersonParam` VARCHAR(10), IN `BookingDateParam` VARCHAR(20), IN `BookingTimeParam` VARCHAR(10), IN `ContactNumberParam` VARCHAR(50), IN `EmailAddressParam` VARCHAR(50), IN `MessageParam` LONGTEXT)   BEGIN

	INSERT INTO booking_schedule_tbl(
        BookingID,
        ServiceID,
        Name,
        NumberOfPerson,
        BookingDate,
        BookingTime,
        ContactNumber,
        EmailAddress,
        Message,
        StatusID,
        created_at,
        updated_at,
        deleted_at
    )VALUES(
    	BookingIDParam,
        ServiceIDParam,
        NameParam,
        NumberOfPersonParam,
        BookingDateParam,
        BookingTimeParam,
        ContactNumberParam,
        EmailAddressParam,
        MessageParam,
        1,
        now(),
        now(),
        null
    );

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertFaq` (IN `IDParam` VARCHAR(10), IN `QuestionParam` LONGTEXT CHARSET utf8mb4, IN `AnswerParam` LONGTEXT CHARSET utf8mb4)   BEGIN

	INSERT INTO frequently_asked_question_tbl(
        FaqID,
        Question,
        Answer,
        created_at,
        updated_at,
        deleted_at
    )VALUES(
        IDParam,
    	QuestionParam,
        AnswerParam,
        now(),
        now(),
        null
    );

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertService` (IN `ServiceIdParam` VARCHAR(10), IN `ServiceNameParam` VARCHAR(50), IN `ServicePriceParam` VARCHAR(10), IN `ServiceDescriptionParam` LONGTEXT, IN `ImageNameParam` VARCHAR(255), IN `DurationParam` VARCHAR(10))   BEGIN

	INSERT INTO services_tbl(
    	ServiceId,
        ServiceName,
        ServicePrice,
        ServiceDescription,
        ImageName,
        created_at,
        updated_at,
        deleted_at,
        Duration
    )VALUES(
    	ServiceIdParam,
        ServiceNameParam,
        ServicePriceParam,
        ServiceDescriptionParam,
        ImageNameParam,
        now(),
        now(),
        null,
        DurationParam
    );

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SendMessage` (IN `MessageIDParam` VARCHAR(15), IN `MessageParam` VARCHAR(255), IN `NameParam` VARCHAR(50), IN `EmailAddressParam` VARCHAR(50), IN `ContactNumberParam` VARCHAR(50))   BEGIN

	INSERT INTO message_tbl(
        MessageID,
        Message,
        Name,
        EmailAddress,
        ContactNumber,
        Status,
        created_at,
        updated_at,
        deleted_at
    )VALUES(
    	MessageIDParam,
        MessageParam,
        NameParam,
        EmailAddressParam,
        ContactNumberParam,
        0,
        now(),
        now(),
        null
    );

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SetBookingID` ()   BEGIN

	select count(*) AS Counter from booking_schedule_tbl where DATE_FORMAT(created_at, '%Y-%m-%d') = DATE_FORMAT(now(), '%Y-%m-%d');

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SetImageName` ()   BEGIN

	select count(*) AS Counter from images where DATE_FORMAT(created_at, '%Y-%m-%d') = DATE_FORMAT(now(), '%Y-%m-%d');

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SetMessageID` ()   BEGIN

	select count(*) AS Counter from message_tbl where DATE_FORMAT(created_at, '%Y-%m-%d') = DATE_FORMAT(now(), '%Y-%m-%d');

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateAdminAccount` (IN `IDParam` VARCHAR(10), IN `UsernameParam` VARCHAR(255), IN `PasswordParam` VARCHAR(255))   BEGIN
	
    SET @Passphrase = 'YourPassphrase';
    UPDATE admin
    SET Username = HEX(AES_ENCRYPT(UsernameParam, @Passphrase)),
    	Password = HEX(AES_ENCRYPT(PasswordParam, @Passphrase))
    WHERE ID = IDParam;
    
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateBooking` (IN `BookingIDParam` VARCHAR(20), IN `StatusIDParam` VARCHAR(5))   BEGIN
    IF StatusIDParam = 4 OR StatusIDParam = 5 THEN
    	UPDATE booking_schedule_tbl
        SET 
        	StatusID = StatusIDParam,
        	deleted_at = now()
        WHERE BookingID = BookingIDParam;
    ELSE
    	UPDATE booking_schedule_tbl
        SET StatusID = StatusIDParam,
            updated_at = now()
        WHERE BookingID = BookingIDParam;
    END IF;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateFaq` (IN `IDParam` VARCHAR(10), IN `QuestionParam` LONGTEXT, IN `AnswerParam` LONGTEXT)   BEGIN
    
	UPDATE frequently_asked_question_tbl
    SET Question = QuestionParam,
    	Answer = AnswerParam
	WHERE FaqID = IDParam;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateImageLocation` (IN `ImageNameParam` VARCHAR(255), IN `LocationIDParam` VARCHAR(10))   BEGIN
	
    Update image_location_tbl
    set ImageName = ImageNameParam
    where ImageLocID = LocationIDParam;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateMessageStatus` (IN `MessageIDParam` VARCHAR(15), IN `StatusParam` VARCHAR(1))   BEGIN

	UPDATE message_tbl
    SET Status = StatusParam
    WHERE MessageID = MessageIDParam;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateService` (IN `ServiceIdParam` VARCHAR(10), IN `ServiceNameParam` VARCHAR(50), IN `ServicePriceParam` VARCHAR(10), IN `ServiceDescriptionParam` LONGTEXT, IN `ImageNameParam` VARCHAR(255), IN `DurationParam` VARCHAR(10))   BEGIN

	UPDATE services_tbl
	SET ServiceName = ServiceNameParam,
		ServicePrice = ServicePriceParam,
		ServiceDescription = ServiceDescriptionParam,
        ImageName = ImageNameParam,
        Duration = DurationParam,
        updated_at = now()
    WHERE services_tbl.ServiceID = ServiceIdParam;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateText` (IN `TextIDParam` VARCHAR(20), IN `TextContentParam` LONGTEXT)   BEGIN
    
	UPDATE text_tbl
    SET TextContent = TextContentParam,
    	updated_at = now()
	WHERE TextID = TextIDParam;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `Name`, `Username`, `Password`, `created_at`, `updated_at`, `deleted_at`) VALUES
('00001', '6E01D16E488A4818A2CB6D29367D99A3', '8BE3B6D1963E3226C613D39A3992AC26', '8BE3B6D1963E3226C613D39A3992AC26', '2023-05-17 00:00:00', '2023-05-17 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `booking_schedule_tbl`
--

CREATE TABLE `booking_schedule_tbl` (
  `BookingID` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ServiceID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NumberOfPerson` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `BookingDate` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `BookingTime` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ContactNumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `EmailAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Message` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `StatusID` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `booking_schedule_tbl`
--

INSERT INTO `booking_schedule_tbl` (`BookingID`, `ServiceID`, `Name`, `NumberOfPerson`, `BookingDate`, `BookingTime`, `ContactNumber`, `EmailAddress`, `Message`, `StatusID`, `created_at`, `updated_at`, `deleted_at`) VALUES
('20230529-00000', '5', 'Kyle', '2', '2023-05-30', '12:00 pm', '09324560899', '-', 'test test test', '2', '2023-05-29 11:10:37', '2023-05-29 11:10:37', NULL),
('20230529-00001', '5', 'Kyle', '2', '2023-05-30', '12:00 pm', '09324560899', '-', 'TEST', '2', '2023-05-29 11:10:37', '2023-05-29 11:10:37', NULL),
('20230529-00002', '5', 'Kyle', '2', '2023-05-30', '12:00 pm', '09324560899', '-', 'TEST', '4', '2023-05-29 11:10:37', '2023-05-29 11:10:37', '2023-05-30 09:28:01'),
('20230529-00003', '5', 'KYLE', '2', '2023-06-24', '12:00 pm', '09324560899', 'test@gmail.com', 'TEST', '2', '2023-05-29 13:23:56', '2023-05-29 13:23:56', NULL),
('20230529-00004', '5', 'KYLE', '2', '2023-05-31', '12:00 pm', '09324560899', 'test@gmail.com', 'TEST', '5', '2023-05-29 13:33:24', '2023-05-29 13:33:24', '2023-06-07 13:48:29'),
('20230529-00005', '5', 'test2', '5', '2023-05-31', '10:00 am', '09324560899', 'test32', 'test2', '1', '2023-05-29 13:42:08', '2023-05-29 13:42:08', NULL),
('20230529-00006', '5', 'test3', '5', '2023-05-31', '10:00 am', '09324560899', 'test3@gmail.com', 'test3', '1', '2023-05-29 13:45:29', '2023-05-29 13:45:29', NULL),
('20230529-00007', '5', 'test4', '3', '2023-05-31', '10:00 am', '09324560899', 'test4@gmail.com', 'test4', '1', '2023-05-29 13:47:19', '2023-05-29 13:47:19', NULL),
('20230529-00008', '5', 'test4', '3', '2023-05-31', '10:00 am', '09324560899', 'test4@gmail.com', 'test4', '1', '2023-05-30 13:47:19', '2023-05-29 13:47:19', NULL),
('20230607-00000', '1', 'Sorosoro', '2', '2023-06-08', '10:30 am', '09999999999', 'sorosoro@gmail.com', 'Pa-book!', '1', '2023-06-07 13:51:01', '2023-06-07 13:51:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `booking_status_tbl`
--

CREATE TABLE `booking_status_tbl` (
  `StatusID` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `StatusName` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `booking_status_tbl`
--

INSERT INTO `booking_status_tbl` (`StatusID`, `StatusName`, `created_at`, `updated_at`, `deleted_at`) VALUES
('1', 'FOR CONFIRMATION', '2023-05-28 22:39:41', '2023-05-28 22:39:41', NULL),
('2', 'CONFIRMED', '2023-05-28 22:39:41', '2023-05-28 22:39:41', NULL),
('3', 'ON-GOING', '2023-05-28 22:40:41', '2023-05-28 22:40:41', NULL),
('4', 'FINISHED', '2023-05-28 22:40:41', '2023-05-28 22:40:41', NULL),
('5', 'CANCELLED', '2023-05-28 22:40:41', '2023-05-28 22:40:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact_detail_tbl`
--

CREATE TABLE `contact_detail_tbl` (
  `ContactID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ContactTypeID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ContactDetail` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_detail_tbl`
--

INSERT INTO `contact_detail_tbl` (`ContactID`, `ContactTypeID`, `ContactDetail`, `created_at`, `updated_at`, `deleted_at`) VALUES
('00001', '00001', '09324560899', '2023-05-20 01:38:44', '2023-05-20 01:38:44', NULL),
('00002', '00002', '123-456-7890', '2023-05-20 01:38:44', '2023-05-20 01:38:44', NULL),
('00003', '00003', 'testemail@test.email', '2023-05-20 01:38:44', '2023-05-20 01:38:44', NULL),
('00004', '00004', '123 Test Address, Test Address City, Test Address', '2023-05-20 01:38:44', '2023-05-20 01:38:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact_type_tbl`
--

CREATE TABLE `contact_type_tbl` (
  `ContactTypeID` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Contact_type_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_type_tbl`
--

INSERT INTO `contact_type_tbl` (`ContactTypeID`, `Contact_type_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
('00001', 'Phone Number', '2023-05-20 01:31:58', '2023-05-20 01:31:58', NULL),
('00002', 'Telephone Number', '2023-05-20 01:31:58', '2023-05-20 01:31:58', NULL),
('00003', 'Email Address', '2023-05-20 01:31:58', '2023-05-20 01:31:58', NULL),
('00004', 'Address', '2023-05-20 01:31:58', '2023-05-20 01:31:58', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `frequently_asked_question_tbl`
--

CREATE TABLE `frequently_asked_question_tbl` (
  `FaqID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Question` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `Answer` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `frequently_asked_question_tbl`
--

INSERT INTO `frequently_asked_question_tbl` (`FaqID`, `Question`, `Answer`, `created_at`, `updated_at`, `deleted_at`) VALUES
('1', 'Where are you located ?', 'We are located at 123 Test Address, Test Address City, Test Address', '2023-05-30 23:07:16', '2023-05-30 23:07:16', NULL),
('2', 'What are your operating hours?', 'We are open from 8 AM to 8 PM daily.', '2023-05-30 23:07:16', '2023-05-30 23:07:16', NULL),
('3', 'What are your rates?', 'For our rates, you can check our Services page.\nOur Services page contains all of our services including rates.', '2023-05-30 23:07:16', '2023-05-30 23:07:16', NULL),
('4', 'test', 'test', '2023-05-31 14:08:02', '2023-05-31 14:08:02', NULL),
('5', 'test1', 'test1', '2023-05-31 14:42:40', '2023-06-07 14:27:00', '2023-06-07 14:27:00');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint UNSIGNED NOT NULL,
  `LocationID` int NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `LocationID`, `filename`, `path`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, '1.png', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpC8F1.tmp', '2023-05-31 16:21:06', '2023-05-31 16:21:06', '2023-06-07 16:15:26'),
(2, 0, '2.png', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpA57B.tmp', '2023-05-31 16:53:42', '2023-05-31 16:53:42', '2023-06-07 00:00:00'),
(3, 0, '3.png', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpE27C.tmp', '2023-05-31 18:00:36', '2023-05-31 18:00:36', '2023-06-07 16:15:59'),
(4, 1, 'cover.jpg', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\php59B6.tmp', '2023-05-31 20:24:12', '2023-05-31 20:24:12', NULL),
(5, 2, 'portrait.jpg', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpDA6D.tmp', '2023-05-31 20:29:07', '2023-05-31 20:29:07', NULL),
(6, 4, 'about.png', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpE9A8.tmp', '2023-06-07 00:00:56', '2023-06-07 00:00:56', NULL),
(7, 3, 'test.png', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpB07D.tmp', '2023-06-07 00:24:43', '2023-06-07 00:24:43', NULL),
(8, 0, 'I2023060800000.jpg', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpC297.tmp', '2023-06-07 16:50:01', '2023-06-07 16:50:01', NULL),
(9, 0, 'I2023060800001.jpg', 'C:\\Users\\ssd090\\AppData\\Local\\Temp\\phpFFF0.tmp', '2023-06-07 16:50:17', '2023-06-07 16:50:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `image_location_tbl`
--

CREATE TABLE `image_location_tbl` (
  `ImageLocID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ImageLocName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ImageName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `image_location_tbl`
--

INSERT INTO `image_location_tbl` (`ImageLocID`, `ImageLocName`, `ImageName`, `created_at`, `updated_at`, `deleted_at`) VALUES
('1', 'Home Page Banner', 'I2023060800000.jpg', '2023-06-01 00:26:41', '2023-06-01 00:26:41', NULL),
('2', 'Home Page About', 'portrait.jpg', '2023-06-01 00:26:41', '2023-06-01 00:26:41', NULL),
('3', 'About Page My Background', 'test.png', '2023-06-01 00:26:41', '2023-06-01 00:26:41', NULL),
('4', 'About Page My Approach', 'about.png', '2023-06-01 00:26:41', '2023-06-01 00:26:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `message_tbl`
--

CREATE TABLE `message_tbl` (
  `MessageID` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EmailAddress` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ContactNumber` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `message_tbl`
--

INSERT INTO `message_tbl` (`MessageID`, `Message`, `Name`, `EmailAddress`, `ContactNumber`, `Status`, `created_at`, `updated_at`, `deleted_at`) VALUES
('20230602-00000', 'test', 'test test', 'test', 'test', '1', '2023-06-02 08:22:46', '2023-06-02 08:22:46', NULL),
('20230602-00001', 'test', 'test test', 'test', 'test', '1', '2023-06-02 08:23:05', '2023-06-02 08:23:05', NULL),
('20230602-00002', 'test', 'test test', 'test', 'test', '1', '2023-06-02 08:30:13', '2023-06-02 08:30:13', NULL),
('20230602-00003', 'test', 'test test', 'test', 'test', '1', '2023-06-02 08:30:46', '2023-06-02 08:30:46', NULL),
('20230602-00004', 'test', 'Kyle Ashley Dela Cruz', 'test@gmail.com', '09999999999', '1', '2023-06-02 08:34:26', '2023-06-02 08:34:26', NULL),
('20230602-00005', '123', 'asd qwe', 'dfd', 's', '0', '2023-06-02 08:39:26', '2023-06-02 08:39:26', NULL),
('20230602-00006', 'test1', 'test1 test1', 'test1', '', '0', '2023-06-02 09:30:46', '2023-06-02 09:30:46', NULL),
('20230602-00007', 'test2', 'test2 test2', 'test2', 'test2', '0', '2023-06-02 09:31:06', '2023-06-02 09:31:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services_tbl`
--

CREATE TABLE `services_tbl` (
  `ServiceID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ServiceName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ServicePrice` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ServiceDescription` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Duration` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ImageName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services_tbl`
--

INSERT INTO `services_tbl` (`ServiceID`, `ServiceName`, `ServicePrice`, `ServiceDescription`, `Duration`, `ImageName`, `created_at`, `updated_at`, `deleted_at`) VALUES
('1', 'TEST1', '1000', 'TEST', '45', 'cover.jpg', '2023-06-01 07:08:24', '2023-06-01 07:11:43', NULL),
('2', 'TEST2', '2000', 'TEST1', '30', 'I2023060800001.jpg', '2023-06-01 07:09:02', '2023-06-08 09:05:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `text_tbl`
--

CREATE TABLE `text_tbl` (
  `TextID` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TextTypeID` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TextContent` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `text_tbl`
--

INSERT INTO `text_tbl` (`TextID`, `TextTypeID`, `TextContent`, `created_at`, `updated_at`, `deleted_at`) VALUES
('00001', '00001', 'Relax, Refresh, Revitalize', '2023-05-19 23:04:30', '2023-05-19 23:04:30', NULL),
('00002', '00002', 'RESTORATIVE MASSAGE THERAPY', '2023-05-19 23:06:32', '2023-05-19 23:06:32', NULL),
('00003', '00003', 'Lisa Cole\r\n\r\nLicensed Massage Therapist\r\n\r\n\r\n\r\nI\'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.', '2023-05-19 23:55:51', '2023-05-19 23:55:51', NULL),
('00004', '00004', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2023-05-19 23:55:51', '2023-06-08 13:12:53', NULL),
('00005', '00005', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \r\n\r\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \r\n\r\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \r\n\r\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2023-05-19 23:55:51', '2023-05-19 23:55:51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `text_type_tbl`
--

CREATE TABLE `text_type_tbl` (
  `TextTypeID` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `TextType` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `text_type_tbl`
--

INSERT INTO `text_type_tbl` (`TextTypeID`, `TextType`, `created_at`, `updated_at`, `deleted_at`) VALUES
('00001', 'Welcome Text', '2023-05-19 22:54:30', '2023-05-19 22:54:30', NULL),
('00002', 'Sub-welcome Text', '2023-05-19 22:54:30', '2023-05-19 22:54:30', NULL),
('00003', 'About', '2023-05-19 23:54:39', '2023-05-19 23:54:39', NULL),
('00004', 'MyBackground', '2023-05-19 23:54:39', '2023-05-19 23:54:39', NULL),
('00005', 'MyApproach', '2023-05-19 23:54:39', '2023-05-19 23:54:39', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `booking_schedule_tbl`
--
ALTER TABLE `booking_schedule_tbl`
  ADD PRIMARY KEY (`BookingID`);

--
-- Indexes for table `booking_status_tbl`
--
ALTER TABLE `booking_status_tbl`
  ADD PRIMARY KEY (`StatusID`);

--
-- Indexes for table `contact_detail_tbl`
--
ALTER TABLE `contact_detail_tbl`
  ADD PRIMARY KEY (`ContactID`);

--
-- Indexes for table `contact_type_tbl`
--
ALTER TABLE `contact_type_tbl`
  ADD PRIMARY KEY (`ContactTypeID`);

--
-- Indexes for table `frequently_asked_question_tbl`
--
ALTER TABLE `frequently_asked_question_tbl`
  ADD PRIMARY KEY (`FaqID`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image_location_tbl`
--
ALTER TABLE `image_location_tbl`
  ADD PRIMARY KEY (`ImageLocID`);

--
-- Indexes for table `message_tbl`
--
ALTER TABLE `message_tbl`
  ADD PRIMARY KEY (`MessageID`);

--
-- Indexes for table `services_tbl`
--
ALTER TABLE `services_tbl`
  ADD PRIMARY KEY (`ServiceID`);

--
-- Indexes for table `text_tbl`
--
ALTER TABLE `text_tbl`
  ADD PRIMARY KEY (`TextID`);

--
-- Indexes for table `text_type_tbl`
--
ALTER TABLE `text_type_tbl`
  ADD PRIMARY KEY (`TextTypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
