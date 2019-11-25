# Build An Alexa Hello World Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

This skill gets you started with skill building by providing basic "Hello World" functionality that allows you to rapidly generate a voice response from Alexa.

## Customize the Skill to be Yours

At this point, you should have a working copy of our Hello World skill.  In order to make it your own, you will need to customize it with data and responses that you create.  Here are the things you will need to change:

1.  **New sentences to respond to your users.** There are several sentences and responses that you will want to customize for your skill.

    1. Navigate to the **Code** tab again, and expand the project folder on the left to `Skill Code/lambda`.

    2. Go to **[languageStrings.js](../lambda/custom/languageStrings.js).**

    3.  **Look for the a specific locale such as `en`** This is the beginning of the section where you need to customize several text strings for your skill.

    4.  For each prompt, such as `GOODBYE_MSG`, replace the string contents with any sentence you would like Alexa to respond with instead. For example, the following changes will result in Alexa saying "Bye! Hope to see you soon.", instead of "Goodbye!", when the `CancelAndStopIntentHandler` is triggered.
        
        Before:
        ```js
        en: {
            translation: {
                ...,
                ...,
                GOODBYE_MSG: 'Goodbye!',
                ...
            }
        },
        ```
        After:
        ```js
        en: {
            translation: {
                ...,
                ...,
                GOODBYE_MSG: 'Bye! Hope to see you soon.', <-- CHANGED
                ...
            }
        },
        ```

        Now, press **Save**, **Deploy**, and navigate back to the **Testing** tab. When you reopen your skill, Alexa should say "Bye! Hope to see you soon." instead of "Goodbye!".

2.  **New language.** If you are creating this skill for another language other than English, you will need to make sure Alexa's responses are also in that language.

    - For example, if you are creating your skill in German, every single response that Alexa makes has to be in German. You can't use English responses or your skill will fail certification.


Normally, you would consider submitting your skill for certification.  But, a default "hello world" skill is too simple to provide a valuable end user experience.
Consider starting another skill project, using one of the several other templates we've in the store for you.