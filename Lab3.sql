-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 25, 2020 at 07:04 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Lab3`
--

-- --------------------------------------------------------

--
-- Table structure for table `Department`
--

CREATE TABLE `Department` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Department`
--

INSERT INTO `Department` (`id`, `name`, `description`) VALUES
(1, 'Microsoft', 'Is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.'),
(3, 'Facebook', 'is an American online social media and social networking service based in Menlo Park, California, and a flagship service of the namesake company Facebook, Inc. '),
(4, 'NASA', 'is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `registration_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `email`, `name`, `password`, `registration_date`) VALUES
(29, 'd.com', 'sdffdgssd', 'b6d767d2f8ed5d21a44b0e5886680cb9', '2020-12-25'),
(41, 'asd@yahoo.com', 'sad', 'b6d767d2f8ed5d21a44b0e5886680cb9', '2020-12-25'),
(51, 'sad@yahoo.com', 'saf', 'b6d767d2f8ed5d21a44b0e5886680cb9', '2020-12-25'),
(60, 'sady@yahoo.com', 'saf', 'b6d767d2f8ed5d21a44b0e5886680cb9', '2020-12-25'),
(61, 'sady2@yahoo.com', 'saf', 'b6d767d2f8ed5d21a44b0e5886680cb9', '2020-12-25'),
(62, 'medo@gmail.com', 'medo', 'bcbe3365e6ac95ea2c0343a2395834dd', '2020-12-25'),
(64, 'ahmed@gmail.com', 'ahmed', 'b6d767d2f8ed5d21a44b0e5886680cb9', '2020-12-25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Department`
--
ALTER TABLE `Department`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Department`
--
ALTER TABLE `Department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
