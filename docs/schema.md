# Schema Information


## Projects
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
title             | string    | not null
blurb             | string    | not null
author_id         | integer   | not null, foreign key (references users), indexed
campaign_end_date | date      | not null
details           | text      | not null
category_id       | integer   | not null
current_funding   | integer   | not null
funding_goal      | integer   | not null
img_url           | string    |


## Rewards
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
title            | string    | not null
description      | string    | not null
cost             | integer   | not null
project_id       | integer   | not null, foreign key (references projects), indexed
delivery_date    | date      | not null
reward_count     | integer   | not null
reward_max_count | integer   | not null


<!--  
This is a table between users and rewards.
Users have many rewards through backers
rewards have many users through backers
Via the above relationships, we get:
Users have many backed projects through rewards
projects have many backers through rewards
-->
## Backers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
backer_id   | integer   | not null, foreign key (references users), indexed
reward_id   | integer   | not null foreign key (references rewards), indexed


## Categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null


## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
