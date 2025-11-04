@Settings
Feature: Modify settings

    Background:
        Given The user is on the settings section
    
    Scenario: Set off alarm volume
        When Resets the alarm volume
        And Sets off the alarm sound
        Then The volume level should have the value "1.0"

        And Exits the configuration section

    Scenario: Change the clock style
        When Sets the clock style to "Analog" mode
        And Exits the configuration section
        And The user is on the "clock" section

        Then The "analog" clock type should be displayed

    Scenario: Change the silence after alarm option
        When Silences the alarm after "20 minutes"
        Then The silence after configuration with the value "20 minutes" should be displayed

        And Exits the configuration section

