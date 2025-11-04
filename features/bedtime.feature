@Bedtime
Feature: Set a bedtime

    Background:
        Given The user is on the "bedtime" section
        Then The section should have the title "Bedtime"
        When Clicks the on boarding start button

    @Smoke
    Scenario: Set a bedtime with skiped configuration
        When Skips the hour configuration
        And Skips the hour configuration
        Then The duration sleep should contain the value "Turned off"

        # And Loads a new session of the application

    Scenario: Set bedtime with customize configuration
        When Sets the clock with 6 hours, 30 minutes and "AM" format
        * Click the next button
        * Sets the clock with 11 hours, 45 minutes and "PM" format
        * Click the next button
        Then The "wakeUp" clock should have the value of "6:30 AM"
        And The "bedtime" clock should have the value of "11:45 PM"

        # And Loads a new session of the application

    Scenario: Turn up schedule
        When Skips the hour configuration
        And Skips the hour configuration
        Then The duration sleep should contain the value "Turned off"

        When Toggles the "bedtime" clock
        Then The duration sleep should contain the value "No alarm set"

        When Toggles the "wakeUp" clock
        Then The duration sleep should contain the value "Next alarm on"

        And Loads a new session of the application

    @Test
    Scenario Template: Hide information cards
        When Skips the hour configuration
        And Skips the hour configuration

        * Clicks the more options button
        * Clicks the option "<option>"
        Then The bedtime card with title "<title>" should not be present

        And Loads a new session of the application

        Examples:
            | option                | title                     |
            | Hide recent activity  | Recent bedtime activity   |
            | Hide sleep sounds     | Listen to sleep sounds    |
            | Hide upcoming events  | See your upcoming events  |

        







