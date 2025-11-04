@Stopwatch
Feature: Run the stopwatch

    Background:
        Given The user is on the "stopwatch" section
        Then The section should have the title "Stopwatch"

    @Smoke
    Scenario: Correct structure of the page
        * The "start-button" element should be present
        * The "time-text" element should be present
        * The "hundredths-text" element should be present
        * The "circle" element should be present

    Scenario: Verify hidden elements
        * The "lap-button" element should not be present
        * The "reset-button" element should not be present