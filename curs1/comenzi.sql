CREATE DATABASE demo;
USE demo;

CREATE TABLE `demo`.`studenti` (`id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
`nume` VARCHAR(100) NOT NULL , 
`prenume` VARCHAR(100) NOT NULL , 
`telefon` CHAR(10) NOT NULL , 
`email` VARCHAR(200) NOT NULL , 
`data_adaugare` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
PRIMARY KEY (`id`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;


ALTER TABLE `studenti` CHANGE `email` `email` VARCHAR(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;

ALTER TABLE `demo`.`studenti` ADD UNIQUE `email_unic` (`email`);


INSERT INTO `studenti` (`id`, `nume`, `prenume`, `telefon`, `email`, `data_adaugare`) VALUES (NULL, 'Popescu', 'Dan', '0799635432', 'popescu@dan.ro', current_timestamp());
UPDATE `studenti` SET `email` = 'popescu@dan.com' WHERE `studenti`.`id` = 1;

INSERT INTO `users` (`id`, `nume`, `prenume`, `email`, `telefon`, `data_nastere`, `data_adaugare`) VALUES (NULL, 'Ion', 'Marcu', 'marcu@ion.ro', '0799635321', '1997-08-15', current_timestamp())

UPDATE `users` SET `prenume` = 'Simion', `email` = 'marcu@simion.ro' WHERE `users`.`id` = 1;

DELETE FROM `student` WHERE `id`= 1;

SELECT `nume`, `prenume` FROM `users` WHERE `id`= 2;


CREATE TABLE `magazin`.`produse` (`idprodus` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
`numeprodus` VARCHAR(100) NOT NULL , `cantitate` INT NOT NULL DEFAULT '0' , `idfirma` INT NOT NULL , 
`firma` VARCHAR(50) NOT NULL , `adresafirma` VARCHAR(100) NULL , `modelprodus` VARCHAR(50) NOT NULL , 
`stocprodus` INT NOT NULL DEFAULT '0' , `pret` DECIMAL(10,2) NOT NULL , `categorieprodus` VARCHAR(100) NOT NULL ,
 `descrierep` TEXT NOT NULL , `dataadaugare` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
 PRIMARY KEY (`idprodus`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;



 CREATE TABLE `magazin`.`firme` (`id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
 `nume` VARCHAR(100) NOT NULL , `adresa` VARCHAR(200) NOT NULL , `dataadaugare` 
 TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;