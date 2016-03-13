
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
  username: "Matt",
  password: "wordpass"
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
id: 1,
title:              "Flying cat pet",
blurb:              "Love your feline friend? Give him or her the gift of flight",
img_url:            "http://res.cloudinary.com/dur3lr9q4/image/upload/v1456883738/o284ebn1axjajhcxzg9z.jpg",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       100000,
campaign_end_date:  Time.now + 10.days,
details:            "Rocket Cat"
})

Project.create!({
id: 2,
title: "Ultimate Game",
blurb: "We combined Blackjack, A Rubiks Cube, and Foosball to create the greatest game ever",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457335136/pksu8o42ees2h56kyql5.jpg",
details: "<div><span style=\"font-size: 18px;\">Be part of history. Help us re-define the gaming industry. </span></div>",
author_id: 2,
category_id: 7,
current_funding: 0,
funding_goal: 4500,
campaign_end_date: Time.now + 12.days,
})

Project.create!({
id: 3,
title: "Wonder Pants",
blurb: "The new pants for the twenty-first century!",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457333931/qy1imf5v1j5jhy8alwhr.jpg",
details:
"<div><span style=\"font-family: monospace; font-size: 12.8px;\">Let's face it. Aren't you tired of having to wash your pants almost daily?</span></div><div><br></div><div><span style=\"font-family: monospace; font-size: 12.8px;\">Lets face it, most pants &amp; shorts are AWFUL. We're here to prove things can be different. You deserve REAL pants.  With Wonder Pants you can cut your expensive water bills in half! Every time wonder pants get dirty, instead of washing them, you just turn them inside out and voila, a fresh new pair of pants. Every stitch, every seam, and every detail of our clothing is painstakingly designed and scrutinized. We will give you a perfect fit, complete comfort, and most importantly limitless freedom not wash your pants. </span></div><div><br></div><div><span style=\"font-family: monospace; font-size: 12.8px;\">We know it sounds crazy but we are all about making the impossible possible. Help us make a better pair of pants and let's challenge the industry together to make longer lasting clothes With Wonder Pants we take the hard work out of pants!</span></div>",
author_id: 2,
category_id: 4,
current_funding: 0,
funding_goal: 900000,
campaign_end_date: Time.now + 62.days
})

