# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160420164307) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backers", force: :cascade do |t|
    t.integer "user_id",   null: false
    t.integer "reward_id", null: false
  end

  add_index "backers", ["reward_id"], name: "index_backers_on_reward_id", using: :btree
  add_index "backers", ["user_id"], name: "index_backers_on_user_id", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["project_id"], name: "index_likes_on_project_id", using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.string   "title",                         null: false
    t.string   "blurb",                         null: false
    t.string   "img_url"
    t.text     "details",                       null: false
    t.integer  "author_id",                     null: false
    t.integer  "category_id",                   null: false
    t.integer  "current_funding",   default: 0, null: false
    t.integer  "funding_goal",                  null: false
    t.date     "campaign_end_date",             null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  add_index "projects", ["author_id"], name: "index_projects_on_author_id", using: :btree
  add_index "projects", ["category_id"], name: "index_projects_on_category_id", using: :btree

  create_table "rewards", force: :cascade do |t|
    t.string   "title",            null: false
    t.string   "description",      null: false
    t.integer  "cost",             null: false
    t.integer  "project_id",       null: false
    t.date     "delivery_date",    null: false
    t.integer  "reward_count"
    t.integer  "reward_max_count"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "rewards", ["project_id"], name: "index_rewards_on_project_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
