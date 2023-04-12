CREATE DATABASE IF  NOT EXISTS  taskdb;
    
    USE taskdb;
        
CREATE TABLE IF NOT EXISTS tasks (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    
    PRIMARY KEY (id)
);

INSERT INTO tasks(title, description) VALUES
    ('Task 1', 'Some description'),
    ('Task 2', 'Some description2');