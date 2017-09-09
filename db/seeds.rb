

Post.destroy_all
Neighborhood.destroy_all


# neighborhoods
cabbage = Neighborhood.create({name: 'Cabbagetown', description: "Cabbagetown is a neighborhood on the east side of Atlanta, Georgia, United States, abutting historic Oakland Cemetery. It includes the Cabbagetown District, a historic district listed on the U.S. National Register of Historic Places."})
o4w = Neighborhood.create({name: 'Old Fourth Ward', description: "The Old Fourth Ward, often abbreviated O4W, is a neighborhood on the east side of Atlanta, Georgia, United States. The neighborhood is best known as the location of the Martin Luther King, Jr. historic site."})
vahi = Neighborhood.create({name: 'Virginia Highlands', description: "Virginia–Highland is neighborhood of Atlanta, Georgia founded in the early 20th century as a streetcar suburb. The neighborhood is famous for its bungalows and other historic houses from the 1910s to the 1930s, and its eclectic mix of restaurants, bars, and shops."})
kirk = Neighborhood.create({name: 'Kirkwood', description: "Kirkwood is a national historic designated neighborhood on the east side of Atlanta, Georgia, United States. A historic streetcar suburb, its residential development begun in the 1870s and an early tour book described it as an area of beautiful suburban villas."})

# posts
box = Post.create({title: 'Moving boxes', content: "If you want them snag them. Recycling comes in the morning. Don't contact me just get em if you need them. (Please don't make a mess. The stuff closest to the mailbox is trash but the whole right side is moving boxes.)", image_url: 'https://images.craigslist.org/00M0M_92SB6yxEuch_600x450.jpg', category: 'misc', location: '4817 Haven Lane, Atlanta, GA 30317', neighborhood_id: ''})
bball = Post.create({title: 'Fisher Price Basketball Hoop', content: "My kids are too big for this now. This basketball hoop extends from 4 feet to 6 feet in height. The hoop is in decent condition, just a bit weathered by the elements.", image_url: 'https://images.craigslist.org/00N0N_4G8cw5TAlRA_600x450.jpg', category: 'kids', location: '926 Howard Street, Atlanta, GA 30306', neighborhood_id: ''})
sink = Post.create({title: 'sink basin w/faucet', content: "A clam shell sink basin with Price Pfister faucet - dirty from being in a car port and some pool/tub toys that have mildew on them, but a little Tilex should remove it. Easy porch/yard pickup.", image_url: 'https://images.craigslist.org/00b0b_8XeQPAttTBy_600x450.jpg', category: 'construction', location: '8738 Beechwood Dr, Atlanta, GA 30324', neighborhood_id: ''})
cabinet = Post.create({title: 'huge filing cabinets', content: "Saw these big guys on my morning walk, they look to be in pretty good condition", image_url: 'https://images.craigslist.org/00505_41Fo4pmkmrW_600x450.jpg', category: 'furniture', location: '649 Oakwood Rd, Atlanta, GA 30308', neighborhood_id: ''})
stuff = Post.create({title: 'so much stuff!!', content: "Dressers, chairs, cabinets, TV, bench, treadmill and more. Some items in excellent condition, some need a bit of attention, or a little cleaning. First come, first serve. It'll all be gone by Tuesday. Bring a truck!", image_url: 'https://images.craigslist.org/00j0j_9UQnELPcMHH_600x450.jpg', category: 'furniture', location: '514 S. Magnolia St., Atlanta, GA 30317', neighborhood_id: ''})
couch = Post.create({title: 'Couch', content: "Grab and Go!", image_url: 'https://images.craigslist.org/00c0c_i0ZaTpuMgeN_600x450.jpg', category: 'furniture', location: '496 Hamilton St., Atlanta 30312', neighborhood_id: ''})
skier = Post.create({title: 'Nordic Track Skier', content: "Nordic Track Pro ski exercize machine. First come, first served, on the curb", image_url: 'https://images.craigslist.org/00X0X_agiL7CIGtKL_600x450.jpg', category: 'fitness', location: '8089 E. Glenwood Drive, Atlanta, GA 30306', neighborhood_id: ''})
kennel = Post.create({title: 'small dog kennel', content: "Kennel will be on driveway today. No need to come to door, just take it if you want it.", image_url: 'https://images.craigslist.org/00L0L_3RurZkay9wX_600x450.jpg', category: 'pets', location: '477 Ridgeview Ave, Atlanta, GA 30316', neighborhood_id: ''})


cabbage.posts = [
  box,
  bball,
  sink,
  cabinet,
  stuff,
  skier,
  couch,
  kennel
]

o4w.posts = [
  box,
  bball,
  sink,
  cabinet,
  stuff,
  skier,
  couch,
  kennel
]

vahi.posts = [
  box,
  bball,
  sink,
  cabinet,
  stuff,
  skier,
  couch,
  kennel
]

kirk.posts = [
  box,
  bball,
  sink,
  cabinet,
  stuff,
  skier,
  couch,
  kennel
]




