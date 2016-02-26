class CreateBackers < ActiveRecord::Migration
  def change
    create_table :backers do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
    end
    add_index :backers, :user_id
    add_index :backers, :reward_id
  end
end
