CREATE TABLE "koala" (
  "id" serial PRIMARY KEY,
  "name" varchar(20) NOT NULL,
  "gender" varchar(1) NOT NULL,
  "age" INTEGER, 
  "ready_to_transfer" BOOLEAN DEFAULT false,
  "notes" varchar(255)
);

INSERT INTO "koala" ("name", "gender", "age", "ready_to_transfer", "notes") 
VALUES ( 'Scotty', 'M', 4, TRUE, 'Born in Guatemala'),
 ('Jean', 'F', 5, TRUE, 'Allergic to lots of lava'), 
 ('Ororo', 'F', 7, FALSE, 'Loves listening to Paula (Abdul)'),
 ('Logan', 'M', 15, FALSE, 'Loves to sauna'),
 ('Charlie', 'm', 9, TRUE, 'Favorite band is Nirvana'),
 ('Betsy', 'F', 4, TRUE, 'Has a pet iguana');
 
 SELECT * FROM "koala";