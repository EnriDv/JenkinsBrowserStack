@ScreenSaver
Feature: Use screen saver

    Scenario: Screen saver has a digital clock
        Given The user is on the "clock" section
        And Clicks the more options button
        And Clicks the option "Screen saver"

        Then The "Digital" clock type in the screen saver should be displayed
        And Exits the screen saver
        
    Scenario: Change the screen saver clock style
        Given The user is on the settings section
        When Sets the screen saver clock style to "Analog"
        And Exits the configuration section

        When Clicks the more options button
        And Clicks the option "Screen saver"

        Then The "Analog" clock type in the screen saver should be displayed
        And Exits the screen saver