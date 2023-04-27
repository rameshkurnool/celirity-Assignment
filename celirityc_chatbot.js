
// Replace with your own project ID and API key
const projectId = "celirity-tdmx";
const apiKey = "AIzaSyA5OTzTYupLy2NFH5WqhzU3RWqf9UbIfL0";

// Initialize the Dialogflow client
const DF = window.DF;
const dfClient = new DF.MessengerClient({ projectId, apiKey });

// Get the chatbot interface element
const chatbot = document.querySelector('df-messenger');

// Add an event listener to the chatbot interface to handle user input
chatbot.addEventListener('df-submit', async (event) => {
  const { message } = event.detail;
  
  // Send the user's message to Dialogflow for processing
  const result = await dfClient.detectIntent(message);
  
  // Display the response from Dialogflow in the chat interface
  chatbot.renderCustomCard({
    title: result.queryResult.fulfillmentText,
    subtitle: result.queryResult.intent.displayName,
    buttons: [
        {
            text: 'Book Shipment',
            click: () => {
              chatbot.renderCustomText({
                text: 'Please provide the necessary details to book a shipment.'
              });
            },
          },
          {
            text: 'Track Shipment',
            click: () => {
              chatbot.renderCustomText({
                text: 'Please enter the tracking number to track your shipment.'
              });
            },
          },
          {
            text: 'Get Help',
            click: () => {
              chatbot.renderCustomText({
                text: 'Please contact our customer support for assistance.'
              });
            },
          },
        ],
      });
    });