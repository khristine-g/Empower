class CreateContributions < ActiveRecord::Migration[7.2]
  def change
    create_table :contributions do |t|
      t.decimal :amount
      t.references :user, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.string :phone_number

      t.timestamps
    end
  end
end
