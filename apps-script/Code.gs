// Bound to the "AVAS Demo Kit Sign-ups" Google Sheet (Extensions > Apps Script).
// Adds one row (name, RBU team, Taipei time) to the Sign-ups tab for each registration.
var SHEET_NAME = 'Sign-ups';

function doPost(e) {
  var p = (e && e.parameter) || {};
  var name = String(p.name || '').trim().slice(0, 80);
  var team = String(p.team || '').trim().slice(0, 80);
  if (p.hp || !name || !team) return reply_({ ok: false });
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    // Columns D and E hold formulas down to row 1001, so find the last row used in column A.
    var colA = sh.getRange('A:A').getValues();
    var last = 0;
    for (var i = 0; i < colA.length; i++) if (colA[i][0] !== '') last = i + 1;
    var stamp = Utilities.formatDate(new Date(), 'Asia/Taipei', 'yyyy-MM-dd HH:mm');
    // Leading apostrophe keeps text that looks like a formula or number as plain text.
    sh.getRange(last + 1, 1, 1, 3).setValues([["'" + name, "'" + team, stamp]]);
  } finally {
    lock.releaseLock();
  }
  return reply_({ ok: true });
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Run once from the editor to check the sheet can be written, then delete the test row.
function testWrite() {
  doPost({ parameter: { name: 'Test person', team: 'Test team' } });
}
