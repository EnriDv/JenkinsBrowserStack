@Alarm
Feature: Set the alarm

    Background:
        Given The user is on the "alarm" section
        Then The section should have the title "Alarm"

    Scenario: Set an alarm label
        When Expands the alarm with hour "8:30 AM"
        And Sets the alarm label with a name "My label" and an hour "8:30 AM"
        And Colapses the alarm with hour "8:30 AM"
        Then The label value should be "My label"
    
    Scenario: Active an alarm
        When Actives the alarm with hour "9:00 AM"
        Then There should be an alert that contains the message "Alarm set for"
        And There should be an alert that contains the message "from now"

    Scenario: Set an every day alarm
        When Expands the alarm with hour "9:00 AM"
        When Sets the alarm days of the "9:00 AM" alarm with the days "Monday,Tuesday,Wednesday,Thursday,Friday"
        Then The days of the alarm should be "Every day"
        And Colapses the alarm with hour "9:00 AM"

    Scenario: Set new ringtone
        When Expands the alarm with hour "8:30 AM"
        And Sets the ringtone from "Default (Cesium)" to "Carbon" of the "8:30 AM" alarm
        And Exits the selection ringtone menu
        Then The ringtone should have the value of "Carbon"
        And Colapses the alarm with hour "8:30 AM"