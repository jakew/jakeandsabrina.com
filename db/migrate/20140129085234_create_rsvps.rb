class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.string :name
      t.string :email
      t.string :guest
      t.string :attending
      t.string :comment

      t.timestamps
    end
  end
end
