# Build An Alexa Hello World Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-on._TTH_.png)](./1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-locked._TTH_.png)](./2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-locked._TTH_.png)](./3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-locked._TTH_.png)](./4-testing.md)[![Next Steps](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-locked._TTH_.png)](./5-next-steps.md)

1.  **Go to the [Amazon Alexa Developer Portal](http://developer.amazon.com/alexa?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=hello-world-nodejs-V2_GUI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_hello-world-nodejs-V2_GUI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs).  In the top-right corner of the screen, click the "Sign In" button.**
(If you don't already have an account, you will be able to create a new one for free.)

2.  Once you have signed in, hover your mouse over the **Your Alexa Consoles** text at the top-right section of the screen and Select the **Skills** Link from the drop-down menu.

3.  From the **Alexa Skills Kit Developer Console**, click the **Create Skill** button on the right-side of the page. (If this is your first skill, an additional **Create Skill** button will also be present in the center of the page.)

4. Give your new skill a **Skill name**. This is the name that will be shown in the Alexa Skills Store, and the name your users will refer to. Your skill name may include spaces. For the sake of simplicity, we'll just use **English (US)** for the **Default language** selection.  (You can add other languages later.)

5. The **Custom** model will be pre-selected by default; keep this selection. Click the **Create Skill** button at top right.

6. In the **Choose a template** page, the **Start from scratch** template will be pre-selected; keep this selection. Click the **Choose** button at top right.

7. The console **Build** tab will be displayed.  **Build the Interaction Model for your skill**:
    1. On the left hand navigation panel, select the **JSON Editor** tab under **Interaction Model**. In the textfield provided, replace any existing code with the code provided in the [Interaction Model](../models/en-US.json).  Click **Save Model**.
    2. If you want to change the skill invocation name, select the **Invocation** tab. Enter a **Skill Invocation Name**. This is the name that your users will need to say to start your skill.  In this case, it's preconfigured to be 'hello world'.
    3. Click "Build Model".

	**Note:** You should notice that **Intents** and **Slot Types** will auto populate based on the JSON Interaction Model that you have now applied to your skill. Feel free to explore the changes here; to learn about **Intents**, **Slots**, and **Utterances** open our [technical documentation in a new tab](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=hello-world-nodejs-V2_GUI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_hello-world-nodejs-V2_GUI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs).

8. **Optional:** Select an intent by expanding the **Intents** from the left side navigation panel. Add some more sample utterances for your newly generated intents. Think of all the different ways that a user could request to make a specific intent happen. A few examples are provided. Be sure to click **Save Model** and **Build Model** after you're done making changes here.

9. If your interaction model builds successfully, proceed to the next step. If not, you should see an error. Try to resolve the errors. In our next step of this guide, we will be creating our Lambda function in the AWS developer console, but keep this browser tab open, because we will be returning here on [Page #3: Connect VUI to Code](./3-connect-vui-to-code.md).


     If you get an error from your interaction model, check through this list:

     *  **Did you copy & paste the provided code correctly?**
     *  **Did you accidentally add any characters to the Interaction Model?**

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_lambda_function._TTH_.png)](./2-lambda-function.md)
