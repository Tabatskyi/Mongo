// use bookstore

//-------------- Init

db.books.insertMany([
  { title: "Clean Code", author: "Robert C. Martin", category: "Programming", price: 35, in_stock: true, published_year: 2008, rating: 4.8 },
  { title: "The C Programming Language", author: "Brian Kernighan", category: "Programming", price: 45, in_stock: true, published_year: 1988, rating: 4.9 },
  { title: "Advanced Programming in the UNIX Environment", author: "W. Richard Stevens", category: "Programming", price: 65, in_stock: true, published_year: 1992, rating: 4.9 },
  { title: "Design Patterns", author: "Erich Gamma", category: "Programming", price: 50, in_stock: true, published_year: 1994, rating: 4.6 },
  { title: "Effective C++", author: "Scott Meyers", category: "Programming", price: 42, in_stock: true, published_year: 2005, rating: 4.7 },
  { title: "Clean Architecture", author: "Robert C. Martin", category: "Programming", price: 38, in_stock: false, published_year: 2017, rating: 4.5 },
  { title: "Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", price: 40, in_stock: true, published_year: 1999, rating: 4.8 },
  
  { title: "UNIX and Linux System Administration Handbook", author: "Evi Nemeth", category: "System Administration", price: 55, in_stock: true, published_year: 2017, rating: 4.9 },
  { title: "Systems Performance", author: "Brendan Gregg", category: "System Administration", price: 60, in_stock: true, published_year: 2020, rating: 4.8 },
  { title: "How Linux Works", author: "Brian Ward", category: "System Administration", price: 35, in_stock: true, published_year: 2021, rating: 4.7 },
  { title: "Linux Kernel Development", author: "Robert Love", category: "System Administration", price: 45, in_stock: false, published_year: 2010, rating: 4.6 },
  { title: "BPF Performance Tools", author: "Brendan Gregg", category: "System Administration", price: 65, in_stock: true, published_year: 2019, rating: 4.8 },
  { title: "Docker Deep Dive", author: "Nigel Poulton", category: "System Administration", price: 30, in_stock: true, published_year: 2020, rating: 4.7 },
  { title: "Kubernetes Up & Running", author: "Kelsey Hightower", category: "System Administration", price: 42, in_stock: true, published_year: 2019, rating: 4.6 },
  
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", category: "Databases", price: 45, in_stock: true, published_year: 2017, rating: 4.9 },
  { title: "PostgreSQL: Up and Running", author: "Regina O. Obe", category: "Databases", price: 38, in_stock: true, published_year: 2017, rating: 4.5 },
  { title: "The Art of PostgreSQL", author: "Dimitri Fontaine", category: "Databases", price: 49, in_stock: false, published_year: 2019, rating: 4.8 },
  { title: "Database Internals", author: "Alex Petrov", category: "Databases", price: 55, in_stock: true, published_year: 2019, rating: 4.7 },
  { title: "Seven Databases in Seven Weeks", author: "Luc Perkins", category: "Databases", price: 40, in_stock: true, published_year: 2018, rating: 4.4 },
  { title: "MongoDB: The Definitive Guide", author: "Shannon Bradshaw", category: "Databases", price: 45, in_stock: true, published_year: 2019, rating: 4.6 },
  { title: "High Performance MySQL", author: "Baron Schwartz", category: "Databases", price: 50, in_stock: true, published_year: 2012, rating: 4.5 },

  { title: "Applied Cryptography", author: "Bruce Schneier", category: "Cryptography", price: 60, in_stock: true, published_year: 1996, rating: 4.7 },
  { title: "Cryptography Engineering", author: "Niels Ferguson", category: "Cryptography", price: 55, in_stock: true, published_year: 2010, rating: 4.8 },
  { title: "Serious Cryptography", author: "Jean-Philippe Aumasson", category: "Cryptography", price: 45, in_stock: true, published_year: 2017, rating: 4.9 },
  { title: "Practical Cryptography", author: "Niels Ferguson", category: "Cryptography", price: 50, in_stock: false, published_year: 2003, rating: 4.5 },
  { title: "Real-World Cryptography", author: "David Wong", category: "Cryptography", price: 48, in_stock: true, published_year: 2021, rating: 4.8 },
  { title: "The Code Book", author: "Simon Singh", category: "Cryptography", price: 25, in_stock: true, published_year: 1999, rating: 4.7 },
  { title: "Handbook of Applied Cryptography", author: "Alfred J. Menezes", category: "Cryptography", price: 70, in_stock: true, published_year: 1996, rating: 4.6 },
  { title: "Understanding Cryptography", author: "Christof Paar", category: "Cryptography", price: 65, in_stock: true, published_year: 2009, rating: 4.8 },
  { title: "Bulletproof SSL and TLS", author: "Ivan Ristic", category: "Cryptography", price: 50, in_stock: true, published_year: 2014, rating: 4.7 }
])

// -------------- Create
db.books.insertMany([
  { title: "Site Reliability Engineering", author: "Niall Richard Murphy", category: "System Administration", price: 35, in_stock: true, published_year: 2016, rating: 4.7 },
  { title: "The Art of Computer Programming", author: "Donald Knuth", category: "Programming", price: 150, in_stock: false, published_year: 1968, rating: 4.9 },
  { title: "PostgreSQL High Performance", author: "Gregory Smith", category: "Databases", price: 45, in_stock: true, published_year: 2010, rating: 4.4 },
  { title: "Modern C", author: "Jens Gustedt", category: "Programming", price: 40, in_stock: true, published_year: 2019, rating: 4.6 },
  { title: "KaguOS", author: "Volodymyr Skochko", category: "Programming", price: 75, in_stock: true, published_year: 2023, rating: 5.0 }
])

// -------------- Read
db.books.find({ category: "Programming" })
db.books.find({ published_year: { $gt: 2015 } })
db.books.find({ price: { $gt: 40 } })
db.books.find({ in_stock: true })
db.books.find({ author: "Volodymyr Skochko" })
db.books.find({ rating: { $gt: 4.5 } })

// -------------- Update
db.books.updateOne({ title: "Clean Code" }, { $set: { price: 32 } })
db.books.updateMany({ category: "Databases", in_stock: false }, { $set: { in_stock: true } })
db.books.updateOne({ title: "Systems Performance" }, { $inc: { rating: 0.1 } })

// -------------- Delete
db.books.deleteOne({ title: "The Code Book" })
db.books.deleteMany({ published_year: { $lt: 2000 } })
db.books.deleteMany({ title: { $in: ["The Code Book", "Bulletproof SSL and TLS"] } })

// -------------- Aggregate
db.books.aggregate([
  { $group: { _id: "$category", average_price: { $avg: "$price" } } }
])
db.books.aggregate([
  { $group: { _id: "$category", total_books: { $sum: 1 } } }
])
db.books.aggregate([
  { $group: { _id: "$category", average_rating: { $avg: "$rating" } } },
  { $project: { average_rating: { $round: ["$average_rating", 2] } } }
])
db.books.aggregate([
  { $sort: { price: -1 } },
  { $limit: 10 }
])

// -------------- Optimization
db.books.find({
    category: "Programming",
    published_year: { $gte: 2023 }
}).explain("executionStats")
db.books.createIndex({
    category: 1,
    published_year: 1
})

db.books.find({
    category: "Programming",
    published_year: { $gte: 2023 }
}).explain("executionStats")

