-- Criação da tabela

CREATE DATABASE IF NOT EXISTS db_vehicle_platform;
USE db_vehicle_platform;


-- Estrutura da tabela `tb_users`

CREATE TABLE `tb_users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `accountPass` varchar(255) NOT NULL
);


-- --------------------------------------------------------

-- Estrutura da tabela `tb_vehicle`

CREATE TABLE `tb_vehicle` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `carYear` int(11) NOT NULL,
  `description` text NOT NULL,
  `priceCents` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL
);


-- Índices para tabela `tb_users`

ALTER TABLE `tb_users`
ADD PRIMARY KEY (`id`);


-- Índices para tabela `tb_vehicle`

ALTER TABLE `tb_vehicle`
ADD PRIMARY KEY (`id`),
ADD KEY `userId` (`userId`);

ALTER TABLE `tb_vehicle` ADD FULLTEXT KEY `name` (`name`,`brand`,`description`);


-- AUTO_INCREMENT de tabela `tb_users`

ALTER TABLE `tb_users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


-- AUTO_INCREMENT de tabela `tb_vehicle`

ALTER TABLE `tb_vehicle`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


-- Limitadores para a tabela `tb_vehicle`

ALTER TABLE `tb_vehicle`
ADD CONSTRAINT `tb_vehicle_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `tb_users` (`id`);