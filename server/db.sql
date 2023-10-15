CREATE TABLE `hms`.`patient` (
  `pid` INT NOT NULL AUTO_INCREMENT,
  `pname` VARCHAR(145) NOT NULL,
  `age` INT NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`pid`));

ALTER TABLE `hms`.`patient` 
ADD COLUMN `mobile` VARCHAR(15) NULL AFTER `gender`;

ALTER TABLE `hms`.`patient` 
CHANGE COLUMN `password` `password` VARCHAR(255) NOT NULL ;

ALTER TABLE `hms`.`patient` 
ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;
;





INSERT INTO patient(name,age,gender,mobile,address,email,password) VALUES("Gaurav",25,"M",9309834818,"pune","gaurav@mail","gaurav123");


CREATE TABLE `hms`.`doctor` (
  `did` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NOT NULL,
  `speacialist` VARCHAR(145) NOT NULL,
  PRIMARY KEY (`did`));

  ALTER TABLE `hms`.`doctor` 
ADD COLUMN `email` VARCHAR(145) NULL AFTER `speacialist`,
ADD COLUMN `password` VARCHAR(100) NULL AFTER `email`,
ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;
;





CREATE TABLE `hms`.`appointment` (
  `aid` INT NOT NULL AUTO_INCREMENT,
  `pid` INT NULL,
  `did` INT NULL,
  `date` DATE NULL,
  `time` TIME NULL,
  PRIMARY KEY (`aid`),
  INDEX `pid_idx` (`pid` ASC) VISIBLE,
  INDEX `did_idx` (`did` ASC) VISIBLE,
  CONSTRAINT `pid`
    FOREIGN KEY (`pid`)
    REFERENCES `hms`.`patient` (`pid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `did`
    FOREIGN KEY (`did`)
    REFERENCES `hms`.`doctor` (`did`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    ALTER TABLE `hms`.`appointment` 
ADD COLUMN `symptoms` VARCHAR(255) NULL AFTER `time`;
ALTER TABLE `hms`.`appointment` 
CHANGE COLUMN `time` `time` VARCHAR(25) NULL DEFAULT NULL ;
ALTER TABLE `hms`.`appointment` 
CHANGE COLUMN `date` `date` VARCHAR(25) NULL DEFAULT NULL ;



    CREATE TABLE `hms`.`medical_record` (
  `mid` INT NOT NULL AUTO_INCREMENT,
  `aid` INT NULL,
  `prescription` VARCHAR(255) NULL,
  PRIMARY KEY (`mid`),
  INDEX `aid_idx` (`aid` ASC) VISIBLE,
  CONSTRAINT `aid`
    FOREIGN KEY (`aid`)
    REFERENCES `hms`.`appointment` (`aid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);



npm run server;