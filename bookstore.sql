-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Квт 22 2020 р., 16:44
-- Версія сервера: 10.4.11-MariaDB
-- Версія PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `bookstore`
--

-- --------------------------------------------------------

--
-- Структура таблиці `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 1,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `image`, `description`, `price`, `count`, `categoryId`) VALUES
(2, 'Происхождение', 'Дэн Браун', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/1/4/14_5_139.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 710, 1, 2),
(3, '1984', 'Джордж Оруэлл', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/c/o/cover1__w600_1__120.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 415, 1, 2),
(4, 'Девушка в тумане', 'Донато Карризи', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/6/_/6_82_2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 464, 1, 2),
(5, 'Империя должна умереть', 'Михаил Зыгарь', 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/8/4/843144_cover_1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 741, 1, 2),
(6, 'Земное притяжение', 'Татьяна Устинова', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/2/8/28260174_4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 317, 1, 1),
(7, 'Зулейха открывает глаза', 'Гузель Яхина', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0285_1_2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 254, 1, 1),
(8, 'Очаровательный кишечник. Как самый могущественный орган управляет нами', 'Джулия Эндерс', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/4/9/49988_85726.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 573, 1, 1),
(9, 'iPhuck 10', 'Виктор Пелевин', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/i/m/img380_1_57.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 246, 1, 1),
(10, '7 навыков высокоэффективных людей: Мощные...', 'Стивен Кови', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/k/a/karpa_mockup.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 347, 1, 1),
(11, 'Девушка во льду', 'Роберт Брындза', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/i/m/img014_5_76.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 882, 1, 4),
(12, 'Магия утра. Как первый час дня определяет ваш успех', 'Хэл Элрод', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/1/2/123_71.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 829, 1, 4),
(13, 'Азиатская европеизация. История Российского государства. Царь Петр...', 'Борис Акунин', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/2/4/243960.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 389, 1, 4),
(14, 'Ведьмак (сборник)', 'Анджей Сапковский', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/3/8/388159_17532773.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 424, 1, 4),
(15, 'Атлант расправил плечи', 'Айн Рэнд', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/3/1/316850_13299560.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 157, 1, 4),
(16, 'Цена вопроса. Том 1', 'Александра Маринина', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/i/m/img564_1_26.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 664, 1, 3),
(17, 'Исчезнувшая', 'Гиллиан Флинн', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/i/m/img714_cr_3.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 476, 1, 3),
(18, 'Метро 2035', 'Дмитрий Глуховский', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/i/m/img727_1_5.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 837, 1, 3),
(19, 'Снеговик', 'Ю Несбё', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/3/2/323408_83301482.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 796, 1, 3),
(20, 'Как тренировать память. Не думайте о памяти – лучше используйте ее на все сто!', 'Джонатан Хэнкок', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/2/1/21_3_43.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 399, 1, 1),
(21, 'new book1', 'Gleb', 'https://img.yakaboo.ua/media/catalog/product/cache/1/small_image/140x210/9df78eab33525d08d6e5fb8d27136e95/1/6/1695e2d6ed5345d1e988e6971703afd0.jpg', 'good book1', 2001, 1, 3);

-- --------------------------------------------------------

--
-- Структура таблиці `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `categories`
--

INSERT INTO `categories` (`id`, `title`, `sort_order`, `status`) VALUES
(1, 'Autobiography', 4, 1),
(2, 'Drama', 3, 1),
(3, 'Fiction', 1, 1),
(4, 'History', 2, 1);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `image` (`image`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Індекси таблиці `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблиці `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
