# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |i|
  u = User.find_or_initialize_by(email: "user+#{i}@example.com")
  u.update_attributes(password: 'Testing1')
end

50.times do |i|
  r = Restaurant.find_or_initialize_by(address: "Address #{i}")
  r.update_attributes(
    name: FFaker::NameIT.name,
    description: ['burger', 'pizza', 'sushi', 'ice cream', 'pierozki'].sample,
    user: User.all.sample
  )

  r.comments << (0..5).to_a.map do |i|
    Comment.new(
      rating: (1..5).to_a.sample,
      description: FFaker::Lorem.sentence,
      user: User.where.not(id: r.user_id).sample
    )
  end
end

User.create(email: 'admin@example.com', password: '12345678')
