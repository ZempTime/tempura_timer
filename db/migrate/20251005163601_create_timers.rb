class CreateTimers < ActiveRecord::Migration[8.0]
  def change
    create_table :timers do |t|
      t.string :name

      t.timestamps
    end
  end
end
