

function getBotResponse(input) {
    //rock paper scissors
    

    if (input == "what is this site for?"||input == "what is this site for?") {
        return "This is AI Interview Prepration platform to help students to attain an interview with a good confidence";
    } else if (input == "tell me about you") {
        return "I Am A AI Integrated Chatbot Made By sayana George,Rah  ul s, Tom Thomson,Punnoose P Punnose.....The Students Of Saintgits College Of Engineering";
    } else if (input == "scissors") {
        return "rock";
    }
    else if(input == "take me to the text to speech page")
    {
        return (document.write('Click here'.link('./texttospeech.html')));
        
    }

    // Simple responses
    if (input == "hai"||input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}