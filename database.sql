CREATE DATABASE user_database;

USE user_database;

CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    money INT(10)
);

CREATE TABLE Items (
    item_id INT PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(50),
    attack INT,
    defense INT,
    hp INT,
    speed INT,
    price INT(10),
    description TEXT
);

CREATE TABLE ItemImages (
    image_id INT PRIMARY KEY,
    item_id INT,
    image_uri VARCHAR(255),
    name VARCHAR(50),
    variant_type VARCHAR(50),
    FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

CREATE TABLE Skills (
    skill_id INT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    item_id INT,
    FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

CREATE TABLE Units (
    unit_id INT PRIMARY KEY,
    user_id INT,
    body_item_id INT NOT NULL,
    face_item_id INT,
    hat_item_id INT,
    left_hand_item_id INT,
    right_hand_item_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (body_item_id) REFERENCES Items(item_id),
    FOREIGN KEY (face_item_id) REFERENCES Items(item_id),
    FOREIGN KEY (hat_item_id) REFERENCES Items(item_id),
    FOREIGN KEY (left_hand_item_id) REFERENCES Items(item_id),
    FOREIGN KEY (right_hand_item_id) REFERENCES Items(item_id)
);

CREATE TABLE UserItems (
    user_id INT,
    item_id INT,
    PRIMARY KEY (user_id, item_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

CREATE TABLE Shop (
    shop_id INT PRIMARY KEY,
    name VARCHAR(100),
    item_id INT,
    FOREIGN key (item_id) REFERENCES Items(item_id)
);