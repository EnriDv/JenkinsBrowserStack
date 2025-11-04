@Clock
Feature: Set clock configuration

    Background:
        Given The user is on the "clock" section
        Then The section should have the title "Clock"

    Scenario: Add a new clock
        When Adds a new clock with the name "La Paz, Bolivia"
        Then There should be a clock with name "La Paz, Bolivia"

        And Deletes a clock with the name "La Paz, Bolivia"

    Scenario: Deletes a clock
        When Adds a new clock with the name "Paris, France"
        And Deletes a clock with the name "Paris, France"
        Then The list of clocks should have a size of 0 elements

    Scenario: Add multiple clocks
        * Adds a new clock with the name "La Paz, Bolivia"
        * There should be a clock with name "La Paz, Bolivia"
        * Deletes a clock with the name "La Paz, Bolivia"
        
        * Adds a new clock with the name "Split, Croatia"
        * There should be a clock with name "Split, Croatia"
        * Deletes a clock with the name "Split, Croatia"

        * Adds a new clock with the name "Seattle"
        * There should be a clock with name "Seattle"
        * Deletes a clock with the name "Seattle"

    Scenario: Delete multiple clocks
        * Adds a new clock with the name "La Paz, BCS, Mexico"
        * Adds a new clock with the name "Split, Croatia"
        * Adds a new clock with the name "Seattle"
        Then The list of clocks should have a size of 3 elements

        When Deletes all clocks
        Then The list of clocks should have a size of 0 elements


