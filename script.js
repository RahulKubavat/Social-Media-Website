
// CORRECTED BY CHAT GPT4

const menuitems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesnotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.messages');
const messagesearch = document.querySelector('#message-search');

// remove active class from all menu items
const changeactiveitem = () => {
  menuitems.forEach(item => {
    item.classList.remove('active');
  })
}

// Get all menu items
const menuitem = document.querySelectorAll('.menuitem');

// Add click event listener to each menu item
menuitems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all menu items
    changeactiveitem();

    // Add active class to clicked menu item
    item.classList.add('active');

    // Check if clicked item is the 'notification' item
    if (item.id != 'notification') {
      // Hide notifications popup
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      // Show notifications popup
      document.querySelector('.notifications-popup').style.display = 'block';

      // Hide notification count element
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  })
})

//MESSAGES
//search chats
const searchmessages = () => {
  const val = messagesearch.value.toLowerCase();
  console.log(val);
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
  })
}

//search chat
messagesearch.addEventListener('keyup', searchmessages);

//highlight messages card when messages menu item is clicked
messagesnotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesnotification.querySelector('.notification-count').style.display = 'none'
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
})
