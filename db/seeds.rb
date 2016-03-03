
####################
###### USERS #######
####################

User.create!({
  username: "david",
  password: "password"
})

# Demo Account 1
User.create!({
  username: "Eugene Fitzherbert",
  password: "supersecurepassword"
})

User.create!({
  username: "seeduser1",
  password: "password"
})

User.create!({
  username: "seeduser2",
  password: "password"
})

User.create!({
  username: "seeduser3",
  password: "password"
})

User.create!({
  username: "seeduser4",
  password: "password"
})

####################
##### Category #####
####################

Category.create!({
  title: "Art"
})

Category.create!({
  title: "Comics"
})

Category.create!({
  title: "Design"
})

Category.create!({
  title: "Fashion"
})

Category.create!({
  title: "Film"
})

Category.create!({
  title: "Food"
})

Category.create!({
  title: "Games"
})

Category.create!({
  title: "Music"
})

Category.create!({
  title: "Photography"
})

Category.create!({
  title: "Technology"
})

Category.create!({
  title: "Theater"
})

####################
##### Project ######
####################

Project.create!({
title:              "Flying cat pet",
blurb:              "Love your feline frined? Give him or her the gift of flight",
img_url:            "http://res.cloudinary.com/dur3lr9q4/image/upload/v1456883738/o284ebn1axjajhcxzg9z.jpg",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       100000,
campaign_end_date:  Time.now + 10.days,
details:            "These are the details of Project one. This could contain
a very large amount of text. cats and cats and cats and cats and cats and cats and cats and cats and cats and cats and
cats and cats and cats and cats and cats and cats and cats and cats and cats and cats andcats and cats and cats and cats and cats and cats and
cats and cats and cats and cats and cats and cats and cats and cats and cats and cats andcats and cats and cats and cats and cats and cats and
cats and cats and cats and cats and cats and cats and cats and cats and cats and cats andcats and cats and cats and cats and cats and cats and
cats and cats and cats and cats and cats"
})

Project.create!({
title:              "Project 2",
blurb:              "The blurb of Project 2",
img_url:            "http://lorempixel.com/200/200/cats/",
details:            "These are the details of Project Two. This could contain
a very large amount of text. text text text text text text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       200000,
campaign_end_date:  Time.now + 20.days
})


Project.create!({
title:              "Project 3",
blurb:              "The blurb of Project 3",
img_url:            "http://lorempixel.com/200/200/cats/",
details:            "These are the details of Project Three. This could contain
a very large amount of text. text text text text text text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       300000,
campaign_end_date:  Time.now + 30.days
})

Project.create!({
title:              "Project 4",
blurb:              "The blurb of Project 4",
img_url:            "http://lorempixel.com/200/200/cats/",
details:            "These are the details of Project Four. This could contain
a very large amount of text. text text text text text text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       400000,
campaign_end_date:  Time.now + 40.days
})

Project.create!({
title:              "Project 5",
blurb:              "The blurb of Project 5",
img_url:            "http://lorempixel.com/200/200/cats/",
details:            "These are the details of Project Five. This could contain
a very large amount of text. text text text text text text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       500000,
campaign_end_date:  Time.now + 50.days
})

Project.create!({
title:              "Project 6",
blurb:              "The blurb of Project 6",
img_url:            "http://lorempixel.com/200/200/cats/",
details:            "These are the details of Project Six. This could contain
a very large amount of text. text text text text text text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text
text text text text text text text text text texttext text text text text text",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       600000,
campaign_end_date:  Time.now + 60.days
})

####################
###### Reward ######
####################

Reward.create!({
  title: "Reward 1 for Project 1",
  description: "This is the description of R1 P1 here is a little more text and
  a little more text just incase you need to have this much text in a reward",
  cost: 100,
  project_id: 1,
  delivery_date: Time.now + 100.days,
  reward_count: 0,
  reward_max_count: 100
})

Reward.create!({
  title: "Reward 2 for Project 1",
  description: "This is the description of R2 P1 here is a little more text and
  a little more text just incase you need to have this much text in a reward",
  cost: 200,
  project_id: 1,
  delivery_date: Time.now + 100.days,
  reward_count: 0,
  reward_max_count: 100
})

Reward.create!({
  title: "Reward 3 for Project 1",
  description: "This is the description of R3 P1 here is a little more text and
  a little more text just incase you need to have this much text in a reward",
  cost: 300,
  project_id: 1,
  delivery_date: Time.now + 100.days,
  reward_count: 0,
  reward_max_count: 100
})

Reward.create!({
  title: "Reward 1 for Project 2",
  description: "This is the description of R1 P2 here is a little more text and
  a little more text just incase you need to have this much text in a reward",
  cost: 120,
  project_id: 2,
  delivery_date: Time.now + 100.days,
  reward_count: 0,
  reward_max_count: 100
})

####################
###### Backer ######
####################

Backer.create!({
  user_id: 2,
  reward_id: 1
})

Backer.create!({
  user_id: 2,
  reward_id: 4
})

Backer.create!({
  user_id: 3,
  reward_id: 1
})

Backer.create!({
  user_id: 3,
  reward_id: 2
})

Backer.create!({
  user_id: 3,
  reward_id: 2
})

Backer.create!({
  user_id: 4,
  reward_id: 1
})