Project.create!({
id: 6,
title: "Evil",
blurb: "An ordinary guy. An extraordinary super villain.",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457326411/irlnyyoi0vcwvo0jjrjl.jpg",
details:
"<div><br></div><div><span style=\"font-size: 32px;\">Experience The Graphic Novel \"Evil\"</span></div><div><br></div><div><br></div><div>Bob strives to become the most feared super villain in the world, while maintaining his cover working as a Barista in one of San Francisco's most exquisite coffee shops. A story full of laughter, action, poor customer service, and espresso.</div>",
author_id: 1,
category_id: 2,
current_funding: 0,
funding_goal: 15000,
campaign_end_date: Time.now + 30.days
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

Project.create!({
id: 9,
title: "The Fancier Dress Shoe ",
blurb: "No other shoe comes close",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457330191/v9qys2h4dohy9zm2vceb.jpg",
details: "<div><span style=\"font-size: 18px;\">The Fancier Dress Shoe&nbsp;</span></div><div><br></div><div><br></div><div>The pinnacle of men's fashion. No other shoe is this classy, this comfortable, and this expensive. Experience the difference today. Your feet will thank you. </div>",
author_id: 1,
category_id: 4,
current_funding: 0,
funding_goal: 50000,
campaign_end_date: Time.now + 180.days
})

Project.create!({
id: 10,
title: "Documentary ^ 2",
blurb: "Ever wondered how documentaries are made? Presenting the documentary about documentaries",
img_url: "http://res.cloudinary.com/dur3lr9q4/image/upload/v1457331670/crgrzotsphlhkx8rdttw.jpg",
details: "<div><br></div><div><span style=\"font-size: 32px;\">Documentary ^ 2</span></div><div><br></div><div>We take you behind the scenes exploring the world of documentaries. Our documentary has everything:</div><div><br></div><ol><li>Narration</li><li>Humor</li><li>Drama</li><li>Information</li></ol><div><br></div><div>Don't miss out on watching the documentary of a lifetime!</div>",
author_id: 1,
category_id: 5,
current_funding: 0,
funding_goal: 25000,
campaign_end_date: Time.now + 45.days
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
reward_max_count: nil
})

Reward.create!({
id: 40,
title: "Handmade Mini Book",
description: "A handmade mini book just for you!",
cost: 50,
project_id: 7,
delivery_date: Time.now + 100.days,
reward_count: nil,
reward_max_count: nil
})

Reward.create!({
id: 5,
title: "Digital Level",
description: "Digital copy of the entire 164 page graphic novel, featuring all six issues as well as bonus content and artwork",
cost: 10,
project_id: 6,
delivery_date: Time.now + 30.days,
reward_count: nil,
reward_max_count: nil
})

Reward.create!({
 id: 6,
 title: "T Shirt Level",
 description:
  "Not only will you get a digital copy of the graphic novel, you will also get a T Shirt. ",
 cost: 30,
 project_id: 6,
 delivery_date: Time.now + 30.days,
 reward_count: nil,
 reward_max_count: nil
})

Reward.create!({
 id: 7,
 title: "THE NOVEL LEVEL",
 description: "High quality hard cover copy of the graphic novel",
 cost: 45,
 project_id: 6,
 delivery_date: Time.now + 30.days,
 reward_count: nil,
 reward_max_count: nil
})

Reward.create!({
id: 8,
title: "First generation toy",
description: "Hot off the shelf! Get your new toy as soon as its ready to ship.",
cost: 45,
project_id: 8,
delivery_date: Time.now + 60.days,
reward_count: nil,
reward_max_count: nil
})

Reward.create!({
id: 9,
title: "Limited edition toy",
description: "Just for our Underway supporters! A limited edition toy at no extra cost!",
cost: 45,
project_id: 8,
delivery_date: Time.now + 60.days,
reward_count: nil,
reward_max_count: 250
})


Reward.create!({
id: 10,
title: "The Shoe",
description: "Experience our new shoes as soon as they are ready!",
cost: 1200,
project_id: 9,
delivery_date: Time.now + 200.days,
reward_count: nil,
reward_max_count: nil
})

Reward.create!({
id: 11,
title: "The Shoe Delux",
description: "Experience our new shoes as soon as they are ready! This package contains 2 pairs of shoes",
cost: 2000,
project_id: 9,
delivery_date: Time.now + 200.days,
reward_count: nil,
reward_max_count: nil
})

Reward.create!({
id: 12,
title: "Founders Shoe",
description: "Artesian hand made shoes. Get one of the first shoes our founders created during the design process.",
cost: 3500,
project_id: 9,
delivery_date: Time.now + 200.days,
reward_count: nil,
reward_max_count: 50
})

Reward.create!({
id: 13,
 title: "Opening night tickets",
 description: "Come watch our documentary with the cast and crew!",
 cost: 150,
 project_id: 10,
 delivery_date: Time.now + 60.days,
 reward_count: nil,
 reward_max_count: 200
})

Reward.create!({
id: 14,
title: "Reserved tickets",
description: "Come watch our documentary anytime with this reserved ticket coupon!",
cost: 16,
project_id: 10,
delivery_date: Time.now + 60.days,
reward_count: nil,
reward_max_count: nil
})

Reward.create!({
id: 25,
title: "Thanks for the leg up",
description: "Support our project! Get a premium sock!",
cost: 5,
project_id: 3,
delivery_date: Time.now + 60.days,
reward_count: nil,
reward_max_count: nil
})
# ​
# Reward.create!({
# id: 26,
# title: "Wonder Pants owner",
# description: "Be one of the first to own an exclusive Wonder Pants design!",
# cost: 65,
# project_id: 3,
# delivery_date: Time.now + 60.days,
# reward_count: nil,
# reward_max_count: nil
# })
# ​
# Reward.create!({
# id: 26,
# title: "Wonder Pants Hat trick",
# description: "Get three pairs of an exclusive Wonder Pants design",
# cost: 150,
# project_id: 3,
# delivery_date: Time.now + 60.days,
# reward_count: nil,
# reward_max_count: nil
# })
# ​
# Reward.create!({
# id: 26,
# title: "Wonder Pants Gold Member Pro",
# description: "Get the extremely extra exclusive gold version of Wonder Pants. These pants have been literally dipped in gold.",
# cost: 9000,
# project_id: 3,
# delivery_date: Time.now + 60.days,
# reward_count: nil,
# reward_max_count: 3
# })
#
Reward.create!({
id: 4,
title: "Rulebook + Strategy Guide",
description: "Learn how to play our game with our offical rulebook + strategy guide!",
cost: 95,
project_id: 2,
delivery_date: Time.now + 32.days,
reward_count: nil,
reward_max_count: nil
})



####################
###### Backer ######
####################



# Backer.create!({
#   user_id: 2,
#   reward_id: 1
# })
#
# Backer.create!({
#   user_id: 2,
#   reward_id: 4
# })
#
# Backer.create!({
#   user_id: 3,
#   reward_id: 1
# })
#
# Backer.create!({
#   user_id: 3,
#   reward_id: 2
# })
#
# Backer.create!({
#   user_id: 3,
#   reward_id: 2
# })
#
# Backer.create!({
#   user_id: 4,
#   reward_id: 1
# })
