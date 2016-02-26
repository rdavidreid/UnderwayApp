class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :cost, null: false
      t.integer :project_id, null: false
      t.date :delivery_date, null: false
      t.integer :reward_count
      t.integer :reward_max_count
      t.timestamps null: false
    end
    add_index :rewards, :project_id
  end
end
