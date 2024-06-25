-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Jun 2024 pada 16.44
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_peka`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime NOT NULL,
  `data` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_artikel`
--

CREATE TABLE `tb_artikel` (
  `id_artikel` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `content` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `sumber` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_balita`
--

CREATE TABLE `tb_balita` (
  `id_balita` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `nik` bigint(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birth_date` date NOT NULL,
  `birth_location` varchar(30) NOT NULL,
  `blood_type` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tb_balita`
--

INSERT INTO `tb_balita` (`id_balita`, `id_user`, `nama`, `nik`, `gender`, `birth_date`, `birth_location`, `blood_type`) VALUES
(37, 17, 'rendy', 12345678909876543, 'laki-laki', '2019-01-10', 'greenland', 'A'),
(38, 0, '', 0, '', '0000-00-00', '', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_data_balita`
--

CREATE TABLE `tb_data_balita` (
  `id_data_balita` int(11) NOT NULL,
  `id_balita` int(11) NOT NULL,
  `check_date` date NOT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_mkia`
--

CREATE TABLE `tb_mkia` (
  `id_mkia` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `content` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `sumber` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_mpasi`
--

CREATE TABLE `tb_mpasi` (
  `id_mpasi` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `content` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `sumber` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_user`
--

CREATE TABLE `tb_user` (
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nik` bigint(20) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `authority` varchar(30) NOT NULL,
  `foto_profile` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tb_user`
--

INSERT INTO `tb_user` (`id_user`, `nama_user`, `email`, `password`, `nik`, `alamat`, `authority`, `foto_profile`) VALUES
(17, 'Hafni', 'raka@example.com', '$argon2id$v=19$m=65536,t=3,p=4$vIlcz2q6eSoiADrJr/c4FA$XM8VKNcFYK7/js132RXL8E5ZjAqSdF8/plMAgAMEUIA', 12345678909876543, 'AlamatAnda', 'admin', 'URLFotoAnda'),
(19, 'Dela', 'axios@example.com', '$argon2id$v=19$m=65536,t=3,p=4$mKkU7ucfely/sQVHIVO7/Q$4OouXVenqtDUrnk5WORcFEY6YSOlmS9BknUJ53dWEt8', 12345678909876543, 'AlamatAnda', 'user', 'URLFotoAnda'),
(20, 'axios', 'axios@example.com', '$argon2id$v=19$m=65536,t=3,p=4$UYf/feJLSkEHQO+m6dKsmw$ksjKiBCtkdA7V/GMu2Gi89BzuxYIbIh5JyPhyd1I2Jg', 12345678909876543, 'AlamatAnda', 'user', 'URLFotoAnda'),
(21, 'sri', 'sri@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$N8JrJ/FN6OEbq23iMhq/iA$TWOOeUFUswsdcSytGNoeJ2PI8vpaZUdJ20H/sAYO+74', 12345678909876543, 'Surabaya', 'admin', 'URLFotoAnda');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `tb_balita`
--
ALTER TABLE `tb_balita`
  ADD PRIMARY KEY (`id_balita`);

--
-- Indeks untuk tabel `tb_data_balita`
--
ALTER TABLE `tb_data_balita`
  ADD PRIMARY KEY (`id_data_balita`);

--
-- Indeks untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_balita`
--
ALTER TABLE `tb_balita`
  MODIFY `id_balita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tb_balita`
--
ALTER TABLE `tb_balita`
  ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `tb_user` (`id_user`);

--
-- Ketidakleluasaan untuk tabel `tb_data_balita`
--
ALTER TABLE `tb_data_balita`
  ADD CONSTRAINT `fk_id_balita` FOREIGN KEY (`id_balita`) REFERENCES `tb_balita` (`id_balita`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
