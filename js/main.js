var entryTitle = document.querySelector('#title');
var photoURL = document.querySelector('#photoURL');
var entryNotes = document.querySelector('#notes');
var photo = document.querySelector('img');
photoURL.addEventListener('input', changePhoto);

var formObject = document.querySelector('#entry-form');
formObject.addEventListener('submit', updateEntry);

// function definitions

function changePhoto(event) {
  var newURL = photoURL.value;
  photo.src = newURL;
}

function updateEntry(event) {
  var entry = {};
  entry.title = entryTitle.value;
  entry.url = photoURL.value;
  entry.notes = entryNotes.value;
  entry.entryId = data.nextEntryId;
  data.nextEntryId = data.nextEntryId + 1;
  data.entries.unshift(entry);
  photo.src = 'images/placeholder-image-square.jpg';
  entryTitle.value = '';
  photoURL.value = '';
  entryNotes.value = '';
}
