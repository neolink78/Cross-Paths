DROP TABLE IF EXISTS people;

CREATE TABLE people (
     id int primary key NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description longtext NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO people (name, description)
VALUES
 (
    'Hervé',
    'salut'
 ),
 (
    'Michel',
    'je recherche..'
 ),
 (
    'Gaston',
    "rackettes et randos"
 ),
 (
    'Bernard',
    "plage et sable blanc"
 );