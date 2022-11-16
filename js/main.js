var entryTitle = document.querySelector('#title');
var photoURL = document.querySelector('#photoURL');
var entryNotes = document.querySelector('#notes');
var photo = document.querySelector('img');

var views = document.getElementsByClassName('view');
var currentView = document.getElementById('entries');
var entriesNav = document.querySelector('#goEntries');
var formNav = document.querySelector('#goForm');

photoURL.addEventListener('input', changePhoto);

var formObject = document.querySelector('#entry-form');
formObject.addEventListener('submit', updateEntry);

addEventListener('DOMContentLoaded', event => {
  if (data.entries.length > 0) {
    var removeList = document.querySelector('#dummy');
    removeList.remove();
  }
  var base = document.querySelector('#list');
  for (var i = 0; i < data.entries.length; i++) {
    var addElement = createEntryTree(data.entries[i]);
    base.appendChild(addElement);
  }
  getView();
});

entriesNav.addEventListener('click', viewEntries);
formNav.addEventListener('click', viewEntryForm);

// function definitions

function changePhoto(event) {
  var newURL = photoURL.value;
  var urlArray = newURL.split('.');
  var fileType = urlArray[urlArray.length - 1].toLowerCase();
  if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg' || fileType === 'gif') {
    photo.src = newURL;
  }
  if (photoURL.value === '') {
    photo.src = 'images/placeholder-image-square.jpg';
  }
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
  viewEntries();
}

function createEntryTree(entry) {
  var listItem = document.createElement('li');
  var rowItem = document.createElement('div');
  rowItem.setAttribute('class', 'row');
  listItem.appendChild(rowItem);

  var imgColumn = document.createElement('div');
  imgColumn.setAttribute('class', 'column-half');
  rowItem.appendChild(imgColumn);
  var entryImage = document.createElement('img');
  entryImage.setAttribute('src', entry.url);
  imgColumn.appendChild(entryImage);

  var textColumn = document.createElement('div');
  textColumn.setAttribute('class', 'column-half');
  rowItem.appendChild(textColumn);
  var entryTitle = document.createElement('h2');
  entryTitle.textContent = entry.title;
  entryTitle.setAttribute('class', 'adjust');
  textColumn.appendChild(entryTitle);
  var entryNotes = document.createElement('p');
  entryNotes.textContent = entry.notes;
  textColumn.appendChild(entryNotes);

  return listItem;
}

// view change definitions

function getView() {
  var storedView = data.view;
  if (storedView === 'entry-form') {
    viewEntryForm();
  }
  if (storedView === 'entries') {
    viewEntries();
  }
}

function viewEntryForm() {
  var formView = document.querySelector('#form');
  formView.className = 'view';
  currentView = document.getElementById('form');
  for (var i = 0; i < views.length; i++) {
    if (views[i] !== currentView) {
      views[i].className = 'view hidden';
    }
  }
  data.view = currentView.getAttribute('data-view');
}

function viewEntries() {
  var entriesView = document.querySelector('#entries');
  entriesView.className = 'view';
  currentView = document.getElementById('entries');
  for (var i = 0; i < views.length; i++) {
    if (views[i] !== currentView) {
      views[i].className = 'view hidden';
    }
  }
  data.view = currentView.getAttribute('data-view');
}
