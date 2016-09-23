class ChangeDescripitonToDescripiton < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :descripiton, :text
    add_column :comments, :description, :text
  end
end
