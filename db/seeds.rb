# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.create!({
  username: "david",
  password: "taters"
})

Project.create!({
title:              "project 1",
blurb:              "The blurb of project 1",
img_url:            "http://lorempixel.com/200/200/cats/",
details:            "These are the details of project one. This could contain
a very large amount of text. text text text text text text text text text text",
author_id:          1,
category_id:        1,
current_funding:    0,
funding_goal:       100000,
campaign_end_date:  Date.new
})
