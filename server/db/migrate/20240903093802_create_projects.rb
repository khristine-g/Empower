class CreateProjects < ActiveRecord::Migration[7.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :small_description
      t.text :detailed_description
      t.string :image
      t.decimal :goal_amount
      t.decimal :amount_raised
      t.references :user, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
