CREATE DATABASE  IF NOT EXISTS `libreria_db`;
USE `libreria_db`;


DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `categories` WRITE;
INSERT INTO `categories` VALUES (1,'Novedades'),(2,'Más vendidos'),(3,'Sagas'),(4,'Packs');
UNLOCK TABLES;


DROP TABLE IF EXISTS `countries`;

CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `countries` WRITE;
INSERT INTO `countries` VALUES (1,'Argentina'),(2,'Bolivia'),(3,'Chile'),(4,'Colombia'),(5,'Ecuador'),(6,'Perú'),(7,'Uruguay'),(8,'Venezuela');
UNLOCK TABLES;


DROP TABLE IF EXISTS `product_category`;
CREATE TABLE `product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `product_category` WRITE;
INSERT INTO `product_category` VALUES (1,2,2),(2,2,3),(3,2,4),(4,3,2),(5,3,3),(6,3,4);
UNLOCK TABLES;


DROP TABLE IF EXISTS `product_topic`;
CREATE TABLE `product_topic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `topic_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `product_topic` WRITE;
INSERT INTO `product_topic` VALUES (1,1,1),(2,2,1),(3,3,1);
UNLOCK TABLES;


DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `author` varchar(45) DEFAULT NULL,
  `synopsis` longtext,
  `price` decimal(10,0) DEFAULT NULL,
  `edition` int DEFAULT NULL,
  `pages` int DEFAULT NULL,
  `image` tinytext,
  `language` varchar(45) DEFAULT NULL,
  `presentation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `products` WRITE;

INSERT INTO `products` VALUES (1,'Yo, robot','Isaac Asimov','La vida de la robotpsicóloga Susan Calvin acompaña los avances de la industria robótica desde sus primeros intentos -los rudimentarios robots áfonos y los autómatas obreros- hasta sus logros más sofisticados: las máquinas que auxilian al hombre en el gobierno planetario. Desfila, a lo largo de estas páginas, un elenco singular de robots sorprendentemente humanos, quienes ajustan su conducta a las tres leyes de la robótica concebidas por Asimov. Estas normas, sin embargo, desencadenan múltiples conflictos. Así, encontramos a Cutie, el robot que desconoce la autoridad humana y venera al transformador de energía; o a Dave, guiando a sus subsidiarios en una siniestra marcha; o a Herbie, el robot telépata, más aficionado a las novelas sentimentales que a las matemáticas. Yo, Robot incita a reflexionar acerca de la condición humana en un mundo cada día más tecnologizado. ¿Llegará la máquina a sustituir al hombre? ¿Es posible perder el control sobre el producto creado? ¿Existe un límite para la aplicación racional de la robótica? Éstas son sólo algunas de las inquietantes preguntas que la novela plantea.',2149,2016,256,'yo-robot.jpg','Español','De bolsillo'),(2,'Juego de tronos (Canción de hielo y fuego 1)','George Martin','En el legendario mundo de los Siete Reinos, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones y la más mortal de las batallas... Juego de tronos es el primer volumen de Canción de hielo y fuego, la monumental saga de fantasía épica del escritor George R. R. Martin que ha vendido más de 20 millones de ejemplares en todo el mundo. De la saga que inspiró la filmación de la aclamada serie televisiva de HBO: Game of Thrones. En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen en los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganar la más mortal de las batallas: el trono de hierro, una poderosa trampa que atrapará a los personajes... y al lector.',7350,2011,795,'juego-de-tronos.jpg','Español','Rústica con solapas'),(3,'Choque de reyes (Canción de hielo y fuego 2)','George Martin','Cuando los reyes están en guerra, toda la tierra tiembla. -Ahora hay más reyes en el reino que ratas en un castillo-, afirma uno de los personajes de Choque de reyes. Después de la sospechosa muerte de Robert Baratheon, el monarca de los Siete Reinos, su hijo Joffrey ha sido impuesto por la fuerza, aunque quienes realmente gobiernan son su madre, un eunuco y un enano, como dice la voz del pueblo. Cuatro nobles se proclaman, a la vez, reyes legítimos, y las tierras de Poniente se estremecen entre guerras y traiciones. Y todo este horror se encuentra presidido por la más ominosa de las señales: un inmenso cometa color sangre suspendido en el cielo. En esta novela prodigiosa nada es realmente lo que parece ser. Los protagonistas, trazados con una complejidad asombrosa, son capaces de hacerse odiar o amar desde las primeras páginas. George R. R. Martin, con pulso firme y enérgico, vuelve a ofrecernos un brillante despliegue de personajes en una trama rica, densa y sorprendente. Nos convierte en testigos de luchas fratricidas, intrigas y traiciones palaciegas en una tierra maldita, donde fuerzas ocultas se alzan de nuevo y acechan para reinar en las noches del largo invierno que se avecina.',7350,2012,928,'choque-de-reyes.jpg','Español','Rústica con solapas');
UNLOCK TABLES;


DROP TABLE IF EXISTS `topics`;
CREATE TABLE `topics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `topics` WRITE;
INSERT INTO `topics` VALUES (1,'Fantasía'),(2,'Historia'),(3,'Ciencia ficción'),(4,'Romance'),(5,'Política'),(6,'Economía'),(7,'Terror'),(8,'Suspenso'),(9,'Autoayuda');
UNLOCK TABLES;


DROP TABLE IF EXISTS `user_product`;
CREATE TABLE `user_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `user_product` WRITE;
UNLOCK TABLES;


DROP TABLE IF EXISTS `user_topic`;
CREATE TABLE `user_topic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `topic_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `user_topic` WRITE;
UNLOCK TABLES;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `avatar` tinytext NOT NULL,
  `country_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'Bob','Esponja','BobEs','bobesponja@hotmail.com','12345','1663961083096bob_esponja.jpg',1);
UNLOCK TABLES;
