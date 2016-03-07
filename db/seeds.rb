
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
id: 7,
title: "The Mini Book Show",
blurb: "Help us spread creativity around the world in Mini Book Form!",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457324728/eetqoawrmzongpcgsvec.jpg",
details: "<div><br></div><div><br></div><div>Ronald Patton and Linwood Wescott are at it again! We are a mobile creativity company based in northern New Jersey. Our mission is to design and facilitate opportunities for people of all ages, backgrounds, and skill sets to nourish themselves and their communities by tapping into their creative expression. We believe creativity can change lives by building self-confidence, harnessing imagination, helping to practice problem-solving, and bridging differences through the joy of discovery. Our vintage van allows us to deliver unique experiences and inspire communities everywhere.</div><div><br></div><div>We are transforming our vintage travel trailer to house a collection of more than 300 books handmade by amateur and professional artists from around the world, all less than 3\" in dimension. This mobile museum will visit select locations around the country, set up at public venues and spaces, and will be featured at the Mini Book Society's Annual Festival, a gathering of book artists and collectors, in Texas.</div><div><br></div><div>In addition to the showings at each tour stop, we will also be facilitating all-ages mini book-making workshops, using books from the exhibit as inspiration. Visitors to the exhibit will have a chance to experiment with a variety of book structures, techniques, and materials, and in some cases meet and connect with the participating artists themselves.</div><div><br></div><div>We are inviting the Underway community to help support our ambitious efforts to bring this mobile museum of miniatures and the accompanying book-making workshop to more than 30 locations around the country. The funds raised will go toward securing venues for the exhibit, workshop supplies, and travel expenses on this 45-day tour.</div>",
author_id: 1,
category_id: 1,
current_funding: 0,
funding_goal: 8888,
campaign_end_date:  Time.now + 60.days
})


Project.create!({
id: 8,
title: "Evil",
blurb: "An ordinary guy. An extraordinary super villain.",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457326411/irlnyyoi0vcwvo0jjrjl.jpg",
details:
"<div><br></div><div><span style=\"font-size: 32px;\">Experience The Graphic Novel \"Evil\"</span></div><div><br></div><div><br></div><div>Bob strives to become the most feared super villain in the world, while maintaining his cover working as a Barista in one of San Francisco's most exquisite coffee shops. A story full of laughter, action, poor customer service, and expresso.</div>",
author_id: 1,
category_id: 2,
current_funding: 0,
funding_goal: 15000,
campaign_end_date: Time.now + 30.days
})

Project.create!({
id: 8,
title: "Toys for Fido",
blurb: "A new dog toy that is sure to delight your furry best friend",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457328150/phkujt9jaivuuyy7z4lq.jpg",
details: "<div><br></div><div><br></div><div><b><span style=\"font-size: 18px;\">Give your best friend something new to chew on!</span></b></div><div><br></div><div>We are creating an interactive toy that is sure to surprise and delight your furry best friend for long periods of time. Durable, easy to clean, and a built in timer gives your dog all the play time he or she could possibly want. </div>",
author_id: 1,
category_id: 3,
current_funding: 0,
funding_goal: 100000,
campaign_end_date: Time.now + 30.days
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
id: 38,
title: "Our Gratitude",
description: "A small donation = lots of gratitude from our team. Thanks for your support!",
cost: 10,
project_id: 7,
delivery_date: Time.now + 100.days,
reward_count: nil,
reward_max_count: nil,
})

 Reward.create!({
id: 40,
title: "Handmade Mini Book",
description: "A handmade mini book just for you!",
cost: 50,
project_id: 7,
delivery_date: Time.now + 100.days,
reward_count: nil,
reward_max_count: nil,
})

Reward.create!({
id: 5,
title: "Digital Level",
description: "Digital copy of the entire 164 page graphic novel, featuring all six issues as well as bonus content and artwork",
cost: 10,
project_id: 8,
delivery_date: Time.now + 30.days,
reward_count: nil,
reward_max_count: nil,
})

Reward.create({
 id: 6,
 title: "T Shirt Level",
 description:
  "Not only will you get a digital copy of the graphic novel, you will also get a T Shirt. ",
 cost: 30,
 project_id: 8,
 delivery_date: Time.now + 30.days,
 reward_count: nil,
 reward_max_count: nil,
})

Reward.create({
 id: 7,
 title: "THE NOVEL LEVEL",
 description: "High quality hard cover copy of the graphic novel",
 cost: 45,
 project_id: 8,
 delivery_date: Time.now + 30.days,
 reward_count: nil,
 reward_max_count: nil,
})

Reward.create({
id: 8,
title: "First generation toy",
description: "Hot off the shelf! Get your new toy as soon as its ready to ship.",
cost: 45,
project_id: 8,
delivery_date: Time.now + 60.days,
reward_count: nil,
reward_max_count: nil,
})

Reward.create({
id: 9,
title: "Limited edition toy",
description: "Just for our Underway supporters! A limited edition toy at no extra cost!",
cost: 45,
project_id: 8,
delivery_date: Time.now + 60.days,
reward_count: nil,
reward_max_count: 250,
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
