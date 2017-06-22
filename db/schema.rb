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

ActiveRecord::Schema.define(version: 20170622223949) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "announcements", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bulletins", force: :cascade do |t|
    t.integer  "pool_id",    null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pool_id"], name: "index_bulletins_on_pool_id", using: :btree
  end

  create_table "game_nfls", force: :cascade do |t|
    t.integer  "week",                       null: false
    t.integer  "season",                     null: false
    t.integer  "home_id",                    null: false
    t.integer  "away_id",                    null: false
    t.integer  "home_score"
    t.integer  "away_score"
    t.boolean  "completed",  default: false, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.datetime "start_time",                 null: false
    t.index ["week", "season"], name: "index_game_nfls_on_week_and_season", using: :btree
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "pool_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pool_id", "user_id"], name: "index_memberships_on_pool_id_and_user_id", unique: true, using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "pool_id",    null: false
    t.string   "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pool_id"], name: "index_messages_on_pool_id", using: :btree
  end

  create_table "picks", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "pool_id",    null: false
    t.integer  "game_id",    null: false
    t.string   "pick",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "pool_id", "game_id"], name: "index_picks_on_user_id_and_pool_id_and_game_id", unique: true, using: :btree
  end

  create_table "pools", force: :cascade do |t|
    t.string   "title",                       null: false
    t.string   "description"
    t.integer  "moderator_id",                null: false
    t.integer  "buy_in",          default: 0, null: false
    t.string   "league",                      null: false
    t.integer  "season",                      null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "password_digest",             null: false
    t.string   "identifier",                  null: false
    t.index ["identifier"], name: "index_pools_on_identifier", unique: true, using: :btree
    t.index ["moderator_id"], name: "index_pools_on_moderator_id", using: :btree
    t.index ["title"], name: "index_pools_on_title", using: :btree
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "city",         null: false
    t.string   "league",       null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "abbreviation"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "password_digest",        default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.integer  "failed_attempts",        default: 10, null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "unconfirmed_email"
    t.string   "name",                                null: false
    t.string   "session_token",                       null: false
    t.string   "remember_token"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true, using: :btree
  end

end
