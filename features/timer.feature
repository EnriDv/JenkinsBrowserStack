@Timer
Feature: Set the timer

    Background:
        Given The user is on the "timer" section
        Then The section should have the title "Timer"

    Scenario: Set a unique timer
        When Sets the timer to "00:00:03"
        * Clicks the start timer button
        * Stops the timer number 1 with a delay of 0 hours, 0 minutes and 3 seconds
        Then The seconds remaining of the card number 1 should have the value "00:00:03"

        And Deletes the timer card number 1

    Scenario: Set multiple timers
        # La ultima tarjeta creada siempre es la primera
        * Sets the timer to "00:00:03"
        * Clicks the start timer button
        * Stops the timer number 1 with a delay of 0 hours, 0 minutes and 3 seconds
        Then The seconds remaining of the card number 1 should have the value "00:00:03"

        * Clicks the add new timer button

        * Sets the timer to "00:00:05"
        * Clicks the start timer button
        * Stops the timer number 1 with a delay of 0 hours, 0 minutes and 5 seconds
        # Al momento de pausar el temporizador, las dos tarjetas cambian de lugar
        Then The seconds remaining of the card number 2 should have the value "00:00:05"

        * Deletes the timer card number 1
        * Deletes the timer card number 1



