const medicineForm = document.getElementById('medicine-form');
const remindersList = document.getElementById('reminders-list');


function addReminderToList(reminder) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Medicine:</span> ${reminder.medicineName} (<span>Dosage:</span> ${reminder.dosage}) - <span>Time:</span> ${reminder.reminderTime} - <span>Reminder Type:</span> ${reminder.reminderType}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        remindersList.removeChild(listItem);
        clearReminder(reminder.reminderTime); // Remove reminder from browser notifications
    });

    listItem.appendChild(deleteButton);
    remindersList.appendChild(listItem);
}

const allRemindersList = document.getElementById('all-reminders-list');
const viewRemindersBtn = document.getElementById('view-reminders-btn');

let allReminders = []; // Array to store all reminders

function addReminderToList(reminder) {


function setBrowserNotification(reminder) {
  // Check for Notification permission
  if (Notification.permission === "granted") {
    showNotification(reminder);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification(reminder);
      }
    });
  }