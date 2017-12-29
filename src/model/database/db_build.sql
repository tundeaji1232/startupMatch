BEGIN;

DROP TABLE IF EXISTS task, profile,register;


CREATE TABLE IF NOT EXISTS task (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(200) NOT NULL,
    desciption VARCHAR(200) NOT NULL,
    period VARCHAR(200) NOT NULL,
    members VARCHAR(200) NOT NULL,
    DateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS profile(
  id SERIAL PRIMARY KEY,
   fullname VARCHAR (200) NOT NULL,
   skills VARCHAR(500) NOT NULL,

);


CREATE TABLE IF NOT EXISTS register(
  id SERIAL PRIMARY KEY,
   reg_name VARCHAR (200) NOT NULL,
   reg_email  VARCHAR(200) NOT NULL,
   reg_password  VARCHAR(200) NOT NULL
);

INSERT INTO task (task_name,description,period,members) VALUES('build a custom made app to check health risk of workers in low paid factories','one month',['ray','will','gill']);

INSERT INTO profile(fullname,skills,img_src) VALUES ('gill smith','app development','https://i1.wp.com/admin.thenet.ng/wp-content/uploads/2016/09/eba-600x586.jpg?resize=600%2C586');

INSERT INTO register (reg_name,reg_email,reg_passwword) VALUES ('gill','gill@gmail.com','password');



COMMIT;
