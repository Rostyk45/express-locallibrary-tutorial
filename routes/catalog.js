const express = require("express");
const router = express.Router();
const path = require('path'); 

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");


/// BOOK ROUTES ///


// GET catalog home page.
// router.get("/", book_controller.index);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});


// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'book_form.html'));
}),

// POST request for creating Book.
// router.post("/book/create", book_controller.book_create_post);


// GET request to delete Book.
// router.get("/book/:id/delete", book_controller.book_delete_get);


// POST request to delete Book.
// router.post("/book/:id/delete", book_controller.book_delete_post);


// GET request to update Book.
router.get("/book/:id/update", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'book_update.html'));
});


// POST request to update Book.
// router.post("/book/:id/update", book_controller.book_update_post);


// GET request for one Book.
router.get("/book/:id", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'book_detail.html'));
});


// GET request for list of all Book items.
// router.get("/books", book_controller.book_list);

router.get("/books", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'book_list.html'));
});


////////// BOOK API LINKS //////////

router.get("/api/index", book_controller.index);

router.get("/api/book/:id", book_controller.book_detail);

router.get("/api/book_list", book_controller.book_list);

router.get("/api/book/create", book_controller.book_create_get);

router.post("/api/book/create", book_controller.book_create_post);

router.get("/api/book/:id/update", book_controller.book_update_get);

router.post("/api/book/:id/update", book_controller.book_update_post);

router.post("/api/book/:id/delete", book_controller.book_delete_post);

/// AUTHOR ROUTES ///


// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'author_form.html'));
});


// POST request for creating Author.
// router.post("author/create", author_controller.author_create_post);


// GET request to delete Author.
// router.get("/author/:id/delete", author_controller.author_delete_get);


// POST request to delete Author.
// router.post("/author/:id/delete", author_controller.author_delete_post);


// GET request to update Author.
router.get("/author/:id/update", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'author_update.html'));
});


// POST request to update Author.
// router.post("/author/:id/update", author_controller.author_update_post);


// GET request for one Author.
router.get("/author/:id", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'author_detail.html'));
});


// GET request for list of all Authors.
// router.get("/authors", author_controller.author_list);

router.get("/authors", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'author_list.html'));
});

////////// AUTHOR API LINKS //////////

router.get("/api/author_list", author_controller.author_list);

router.get("/api/author/:id", author_controller.author_detail);

router.post("/api/author/create", author_controller.author_create_post);

router.post("/api/author/:id/delete", author_controller.author_delete_post);

router.get("/api/author/:id/update", author_controller.author_update_get);

router.post("/api/author/:id/update", author_controller.author_update_post);


/// GENRE ROUTES ///


// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'genre_form.html'));
}),


//POST request for creating Genre.
// router.post("/genre/create", genre_controller.genre_create_post);


// GET request to delete Genre.
// router.get("/genre/:id/delete", genre_controller.genre_delete_get);


// POST request to delete Genre.
// router.post("/genre/:id/delete", genre_controller.genre_delete_post);


// GET request to update Genre.
router.get("/genre/:id/update", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'genre_update.html'));
});


// POST request to update Genre.
// router.post("/genre/:id/update", genre_controller.genre_update_post);


// GET request for one Genre.
router.get("/genre/:id", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'genre_detail.html'));
});


// GET request for list of all Genre.

router.get("/genres", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'genre_list.html'));
});


////////// GENRE API LINKS //////////

router.get("/api/genre_list", genre_controller.genre_list);

router.get("/api/genre/:id", genre_controller.genre_detail);

router.post("/api/genre/create", genre_controller.genre_create_post);

router.get("/api/genre/:id/update", genre_controller.genre_update_get);

router.post("/api/genre/:id/update", genre_controller.genre_update_post);

router.post("/api/genre/:id/delete", genre_controller.genre_delete_post);


/// BOOKINSTANCE ROUTES ///


// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'bookinstance_form.html'));
  }
);


// POST request for creating BookInstance.
// router.post(
//   "/bookinstance/create",
//   book_instance_controller.bookinstance_create_post,
// );


// GET request to delete BookInstance.
// router.get(
//   "/bookinstance/:id/delete",
//   book_instance_controller.bookinstance_delete_get,
// );


// POST request to delete BookInstance.
// router.post(
//   "/bookinstance/:id/delete",
//   book_instance_controller.bookinstance_delete_post,
// );


// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  (req, res ) => {
    res.sendFile(path.join(__dirname, '../views', 'bookinstance_update.html'));
  }
);


// POST request to update BookInstance.
// router.post(
//   "/bookinstance/:id/update",
//   book_instance_controller.bookinstance_update_post,
// );


// GET request for one BookInstance.
router.get("/bookinstance/:id", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'bookinstance_detail.html'));
});


// GET request for list of all BookInstance.
router.get("/bookinstances", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'bookinstance_list.html'));
});

////////// BOOKINSTANCE API LINKS //////////

router.get("/api/bookinstance_list", book_instance_controller.bookinstance_list);

router.get("/api/bookinstance/:id", book_instance_controller.bookinstance_detail);

router.get("/api/bookinstance/create", book_instance_controller.bookinstance_create_get);

router.post("/api/bookinstance/create", book_instance_controller.bookinstance_create_post);

router.post("/api/bookinstance/:id/delete", book_instance_controller.bookinstance_delete_post);

router.get("/api/bookinstance/:id/update", book_instance_controller.bookinstance_update_get);

router.post("/api/bookinstance/:id/update", book_instance_controller.bookinstance_update_post);


module.exports = router;
