import ChatBot from 'react-simple-chatbot'

function Chat() {
    return (
      <ChatBot
          steps={[
                {
                  id: '1',
                  message: 'Welcome to the MedEasy Chatbot. What is your name?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}, nice to meet you! How can I assist you today?',
                  trigger: '4',
                },
                {
                  id: '4',
                  message: 'What symptoms are you experiencing?',
                  trigger: '5',
                },
                {
                  id: '5',
                  user: true,
                  trigger: '6',
                },
                {
                  id: '6',
                  message: 'Based on your symptoms, it seems you might have a cold. Would you like information on how to manage it?',
                  trigger: 'coldManagement',
                },
                {
                  id: 'coldManagement',
                  options: [
                    { value: 'yes', label: 'Yes', trigger: 'coldInfo' },
                    { value: 'no', label: 'No', trigger: '7' },
                  ],
                },
                {
                  id: 'coldInfo',
                  message: 'Here are some tips for managing a cold: Get plenty of rest, stay hydrated, and consider over-the-counter cold medications. If your symptoms worsen, please consult a healthcare professional.',
                  trigger: '7',
                },
                {
                  id: '7',
                  message: 'Do you have any other health concerns?',
                  trigger: '8',
                },
                {
                  id: '8',
                  user: true,
                  trigger: '9',
                },
                {
                  id: '9',
                  message: 'Thank you for sharing. Is there anything else I can assist you with?',
                  trigger: '10',
                },
                {
                  id: '10',
                  user: true,
                  trigger: '11',
                },
                {
                  id: '11',
                  message: 'Awesome! You are a telepath!',
                  end: true,
                },
          ]}
          floating={true}
        />
    );
  }
  
  export default Chat;