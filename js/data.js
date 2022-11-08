/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var storedValue = localStorage.getItem('Code Journal Data');
var toUpdate = JSON.parse(storedValue);
if (storedValue !== null) {
  data.entries = toUpdate.entries;
  data.nextEntryId = toUpdate.nextEntryId;
}
addEventListener('beforeunload', updateLocalStorage);

// function definition
function updateLocalStorage(event) {
  localStorage.setItem('Code Journal Data', JSON.stringify(data));
}
