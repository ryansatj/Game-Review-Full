DROP TABLE GAMES;
DROP TABLE USERS;

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  username varchar UNIQUE,
  name varchar,
  email varchar UNIQUE,
  password varchar
);

CREATE TABLE Games (
  id SERIAL PRIMARY KEY,
  userid INT NOT NULL,
  name varchar,
  description text,
  resources text,
  review text,
  rating float,
  FOREIGN KEY(userid) REFERENCES Users(id)
);