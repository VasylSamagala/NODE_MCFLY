CREATE DATABASE  better_notes; 

USE better_notes; 

CREATE TABLE notes(
    id INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    note VARCHAR(5000),
    favorite TINYINT(1) DEFAULT '0' 
); 

INSERT INTO `notes` (`id`,`note`,`favorite`) VALUES('', 'What the hell is a gigawatt? – Marty McFly','1');
INSERT INTO `notes` (`id`,`note`,`favorite`) VALUES('', 'Great Scott! – Doc','');
INSERT INTO `notes` (`id`,`note`,`favorite`) VALUES('', 'Marty McFly: Doc, you don’t just walk into a store and buy plutonium! Did you rip that off?','');
INSERT INTO `notes` (`id`,`note`,`favorite`) VALUES('', 'Wait a minute, Doc, are you telling me that my mother has got the hots for me? – Marty Mcfly','');
