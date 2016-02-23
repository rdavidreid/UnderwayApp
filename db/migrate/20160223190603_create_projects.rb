class CreateProjects < ActiveRecord::Migration

  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :blurb, null: false
      t.string :img_url
      t.text :details, null: false
      t.integer :author_id, null: false
      t.integer :category_id, null: false
      t.integer :current_funding, null: false, default: 0
      t.integer :funding_goal, null: false
      t.date :campaign_end_date, null: false
      t.timestamps null: false
    end
    add_index :projects, :author_id
    add_index :projects, :category_id
  end

end
